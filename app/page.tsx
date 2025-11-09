import ChartCard from "../components/ChartCard";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/ui/table";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const kpis = [
    {
      title: "Revenue (Today)",
      value: "$12,500",
      change: "+12.5%",
      description: "Compared to yesterday",
    },
    {
      title: "Expenses (Today)",
      value: "$4,200",
      change: "-5.2%",
      description: "Operational and payroll",
    },
    {
      title: "Net Profit",
      value: "$8,300",
      change: "+18.3%",
      description: "Revenue minus expenses",
    },
    {
      title: "Workers Active",
      value: "18",
      change: "+2",
      description: "Currently clocked in",
    },
  ];

  const weeklySales = [
    { day: "Mon", amount: 1800 },
    { day: "Tue", amount: 2200 },
    { day: "Wed", amount: 1950 },
    { day: "Thu", amount: 2400 },
    { day: "Fri", amount: 3100 },
    { day: "Sat", amount: 2700 },
    { day: "Sun", amount: 2100 },
  ];

  const topProductsHeaders = ["Product", "Units", "Revenue"];
  const topProductsRows = [
    ["Premium Widget", 120, "$7,200"],
    ["Standard Widget", 200, "$6,000"],
    ["Service Package", 45, "$5,400"],
  ];

  const maxSales = Math.max(...weeklySales.map((d) => d.amount));

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Finance Overview</h1>
        <p className="text-sm text-gray-400">Track revenue, expenses, workers, and performance at a glance</p>
      </section>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <Card key={kpi.title} className="p-6">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                <span className="text-xs font-medium text-muted-foreground">
                  {kpi.change}
                </span>
              </div>
              <p className="text-3xl font-semibold text-black">{kpi.value}</p>
              <p className="text-xs text-muted-foreground">{kpi.description}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Weekly Sales</h2>
            <span className="text-xs text-gray-400">Last 7 days</span>
          </div>
          <Card className="p-6">
            <div className="flex items-end justify-between gap-3 h-48">
              {weeklySales.map((d) => {
                const heightPercent = (d.amount / maxSales) * 100;
                return (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="relative w-full">
                      <div 
                        className="w-full bg-primary rounded-t-lg transition-all"
                        style={{ height: `${Math.max(heightPercent, 10)}%`, minHeight: "40px" }}
                      />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        ${d.amount.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{d.day}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Top Products</h2>
            <span className="text-xs text-gray-400">This month</span>
          </div>
          <Card className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  {topProductsHeaders.map((h) => (
                    <TableHead key={h} className="font-semibold">{h}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProductsRows.map((r, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{r[0]}</TableCell>
                    <TableCell>{r[1]}</TableCell>
                    <TableCell className="font-semibold text-success">{r[2]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>
    </div>
  );
}
