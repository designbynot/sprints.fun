import React from 'react';
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold italic tracking-tighter mb-12">Sprints.Fun</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold tracking-tighter mb-4">Designs + Sprints</h2>
          <div className="p-4 min-h-[100px]">
            <div className="space-y-2">
              <Link href="/ethereum-design">
                <div className="p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                  Ethereum Mainnet
                </div>
              </Link>
              <Link href="/anon-design">
                <div className="p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                  $Anon
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tighter mb-4">Code</h2>
          <div className="p-4 min-h-[100px]">
            <div className="space-y-2">
              <Link href="/pixelate">
                <div className="p-3 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                  Pixelate Images
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
