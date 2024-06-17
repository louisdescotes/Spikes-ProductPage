import React from "react";
function menu() {
  return (
    <nav className="flex justify-center items-center h-full label-small font-poppins">
      <div className="absolute left-10">
        <svg
          width="68"
          height="26"
          viewBox="0 0 68 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.34 3.46C5.68 2.72 7.23 2.35 8.99 2.35C10.59 2.35 12.13 2.66 13.61 3.28L14.09 3.46L13.1 5.77L12.65 5.62C11.85 5.32 11.18 5.14 10.64 5.08C10.1 5 9.53 4.96 8.93 4.96C7.77 4.96 6.75 5.22 5.87 5.74C5.01 6.24 4.35 6.93 3.89 7.81C3.43 8.69 3.2 9.66 3.2 10.72C3.2 12.48 3.74 13.9 4.82 14.98C5.92 16.04 7.43 16.57 9.35 16.57C10.33 16.57 11.52 16.31 12.92 15.79L13.34 15.61L14.3 17.98L13.88 18.16C12.92 18.54 12.05 18.82 11.27 19C10.49 19.18 9.68 19.27 8.84 19.27C7.08 19.27 5.54 18.89 4.22 18.13C2.92 17.37 1.92 16.34 1.22 15.04C0.54 13.74 0.2 12.31 0.2 10.75C0.2 9.15 0.56 7.72 1.28 6.46C2 5.18 3.02 4.18 4.34 3.46ZM25.1956 18.52C24.2956 19.02 23.2556 19.27 22.0756 19.27C20.8956 19.27 19.8556 19.02 18.9556 18.52C18.0756 18 17.3856 17.29 16.8856 16.39C16.4056 15.49 16.1656 14.46 16.1656 13.3C16.1656 11.44 16.7056 9.98 17.7856 8.92C18.8656 7.84 20.3056 7.3 22.1056 7.3C23.9056 7.3 25.3356 7.84 26.3956 8.92C27.4756 10 28.0156 11.45 28.0156 13.27C28.0156 14.45 27.7656 15.49 27.2656 16.39C26.7856 17.29 26.0956 18 25.1956 18.52ZM24.1756 10.54C23.6156 9.88 22.9156 9.55 22.0756 9.55C21.2556 9.55 20.5556 9.88 19.9756 10.54C19.4156 11.2 19.1356 12.12 19.1356 13.3C19.1356 14.46 19.4156 15.37 19.9756 16.03C20.5356 16.67 21.2356 16.99 22.0756 16.99C22.9556 16.99 23.6656 16.67 24.2056 16.03C24.7656 15.39 25.0456 14.48 25.0456 13.3C25.0456 12.1 24.7556 11.18 24.1756 10.54ZM29.8363 10V7.48H39.0462V9.01L33.6462 16.57H39.2562V19H29.8363V17.53L35.2062 10H29.8363ZM45.2225 19.09L40.0625 7.48H43.3325L46.7825 16.33L49.8725 7.48H52.8725L45.8225 25.18H42.6125L45.2225 19.09ZM67.0672 4.42C67.3872 5.16 67.5472 5.97 67.5472 6.85C67.5472 7.75 67.3872 8.57 67.0672 9.31C66.7672 10.05 66.3272 10.69 65.7472 11.23C65.1872 11.77 64.5372 12.18 63.7972 12.46C63.0572 12.74 62.2572 12.88 61.3972 12.88C60.5172 12.88 59.6972 12.74 58.9372 12.46C58.1972 12.18 57.5572 11.77 57.0172 11.23C56.4372 10.69 55.9872 10.05 55.6672 9.31C55.3672 8.57 55.2172 7.75 55.2172 6.85C55.2172 5.97 55.3672 5.16 55.6672 4.42C55.9872 3.68 56.4372 3.03 57.0172 2.47C57.5572 1.95 58.1972 1.55 58.9372 1.27C59.6972 0.990001 60.5172 0.850001 61.3972 0.850001C62.2572 0.850001 63.0572 0.990001 63.7972 1.27C64.5372 1.55 65.1872 1.95 65.7472 2.47C66.3272 3.03 66.7672 3.68 67.0672 4.42ZM64.9072 10.39C65.7872 9.53 66.2272 8.35 66.2272 6.85C66.2272 5.41 65.7772 4.24 64.8772 3.34C64.0172 2.52 62.8572 2.11 61.3972 2.11C59.9372 2.11 58.7772 2.52 57.9172 3.34C57.0172 4.24 56.5672 5.41 56.5672 6.85C56.5672 8.35 57.0072 9.53 57.8872 10.39C58.7672 11.23 59.9372 11.65 61.3972 11.65C62.8572 11.65 64.0272 11.23 64.9072 10.39ZM63.2872 4.15C63.6872 4.51 63.8872 4.98 63.8872 5.56C63.8872 6.44 63.4672 7.04 62.6272 7.36L63.9172 10H62.7472L61.6072 7.57H60.2872V10H59.2072V3.61H61.7572C62.3772 3.61 62.8872 3.79 63.2872 4.15ZM62.4472 6.43C62.7272 6.25 62.8672 5.97 62.8672 5.59C62.8672 5.29 62.7672 5.05 62.5672 4.87C62.3672 4.69 62.0872 4.6 61.7272 4.6H60.2872V6.7H61.4272C61.8272 6.7 62.1672 6.61 62.4472 6.43Z"
            fill="#17183B"
          />
        </svg>
      </div>
      <div className=" gap-10 hidden lg:flex">
        <a className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow" href="">SHOP</a>
        <a className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow" href="">COLLECTIVE</a>
        <a className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow" href="">DESIGNERS</a>
        <a className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow" href="">ABOUT US</a>
        <a className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow" href="">CONTACT</a>
      </div>
      <div className="flex items-center gap-5 sm:gap-10  h-full absolute right-10">
        <svg className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 6H17"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 18H16"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.9999 21L16.6499 16.65"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="relative border-l h-full"></div>
        <svg className="transform transition-transform duration-300 hover:scale-110 hover:animate-grow cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 22C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22Z"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 22C3.44772 22 3 21.5523 3 21C3 20.4477 3.44772 20 4 20C4.55228 20 5 20.4477 5 21C5 21.5523 4.55228 22 4 22Z"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23 1H19L16.32 14.39C16.2286 14.8504 15.9781 15.264 15.6125 15.5583C15.2468 15.8526 14.7893 16.009 14.32 16H4.6C4.1307 16.009 3.67318 15.8526 3.30754 15.5583C2.94191 15.264 2.69145 14.8504 2.6 14.39L1 6H18"
            stroke="#17183B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
}

export default menu;
