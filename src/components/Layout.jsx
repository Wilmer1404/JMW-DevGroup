import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import ArchitectureFlow from './ArchitectureFlow';
import ImpactSection from './ImpactSection';
import IntegrationSection from './IntegrationSection';
import FooterCTA from './FooterCTA';
import Footer from './Footer';
import DemoModal from './DemoModal';

export default function Layout({ children }) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative selection:bg-[#00F0FF]/25 selection:text-[#00F0FF]">
      {/* Top Navigation */}
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {children ? (
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                onOpenDemo: () => setDemoModalOpen(true),
              });
            }
            return child;
          })
        ) : (
          <>
            <Hero onOpenDemo={() => setDemoModalOpen(true)} />
            <ProblemSection id="problema" />
            <ArchitectureFlow id="arquitectura" />
            <ImpactSection id="impacto" />
            <IntegrationSection id="integracion" />
          </>
        )}
      </main>

      {/* Call to Action Section */}
      <FooterCTA onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Footer Legal & Operational Status */}
      <Footer />

      {/* Interactive Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
