interface AxiodLogoProps {
  size?: number;
}

export default function AxiodLogo({ size = 38 }: AxiodLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-label="Axiod Robotics logo">
      <polygon points="60,8 104,32 104,88 60,112 16,88 16,32" fill="none" stroke="#00D4FF" strokeWidth="2" />
      <circle cx="60" cy="8" r="3" fill="#00D4FF" />
      <circle cx="104" cy="32" r="3" fill="#00D4FF" />
      <circle cx="104" cy="88" r="3" fill="#00D4FF" />
      <circle cx="60" cy="112" r="3" fill="#00D4FF" />
      <circle cx="16" cy="88" r="3" fill="#00D4FF" />
      <circle cx="16" cy="32" r="3" fill="#00D4FF" />
      <path d="M44,92 L60,30 L76,92" fill="none" stroke="white" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
      <line x1="51.5" y1="71" x2="68.5" y2="71" stroke="white" strokeWidth="4" />
      <circle cx="60" cy="30" r="5" fill="#00D4FF" />
      <path d="M82,50 A14,14 0 0 1 82,70" fill="none" stroke="#00D4FF" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
      <path d="M90,42 A24,24 0 0 1 90,78" fill="none" stroke="#00D4FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
