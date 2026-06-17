"use client";

import { useState } from "react";
import { ExternalLink, Download, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfViewerProps {
  url: string;
  title: string;
  externalUrl?: string;
}

export function PdfViewer({ url, title, externalUrl }: PdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const openUrl = externalUrl ?? url;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10">
            <FileText className="h-5 w-5 text-emerald-light" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="text-xs text-white/50">
              View the official document below or open it in a new tab
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={openUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Open in New Tab
            </a>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a href={url} download="Bankable-Projects-June-2025.pdf">
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-obsidian-100 shadow-premium">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-obsidian-100">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-light" />
            <p className="text-sm text-white/50">Loading document...</p>
          </div>
        )}
        <iframe
          src={`${url}#view=FitH`}
          title={title}
          onLoad={() => setIsLoading(false)}
          className="h-[min(calc(100vh-16rem),900px)] min-h-[360px] w-full bg-white sm:min-h-[480px]"
        />
      </div>

      <p className="text-center text-xs text-white/40">
        On mobile, if the document does not load, use &quot;Open in New Tab&quot;
        above.
      </p>
    </div>
  );
}