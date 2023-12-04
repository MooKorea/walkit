"use client";

import PanelButton from "@/components/PanelButton";
import GeneratedMap from "./GeneratedMap";
import { useState } from "react";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";

export default function Save() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col w-panelWidth mt-6">
        <h1 className="mt-[-4px] font-RubikMedium text-[24px] flex items-center gap-3">
          Your Route
        </h1>
        Tap on stops for more details
      </div>
      <div className="flex flex-col gap-[10px]">
        <GeneratedMap />
        <div className="flex gap-[10px]">
          <PanelButton split left onClick={() => setModalOpen(true)}>
            Save for Later
          </PanelButton>
          <PanelButton split right highlight href="">
            Start Now!
          </PanelButton>
        </div>
      </div>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} buttonLabel="Save" highlight center href="/dashboard">
          <TextInput placeholder="Minneapolis, MN" label="Name your outing"/>
        </Modal>
      )}
    </>
  );
}
