import React from 'react';
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <img src="/images/SPRINTS.FUN_logo.png" alt="Sprints.Fun" className="mb-12 h-8" />
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold tracking-tighter mb-4">Designs + Sprints</h2>
          <div className="border-2 border-gray-300 rounded-lg p-4 min-h-[100px]">
            <Link href="/ethereum-design" className="block p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
              ethereum mainnet
            </Link>
            <Link href="/anon-design" className="block p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
              $Anon
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tighter mb-4">Code</h2>
          <div className="border-2 border-gray-300 rounded-lg p-4 min-h-[100px]">
            <Link href="/pixelate" className="block p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
              Pixelate Images
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
