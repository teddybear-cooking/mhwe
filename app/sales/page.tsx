import { Card } from "../../components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../../components/ui/table";

export default function SalesPage() {
  const salesData = [
    { id: "#1234", product: "Premium Widget", customer: "John Doe", amount: "$150", status: "Completed", time: "10:30 AM" },
    { id: "#1235", product: "Standard Widget", customer: "Jane Smith", amount: "$80", status: "Completed", time: "11:15 AM" },
    { id: "#1236", product: "Service Package", customer: "Bob Johnson", amount: "$120", status: "Pending", time: "12:00 PM" },
    { id: "#1237", product: "Premium Widget", customer: "Alice Brown", amount: "$150", status: "Completed", time: "01:45 PM" },
    { id: "#1238", product: "Standard Widget", customer: "Charlie Davis", amount: "$80", status: "Completed", time: "02:30 PM" },
  ];

  const stats = [
    { label: "Total Sales", value: "$12,500", change: "+12.5%" },
    { label: "Transactions", value: "156", change: "+8.2%" },
    { label: "Avg. Order", value: "$80", change: "+3.1%" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Daily Sales</h1>
        <p className="text-sm text-gray-400">Manage and review daily sales transactions</p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <span className="text-xs font-medium text-muted-foreground">{stat.change}</span>
              </div>
              <p className="text-2xl font-semibold text-black">{stat.value}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Sales Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Order ID</TableHead>
                <TableHead className="font-semibold">Product</TableHead>
                <TableHead className="font-semibold">Customer</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="font-medium">{sale.id}</TableCell>
                  <TableCell>{sale.product}</TableCell>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell className="font-semibold text-success">{sale.amount}</TableCell>
                  <TableCell>
                    <span className={`text-xs font-medium ${
                      sale.status === "Completed" 
                        ? "text-success" 
                        : "text-warning"
                    }`}>
                      {sale.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{sale.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}