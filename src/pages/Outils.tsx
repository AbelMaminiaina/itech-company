import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Copy, Check, FileSpreadsheet } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import Card from '../components/ui/Card'
import SEO from '../components/SEO'

const scriptSimple = `# ==============================================================================
# Merge-Simple.ps1
# ==============================================================================
# Script simplifié pour fusionner les onglets "Objets de gestion"
# Gère les doublons sur "Nom FR"
# ==============================================================================

param(
    [string]$Folder = "C:\\Users\\amami\\github\\merge\\test",
    [string]$Output = "C:\\Users\\amami\\github\\merge\\test\\Fusion.xlsx"
)

Write-Host "=== FUSION SIMPLE ===" -ForegroundColor Cyan

# Fermer Excel
Get-Process EXCEL -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Récupérer les fichiers
$Files = Get-ChildItem -Path $Folder -Filter "*.xlsx" | Where-Object { $_.FullName -ne $Output }

if ($Files.Count -eq 0) {
    Write-Host "Aucun fichier Excel" -ForegroundColor Red
    exit
}

Write-Host "Fichiers: $($Files.Count)\`n"

# Stockage des données
$AllData = @{}
$Headers = @()
$doublons = 0

# Lire chaque fichier
foreach ($file in $Files) {
    Write-Host "Lecture: $($file.Name)..." -ForegroundColor Yellow -NoNewline

    $Excel = New-Object -ComObject Excel.Application
    $Excel.Visible = $false
    $Excel.DisplayAlerts = $false

    try {
        $WB = $Excel.Workbooks.Open($file.FullName, 0, $true)
        $Sheet = $WB.Worksheets | Where-Object { $_.Name -eq "Objets de gestion" }

        if ($Sheet) {
            $Data = $Sheet.UsedRange.Value2
            $Rows = $Sheet.UsedRange.Rows.Count
            $Cols = $Sheet.UsedRange.Columns.Count

            # En-têtes (première lecture uniquement)
            if ($Headers.Count -eq 0) {
                for ($c = 1; $c -le $Cols; $c++) {
                    $Headers += $Data[1, $c]
                }
            }

            # Trouver index "Nom FR"
            $NomFRIdx = 0
            for ($c = 0; $c -lt $Headers.Count; $c++) {
                if ($Headers[$c] -eq "Nom FR") { $NomFRIdx = $c + 1; break }
            }

            # Lire les données
            $added = 0
            for ($r = 2; $r -le $Rows; $r++) {
                $key = $Data[$r, $NomFRIdx]
                if ([string]::IsNullOrEmpty($key)) { continue }

                if (-not $AllData.ContainsKey($key)) {
                    $row = @()
                    for ($c = 1; $c -le $Cols; $c++) {
                        $row += $Data[$r, $c]
                    }
                    $AllData[$key] = $row
                    $added++
                } else {
                    $doublons++
                }
            }
            Write-Host " $added lignes" -ForegroundColor Green
        } else {
            Write-Host " Onglet non trouve" -ForegroundColor DarkYellow
        }

        $WB.Close($false)
    }
    finally {
        $Excel.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($Excel) | Out-Null
        [System.GC]::Collect()
    }
}

if ($AllData.Count -eq 0) {
    Write-Host "Aucune donnee!" -ForegroundColor Red
    exit
}

# Créer le fichier de sortie
Write-Host "\`nCreation fichier..." -ForegroundColor Yellow

$Excel = New-Object -ComObject Excel.Application
$Excel.Visible = $false
$Excel.DisplayAlerts = $false

try {
    $WB = $Excel.Workbooks.Add()
    $Sheet = $WB.Worksheets.Item(1)
    $Sheet.Name = "Objets de gestion"

    # Préparer données en bloc (plus rapide)
    $rowCount = $AllData.Count + 1++
    $colCount = $Headers.Count
    $OutputData = New-Object 'object[,]' $rowCount, $colCount

    # En-têtes
    for ($c = 0; $c -lt $colCount; $c++) {
        $OutputData[0, $c] = $Headers[$c]
    }

    # Données triées par Nom FR
    $row = 1
    foreach ($key in ($AllData.Keys | Sort-Object)) {
        $data = $AllData[$key]
        for ($c = 0; $c -lt $data.Count; $c++) {
            $OutputData[$row, $c] = $data[$c]
        }
        $row++
    }

    # Écriture en bloc
    $lastCol = [char]([int][char]'A' + [Math]::Min($colCount - 1, 25))
    $Range = $Sheet.Range("A1:$($lastCol)$rowCount")
    $Range.Value2 = $OutputData

    # Formatage simple
    $lastCol = [char]([int][char]'A' + $Headers.Count - 1)
    $Sheet.Range("A1:$($lastCol)1").Font.Bold = $true
    $Sheet.Range("A1:$($lastCol)1").Interior.ColorIndex = 15
    $Sheet.Range("A1:$($lastCol)1").AutoFilter() | Out-Null
    $Sheet.UsedRange.Columns.AutoFit() | Out-Null

    # Première colonne (date) : format français + aligné à droite
    $dateRange = $Sheet.Range("A2:A$rowCount")
    $dateRange.NumberFormat = "[$-40C]dd/mm/yyyy"  # 40C = code locale français
    $dateRange.HorizontalAlignment = -4152  # xlRight

    # Sauvegarder
    if (Test-Path $Output) { Remove-Item $Output -Force }
    $WB.SaveAs($Output, 51)
    $WB.Close($false)

    Write-Host "Fichier cree!" -ForegroundColor Green
}
finally {
    $Excel.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($Excel) | Out-Null
    [System.GC]::Collect()
}

# Résumé
Write-Host "\`n========================================" -ForegroundColor Cyan
Write-Host "FUSION TERMINEE" -ForegroundColor Cyan`

