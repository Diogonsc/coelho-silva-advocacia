import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
}

const SEO = ({
  title = 'Coelho & Silva Advocacia Criminal - Defesa Criminal Especializada',
  description = 'Escritório de advocacia criminal especializado em defesa penal. Atendimento personalizado, primeira consulta gratuita. Rio de Janeiro - RJ. Mais de 15 anos de experiência.',
  keywords = 'advocacia criminal, advogado criminal, defesa penal, direito penal, advogado rio de janeiro, criminalista, processo criminal, defesa judicial',
  image = '/og-image.jpg',
  url = 'https://coelhosilva.adv.br',
  type = 'website',
  author = 'Coelho & Silva Advocacia'
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Portuguese');
    updateMetaTag('revisit-after', '7 days');
    
    // Open Graph tags
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:site_name', 'Coelho & Silva Advocacia');
    updatePropertyTag('og:locale', 'pt_BR');
    
    // Twitter tags
    updatePropertyTag('twitter:card', 'summary_large_image');
    updatePropertyTag('twitter:url', url);
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Coelho & Silva Advocacia Criminal",
      "description": description,
      "url": url,
      "logo": `${url}/logo.png`,
      "image": image,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Auristela, 450-B",
        "addressLocality": "Santa Cruz",
        "addressRegion": "Rio de Janeiro",
        "postalCode": "23550-000",
        "addressCountry": "BR"
      },
      "telephone": "+55-21-99999-9999",
      "email": "contato@coelhosilva.adv.br",
      "openingHours": "Mo-Fr 08:00-18:00",
      "priceRange": "$$",
      "areaServed": "Rio de Janeiro",
      "serviceType": "Advocacia Criminal",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços Jurídicos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Defesa Criminal",
              "description": "Defesa em processos criminais"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consulta Jurídica",
              "description": "Primeira consulta gratuita"
            }
          }
        ]
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [title, description, keywords, image, url, type, author]);

  return null; // This component doesn't render anything
};

export default SEO;
