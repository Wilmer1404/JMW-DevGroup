import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ArchitectureFlow from './components/ArchitectureFlow';
import ImpactSection from './components/ImpactSection';
import IntegrationSection from './components/IntegrationSection';

function App() {
  return (
    <Layout>
      <Hero />
      <ProblemSection />
      <ArchitectureFlow />
      <ImpactSection />
      <IntegrationSection />
    </Layout>
  );
}

export default App;
