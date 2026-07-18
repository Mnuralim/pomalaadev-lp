import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Pomalaa Dev - Website dan aplikasi yang benar-benar bekerja";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/logo3.png"),
  ).then((buffer) => buffer.toString("base64"));
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          padding: 80,
        }}
      >
        <img src={logoSrc} width={140} height={107} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 64,
            fontWeight: 700,
            color: "#f5f5f5",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Website dan aplikasi yang{" "}
          <span style={{ color: "#ffd233" }}>benar-benar bekerja.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "#9ca3af",
          }}
        >
          pomalaa.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
