import React from 'react';

interface SectionHeaderProps {
  text: string;
  href?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text, href = "#" }) => {
  return (
    <div className="w-full text-center mb-12">
      <a 
        href={href} 
        className="btn-shine inline-block text-[28px] md:text-[40px] font-bengali hover:opacity-80 transition-opacity leading-tight"
      >
        {text}
      </a>
    </div>
  );
};