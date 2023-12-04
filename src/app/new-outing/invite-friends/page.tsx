import Panel from "@/components/Panel";
import PanelButton from "@/components/PanelButton";
import Arrow from "@/components/icons/Arrow";
import QuestionMark from "@/components/icons/QuestionMark";
import { friendData } from "./friendData";
import FriendListItem from "./FriendListItem";
import ProgressDots from "../ProgressDots";

export default function InviteFriends() {
  return (
    <>
      <div className="flex flex-col w-panelWidth mt-6">
        <h1 className="mt-[-4px] font-RubikMedium text-[24px] flex items-center gap-3">
          Invite Friends
          <QuestionMark />
        </h1>
      </div>
      <div className="flex flex-col gap-[10px]">
        <FriendsPanel />
        <div className="flex gap-[10px]">
          <PanelButton split left href="/new-outing/budget">
            <Arrow left />
            Previous
          </PanelButton>
          <PanelButton split right highlight href="/new-outing/save">
            Create Route
          </PanelButton>
        </div>
      </div>
      <ProgressDots progress={2} />
    </>
  );
}

function FriendsPanel() {
  return (
    <Panel height="h-[536px] mt-[14px] " top>
    <div className="mt-4 w-full">
      {friendData
        .slice(0, 5)
        .sort((x, y) => Number(y.online) - Number(x.online))
        .map((e, i) => {
          return (
            <FriendListItem
              key={i}
              delay={i}
              name={e.name}
              online={e.online}
              profilePicture={e.profilePicture}
            />
          );
        })}
    </div>
  </Panel>
  )
}
