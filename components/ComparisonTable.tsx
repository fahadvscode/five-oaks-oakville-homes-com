import { COMPARABLES, PRICING_COMPARABLES, SPECS_DISCLAIMER } from "@/lib/content";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Five Oaks compared with nearby Oakville pre-construction communities. Status figures are
          as reported publicly and are not a price list for Five Oaks.
        </caption>
        <thead>
          <tr>
            <th scope="col">Community</th>
            <th scope="col">Builder</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {COMPARABLES.map((row) => (
            <tr key={row.community}>
              <td className={row.href ? "font-semibold" : undefined}>{row.community}</td>
              <td>{row.builder}</td>
              <td>{row.location}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PricingComparablesTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Nearby comparable pricing for context, not Five Oaks pricing. {SPECS_DISCLAIMER}
        </caption>
        <thead>
          <tr>
            <th scope="col">Community</th>
            <th scope="col">Builder</th>
            <th scope="col">Towns from</th>
            <th scope="col">Singles from</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_COMPARABLES.map((row) => (
            <tr key={row.community}>
              <td className={row.community === "Five Oaks" ? "font-semibold" : undefined}>
                {row.community}
              </td>
              <td>{row.builder}</td>
              <td>{row.townsFrom}</td>
              <td>{row.singlesFrom}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
