Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::new('C:\Users\fallb\OneDrive\Desktop\projet Einstein Services\img\logo.jpg')
foreach ($pt in @(@(220,280),@(400,280),@(700,280),@(860,280),@(220,420),@(500,420),@(860,420),@(215,350),@(865,350),@(210,275),@(500,300),@(300,300),@(650,300),@(820,300),@(250,390))) {
    $c = $bmp.GetPixel($pt[0], $pt[1])
    $diff = [Math]::Max($c.R,[Math]::Max($c.G,$c.B)) - [Math]::Min($c.R,[Math]::Min($c.G,$c.B))
    Write-Output ("{0},{1} -> R{2} G{3} B{4} diff{5}" -f $pt[0], $pt[1], $c.R, $c.G, $c.B, $diff)
}
$bmp.Dispose()
