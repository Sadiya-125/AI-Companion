import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Code,
  Code2,
  Code2Icon,
  CodeIcon,
  CodeSquare,
} from "lucide-react";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  return (
    <article className={cn("companion-list px-3 py-3", classNames)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-md text-black w-2/3">Lessons</TableHead>
            <TableHead className="text-md text-black text-right">
              Duration
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, subject, name, topic, duration }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-3">
                    <div
                      className="size-[50px] flex items-center justify-center rounded-md max-md:hidden"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <CodeSquare className="text-white" size={25} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-md text-black">{name}</p>
                      <p className="text-sm text-muted-foreground">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 justify-end">
                  <p className="text-md text-black">
                    {duration}
                    <span className="max-md:hidden">
                      {" "}
                      {duration != 1 ? "Minutes" : "Minute"}
                    </span>
                  </p>
                  <Clock className="text-black" size={20} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
