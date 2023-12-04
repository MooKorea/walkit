"use client";
import Arrow from "@/components/icons/Arrow";
import PanelButton from "@/components/PanelButton";
import NewOutingIcon from "./icons/NewOutingIcon";
import PreviousOutingsIcon from "./icons/PreviousOutingsIcon";
import SaveIcon from "./icons/SaveIcon";
import SavedLocationsIcon from "./icons/SavedLocationsIcon";
import { motion } from "framer-motion";

export default function Buttons() {
  return (
    <div className="grow flex flex-col gap-[10px] justify-end pb-[110px]">
      <DashboardButton
        top
        label="New Outing"
        href="/new-outing"
        icon={<NewOutingIcon />}
        delay={0}
      />
      <DashboardButton label="Saved Routes" href="" icon={<SaveIcon />} delay={1} />
      <DashboardButton
        label="Saved Locations"
        href=""
        icon={<SavedLocationsIcon />}
        delay={2}
      />
      <DashboardButton
        bottom
        label="Previous Outings"
        href=""
        icon={<PreviousOutingsIcon />}
        delay={3}
      />
    </div>
  );
}

interface DashboardButton {
  top?: boolean;
  bottom?: boolean;
  label: string;
  href: string;
  icon: React.ReactNode;
  delay: number;
}

function DashboardButton({
  top = false,
  bottom = false,
  label,
  href,
  icon,
  delay,
}: DashboardButton) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.05 }}
    >
      <PanelButton top={top} bottom={bottom} height="h-[91px]" href={href}>
        <div className="flex items-center w-panelWidth gap-4 pl-6 pr-8">
          {icon}
          <div className="grow">{label}</div>
          <Arrow />
        </div>
      </PanelButton>
    </motion.div>
  );
}
