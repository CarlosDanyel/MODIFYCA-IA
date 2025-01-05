import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.svg";
import AiGenerationDropdown from "./ai-generation-dropdown";
import { Separator } from "@/components/ui/separator";
import BasicInfoSection from "./sections/basic-info";

const InfosSidebar = () => {
  return (
    <aside className="w-full h-full p-6 overflow-y-auto ">
      <div className="w-full flex items-center justify-between ">
        <Link href={"/dashboard/resumes/"}>
          <Logo className="max-w-[80px] w-full" />
        </Link>

        <AiGenerationDropdown />
      </div>
      <Separator className="my-5" />

      <BasicInfoSection />
    </aside>
  );
};

export default InfosSidebar;
