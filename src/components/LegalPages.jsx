import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import CloudSecurity from './CloudSecurity';

export { PrivacyPolicy, TermsOfService, CloudSecurity };

/**
 * Componente contenedor unificado para páginas legales y técnicas.
 * Permite renderizar PrivacyPolicy, TermsOfService o CloudSecurity según el prop `page` o `activeSection`.
 * 
 * @param {('privacy'|'terms'|'security'|'privacidad'|'terminos'|'seguridad')} page - Sección legal a renderizar.
 */
export default function LegalPages({ page = 'privacy' }) {
  switch (page) {
    case 'privacy':
    case 'privacidad':
      return <PrivacyPolicy />;
    case 'terms':
    case 'terminos':
      return <TermsOfService />;
    case 'security':
    case 'seguridad':
      return <CloudSecurity />;
    default:
      return <PrivacyPolicy />;
  }
}
