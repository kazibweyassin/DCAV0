"use client";

import { useState, useEffect } from "react";
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CAPITAL_TIERS, COUNTRIES } from "@/lib/data/sectors";
import type {
  AssetClassInterest,
  CapitalTier,
  ConversionTrigger,
  KYCFormData,
} from "@/types/investment";

interface ConversionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ConversionTrigger;
  preselectedAssetClass?: AssetClassInterest;
}

const INITIAL_FORM: KYCFormData = {
  investorName: "",
  email: "",
  countryOfOrigin: "",
  assetClassInterest: "",
  accreditationsConfirmed: false,
  liquidityCapacity: "",
};

const TRIGGER_CONFIG = {
  brief: {
    title: "Request Investment Brief",
    description:
      "Submit your institutional credentials to receive a confidential investment brief tailored to your allocation profile.",
    submitLabel: "Submit Brief Request",
  },
  allocation: {
    title: "Apply for Capital Allocation",
    description:
      "Complete institutional KYC verification to initiate allocation review with DCA's investment committee.",
    submitLabel: "Submit Allocation Application",
  },
} as const;

export function ConversionModal({
  open,
  onOpenChange,
  trigger,
  preselectedAssetClass,
}: ConversionModalProps) {
  const [form, setForm] = useState<KYCFormData>(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof KYCFormData, string>>>({});

  const config = TRIGGER_CONFIG[trigger];

  useEffect(() => {
    if (open && preselectedAssetClass) {
      setForm((prev) => ({
        ...prev,
        assetClassInterest: preselectedAssetClass,
      }));
    }
  }, [open, preselectedAssetClass]);

  const resetForm = () => {
    setForm({
      ...INITIAL_FORM,
      assetClassInterest: preselectedAssetClass ?? "",
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
    setIsSubmitting(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) resetForm();
    onOpenChange(nextOpen);
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof KYCFormData, string>> = {};

    if (!form.investorName.trim()) {
      nextErrors.investorName = "Institutional investor name is required";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Contact email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!form.countryOfOrigin) {
      nextErrors.countryOfOrigin = "Country of origin is required";
    }
    if (!form.assetClassInterest) {
      nextErrors.assetClassInterest = "Asset class interest is required";
    }
    if (!form.liquidityCapacity) {
      nextErrors.liquidityCapacity = "Liquidity capacity tier is required";
    }
    if (!form.accreditationsConfirmed) {
      nextErrors.accreditationsConfirmed =
        "You must confirm accredited investor status";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trigger, ...form }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Submission failed");
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = <K extends keyof KYCFormData>(
    key: K,
    value: KYCFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald/10">
                  <Shield className="h-4 w-4 text-emerald-light" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-light">
                  Institutional KYC Gateway
                </span>
              </div>
              <DialogTitle>{config.title}</DialogTitle>
              <DialogDescription>{config.description}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="investorName">
                  Institutional Investor Name *
                </Label>
                <Input
                  id="investorName"
                  placeholder="e.g. Meridian Global Capital Partners LLP"
                  value={form.investorName}
                  onChange={(e) => updateField("investorName", e.target.value)}
                  aria-invalid={!!errors.investorName}
                  aria-describedby={
                    errors.investorName ? "investorName-error" : undefined
                  }
                />
                {errors.investorName && (
                  <p id="investorName-error" role="alert" className="text-xs text-red-400">
                    {errors.investorName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Institutional Contact Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. allocations@fund.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="countryOfOrigin">Country of Origin *</Label>
                <Select
                  value={form.countryOfOrigin}
                  onValueChange={(v) => updateField("countryOfOrigin", v)}
                >
                  <SelectTrigger id="countryOfOrigin">
                    <SelectValue placeholder="Select jurisdiction" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.countryOfOrigin && (
                  <p className="text-xs text-red-400">
                    {errors.countryOfOrigin}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="assetClassInterest">
                  Asset Class Interest *
                </Label>
                <Select
                  value={form.assetClassInterest}
                  onValueChange={(v) =>
                    updateField("assetClassInterest", v as AssetClassInterest)
                  }
                >
                  <SelectTrigger id="assetClassInterest">
                    <SelectValue placeholder="Select asset class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agro-processing">
                      Agro-Processing & Export Infrastructure
                    </SelectItem>
                    <SelectItem value="mineral-refining">
                      Mineral Value-Addition & Refineries
                    </SelectItem>
                    <SelectItem value="real-estate">
                      Commercial Real Estate & Logistics Hubs
                    </SelectItem>
                    <SelectItem value="diversified">
                      Diversified Multi-Sector Allocation
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.assetClassInterest && (
                  <p className="text-xs text-red-400">
                    {errors.assetClassInterest}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="liquidityCapacity">
                  Tier Liquidity Capacity *
                </Label>
                <Select
                  value={form.liquidityCapacity}
                  onValueChange={(v) =>
                    updateField("liquidityCapacity", v as CapitalTier)
                  }
                >
                  <SelectTrigger id="liquidityCapacity">
                    <SelectValue placeholder="Select allocation tier" />
                  </SelectTrigger>
                  <SelectContent>
                    {CAPITAL_TIERS.map((tier) => (
                      <SelectItem key={tier.id} value={tier.id}>
                        {tier.label}
                        {tier.id === "5m-plus" ? "+" : ""} USD
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.liquidityCapacity && (
                  <p className="text-xs text-red-400">
                    {errors.liquidityCapacity}
                  </p>
                )}
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="accreditations"
                    checked={form.accreditationsConfirmed}
                    onCheckedChange={(checked) =>
                      updateField(
                        "accreditationsConfirmed",
                        checked === true
                      )
                    }
                  />
                  <div className="space-y-1">
                    <Label
                      htmlFor="accreditations"
                      className="cursor-pointer leading-relaxed"
                    >
                      Accredited / Qualified Investor Confirmation *
                    </Label>
                    <p className="text-xs text-white/40">
                      I confirm that I am an accredited or qualified institutional
                      investor under applicable securities regulations in my
                      jurisdiction, and that I meet DCA&apos;s minimum allocation
                      thresholds.
                    </p>
                  </div>
                </div>
                {errors.accreditationsConfirmed && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.accreditationsConfirmed}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 rounded-md border border-emerald/20 bg-emerald/5 px-3 py-2">
                <Lock className="h-3.5 w-3.5 text-emerald-light" />
                <p className="text-[11px] text-white/50">
                  Submissions are transmitted securely and reviewed under
                  OECD-aligned data protection protocols.
                </p>
              </div>

              {submitError && (
                <p role="alert" className="text-sm text-red-400">
                  {submitError}
                </p>
              )}

              <DialogFooter>
                <Button
                  type="submit"
                  variant="premium"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : config.submitLabel}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald/10">
              <CheckCircle2 className="h-8 w-8 text-emerald-light" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-white">
              Submission Received
            </h3>
            <p className="mt-3 text-sm text-white/50">
              Thank you, {form.investorName}. Our institutional relations team
              will review your{" "}
              {trigger === "brief" ? "brief request" : "allocation application"}{" "}
              within 48 business hours. A secure portal invitation will be sent
              to {form.email}.
            </p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}