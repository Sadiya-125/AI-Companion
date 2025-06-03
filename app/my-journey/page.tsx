import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  getUserCompanions,
  getUserSessions,
} from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";
import { CheckCircle, GraduationCap } from "lucide-react";

const Profile = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id);

  return (
    <main className="min-lg:w-3/4">
      <section className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex gap-4 items-center flex-shrink-0">
          <Image
            src={user.imageUrl}
            alt={user.firstName!}
            width={110}
            height={110}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl break-words max-w-full max-sm:max-w-[180px] max-sm:truncate">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-muted-foreground break-words max-w-full max-sm:max-w-[180px] max-sm:truncate">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full md:w-auto md:justify-end px-2 md:px-0">
          <div className="border border-black rounded-4xl p-3 gap-2 flex flex-col h-fit w-full md:w-auto">
            <div className="flex gap-2 items-center">
              <CheckCircle className="text-primary" size={22} />
              <p className="text-2xl font-bold">{sessionHistory.length}</p>
            </div>
            <div>Lessons Completed</div>
          </div>
          <div className="border border-black rounded-4xl p-3 gap-2 flex flex-col h-fit w-full md:w-auto">
            <div className="flex gap-2 items-center">
              <GraduationCap className="text-primary" size={25} />
              <p className="text-2xl font-bold">{companions.length}</p>
            </div>
            <div>Companions Created</div>
          </div>
        </div>
      </section>
      <Accordion type="multiple">
        <AccordionItem value="recent">
          <AccordionTrigger className="text-lg text-primary font-bold hover:cursor-pointer">
            Recent Sessions
          </AccordionTrigger>
          <AccordionContent>
            <CompanionsList
              title="Recent Sessions"
              companions={sessionHistory}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="companions">
          <AccordionTrigger className="text-lg text-primary font-bold hover:cursor-pointer">
            My Companions {`(${companions.length})`}
          </AccordionTrigger>
          <AccordionContent>
            <CompanionsList title="My Companions" companions={companions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};
export default Profile;
