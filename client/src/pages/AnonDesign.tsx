import React from 'react';
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const AnonDesign = () => {
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
          <h1 className="text-4xl font-bold tracking-tighter mb-8">0002: $ANON</h1>
          
          <img src="Anon_Qual_1.png" alt="Anon Qual 1" className="w-full rounded-lg mb-8" />

          <hr className="my-12" />

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Recommendation for Anon Scalers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Idea:</strong> Anonymity</li>
              <li><strong>Style:</strong> Black and White</li>
              <li><strong>Culture & Behavior:</strong> Cyberpunk. Anarchism. Degeneracy.</li>
              <li><strong>Symbol:</strong> ?</li>
            </ul>

            <p className="mt-6 mb-6">If looking to turn Anon into a long-term memecoin I recommend an early majority set a precedent for what range of output will be consensus via sheer volume of directionality.</p>
            
            <p className="mb-6">This is quite straightforward thanks to <a href="https://anoncast.org/" className="text-blue-600 hover:underline">https://anoncast.org/</a>.</p>

            <p className="mb-6">The existential risk of Anon is in it becoming a cesspool for the most disgruntled holders to trauma dump. However, the inverse risk is the concept not allowing for cyberpunk, anarchistic, and even degenerate ethics/voices to manifest.</p>

            <p className="mb-6">Anon as a brand concept has an edge in its tech stack, paired with a color palette and creative freedom that could allow for a truly bottom-up neo-cypherpunk movement.</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">First Hand Design Sprint</h2>
            
            <p className="mb-6">After running a design sprint on the account myself. It became evident that this would be one of the most powerful, censorship resistant, chaotically neutral memecoins to afford digital space to anyone who wanted to embrace the more primitive aspects of our industry.</p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Say what you really want to say - to power, to your network, to yourself, etc</li>
              <li>Embrace anonymity technology like the original cypherpunks desired</li>
              <li>Create art, software, and media without the constraints of external judgement</li>
              <li>Rebel for a larger purpose or for the entertainment of it all</li>
            </ul>

            <p className="mb-6">The core tension will be in 'how' the majority wants to direct its energy. The potential is massive however. Anon is common vernacular online. Black and white are creative primitives. The ? is incredibly composable.</p>

            <p className="mb-8">The potential in Anon is near equal to the challenge of actually scaling it I imagine.</p>

            <img src="Anon_Qual_3.png" alt="Anon Qual 3" className="w-full rounded-lg mb-8" />
            <img src="Anon_Qual_2.png" alt="Anon Qual 2" className="w-full rounded-lg" />
          </section>
        </article>
      </div>
    </div>
  );
};

export default AnonDesign;
