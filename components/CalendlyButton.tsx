import React from 'react';
import { useCalendly } from './CalendlyBadge';

const CalendlyButton: React.FC = () => {
  const openCalendly = useCalendly();

  return (
    <button
      onClick={openCalendly}
      className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
    >
      <span>Get FREE Consultation</span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
    </button>
  );
};

export default CalendlyButton;