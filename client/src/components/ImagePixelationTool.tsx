import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ImagePixelationTool = () => {
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [pixelSize, setPixelSize] = useState([20]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const applyPixelation = (ctx: CanvasRenderingContext2D, width: number, height: number, pixelHeight: number) => {
    // Adjust pixel size based on image dimensions
    const pixelWidth = pixelHeight;
    
    // Get image data
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    // Loop through each pixel block
    for (let y = 0; y < height; y += pixelHeight) {
      for (let x = 0; x < width; x += pixelWidth) {
        // Calculate the block size accounting for image edges
        const blockWidth = Math.min(pixelWidth, width - x);
        const blockHeight = Math.min(pixelHeight, height - y);
        
        // Get the average color of the block
        let r = 0, g = 0, b = 0, count = 0;
        
        for (let by = 0; by < blockHeight; by++) {
          for (let bx = 0; bx < blockWidth; bx++) {
            const px = x + bx;
            const py = y + by;
            const i = (py * width + px) * 4;
            
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
          }
        }
        
        // Calculate average
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        
        // Apply the average color to the whole block
        for (let by = 0; by < blockHeight; by++) {
          for (let bx = 0; bx < blockWidth; bx++) {
            const px = x + bx;
            const py = y + by;
            const i = (py * width + px) * 4;
            
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
          }
        }
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw original image
      ctx.drawImage(img, 0, 0);
      
      // Apply pixelation effect
      applyPixelation(ctx, img.width, img.height, pixelSize[0]);
      
      setProcessedImage(canvas.toDataURL());
    };
    
    img.src = URL.createObjectURL(file);
  };

  const handlePixelSizeChange = (value: number[]) => {
    setPixelSize(value);
    if (processedImage) {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        ctx.drawImage(img, 0, 0);
        applyPixelation(ctx, canvas.width, canvas.height, value[0]);
      };
      img.src = processedImage;
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const downloadImage = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.download = 'pixelated-image.png';
      link.href = processedImage;
      link.click();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Image Pixelation Tool</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <input 
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          
          <Button 
            onClick={triggerFileInput}
            className="w-full"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </Button>

          {processedImage && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pixel Size</label>
                <Slider
                  value={pixelSize}
                  onValueChange={handlePixelSizeChange}
                  min={4}
                  max={40}
                  step={2}
                  className="w-full"
                />
              </div>

              <Button 
                onClick={downloadImage}
                className="w-full mt-4"
              >
                Download Pixelated Image
              </Button>
            </>
          )}

          <canvas 
            ref={canvasRef} 
            className="w-full mt-4 border rounded-lg"
            style={{display: processedImage ? 'block' : 'none'}}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ImagePixelationTool;
