import React from 'react';
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const EthereumDesign = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold tracking-tighter mb-8">0001: Ethereum</h1>
          
          <h2 className="text-2xl font-bold tracking-tighter mt-12 mb-6">ETH MEME:</h2>
          <ul className="list-none pl-0 space-y-2">
            <li>IDEA</li>
            <li>STYLE</li>
            <li>CULTURE</li>
            <li>BEHAVIOR</li>
            <li>SYMBOL</li>
          </ul>

          <hr className="my-12" />

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Idea of Ethereum</h2>
            <p className="mb-6">A world computer. For the people, by the people. But bigger and better.</p>
            
            <p className="font-bold mb-4">Mental model: Ethereum is bringing Massive Multiplayer Online Role Playing Games (MMORPGs) to the real world</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A global, high-stakes, computer game but it's your real life</li>
              <li>Global economy</li>
              <li>Open world</li>
            </ul>
          </section>

          <hr className="my-12" />

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Style of Ethereum</h2>
            <p className="mb-6">Mainnet is relatively neutral. It's Layer 2s that make opinionated and centralized style decisions.</p>
            
            <p className="mb-6">Ethereum is part science fiction, part real-time software. It should lean into wireframe aesthetics to bridge both worlds and align w its own Layer 2 roadmap (varied design)</p>
            
            <p className="mb-6">The wireframe aesthetic also allows for night and dark mode composability.</p>
          </section>

          <hr className="my-12" />

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Culture (& Behaviors) of Ethereum</h2>
            <p className="mb-6">The current culture of ethereum is software developers (micro and macro focused), digital artists (tech leaning), and independent finance (high risk investors, entrepreneurs, and startups).</p>
            
            <p className="mb-6">Their behaviors are within their own practice and also composable/compounding amongst each other. (something entirely unique to the world computer system)</p>
            
            <p className="mb-6">Art movements, protocols, culture, and characters are emerging</p>
            
            <p className="mb-6">Digital commodities merging cryptography with digital art are exploding</p>
            
            <p className="mb-6">Software developers are building their own opinionated infrastructure</p>
            
            <p className="mb-6">Private entrepreneurs are scaling their own ventures</p>
          </section>

          <hr className="my-12" />

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Symbol of Ethereum</h2>
            <p className="mb-6">The symbol of Ethereum is the Ethereum Crystal.</p>
            
            <p className="mb-6">There is no need to fix something that already works. This qual report is not about changing the icon of Ethereum. Instead it provides a simpler framework from which decentralized parties can align and scale on the world computer system.</p>
          </section>

          <hr className="my-12" />

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Recommendations for Ethereum Scalers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Idea:</strong> World Computer System (MMORPG)</li>
              <li><strong>Style:</strong> Wireframe</li>
              <li><strong>Culture & Behavior:</strong> Developer, tech-enthusiast/artist, independent finance</li>
              <li><strong>Symbol:</strong> ETH crystal</li>
            </ul>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="text-lg font-medium mb-4">🗣</p>
              <blockquote className="space-y-4">
                <p>If building on mainnet ethereum I recommend leveraging some of the above findings. The messaging about ethereum constrains the target audience. The style of your graphics further so.</p>
                <p>Centralized Layer 2s may even consider leveraging these findings when trying to communicate with mainnet users or infrastructure itself.</p>
                <p>Ethereum is relatively neutral, but is not neutral. This report suggests that the world computer system is the current apex meme when trying to proliferate ethereum values into niches.</p>
              </blockquote>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default EthereumDesign;
