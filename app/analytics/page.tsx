import { Card } from "../../components/ui/card";

export default function AnalyticsPage() {
  const insights = [
    { title: "Revenue Growth", value: "+24.5%", subtitle: "vs last month" },
    { title: "Customer Retention", value: "87.2%", subtitle: "Active users" },
    { title: "Profit Margin", value: "32.8%", subtitle: "This quarter" },
    { title: "Avg. Transaction", value: "$156", subtitle: "Per customer" },
  ];

  const monthlyData = [
    { month: "Jan", revenue: 45000, expenses: 28000 },
    { month: "Feb", revenue: 52000, expenses: 31000 },
    { month: "Mar", revenue: 48000, expenses: 29000 },
    { month: "Apr", revenue: 61000, expenses: 35000 },
    { month: "May", revenue: 58000, expenses: 33000 },
    { month: "Jun", revenue: 67000, expenses: 38000 },
  ];

  const maxValue = Math.max(...monthlyData.flatMap(d => [d.revenue, d.expenses]));

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Analytics Dashboard</h1>
        <p className="text-sm text-gray-400">Key insights and performance metrics</p>
      </section>

      {/* Key Insights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight) => (
          <Card key={insight.title} className="p-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">{insight.title}</p>
              <p className="text-3xl font-semibold text-black">{insight.value}</p>
              <p className="text-xs text-muted-foreground">{insight.subtitle}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Monthly Performance */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Monthly Performance</h2>
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-primary" />
              <span className="text-muted-foreground">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-danger" />
              <span className="text-muted-foreground">Expenses</span>
            </div>
          </div>
        </div>
        <Card className="p-6">
          <div className="space-y-6">
            {monthlyData.map((data) => {
              const revenueWidth = (data.revenue / maxValue) * 100;
              const expensesWidth = (data.expenses / maxValue) * 100;
              
              return (
                <div key={data.month} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium w-12">{data.month}</span>
                    <div className="flex-1 mx-4 space-y-1">
                      <div className="relative h-6 bg-muted overflow-hidden">
                        <div 
                          className="absolute h-full bg-primary transition-all"
                          style={{ width: `${revenueWidth}%` }}
                        />
                        <span className="absolute inset-0 flex items-center justify-end pr-2 text-xs font-semibold text-white">
                          ${(data.revenue / 1000).toFixed(0)}k
                        </span>
                      </div>
                      <div className="relative h-6 bg-muted overflow-hidden">
                        <div 
                          className="absolute h-full bg-danger transition-all"
                          style={{ width: `${expensesWidth}%` }}
                        />
                        <span className="absolute inset-0 flex items-center justify-end pr-2 text-xs font-semibold text-white">
                          ${(data.expenses / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      {/* Additional Insights */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black">Top Categories</h3>
              <span className="text-xs text-gray-400">This month</span>
            </div>
            <div className="space-y-3">
              {["Electronics", "Services", "Accessories", "Software"].map((category, idx) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-sm">{category}</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 bg-muted overflow-hidden">
                      <div 
                        className="h-full bg-primary"
                        style={{ width: `${100 - idx * 20}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 text-right">{100 - idx * 20}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black">Customer Satisfaction</h3>
              <span className="text-xs text-gray-400">Last 30 days</span>
            </div>
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="text-5xl font-semibold text-black">4.8</div>
                <div className="text-sm text-muted-foreground mt-2">out of 5</div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
