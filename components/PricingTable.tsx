import { PRICING_ROWS, SPECS_DISCLAIMER } from "@/lib/content";

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="mb-3 text-left text-sm text-text-muted">
          Pricing status by home type. {SPECS_DISCLAIMER}
        </caption>
        <thead>
          <tr>
            <th scope="col">Home type</th>
            <th scope="col">Starting price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_ROWS.map((row) => (
            <tr key={row.homeType}>
              <td>{row.homeType}</td>
              <td>{row.startingPrice}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
