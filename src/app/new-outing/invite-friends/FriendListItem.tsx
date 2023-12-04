"use client";
import DividerLine from "@/components/DividerLine";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface FriendListItem {
  name: string;
  online: boolean;
  profilePicture: string;
  delay: number;
}

export default function FriendListItem({
  name,
  online,
  profilePicture,
  delay,
}: FriendListItem) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.05 }}
      className="relative flex items-center gap-4 py-[0.625rem] w-full px-8"
    >
      <div className="relative w-[2.5rem] h-[2.5rem]">
        <Image
          className="rounded-full max-h-10"
          src={profilePicture}
          fill
          sizes="2.5rem"
          alt="friend profile picture"
        />
      </div>
      <div className="grow">
        <div className="text-textPrimary">{name}</div>
        <div
          className={
            "font-RubikMedium text-[0.875rem] " +
            (online ? "text-textTertiary " : "text-[#706A6A]")
          }
        >
          {online ? "Online" : "Offline"}
        </div>
      </div>
      <PlusButton />
      <div className="absolute bottom-0">
        <DividerLine />
      </div>
    </motion.div>
  );
}

function PlusButton() {
  const [invite, setInvite] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      
      fill="none"
      viewBox="0 0 40 40"
      className={"w-[2.5rem] h-[2.5rem] cursor-pointer " + (invite ? "saturate-0 pointer-events-none" : "")}
      onClick={() => setInvite(true)}
    >
      <rect width="40" height="40" fill="#FFD170" rx="20"></rect>
      <path
        stroke="#A17A4F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 14v6m0 0v6m0-6h6m-6 0h-6"
      ></path>
    </svg>
  );
}
