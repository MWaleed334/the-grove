import React from "react";

interface ButtonProps {
  label: string;
  showIcon?: boolean;
  iconSrc?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  showIcon = true,
  iconSrc,
}) => {
  return (
    <button
      className="flex items-center justify-center gap-6 px-5 py-[9px] rounded-lg 
                 bg-gradient-to-r from-[#b69051] to-[#dab672] 
                 text-white text-[13px] md:text-[15px] font-medium shadow-md 
                 hover:opacity-90 transition"
    >
      <span>{label}</span>
      {showIcon && iconSrc && (
        <img src={iconSrc} alt="arrow" className="w-4 md:w-6 h-3 md:h-4 object-contain" />
      )}
    </button>
  );
};

export default Button;
