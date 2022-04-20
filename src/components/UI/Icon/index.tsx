import React from 'react';

const Icons: {
  [key: string]: string;
} = {
  email:
    'M13.334 2a2 2 0 0 1 1.995 1.851l.005.149v8a2 2 0 0 1-1.851 1.995l-.149.005H2.667a2 2 0 0 1-1.995-1.851L.667 12V4a2 2 0 0 1 1.851-1.995L2.667 2h10.667zm0 1.333H2.667C2.299 3.333 2 3.632 2 4v8c0 .368.298.667.667.667h10.667c.368 0 .667-.298.667-.667V4c0-.368-.298-.667-.667-.667zm-.821 1.573c.236.283.198.703-.085.939L9.281 8.468a2 2 0 0 1-2.561 0L3.574 5.845c-.283-.236-.321-.656-.085-.939s.656-.321.939-.085l3.146 2.622c.247.206.606.206.854 0l3.146-2.622c.283-.236.703-.197.939.085z',
  comment:
    'M8 1.413c1.643 0 3.124.162 4.203.326 1.127.171 2.019.997 2.213 2.12a17.13 17.13 0 0 1 .25 2.887 17.13 17.13 0 0 1-.25 2.887c-.193 1.123-1.086 1.949-2.213 2.12a28.6 28.6 0 0 1-3.787.323l-4.077 2.409a.67.67 0 0 1-1.006-.574v-2.269c-.902-.3-1.584-1.045-1.75-2.009-.135-.783-.25-1.777-.25-2.887s.115-2.104.25-2.887c.193-1.123 1.086-1.949 2.213-2.12 1.08-.164 2.561-.326 4.203-.326zm0 1.333a27.01 27.01 0 0 0-4.003.311c-.596.091-1.01.506-1.099 1.028a15.8 15.8 0 0 0-.231 2.661 15.8 15.8 0 0 0 .231 2.661c.078.453.395.817.856.97l.913.303v2.063l3.375-1.994.353-.006a27.26 27.26 0 0 0 3.609-.308c.596-.091 1.01-.506 1.099-1.028.125-.724.231-1.641.231-2.661s-.106-1.937-.231-2.661c-.09-.522-.504-.938-1.099-1.028A27.01 27.01 0 0 0 8 2.746zm-.667 4.667c.368 0 .667.298.667.667s-.298.667-.667.667h0-2.667C4.298 8.746 4 8.448 4 8.08s.298-.667.667-.667h0zm4-2.667c.368 0 .667.298.667.667s-.298.667-.667.667h0-6.667C4.298 6.08 4 5.781 4 5.413s.298-.667.667-.667h0z',
  'arrow-right':
    'M10.39 3.153c.464-.428 1.187-.399 1.615.065l3.692 4c.404.438.404 1.113 0 1.55l-3.692 4c-.428.464-1.151.493-1.615.065s-.493-1.151-.065-1.615l1.922-2.082H1.143C.512 9.136 0 8.624 0 7.993S.512 6.85 1.143 6.85h11.104l-1.922-2.082c-.428-.464-.399-1.187.065-1.615z',
  'arrow-right-empty':
    'M5.551 15.665l-.1.089c-.449.355-1.102.326-1.517-.089-.446-.446-.446-1.17 0-1.616h0l6.048-6.05-6.048-6.048-.089-.1C3.491 1.403 3.52.749 3.935.335c.446-.446 1.17-.446 1.616 0h0l6.857 6.857.089.1c.355.449.326 1.102-.089 1.517h0l-6.857 6.857z',
  'arrow-down':
    'M12.833 10.39c.428.464.399 1.187-.065 1.615l-4 3.692c-.438.404-1.113.404-1.55 0l-4-3.692c-.464-.428-.493-1.151-.065-1.615s1.151-.493 1.615-.065l2.082 1.922V1.143C6.85.512 7.362 0 7.993 0s1.143.512 1.143 1.143v11.104l2.082-1.922c.464-.428 1.187-.399 1.615.065z',
  'arrow-prev':
    'M5.61 13.697c-.464.428-1.187.399-1.615-.065l-3.692-4c-.404-.438-.404-1.113 0-1.55l3.692-4c.428-.464 1.151-.493 1.615-.065s.493 1.151.065 1.615L3.753 7.714h11.104c.631 0 1.143.512 1.143 1.143S15.488 10 14.857 10H3.753l1.922 2.082c.428.464.399 1.187-.065 1.615z',
  'arrow-next':
    'M10.39 3.303c.464-.428 1.187-.399 1.615.065l3.692 4c.404.438.404 1.113 0 1.55l-3.692 4c-.428.464-1.151.493-1.615.065s-.493-1.151-.065-1.615l1.922-2.082H1.143C.512 9.286 0 8.774 0 8.143S.512 7 1.143 7h11.104l-1.922-2.082c-.428-.464-.399-1.187.065-1.615z',
  'arrow-bottom':
    'M13.0053 6.29284L8.53031 10.7678C8.38966 10.9085 8.19889 10.9875 7.99998 10.9875C7.80107 10.9875 7.6103 10.9085 7.46965 10.7678L2.99469 6.29284L4.05535 5.23218L7.99998 9.17682L11.9446 5.23218L13.0053 6.29284Z',
};

const Icon = ({ name, size, classNames }: { name: string; size?: number; classNames?: string }) => {
  const sizeProp = size ? size : 24;
  const nameProp = name ? Icons[name] : name;

  return (
    <>
      <svg
        className={classNames}
        width={sizeProp}
        height={sizeProp}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
      >
        <path d={nameProp} />
      </svg>
    </>
  );
};

export default Icon;
