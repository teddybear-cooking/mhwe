import { Card } from "../../../components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../../../components/ui/table";

export default function DailyExpensesPage() {
  const expenses = [
    { id: 1, category: "Utilities", description: "Electricity bill", amount: "$250", time: "09:00 AM" },
    { id: 2, category: "Supplies", description: "Office supplies", amount: "$120", time: "10:30 AM" },
    { id: 3, category: "Payroll", description: "Daily wages", amount: "$1,200", time: "12:00 PM" },
    { id: 4, category: "Maintenance", description: "Equipment repair", amount: "$350", time: "02:15 PM" },
    { id: 5, category: "Marketing", description: "Social media ads", amount: "$180", time: "04:00 PM" },
  ];

  const stats = [
    { label: "Total Expenses", value: "$4,200", change: "+5.2% from yesterday" },
    { label: "Payroll", value: "$1,200", change: "Largest expense" },
    { label: "Avg. Transaction", value: "$420", change: "Per expense" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Daily Expenses</h1>
        <p className="text-sm text-gray-400">Track daily expenses and spending patterns</p>
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
              <p className="text-2xl font-semibold text-danger">{stat.value}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Expenses Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Today's Expenses</h2>
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Category</TableHead>
                <TableHead className="font-semibold">Description</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="font-medium">{expense.category}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell className="font-semibold text-danger">{expense.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{expense.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
