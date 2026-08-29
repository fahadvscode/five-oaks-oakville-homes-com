import { ImageResponse } from "next/og";

export const alt = "Five Oaks — pre-construction homes in Oakville, Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #123F3D 0%, #1F6E6A 58%, #0E2E2C 100%)",
          padding: "64px",
          color: "#F7F9F8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#C9A15A",
            marginBottom: 16,
          }}
        >
          Pre-construction · Oakville, Ontario
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Five Oaks Oakville
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#C9A15A",
          }}
        />
        <div style={{ marginTop: 24, fontSize: 28, maxWidth: 860, color: "#EAF1EF" }}>
          Approximately 140 singles and townhomes at 1303 Dundas Street West, by Caivan
          Communities.
        </div>
      </div>
    ),
    { ...size },
  );
}
