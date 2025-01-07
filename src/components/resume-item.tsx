
import { Lead } from "./ui/typography";
import { Card } from "./ui/card";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Lead className="w-full font-normal !text-gray-500">
        {children}
      </Lead>
    </div>
  );
}

export default ResumeItem;