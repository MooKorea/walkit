"use client";

import PanelButton from "@/components/PanelButton";
import GeneratedMap from "./GeneratedMap";
import { useState } from "react";
import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function Save() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Heading label="New Outing" href="/dashboard">
        <Button label="Add Stops" href="/new-outing/add-stops" />
      </Heading>
      <div className="mt-4 flex flex-col w-panelWidth">
        <h1 className="mt-[-0.25rem] font-RubikMedium text-[1.5rem] flex items-center gap-3">
          Your Route
        </h1>
        Tap on stops for more details
      </div>
      <div className="flex flex-col gap-[0.625rem]">
        <GeneratedMap />
        <div className="flex gap-[0.625rem]">
          <PanelButton split left onClick={() => setModalOpen(true)}>
            Save for Later
          </PanelButton>
          <PanelButton split right highlight href="/map">
            Start Now!
          </PanelButton>
        </div>
      </div>
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          buttonLabel="Save"
          highlight
          center
          href="/dashboard"
        >
          <TextInput placeholder="Minneapolis, MN" label="Name your outing" />
        </Modal>
      )}
    </>
  );
}