const scriptComplet = `# ==============================================================================
# Merge-ExcelObjets.ps1
# ==============================================================================
# Description : Fusionne les onglets "Objets de gestion" de tous les fichiers
#               Excel d'un dossier en un seul fichier, sans doublons.
# Clé unique  : Colonne "Nom FR" (évite les doublons)
# Formatage   : Copie le formatage exact du premier fichier source
# ==============================================================================

# ------------------------------------------------------------------------------
# PARAMETRES D'ENTREE
# ------------------------------------------------------------------------------
# $Folder : Dossier contenant les fichiers Excel sources
# $Output : Chemin du fichier Excel de sortie (fusion)
# ------------------------------------------------------------------------------
param(
    [string]$Folder = "C:\\Users\\amami\\github\\merge\\test",
    [string]$Output = "C:\\Users\\amami\\github\\merge\\test\\Fusion.xlsx"
)

Write-Host "=== FUSION DES ONGLETS OBJETS DE GESTION ===" -ForegroundColor Cyan

# ------------------------------------------------------------------------------
# FERMETURE DES INSTANCES EXCEL
# ------------------------------------------------------------------------------
# Ferme toutes les instances Excel en cours pour éviter les conflits COM
# Attente de 3 secondes pour laisser le temps aux processus de se terminer
# ------------------------------------------------------------------------------
Get-Process EXCEL -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

# ------------------------------------------------------------------------------
# RECUPERATION DES FICHIERS SOURCES
# ------------------------------------------------------------------------------
# Liste tous les fichiers .xlsx du dossier, en excluant le fichier de sortie
# ------------------------------------------------------------------------------
$Sources = Get-ChildItem -Path $Folder -Filter "*.xlsx" |
           Where-Object { $_.FullName -ne $Output } |
           Select-Object -ExpandProperty FullName

if ($Sources.Count -eq 0) {
    Write-Host "Aucun fichier Excel trouve" -ForegroundColor Red
    exit
}

Write-Host "Fichiers: $($Sources.Count) | Sortie: $Output\`n"

# ------------------------------------------------------------------------------
# VARIABLES DE STOCKAGE
# ------------------------------------------------------------------------------
# $AllData         : Hashtable pour stocker toutes les lignes (clé = Nom FR)
# $AllHeaders      : Liste de tous les en-têtes uniques trouvés
# $totalLignes     : Compteur total de lignes lues
# $doublons        : Compteur de doublons ignorés
# $SourceFormatting: Stocke le formatage du premier fichier pour le reproduire
# ------------------------------------------------------------------------------
$AllData = @{}
$AllHeaders = [System.Collections.ArrayList]@()
$totalLignes = 0
$doublons = 0
$SourceFormatting = $null

# ==============================================================================
# FONCTION : Read-ExcelFile
# ==============================================================================
# Description : Lit un fichier Excel et extrait les données de l'onglet
#               "Objets de gestion"
# Paramètres  :
#   - $FilePath         : Chemin du fichier Excel à lire
#   - $CaptureFormatting: Si activé, capture aussi le formatage des cellules
# Retourne    : Hashtable avec Data, Rows, Cols et optionnellement Formatting
# ==============================================================================
function Read-ExcelFile {
    param($FilePath, [switch]$CaptureFormatting)

    $Excel = $null
    $result = $null

    try {
        # ------------------------------------------------------------------
        # INITIALISATION DE L'APPLICATION EXCEL
        # ------------------------------------------------------------------
        # Création d'une instance Excel invisible pour la lecture
        # ------------------------------------------------------------------
        $Excel = New-Object -ComObject Excel.Application
        $Excel.Visible = $false
        $Excel.DisplayAlerts = $false
        $Excel.ScreenUpdating = $false

        # Ouvrir le fichier en lecture seule (paramètre $true)
        $Workbook = $Excel.Workbooks.Open($FilePath, 0, $true)

        # ------------------------------------------------------------------
        # RECHERCHE DE L'ONGLET "Objets de gestion"
        # ------------------------------------------------------------------
        $Sheet = $null
        foreach ($ws in $Workbook.Worksheets) {
            if ($ws.Name -eq "Objets de gestion") {
                $Sheet = $ws
                break
            }
        }

        if ($Sheet) {
            # --------------------------------------------------------------
            # EXTRACTION DES DONNEES
            # --------------------------------------------------------------
            # Value2 retourne les valeurs brutes (dates = nombres sériels)
            # --------------------------------------------------------------
            $UsedRange = $Sheet.UsedRange
            $ColCount = $UsedRange.Columns.Count

            $result = @{
                Data = $UsedRange.Value2
                Rows = $UsedRange.Rows.Count
                Cols = $ColCount
            }

            # --------------------------------------------------------------
            # CAPTURE DU FORMATAGE (uniquement pour le premier fichier)
            # --------------------------------------------------------------
            # Stocke : largeurs colonnes, couleurs, polices, alignements,
            #          formats de nombre, hauteurs de lignes, AutoFilter
            # --------------------------------------------------------------
            if ($CaptureFormatting) {
                $formatting = @{
                    ColumnWidths = @()        # Largeur de chaque colonne
                    HeaderBgColor = @()       # Couleur de fond des en-têtes
                    HeaderFontColor = @()     # Couleur de police des en-têtes
                    HeaderFontBold = @()      # Gras des en-têtes
                    HeaderFontSize = @()      # Taille police des en-têtes
                    HeaderFontName = @()      # Nom police des en-têtes
                    HeaderHAlign = @()        # Alignement horizontal en-têtes
                    ColumnNumberFormat = @()  # Format nombre/date des données
                    ColumnHAlign = @()        # Alignement horizontal données
                    DataRowHeight = $Sheet.Rows.Item(2).RowHeight
                    HeaderRowHeight = $Sheet.Rows.Item(1).RowHeight
                    HasAutoFilter = $Sheet.AutoFilterMode
                }

                # Parcourir chaque colonne pour capturer son formatage
                for ($c = 1; $c -le $ColCount; $c++) {
                    $formatting.ColumnWidths += $Sheet.Columns.Item($c).ColumnWidth

                    # Formatage de l'en-tête (ligne 1)
                    $cell = $Sheet.Cells.Item(1, $c)
                    $formatting.HeaderBgColor += $cell.Interior.Color
                    $formatting.HeaderFontColor += $cell.Font.Color
                    $formatting.HeaderFontBold += $cell.Font.Bold
                    $formatting.HeaderFontSize += $cell.Font.Size
                    $formatting.HeaderFontName += $cell.Font.Name
                    $formatting.HeaderHAlign += $cell.HorizontalAlignment

                    # Formatage des données (basé sur ligne 2)
                    $dataCell = $Sheet.Cells.Item(2, $c)
                    $formatting.ColumnNumberFormat += $dataCell.NumberFormat
                    $formatting.ColumnHAlign += $dataCell.HorizontalAlignment
                }

                $result.Formatting = $formatting
            }
        }

        $Workbook.Close($false)
    }
    catch {
        Write-Host " Erreur: $_" -ForegroundColor Red
    }
    finally {
        # ------------------------------------------------------------------
        # LIBERATION DES RESSOURCES COM
        # ------------------------------------------------------------------
        # Important pour éviter les fuites mémoire et processus fantômes
        # ------------------------------------------------------------------
        if ($Excel) {
            try { $Excel.Quit() } catch { }
            try { [System.Runtime.Interopservices.Marshal]::ReleaseComObject($Excel) | Out-Null } catch { }
        }
        [System.GC]::Collect()
        Start-Sleep -Milliseconds 500
    }

    return $result
}

# ==============================================================================
# BOUCLE DE LECTURE DES FICHIERS SOURCES
# ==============================================================================
# Parcourt chaque fichier Excel et extrait les données de l'onglet
# Le premier fichier sert de référence pour le formatage
# ==============================================================================
$isFirst = $true
foreach ($sourceFile in $Sources) {
    $fileName = Split-Path $sourceFile -Leaf
    Write-Host "Lecture de $fileName..." -ForegroundColor Yellow -NoNewline

    # --------------------------------------------------------------------------
    # LECTURE AVEC OU SANS CAPTURE DU FORMATAGE
    # --------------------------------------------------------------------------
    # Premier fichier : capture le formatage pour le reproduire dans la fusion
    # Fichiers suivants : lecture des données uniquement
    # --------------------------------------------------------------------------
    if ($isFirst) {
        $result = Read-ExcelFile -FilePath $sourceFile -CaptureFormatting
        if ($result -and $result.Formatting) {
            $SourceFormatting = $result.Formatting
            Write-Host " (formatage capture)" -ForegroundColor Magenta -NoNewline
        }
        $isFirst = $false
    } else {
        $result = Read-ExcelFile -FilePath $sourceFile
    }

    if ($null -eq $result) {
        Write-Host " Onglet non trouve" -ForegroundColor DarkYellow
        continue
    }

    $Data = $result.Data
    $RowCount = $result.Rows
    $ColCount = $result.Cols

    # --------------------------------------------------------------------------
    # EXTRACTION DES EN-TETES (ligne 1)
    # --------------------------------------------------------------------------
    $Headers = @()
    for ($c = 1; $c -le $ColCount; $c++) {
        $Headers += $Data[1, $c]
    }

    # --------------------------------------------------------------------------
    # RECHERCHE DE L'INDEX DE LA COLONNE "Nom FR"
    # --------------------------------------------------------------------------
    # Cette colonne sert de clé unique pour éviter les doublons
    # --------------------------------------------------------------------------
    $NomFRIndex = -1
    for ($c = 0; $c -lt $Headers.Count; $c++) {
        if ($Headers[$c] -eq "Nom FR") {
            $NomFRIndex = $c + 1
            break
        }
    }

    if ($NomFRIndex -eq -1) {
        Write-Host " Colonne 'Nom FR' non trouvee" -ForegroundColor DarkYellow
        continue
    }

    # --------------------------------------------------------------------------
    # COLLECTE DES EN-TETES UNIQUES
    # --------------------------------------------------------------------------
    # Ajoute les nouveaux en-têtes à la liste globale
    # --------------------------------------------------------------------------
    foreach ($h in $Headers) {
        if ($h -and $AllHeaders -notcontains $h) { [void]$AllHeaders.Add($h) }
    }

    # --------------------------------------------------------------------------
    # EXTRACTION DES DONNEES (lignes 2 à N)
    # --------------------------------------------------------------------------
    # Stocke chaque ligne dans $AllData avec "Nom FR" comme clé
    # Les doublons (même "Nom FR") sont ignorés
    # --------------------------------------------------------------------------
    $added = 0
    for ($row = 2; $row -le $RowCount; $row++) {
        $key = $Data[$row, $NomFRIndex]
        if ([string]::IsNullOrEmpty($key)) { continue }

        if (-not $AllData.ContainsKey($key)) {
            # Créer un dictionnaire ordonné pour cette ligne
            $rowData = [ordered]@{}
            for ($c = 1; $c -le $ColCount; $c++) {
                if ($Headers[$c-1]) {
                    $rowData[$Headers[$c-1]] = $Data[$row, $c]
                }
            }
            $AllData[$key] = $rowData
            $added++
        } else {
            $doublons++
        }
        $totalLignes++
    }

    Write-Host " $($RowCount - 1) lignes, $added ajoutees" -ForegroundColor Green
}

# Vérification qu'il y a des données à écrire
if ($AllData.Count -eq 0) {
    Write-Host "\`nAucune donnee!" -ForegroundColor Red
    exit
}

# ==============================================================================
# CREATION DU FICHIER DE FUSION
# ==============================================================================
Write-Host "\`nCreation du fichier fusion..." -ForegroundColor Yellow

# ------------------------------------------------------------------------------
# INITIALISATION D'EXCEL POUR L'ECRITURE
# ------------------------------------------------------------------------------
$Excel = New-Object -ComObject Excel.Application
$Excel.Visible = $false
$Excel.DisplayAlerts = $false
$Excel.ScreenUpdating = $false

try {
    # --------------------------------------------------------------------------
    # CREATION DU CLASSEUR ET DE L'ONGLET PRINCIPAL
    # --------------------------------------------------------------------------
    $WB = $Excel.Workbooks.Add()

    # Supprimer les feuilles supplémentaires (garder une seule)
    while ($WB.Worksheets.Count -gt 1) {
        $WB.Worksheets.Item($WB.Worksheets.Count).Delete()
    }

    $Sheet = $WB.Worksheets.Item(1)
    $Sheet.Name = "Objets de gestion"

    # --------------------------------------------------------------------------
    # PREPARATION DES DONNEES EN BLOC
    # --------------------------------------------------------------------------
    # Création d'un tableau 2D pour écriture en une seule opération
    # (beaucoup plus rapide que cellule par cellule)
    # --------------------------------------------------------------------------
    $headerCount = $AllHeaders.Count
    $dataCount = $AllData.Count
    $OutputData = New-Object 'object[,]' ($dataCount + 1), $headerCount

    # Écrire les en-têtes (ligne 0 du tableau)
    for ($c = 0; $c -lt $headerCount; $c++) {
        $OutputData[0, $c] = $AllHeaders[$c]
    }

    # --------------------------------------------------------------------------
    # ECRITURE DES DONNEES TRIEES PAR "Nom FR"
    # --------------------------------------------------------------------------
    $SortedKeys = $AllData.Keys | Sort-Object
    $row = 1
    foreach ($key in $SortedKeys) {
        $obj = $AllData[$key]
        for ($c = 0; $c -lt $headerCount; $c++) {
            $h = $AllHeaders[$c]
            if ($obj.Contains($h)) {
                $OutputData[$row, $c] = $obj[$h]
            }
        }
        $row++
    }

    # --------------------------------------------------------------------------
    # ECRITURE EN BLOC DANS EXCEL
    # --------------------------------------------------------------------------
    $lastCol = [char]([int][char]'A' + [Math]::Min($headerCount - 1, 25))
    $Range = $Sheet.Range("A1:$($lastCol)$($dataCount + 1)")
    $Range.Value2 = $OutputData

    # ==========================================================================
    # APPLICATION DU FORMATAGE SOURCE
    # ==========================================================================
    # Reproduit exactement le formatage du premier fichier lu
    # ==========================================================================
    if ($SourceFormatting) {
        Write-Host "Application du formatage source..." -ForegroundColor Yellow
        Write-Host "Formats captures:" -ForegroundColor Cyan
        for ($i = 0; $i -lt [Math]::Min($SourceFormatting.ColumnNumberFormat.Count, 10); $i++) {
            Write-Host "  Col $($i+1): $($SourceFormatting.ColumnNumberFormat[$i])" -ForegroundColor Cyan
        }

        # ----------------------------------------------------------------------
        # HAUTEUR DE LIGNE DES EN-TETES
        # ----------------------------------------------------------------------
        if ($SourceFormatting.HeaderRowHeight) {
            $Sheet.Rows.Item(1).RowHeight = $SourceFormatting.HeaderRowHeight
        }

        # ----------------------------------------------------------------------
        # FORMATAGE COLONNE PAR COLONNE
        # ----------------------------------------------------------------------
        for ($c = 1; $c -le $headerCount; $c++) {
            $cell = $Sheet.Cells.Item(1, $c)
            $idx = $c - 1

            # Largeur de colonne
            if ($idx -lt $SourceFormatting.ColumnWidths.Count) {
                $Sheet.Columns.Item($c).ColumnWidth = $SourceFormatting.ColumnWidths[$idx]
            }

            # Couleur de fond de l'en-tête
            if ($idx -lt $SourceFormatting.HeaderBgColor.Count -and $SourceFormatting.HeaderBgColor[$idx]) {
                $cell.Interior.Color = $SourceFormatting.HeaderBgColor[$idx]
            }

            # Couleur de police de l'en-tête
            if ($idx -lt $SourceFormatting.HeaderFontColor.Count -and $SourceFormatting.HeaderFontColor[$idx]) {
                $cell.Font.Color = $SourceFormatting.HeaderFontColor[$idx]
            }

            # Gras de l'en-tête
            if ($idx -lt $SourceFormatting.HeaderFontBold.Count) {
                $cell.Font.Bold = $SourceFormatting.HeaderFontBold[$idx]
            }

            # Taille de police de l'en-tête
            if ($idx -lt $SourceFormatting.HeaderFontSize.Count -and $SourceFormatting.HeaderFontSize[$idx]) {
                $cell.Font.Size = $SourceFormatting.HeaderFontSize[$idx]
            }

            # Nom de police de l'en-tête
            if ($idx -lt $SourceFormatting.HeaderFontName.Count -and $SourceFormatting.HeaderFontName[$idx]) {
                $cell.Font.Name = $SourceFormatting.HeaderFontName[$idx]
            }

            # ------------------------------------------------------------------
            # FORMATAGE DES DONNEES (colonnes entières)
            # ------------------------------------------------------------------
            $colLetter = [char]([int][char]'A' + $idx)
            $dataRange = $Sheet.Range("$($colLetter)2:$($colLetter)$($dataCount + 1)")

            # Format de nombre/date
            # Première colonne = format de date avec zéros (dd/mm/yyyy)
            if ($idx -eq 0) {
                $dataRange.NumberFormat = "dd/mm/yyyy"
            } elseif ($idx -lt $SourceFormatting.ColumnNumberFormat.Count -and $SourceFormatting.ColumnNumberFormat[$idx] -and $SourceFormatting.ColumnNumberFormat[$idx] -ne "General") {
                $dataRange.NumberFormat = $SourceFormatting.ColumnNumberFormat[$idx]
            }

            # Alignement horizontal des données
            # Première colonne (date) = aligné à droite (-4152 = xlRight)
            if ($idx -eq 0) {
                $dataRange.HorizontalAlignment = -4152
            } elseif ($idx -lt $SourceFormatting.ColumnHAlign.Count -and $SourceFormatting.ColumnHAlign[$idx]) {
                $dataRange.HorizontalAlignment = $SourceFormatting.ColumnHAlign[$idx]
            }

            # Alignement horizontal des en-têtes
            if ($idx -lt $SourceFormatting.HeaderHAlign.Count -and $SourceFormatting.HeaderHAlign[$idx]) {
                $cell.HorizontalAlignment = $SourceFormatting.HeaderHAlign[$idx]
            }
        }

        # ----------------------------------------------------------------------
        # ACTIVATION DE L'AUTOFILTER SI PRESENT DANS LA SOURCE
        # ----------------------------------------------------------------------
        if ($SourceFormatting.HasAutoFilter) {
            $Sheet.Range("A1:$($lastCol)1").AutoFilter() | Out-Null
        }
    } else {
        # ----------------------------------------------------------------------
        # FORMATAGE PAR DEFAUT (si pas de source)
        # ----------------------------------------------------------------------
        $Sheet.Range("A1:$($lastCol)1").Font.Bold = $true
        $Sheet.Range("A1:$($lastCol)1").Interior.ColorIndex = 15
        $Sheet.UsedRange.Columns.AutoFit() | Out-Null
    }

    # ==========================================================================
    # CREATION DE L'ONGLET METADATA
    # ==========================================================================
    # Onglet contenant les statistiques de la fusion
    # ==========================================================================
    $SheetM = $WB.Worksheets.Add([System.Reflection.Missing]::Value, $Sheet)
    $SheetM.Name = "metadata"
    $SheetM.Cells.Item(1,1) = "Info"; $SheetM.Cells.Item(1,2) = "Details"
    $SheetM.Cells.Item(2,1) = "Fichiers"; $SheetM.Cells.Item(2,2) = $Sources.Count
    $SheetM.Cells.Item(3,1) = "Lignes lues"; $SheetM.Cells.Item(3,2) = $totalLignes
    $SheetM.Cells.Item(4,1) = "Doublons"; $SheetM.Cells.Item(4,2) = $doublons
    $SheetM.Cells.Item(5,1) = "Uniques"; $SheetM.Cells.Item(5,2) = $AllData.Count
    $SheetM.Cells.Item(6,1) = "Date"; $SheetM.Cells.Item(6,2) = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    $SheetM.Range("A1:B1").Font.Bold = $true
    $SheetM.UsedRange.Columns.AutoFit() | Out-Null

    # --------------------------------------------------------------------------
    # SAUVEGARDE DU FICHIER
    # --------------------------------------------------------------------------
    # 51 = xlOpenXMLWorkbook (.xlsx)
    # --------------------------------------------------------------------------
    if (Test-Path $Output) { Remove-Item $Output -Force }
    $WB.SaveAs($Output, 51)
    $WB.Close($false)

    Write-Host "Fichier cree!" -ForegroundColor Green
}
finally {
    # --------------------------------------------------------------------------
    # LIBERATION DES RESSOURCES COM
    # --------------------------------------------------------------------------
    try { $Excel.Quit() } catch { }
    try { [System.Runtime.Interopservices.Marshal]::ReleaseComObject($Excel) | Out-Null } catch { }
    [System.GC]::Collect()
}

# ==============================================================================
# RESUME FINAL
# ==============================================================================
Write-Host "\`n========================================" -ForegroundColor Cyan
Write-Host "FUSION TERMINEE" -ForegroundColor Cyan
Write-Host "Fichiers: $($Sources.Count) | Lignes: $totalLignes | Doublons: $doublons | Uniques: $($AllData.Count)" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan

# ==============================================================================
# OUVERTURE AUTOMATIQUE DU FICHIER
# ==============================================================================
Start-Process $Output`

