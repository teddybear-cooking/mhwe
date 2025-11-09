import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

type ChartCardProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function ChartCard({ title, children, className }: ChartCardProps) {
  if (!title) {
    return (
      <Card className={className}>
        <CardContent className="pt-6">
          {children ?? <span className="text-muted-foreground">Chart placeholder</span>}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children ?? <span className="text-muted-foreground">Chart placeholder</span>}
      </CardContent>
    </Card>
  );
}