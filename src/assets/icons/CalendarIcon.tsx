import * as React from 'react';

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M8 14.699h1.948M8 16.648v-1.949M16 14.699a4.41 4.41 0 01-7.746 0M16.5 10h-1M12.5 10h-1M12.5 10h-1M8.5 10h-1M7.5 3v3M16.5 3v3'
        stroke='#151515'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 4.5H6a3 3 0 00-3 3V18a3 3 0 003 3h12a3 3 0 003-3V7.5a3 3 0 00-3-3z'
        stroke='#151515'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default CalendarIcon;