const CodeBlock = ({ code, title }: { code: string; title: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <FileSpreadsheet className="w-6 h-6 text-electric-500" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-electric-500 hover:bg-electric-600 text-white rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copie
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copier
            </>
          )}
        </button>
      </div>
      <div className="relative">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed max-h-[500px] overflow-y-auto">
          <code>{code}</code>
        </pre>
      </div>
    </Card>
  )
}

const Outils = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Outils - Scripts PowerShell - iTech-Company"
        description="Scripts PowerShell pour la fusion de fichiers Excel. Automatisez la consolidation de vos onglets Excel avec gestion des doublons."
        keywords="PowerShell, Excel, fusion, merge, automatisation, scripts, outils"
        url="/outils"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-electric-500/10 rounded-2xl flex items-center justify-center">
                <Wrench className="w-10 h-10 text-electric-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Nos <span className="text-gradient">Outils</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
              Scripts PowerShell pour la fusion de fichiers Excel
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Automatisez la consolidation de vos onglets "Objets de gestion" avec gestion intelligente des doublons.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Introduction */}
          <Card className="bg-gradient-to-br from-electric-500/10 to-electric-600/5 border-electric-500/20">
            <h2 className="text-2xl font-bold mb-4">Fusion Excel - PowerShell</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Ces scripts permettent de fusionner plusieurs fichiers Excel contenant un onglet
              "Objets de gestion" en un seul fichier consolidé. Les doublons sont automatiquement
              détectés et ignorés en utilisant la colonne "Nom FR" comme clé unique.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 dark:bg-dark-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Version Simple</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Script léger avec formatage basique. Idéal pour des fusions rapides.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-dark-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Version Complète</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Capture et reproduit le formatage du premier fichier source. Inclut un onglet metadata.
                </p>
              </div>
            </div>
          </Card>

          {/* Script Simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CodeBlock code={scriptSimple} title="Merge-Simple.ps1" />
          </motion.div>

          {/* Script Complet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CodeBlock code={scriptComplet} title="Merge-ExcelObjets.ps1" />
          </motion.div>

          {/* Instructions */}
          <Card>
            <h3 className="text-xl font-bold mb-4">Comment utiliser ces scripts</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-600 dark:text-gray-400">
              <li>Copiez le script dans un fichier <code className="bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">.ps1</code></li>
              <li>Modifiez les chemins <code className="bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">$Folder</code> et <code className="bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">$Output</code> selon vos besoins</li>
              <li>Ouvrez PowerShell en administrateur</li>
              <li>Exécutez le script : <code className="bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">.\Merge-Simple.ps1</code></li>
            </ol>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Outils
