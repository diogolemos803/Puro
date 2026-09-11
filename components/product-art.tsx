import type { ComponentType } from "react";

function RooftopFrontArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="Rooftop Sessions Tee, frente"
    >
      <rect width="400" height="500" fill="#F5F1EA" />
      <circle cx="150" cy="150" r="7" fill="#D9695A" />
    </svg>
  );
}

function RooftopBackArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="Rooftop Sessions Tee, costas"
    >
      <rect width="400" height="500" fill="#F5F1EA" />
      <circle
        cx="200"
        cy="185"
        r="62"
        fill="none"
        stroke="#2F4A3C"
        strokeWidth="3"
      />
      <circle cx="200" cy="185" r="6" fill="#2F4A3C" />
      <line
        x1="248"
        y1="145"
        x2="278"
        y2="120"
        stroke="#2F4A3C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="278" cy="120" r="4" fill="#2F4A3C" />
      <rect
        x="185"
        y="270"
        width="30"
        height="34"
        rx="2"
        fill="none"
        stroke="#D9695A"
        strokeWidth="3"
      />
      <line x1="185" y1="288" x2="215" y2="288" stroke="#D9695A" strokeWidth="2" />
      <text
        x="200"
        y="345"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="26"
        fill="#2F4A3C"
      >
        Rooftop Sessions
      </text>
      <text
        x="200"
        y="368"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        letterSpacing="0.5"
        fill="#5A4632"
      >
        vinil, luz baixa, playlist errada
      </text>
      <text
        x="200"
        y="430"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        letterSpacing="4"
        fill="#D9695A"
      >
        PURO SOCIETY
      </text>
    </svg>
  );
}

function LifePointFrontArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="Life Point Tee, frente"
    >
      <rect width="400" height="500" fill="#3E6E78" />
      <circle cx="150" cy="150" r="7" fill="#EDE6D6" />
    </svg>
  );
}

function LifePointBackArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="Life Point Tee, costas"
    >
      <rect width="400" height="500" fill="#3E6E78" />
      <text
        x="200"
        y="200"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight={700}
        fontSize="46"
        fill="#F1E1A0"
        letterSpacing="1"
      >
        LIFE
      </text>
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight={700}
        fontSize="46"
        fill="#F1E1A0"
        letterSpacing="1"
      >
        POINT
      </text>
      <ellipse
        cx="200"
        cy="330"
        rx="34"
        ry="44"
        fill="none"
        stroke="#EDE6D6"
        strokeWidth="4"
      />
      <line
        x1="200"
        y1="374"
        x2="200"
        y2="420"
        stroke="#EDE6D6"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line x1="172" y1="315" x2="228" y2="315" stroke="#EDE6D6" strokeWidth="2" opacity="0.7" />
      <line x1="172" y1="330" x2="228" y2="330" stroke="#EDE6D6" strokeWidth="2" opacity="0.7" />
      <line x1="172" y1="345" x2="228" y2="345" stroke="#EDE6D6" strokeWidth="2" opacity="0.7" />
      <text
        x="200"
        y="450"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontSize="14"
        fill="#EDE6D6"
      >
        it&apos;s ALL about winning
      </text>
      <text
        x="200"
        y="472"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        letterSpacing="4"
        fill="#EDE6D6"
      >
        PURO SOCIETY
      </text>
    </svg>
  );
}

export const productArt: Record<
  string,
  { front: ComponentType<{ className?: string }>; back: ComponentType<{ className?: string }> }
> = {
  "rooftop-sessions-tee": { front: RooftopFrontArt, back: RooftopBackArt },
  "life-point-tee": { front: LifePointFrontArt, back: LifePointBackArt },
};
