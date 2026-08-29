import { PROJECT_NAME, QUICK_FACTS } from "@/lib/content";

export function QuickFacts() {
  return (
    <div className="overflow-x-auto">
      <table>
        <caption className="sr-only">{PROJECT_NAME} project facts</caption>
        <tbody>
          {QUICK_FACTS.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="align-top pr-3 md:w-[40%] md:whitespace-nowrap">
                {row.label}
              </th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
