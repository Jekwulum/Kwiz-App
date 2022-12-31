export const ArrowCircleIcon = ({ classProps, showMenu, setShowMenu }) => (

  <div onClick={() => setShowMenu(!showMenu)}>

    <svg xmlns="http://www.w3.org/2000/svg"
      class={`icon icon-tabler icon-tabler-arrow-up-circle  -right-6 top-9 text-5x
      border-none rounded-full ${!showMenu ? 'rotate-90' : '-rotate-90'} ${classProps}`}
      width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#147d1b" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="8" y2="12" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="16" y1="12" x2="12" y2="8" />
    </svg>

  </div>
);

export const DashboardIcon = () => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-cust-light">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>

  </div>
);

export const FireIcon = ({ classProps }) => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-flame ${classProps}`}
      width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
    </svg>
  </div>
);

