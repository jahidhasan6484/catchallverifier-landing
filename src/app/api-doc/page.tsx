"use client";
import { RedocStandalone } from "redoc";
export default function Page() {
  return (
    <RedocStandalone
      specUrl="/api-spec.yml"
      options={{ hideDownloadButton: true }}
    />
  );
}
