"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import type { SvgToEmbroideryOptions, HandwritingToVectorOptions, ModelConverterOptions } from "@/lib/types"

interface ConversionOptionsProps {
  type: "svg-to-embroidery" | "handwriting-to-vector" | "3d-model-converter"
  options: SvgToEmbroideryOptions | HandwritingToVectorOptions | ModelConverterOptions
  onChange: (options: any) => void
}

export function ConversionOptions({ type, options, onChange }: ConversionOptionsProps) {
  if (type === "svg-to-embroidery") {
    const svgOptions = options as SvgToEmbroideryOptions
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="format">Output Format</Label>
          <Select
            value={svgOptions.format}
            onValueChange={(value) => onChange({ ...svgOptions, format: value as "pes" | "dst" | "exp" })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pes">PES (Brother/Babylock)</SelectItem>
              <SelectItem value="dst">DST (Tajima)</SelectItem>
              <SelectItem value="exp">EXP (Melco)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Stitch Density: {svgOptions.density}</Label>
          <Slider
            value={[svgOptions.density]}
            onValueChange={([value]) => onChange({ ...svgOptions, density: value })}
            min={1}
            max={10}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Low (1)</span>
            <span>High (10)</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Scale Factor: {svgOptions.scale}x</Label>
          <Slider
            value={[svgOptions.scale]}
            onValueChange={([value]) => onChange({ ...svgOptions, scale: value })}
            min={0.1}
            max={5}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0.1x</span>
            <span>5x</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === "handwriting-to-vector") {
    const handwritingOptions = options as HandwritingToVectorOptions
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="outputFormat">Output Format</Label>
          <Select
            value={handwritingOptions.outputFormat}
            onValueChange={(value) => onChange({ ...handwritingOptions, outputFormat: value as "svg" | "pdf" })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="svg">SVG (Scalable Vector Graphics)</SelectItem>
              <SelectItem value="pdf">PDF (Portable Document Format)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Smoothing Level: {handwritingOptions.smoothing}</Label>
          <Slider
            value={[handwritingOptions.smoothing]}
            onValueChange={([value]) => onChange({ ...handwritingOptions, smoothing: value })}
            min={1}
            max={10}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Minimal (1)</span>
            <span>Maximum (10)</span>
          </div>
          <p className="text-xs text-muted-foreground">Higher values create smoother curves but may lose detail.</p>
        </div>

        <div className="space-y-2">
          <Label>Threshold: {handwritingOptions.threshold}</Label>
          <Slider
            value={[handwritingOptions.threshold]}
            onValueChange={([value]) => onChange({ ...handwritingOptions, threshold: value })}
            min={50}
            max={200}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Light (50)</span>
            <span>Dark (200)</span>
          </div>
          <p className="text-xs text-muted-foreground">Adjust based on your handwriting darkness and contrast.</p>
        </div>
      </div>
    )
  }

  if (type === "3d-model-converter") {
    const modelOptions = options as ModelConverterOptions
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="inputFormat">Input Format</Label>
            <Select
              value={modelOptions.inputFormat}
              onValueChange={(value) => onChange({ ...modelOptions, inputFormat: value as any })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="glb">GLB (Binary glTF)</SelectItem>
                <SelectItem value="fbx">FBX (Autodesk)</SelectItem>
                <SelectItem value="obj">OBJ (Wavefront)</SelectItem>
                <SelectItem value="stl">STL (Stereolithography)</SelectItem>
                <SelectItem value="usdz">USDZ (Apple AR)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="outputFormat">Output Format</Label>
            <Select
              value={modelOptions.outputFormat}
              onValueChange={(value) => onChange({ ...modelOptions, outputFormat: value as any })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="glb">GLB (Binary glTF)</SelectItem>
                <SelectItem value="fbx">FBX (Autodesk)</SelectItem>
                <SelectItem value="obj">OBJ (Wavefront)</SelectItem>
                <SelectItem value="stl">STL (Stereolithography)</SelectItem>
                <SelectItem value="usdz">USDZ (Apple AR)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Scale Factor: {modelOptions.scale}x</Label>
          <Slider
            value={[modelOptions.scale]}
            onValueChange={([value]) => onChange({ ...modelOptions, scale: value })}
            min={0.01}
            max={10}
            step={0.01}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0.01x</span>
            <span>10x</span>
          </div>
          <p className="text-xs text-muted-foreground">Adjust the size of the output model.</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="optimize">Mesh Optimization</Label>
            <p className="text-xs text-muted-foreground">
              Reduce file size by optimizing geometry and removing redundant data.
            </p>
          </div>
          <Switch
            id="optimize"
            checked={modelOptions.optimize}
            onCheckedChange={(checked) => onChange({ ...modelOptions, optimize: checked })}
          />
        </div>
      </div>
    )
  }

  return <div>Options for {type} coming soon...</div>
}
