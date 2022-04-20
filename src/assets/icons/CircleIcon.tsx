import * as React from 'react';

function CircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={51} height={51} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle cx={25.971} cy={25.02} r={25} fill='url(#prefix__paint0_linear_1_41)' />
      <path
        d='M25.971 10.149l1.102 3.352A16.338 16.338 0 0037.49 23.917l3.352 1.102-3.352 1.103a16.338 16.338 0 00-10.417 10.416l-1.102 3.352-1.102-3.352a16.338 16.338 0 00-10.417-10.416L11.1 25.02l3.352-1.103A16.338 16.338 0 0024.87 13.501l1.102-3.352z'
        fill='#fff'
      />
      <defs>
        <linearGradient
          id='prefix__paint0_linear_1_41'
          x1={25.971}
          y1={0.02}
          x2={25.971}
          y2={50.02}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFB77C' />
          <stop offset={1} stopColor='#FF5915' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CircleIcon;
