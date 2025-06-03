import { getAllCompanions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between items-center gap-4 max-sm:flex-col">
        <h1 className="text-primary text-3xl font-bold">Companion Library</h1>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <SearchInput />
          </div>
          <Link href="/companions/new">
            <button className="btn-primary flex items-center gap-2 py-3 lg:py-2">
              <Plus className="shrink-0 text-white" size={20} />
              <span className="hidden lg:inline">Build a New Companion</span>
            </button>
          </Link>
        </div>
      </section>

      <section className="companions-grid mt-[-10]">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
