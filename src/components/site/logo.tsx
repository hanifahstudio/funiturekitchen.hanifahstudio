const Logo = ({ light = false }: { light?: boolean }) => {
  const title = light ? "#ffffff" : "#20362b";
  const sub = light ? "rgba(255,255,255,0.62)" : "#6b7069";
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {/* cabinet mark */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="38" height="38" rx="2" stroke="#C6904F" strokeWidth="2.4" />
        <rect x="7.5" y="7.5" width="13" height="29" stroke="#C6904F" strokeWidth="1.8" />
        <rect x="24.5" y="7.5" width="12" height="13" stroke="#C6904F" strokeWidth="1.8" />
        <rect x="24.5" y="24.5" width="12" height="12" stroke="#C6904F" strokeWidth="1.8" />
        <line x1="14" y1="18" x2="14" y2="26" stroke="#C6904F" strokeWidth="1.8" />
        <circle cx="30.5" cy="14" r="1.4" fill="#C6904F" />
        <circle cx="30.5" cy="30.5" r="1.4" fill="#C6904F" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-heading font-bold text-[1.6rem] tracking-tight"
          style={{ color: title }}
        >
          Woodora
        </span>
        <span
          className="text-[0.62rem] tracking-[0.3em] uppercase mt-1"
          style={{ color: sub }}
        >
          Modular Kitchen Studio
        </span>
      </span>
    </span>
  );
};

export default Logo;
