import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://www.tangiertours.ma${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 bg-ivory border-b border-border-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-text">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-muted-text/50" />}
                {index === 0 && <Home className="w-3.5 h-3.5" />}
                {item.href && index < allItems.length - 1 ? (
                  <Link href={item.href} className="hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-navy font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
