import React from 'react';
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ImagePixelationTool from '../components/ImagePixelationTool';

const PixelateTool = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        
        <ImagePixelationTool />
      </div>
    </div>
  );
};

export default PixelateTool;
