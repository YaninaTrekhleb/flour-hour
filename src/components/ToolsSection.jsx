import { useState } from 'react';

const TOOLS = [
  {
    name: 'Dutch Oven',
    description: 'Creates the perfect steam environment for a crispy golden crust',
    url: 'https://www.amazon.com/dp/B00U1OCPWQ?linkCode=ssc&tag=onamzyanina0c-20&creativeASIN=B00U1OCPWQ&asc_item-id=amzn1.ideas.35NKZUX42JNQX&ref_=aip_sf_list_spv_ons_d_asin&th=1',
  },
  {
    name: 'Digital Kitchen Scale',
    description: 'Precise measurements are key to consistent bread every time',
    url: 'https://www.amazon.com/dp/B09HM2TN5Z?linkCode=ssc&tag=onamzyanina0c-20&creativeASIN=B09HM2TN5Z&asc_item-id=amzn1.ideas.35NKZUX42JNQX&ref_=aip_sf_list_spv_ons_d_asin&th=1',
  },
  {
    name: 'Danish Dough Whisk',
    description: 'Mixes wet doughs effortlessly without the mess of sticky hands',
    url: 'https://www.amazon.com/dp/B0BMVYWLV4?linkCode=ssc&tag=onamzyanina0c-20&creativeASIN=B0BMVYWLV4&asc_item-id=amzn1.ideas.35NKZUX42JNQX&ref_=aip_sf_list_spv_ons_mixed_d_asin&th=1',
  },
  {
    name: 'Sourdough Starter Jar',
    description: 'Track your starter growth with easy-to-read markings',
    url: 'https://www.amazon.com/dp/B0C112CXJM?linkCode=ssc&tag=onamzyanina0c-20&creativeASIN=B0C112CXJM&asc_item-id=amzn1.ideas.35NKZUX42JNQX&ref_=aip_sf_list_spv_ons_mixed_d_asin&th=1',
  },
  {
    name: 'Banneton Proofing Basket',
    description: 'Shapes your dough beautifully with classic spiral patterns',
    url: 'https://www.amazon.com/dp/B0FP3SBXW9?linkCode=ssc&tag=onamzyanina0c-20&creativeASIN=B0FP3SBXW9&asc_item-id=amzn1.ideas.35NKZUX42JNQX&ref_=aip_sf_list_spv_ons_mixed_d_asin&th=1',
  },
  {
    name: 'Dough Scoring Knife',
    description: 'Create beautiful bread ears and decorative patterns',
    url: 'https://www.amazon.com/dp/B08CSXMKL9?linkCode=ssc&tag=onamzyanina0c-20&creativeASIN=B08CSXMKL9&asc_item-id=amzn1.ideas.35NKZUX42JNQX&ref_=aip_sf_list_spv_ons_mixed_d_asin&th=1',
  },
];

export function ToolsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="tools-section">
      <button
        className="tools-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="tools-toggle-text">Recommended Tools</span>
        <span className="tools-toggle-icon">{isExpanded ? '−' : '+'}</span>
      </button>

      {isExpanded && (
        <div className="tools-list">
          {TOOLS.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-item"
            >
              <span className="tool-name">{tool.name}</span>
              <span className="tool-description">{tool.description}</span>
            </a>
          ))}
          <p className="affiliate-disclosure">
            * As an Amazon Associate I earn from qualifying purchases
          </p>
        </div>
      )}
    </section>
  );
}
