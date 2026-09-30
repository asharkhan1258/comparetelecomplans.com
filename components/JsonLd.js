import { site } from "@/lib/site-config";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.legalName,
    "alternateName": site.brandName,
    "url": `https://www.${site.domain}`,
    "logo": `https://www.${site.domain}/favicon.ico`,
    "email": site.email,
    "telephone": site.phoneDisplay,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": site.address.line1,
      "addressLocality": site.address.city,
      "addressRegion": site.address.state,
      "postalCode": site.address.zip,
      "addressCountry": "US"
    },
    "description": site.shortDescription
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": site.brandName,
    "url": `https://www.${site.domain}`,
    "publisher": {
      "@type": "Organization",
      "name": site.legalName
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": site.brandName,
    "legalName": site.legalName,
    "telephone": site.phoneDisplay,
    "email": site.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": site.address.line1,
      "addressLocality": site.address.city,
      "addressRegion": site.address.state,
      "postalCode": site.address.zip,
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-17:00",
    "priceRange": "Free Advisory Service"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
