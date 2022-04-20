import * as React from 'react';

function ArrowBgIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={78} height={35} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x={0.747}
        y={0.513}
        width={76.868}
        height={34}
        rx={17}
        fill='url(#prefix__paint0_linear_1_45)'
      />
      <path
        d='M57.09 17.5H21.266M49.145 9.561l7.95 7.952-7.95 7.951'
        stroke='#fff'
        strokeWidth={2.047}
        strokeLinejoin='round'
      />
      <defs>
        <linearGradient
          id='prefix__paint0_linear_1_45'
          x1={77.614}
          y1={17.513}
          x2={0.747}
          y2={17.513}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3EE3CB' />
          <stop offset={1} stopColor='#096353' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ArrowBgIcon;
