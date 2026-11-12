import { ImageResponse } from "next/og";

export const alt = "Divine ERP Solutions: ERPNext implementation for small and growing businesses";
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
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(160deg, #F3F8FE 0%, #FFFFFF 70%)",
          color: "#22304A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#2B77CC",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Divine ERP Solutions</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            ERPNext implementation for clear, simple operations
          </div>
          <div style={{ fontSize: 32, color: "#5F6E83" }}>
            An independent service for small and growing businesses
          </div>
        </div>
      </div>
    ),
    size
  );
}
