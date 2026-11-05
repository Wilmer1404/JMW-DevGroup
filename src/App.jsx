import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ArchitectureFlow from './components/ArchitectureFlow';
import ImpactSection from './components/ImpactSection';
import IntegrationSection from './components/IntegrationSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CloudSecurity from './components/CloudSecurity';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#privacidad') {
    return <PrivacyPolicy />;
  }

  if (currentHash === '#terminos') {
    return <TermsOfService />;
  }

  if (currentHash === '#seguridad') {
    return <CloudSecurity />;
  }

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
