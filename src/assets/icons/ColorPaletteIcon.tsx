import * as React from 'react';

function ColorPaletteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#prefix__clip0_21_23)'>
        <g filter='url(#prefix__filter0_d_21_23)'>
          <path
            d='M19.933 18.667h5.4A2.666 2.666 0 0128 21.333v4A2.666 2.666 0 0125.333 28H8.667'
            fill='#F04870'
          />
          <path
            d='M19.933 18.667h5.4A2.666 2.666 0 0128 21.333v4A2.666 2.666 0 0125.333 28H8.667'
            stroke='#fff'
            strokeWidth={1.333}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10.683 27.917l14.232-14.232a2.666 2.666 0 000-3.77l-2.828-2.828a2.666 2.666 0 00-3.771 0l-5.478 5.477'
            fill='#FFD167'
          />
          <path
            d='M10.683 27.917l14.232-14.232a2.666 2.666 0 000-3.77l-2.828-2.828a2.666 2.666 0 00-3.771 0l-5.478 5.477'
            stroke='#fff'
            strokeWidth={1.333}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.667 28A4.667 4.667 0 014 23.333V6.667A2.666 2.666 0 016.667 4h4a2.666 2.666 0 012.666 2.667v16.666A4.667 4.667 0 018.667 28z'
            fill='#05D7A0'
            stroke='#fff'
            strokeWidth={1.333}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <path d='M8.495 21.744a1.76 1.76 0 00-1.75 1.76 1.756 1.756 0 101.75-1.76z' fill='#fff' />
      </g>
      <defs>
        <clipPath id='prefix__clip0_21_23'>
          <path fill='#fff' d='M0 0h32v32H0z' />
        </clipPath>
        <filter
          id='prefix__filter0_d_21_23'
          x={-3.333}
          y={-3.333}
          width={38.667}
          height={38.667}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3.333} />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_21_23' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow_21_23' result='shape' />
        </filter>
      </defs>
    </svg>
  );
}

export default ColorPaletteIcon;
