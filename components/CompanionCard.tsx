"use client";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
      </div>

      <h2 className="text-2xl font-bold text-white">{name}</h2>
      <p className="text-sm text-white">{topic}</p>
      <div className="flex items-center gap-2">
        <Clock className="text-white" size={20} />

        <p className="text-sm text-white">
          {duration}
          {duration != 1 ? " Minutes" : " Minute"}
        </p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="bg-white rounded-2xl py-2 w-full justify-center hover:cursor-pointer">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
