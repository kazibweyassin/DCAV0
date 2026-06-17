"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { ConversionModal } from "@/components/modals/conversion-modal";
import type {
  AssetClassInterest,
  ConversionTrigger,
  SectorId,
} from "@/types/investment";

const SECTOR_TO_ASSET_CLASS: Record<SectorId, AssetClassInterest> = {
  "agro-processing": "agro-processing",
  "mineral-refining": "mineral-refining",
  "real-estate": "real-estate",
};

interface ConversionContextValue {
  openBrief: (sectorId?: SectorId) => void;
  openAllocation: () => void;
}

const ConversionContext = createContext<ConversionContextValue | null>(null);

export function useConversion() {
  const ctx = useContext(ConversionContext);
  if (!ctx) {
    throw new Error("useConversion must be used within ConversionProvider");
  }
  return ctx;
}

export function ConversionProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] =
    useState<ConversionTrigger>("brief");
  const [preselectedAssetClass, setPreselectedAssetClass] = useState<
    AssetClassInterest | undefined
  >(undefined);

  const openModal = useCallback(
    (trigger: ConversionTrigger, sectorId?: SectorId) => {
      setModalTrigger(trigger);
      setPreselectedAssetClass(
        sectorId ? SECTOR_TO_ASSET_CLASS[sectorId] : undefined
      );
      setModalOpen(true);
    },
    []
  );

  const value: ConversionContextValue = {
    openBrief: (sectorId) => openModal("brief", sectorId),
    openAllocation: () => openModal("allocation"),
  };

  return (
    <ConversionContext.Provider value={value}>
      {children}
      <ConversionModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        trigger={modalTrigger}
        preselectedAssetClass={preselectedAssetClass}
      />
    </ConversionContext.Provider>
  );
}