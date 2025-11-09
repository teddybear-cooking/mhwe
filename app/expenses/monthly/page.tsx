import { Card } from "../../../components/ui/card";

export default function MonthlyExpensesPage() {
  const monthlyData = [
    { category: "Payroll", amount: 28500, percentage: 45 },
    { category: "Rent", amount: 12000, percentage: 19 },
    { category: "Utilities", amount: 8500, percentage: 13 },
    { category: "Supplies", amount: 6800, percentage: 11 },
    { category: "Marketing", amount: 5200, percentage: 8 },
    { category: "Other", amount: 2500, percentage: 4 },
  ];

  const stats = [
    { label: "Total Expenses", value: "$63,500" },
    { label: "vs Last Month", value: "+8.3%" },
    { label: "Avg. Daily", value: "$2,117" },
  ];

  const totalAmount = monthlyData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Monthly Expenses</h1>
        <p className="text-sm text-gray-400">Track monthly expenses and budget allocation</p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-semibold text-black">{stat.value}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Expense Breakdown */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Expense Breakdown</h2>
        <Card className="p-6">
          <div className="space-y-4">
            {monthlyData.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-danger font-semibold">${item.amount.toLocaleString()}</span>
                    <span className="text-muted-foreground">({item.percentage}%)</span>
                  </div>
                </div>
                <div className="relative h-3 bg-muted overflow-hidden">
                  <div 
                    className="absolute h-full bg-danger transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Summary */}
      <section>
        <Card className="p-6 bg-muted">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Monthly Expenses</p>
              <p className="text-3xl font-semibold text-danger mt-1">${totalAmount.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-muted-foreground">Budget Remaining</p>
              <p className="text-2xl font-semibold text-success mt-1">$6,500</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
