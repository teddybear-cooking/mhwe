import { Card } from "../../components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../../components/ui/table";

export default function WorkersPage() {
  const workers = [
    { id: 1, name: "John Doe", role: "Sales Associate", status: "Active", hours: 40, performance: 95 },
    { id: 2, name: "Jane Smith", role: "Manager", status: "Active", hours: 45, performance: 98 },
    { id: 3, name: "Bob Johnson", role: "Cashier", status: "Active", hours: 38, performance: 88 },
    { id: 4, name: "Alice Brown", role: "Stock Clerk", status: "On Leave", hours: 0, performance: 92 },
    { id: 5, name: "Charlie Davis", role: "Sales Associate", status: "Active", hours: 42, performance: 90 },
  ];

  const stats = [
    { label: "Total Workers", value: "24", change: "+2 this month" },
    { label: "Active Today", value: "18", change: "75% attendance" },
    { label: "Avg. Performance", value: "92.6%", change: "+2.3% vs last month" },
    { label: "Total Hours", value: "856", change: "This week" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Workers Management</h1>
        <p className="text-sm text-gray-400">Manage staff and HR details</p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-semibold text-black">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Workers Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Team Members</h2>
        <Card className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Role</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Hours (Week)</TableHead>
                <TableHead className="font-semibold">Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workers.map((worker) => (
                <TableRow key={worker.id}>
                  <TableCell className="font-medium">{worker.name}</TableCell>
                  <TableCell className="text-muted-foreground">{worker.role}</TableCell>
                  <TableCell>
                    <span className={`text-xs font-medium ${
                      worker.status === "Active" 
                        ? "text-success" 
                        : "text-warning"
                    }`}>
                      {worker.status}
                    </span>
                  </TableCell>
                  <TableCell>{worker.hours}h</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 bg-muted overflow-hidden">
                        <div 
                          className="h-full bg-primary"
                          style={{ width: `${worker.performance}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium">{worker.performance}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
