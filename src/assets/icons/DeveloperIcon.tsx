import * as React from 'react';

function DeveloperIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M25.874 25.875H6.125a2.468 2.468 0 01-2.468-2.47V8.596a2.468 2.468 0 012.468-2.47h19.75a2.468 2.468 0 012.468 2.47v14.81a2.468 2.468 0 01-2.469 2.47z'
        fill='#C9EAF7'
        stroke='#293861'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.766 17.234h4.937M8.594 11.063l2.469 2.468L8.594 16'
        stroke='#293861'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default DeveloperIcon;
