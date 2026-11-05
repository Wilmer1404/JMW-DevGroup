import React, { useState } from 'react';
import Navbar from './Navbar';
import FooterCTA from './FooterCTA';
import DemoModal from './DemoModal';

export default function Layout({ children }) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative selection:bg-[#00F0FF]/25 selection:text-[#00F0FF]">
      {/* Top Navigation */}
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onOpenDemo: () => setDemoModalOpen(true),
            });
          }
          return child;
        })}
      </main>

      {/* Footer Section */}
      <FooterCTA onOpenDemo={() => setDemoModalOpen(true)} />

      {/* Interactive Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
