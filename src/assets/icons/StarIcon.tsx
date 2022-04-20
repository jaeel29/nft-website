import * as React from 'react';

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={78} height={78} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5.942 38.774H72.73'
        stroke='url(#prefix__paint0_linear_9_32)'
        strokeWidth={10}
        strokeLinecap='round'
      />
      <path
        d='M15.723 15.16L62.95 62.388'
        stroke='url(#prefix__paint1_linear_9_32)'
        strokeWidth={10}
        strokeLinecap='round'
      />
      <path
        d='M39.336 5.38v66.788'
        stroke='url(#prefix__paint2_linear_9_32)'
        strokeWidth={10}
        strokeLinecap='round'
      />
      <path
        d='M62.95 15.16L15.722 62.388'
        stroke='url(#prefix__paint3_linear_9_32)'
        strokeWidth={10}
        strokeLinecap='round'
      />
      <defs>
        <linearGradient
          id='prefix__paint0_linear_9_32'
          x1={5.942}
          y1={39.774}
          x2={72.73}
          y2={39.774}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFB77C' />
          <stop offset={1} stopColor='#FF5915' />
        </linearGradient>
        <linearGradient
          id='prefix__paint1_linear_9_32'
          x1={15.016}
          y1={15.868}
          x2={62.242}
          y2={63.094}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFB77C' />
          <stop offset={1} stopColor='#FF5915' />
        </linearGradient>
        <linearGradient
          id='prefix__paint2_linear_9_32'
          x1={38.336}
          y1={5.38}
          x2={38.336}
          y2={72.168}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFB77C' />
          <stop offset={1} stopColor='#FF5915' />
        </linearGradient>
        <linearGradient
          id='prefix__paint3_linear_9_32'
          x1={62.242}
          y1={14.454}
          x2={15.016}
          y2={61.68}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFB77C' />
          <stop offset={1} stopColor='#FF5915' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default StarIcon;
