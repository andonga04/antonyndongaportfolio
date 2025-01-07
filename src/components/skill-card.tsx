import { Card, CardContent } from "@/components/ui/card";
import { H4, P } from "@/components/ui/typography"

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card className="bg-transaprent border-none shadow-none">
      <CardContent className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <H4 className="mb-2">
          {title}
        </H4>
        <P className="px-8 font-normal !text-gray-500">
          {children}
        </P>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
