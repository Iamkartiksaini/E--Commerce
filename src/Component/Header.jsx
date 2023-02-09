import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Header() {
  return (
    <header className=" flex justify-content-between  gap-5 p-4">
      <svg
        width="147"
        height="39"
        viewBox="0 0 147 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.448 30C39.288 30 39.152 29.944 39.04 29.832C38.928 29.72 38.872 29.584 38.872 29.424V13.8C38.872 13.624 38.92 13.48 39.016 13.368C39.128 13.256 39.272 13.2 39.448 13.2H49.864C50.04 13.2 50.184 13.256 50.296 13.368C50.408 13.48 50.464 13.624 50.464 13.8V15.48C50.464 15.656 50.408 15.8 50.296 15.912C50.184 16.008 50.04 16.056 49.864 16.056H42.16V20.616H49.384C49.56 20.616 49.704 20.672 49.816 20.784C49.928 20.896 49.984 21.04 49.984 21.216V22.896C49.984 23.072 49.928 23.216 49.816 23.328C49.704 23.424 49.56 23.472 49.384 23.472H42.16V29.424C42.16 29.6 42.104 29.744 41.992 29.856C41.88 29.952 41.736 30 41.56 30H39.448ZM57.4426 30.24C55.9706 30.24 54.8106 29.76 53.9626 28.8C53.1146 27.824 52.6906 26.504 52.6906 24.84V18.096C52.6906 17.936 52.7466 17.8 52.8586 17.688C52.9706 17.576 53.1066 17.52 53.2666 17.52H55.3786C55.5546 17.52 55.6906 17.576 55.7866 17.688C55.8986 17.784 55.9546 17.92 55.9546 18.096V24.696C55.9546 26.68 56.8266 27.672 58.5706 27.672C59.4026 27.672 60.0586 27.408 60.5386 26.88C61.0346 26.352 61.2826 25.624 61.2826 24.696V18.096C61.2826 17.936 61.3386 17.8 61.4506 17.688C61.5626 17.576 61.6986 17.52 61.8586 17.52H63.9706C64.1466 17.52 64.2826 17.576 64.3786 17.688C64.4906 17.784 64.5466 17.92 64.5466 18.096V29.424C64.5466 29.584 64.4906 29.72 64.3786 29.832C64.2826 29.944 64.1466 30 63.9706 30H62.0266C61.8666 30 61.7306 29.944 61.6186 29.832C61.5066 29.72 61.4506 29.584 61.4506 29.424V28.44C60.5546 29.64 59.2186 30.24 57.4426 30.24ZM68.2928 30C68.1328 30 67.9968 29.944 67.8848 29.832C67.7728 29.72 67.7168 29.584 67.7168 29.424V18.12C67.7168 17.96 67.7728 17.824 67.8848 17.712C67.9968 17.584 68.1328 17.52 68.2928 17.52H70.2368C70.4128 17.52 70.5568 17.576 70.6688 17.688C70.7808 17.8 70.8368 17.944 70.8368 18.12V19.104C71.2208 18.592 71.7008 18.2 72.2768 17.928C72.8688 17.656 73.5408 17.52 74.2928 17.52H75.2768C75.4528 17.52 75.5888 17.576 75.6848 17.688C75.7968 17.784 75.8528 17.92 75.8528 18.096V19.824C75.8528 19.984 75.7968 20.12 75.6848 20.232C75.5888 20.344 75.4528 20.4 75.2768 20.4H73.4048C72.6528 20.4 72.0608 20.616 71.6288 21.048C71.1968 21.48 70.9808 22.072 70.9808 22.824V29.424C70.9808 29.584 70.9248 29.72 70.8128 29.832C70.7008 29.944 70.5568 30 70.3808 30H68.2928ZM78.3006 30C78.1406 30 78.0046 29.944 77.8926 29.832C77.7806 29.72 77.7246 29.584 77.7246 29.424V18.096C77.7246 17.936 77.7806 17.8 77.8926 17.688C78.0046 17.576 78.1406 17.52 78.3006 17.52H80.2686C80.4286 17.52 80.5646 17.576 80.6766 17.688C80.7886 17.8 80.8446 17.936 80.8446 18.096V19.08C81.7886 17.88 83.1246 17.28 84.8526 17.28C86.3246 17.28 87.4926 17.768 88.3566 18.744C89.2206 19.704 89.6526 21.016 89.6526 22.68V29.424C89.6526 29.584 89.5966 29.72 89.4846 29.832C89.3886 29.944 89.2526 30 89.0766 30H86.9646C86.8046 30 86.6686 29.944 86.5566 29.832C86.4446 29.72 86.3886 29.584 86.3886 29.424V22.824C86.3886 21.88 86.1566 21.152 85.6926 20.64C85.2446 20.112 84.5886 19.848 83.7246 19.848C82.8766 19.848 82.2046 20.112 81.7086 20.64C81.2286 21.168 80.9886 21.896 80.9886 22.824V29.424C80.9886 29.584 80.9326 29.72 80.8206 29.832C80.7246 29.944 80.5886 30 80.4126 30H78.3006ZM93.1812 15.456C93.0212 15.456 92.8852 15.4 92.7732 15.288C92.6612 15.176 92.6052 15.04 92.6052 14.88V13.152C92.6052 12.992 92.6612 12.856 92.7732 12.744C92.8852 12.632 93.0212 12.576 93.1812 12.576H95.3652C95.5252 12.576 95.6612 12.632 95.7732 12.744C95.9012 12.856 95.9652 12.992 95.9652 13.152V14.88C95.9652 15.04 95.9092 15.176 95.7972 15.288C95.6852 15.4 95.5412 15.456 95.3652 15.456H93.1812ZM93.2772 30C93.1172 30 92.9812 29.944 92.8692 29.832C92.7572 29.72 92.7012 29.584 92.7012 29.424V18.096C92.7012 17.936 92.7572 17.8 92.8692 17.688C92.9812 17.576 93.1172 17.52 93.2772 17.52H95.2692C95.4452 17.52 95.5812 17.576 95.6772 17.688C95.7892 17.784 95.8452 17.92 95.8452 18.096V29.424C95.8452 29.584 95.7892 29.72 95.6772 29.832C95.5812 29.944 95.4452 30 95.2692 30H93.2772ZM99.6293 30C99.4693 30 99.3333 29.944 99.2213 29.832C99.1093 29.72 99.0533 29.584 99.0533 29.424V13.536C99.0533 13.36 99.1093 13.224 99.2213 13.128C99.3333 13.016 99.4693 12.96 99.6293 12.96H101.573C101.749 12.96 101.885 13.016 101.981 13.128C102.093 13.224 102.149 13.36 102.149 13.536V21.744L106.181 17.928C106.229 17.896 106.309 17.832 106.421 17.736C106.517 17.656 106.613 17.6 106.709 17.568C106.805 17.536 106.925 17.52 107.069 17.52H109.301C109.461 17.52 109.589 17.568 109.685 17.664C109.781 17.76 109.829 17.888 109.829 18.048C109.829 18.192 109.749 18.336 109.589 18.48L104.645 23.112L110.189 29.064C110.349 29.224 110.429 29.36 110.429 29.472C110.429 29.632 110.373 29.76 110.261 29.856C110.165 29.952 110.045 30 109.901 30H107.621C107.397 30 107.229 29.976 107.117 29.928C107.021 29.864 106.893 29.752 106.733 29.592L102.149 24.768V29.424C102.149 29.584 102.093 29.72 101.981 29.832C101.885 29.944 101.749 30 101.573 30H99.6293ZM112.705 15.456C112.545 15.456 112.409 15.4 112.297 15.288C112.185 15.176 112.129 15.04 112.129 14.88V13.152C112.129 12.992 112.185 12.856 112.297 12.744C112.409 12.632 112.545 12.576 112.705 12.576H114.889C115.049 12.576 115.185 12.632 115.297 12.744C115.425 12.856 115.489 12.992 115.489 13.152V14.88C115.489 15.04 115.433 15.176 115.321 15.288C115.209 15.4 115.065 15.456 114.889 15.456H112.705ZM112.801 30C112.641 30 112.505 29.944 112.393 29.832C112.281 29.72 112.225 29.584 112.225 29.424V18.096C112.225 17.936 112.281 17.8 112.393 17.688C112.505 17.576 112.641 17.52 112.801 17.52H114.793C114.969 17.52 115.105 17.576 115.201 17.688C115.313 17.784 115.369 17.92 115.369 18.096V29.424C115.369 29.584 115.313 29.72 115.201 29.832C115.105 29.944 114.969 30 114.793 30H112.801ZM119.129 30C118.969 30 118.833 29.944 118.721 29.832C118.609 29.72 118.553 29.584 118.553 29.424V18.096C118.553 17.936 118.609 17.8 118.721 17.688C118.833 17.576 118.969 17.52 119.129 17.52H121.097C121.257 17.52 121.393 17.576 121.505 17.688C121.617 17.8 121.673 17.936 121.673 18.096V19.08C122.617 17.88 123.953 17.28 125.681 17.28C127.153 17.28 128.321 17.768 129.185 18.744C130.049 19.704 130.481 21.016 130.481 22.68V29.424C130.481 29.584 130.425 29.72 130.313 29.832C130.217 29.944 130.081 30 129.905 30H127.793C127.633 30 127.497 29.944 127.385 29.832C127.273 29.72 127.217 29.584 127.217 29.424V22.824C127.217 21.88 126.985 21.152 126.521 20.64C126.073 20.112 125.417 19.848 124.553 19.848C123.705 19.848 123.033 20.112 122.537 20.64C122.057 21.168 121.817 21.896 121.817 22.824V29.424C121.817 29.584 121.761 29.72 121.649 29.832C121.553 29.944 121.417 30 121.241 30H119.129ZM139.169 35.28C137.745 35.28 136.593 35.04 135.713 34.56C134.833 34.096 134.209 33.56 133.841 32.952C133.473 32.344 133.289 31.824 133.289 31.392C133.289 31.248 133.345 31.12 133.457 31.008C133.585 30.896 133.721 30.84 133.865 30.84H135.953C136.097 30.84 136.217 30.872 136.313 30.936C136.425 31.016 136.513 31.152 136.577 31.344C136.737 31.776 136.993 32.136 137.345 32.424C137.713 32.728 138.281 32.88 139.049 32.88C140.009 32.88 140.713 32.664 141.161 32.232C141.625 31.8 141.857 31.056 141.857 30V28.368C140.977 29.408 139.745 29.928 138.161 29.928C136.497 29.928 135.241 29.416 134.393 28.392C133.561 27.368 133.113 25.992 133.049 24.264L133.025 23.616L133.049 22.968C133.113 21.272 133.569 19.904 134.417 18.864C135.265 17.808 136.513 17.28 138.161 17.28C139.009 17.28 139.753 17.44 140.393 17.76C141.033 18.08 141.569 18.52 142.001 19.08V18.12C142.001 17.944 142.057 17.8 142.169 17.688C142.281 17.576 142.417 17.52 142.577 17.52H144.521C144.681 17.52 144.817 17.584 144.929 17.712C145.041 17.824 145.097 17.96 145.097 18.12L145.121 29.688C145.121 31.464 144.625 32.84 143.633 33.816C142.641 34.792 141.153 35.28 139.169 35.28ZM139.049 27.384C139.961 27.384 140.641 27.096 141.089 26.52C141.553 25.944 141.809 25.24 141.857 24.408C141.873 24.28 141.881 24.016 141.881 23.616C141.881 23.232 141.873 22.976 141.857 22.848C141.809 22 141.553 21.288 141.089 20.712C140.641 20.136 139.961 19.848 139.049 19.848C137.321 19.848 136.409 20.912 136.313 23.04L136.289 23.616C136.289 24.752 136.489 25.664 136.889 26.352C137.305 27.04 138.025 27.384 139.049 27.384Z"
          fill="#555555"
        />
        <path
          d="M5.96954 6.94641C6.61481 6.94641 7.14111 6.42011 7.14111 5.77484C7.14111 5.12958 6.61481 4.60327 5.96954 4.60327C5.32428 4.60327 4.79797 5.12958 4.79797 5.77484C4.79797 6.42371 5.32428 6.94641 5.96954 6.94641Z"
          fill="#85B839"
        />
        <path
          d="M9.59605 24.7833V27.0327C11.4201 25.7098 13.5974 24.9852 15.8937 24.9852C18.1864 24.9852 20.3673 25.7098 22.1913 27.0327V24.7833C22.1913 22.8944 23.1394 21.2253 24.5777 20.2196C24.4552 17.8476 22.4941 15.9551 20.0933 15.9551H11.6941C9.29325 15.9551 7.33222 17.8476 7.20966 20.2196C8.64798 21.2253 9.59605 22.8944 9.59605 24.7833Z"
          fill="#85B839"
        />
        <path
          d="M22.8222 12.5305H8.91473V14.4267H22.8222V12.5305Z"
          fill="#85B839"
        />
        <path
          d="M22.1913 29.0262C20.4754 27.4185 18.2548 26.5281 15.8937 26.5281C13.5325 26.5281 11.3119 27.4185 9.59601 29.0262V31.081H22.1913V29.0262Z"
          fill="#85B839"
        />
        <path
          d="M25.551 6.94641C26.1963 6.94641 26.7226 6.42011 26.7226 5.77484C26.7226 5.12958 26.1963 4.60327 25.551 4.60327C24.9058 4.60327 24.3795 5.12958 24.3795 5.77484C24.3795 6.42371 24.9058 6.94641 25.551 6.94641Z"
          fill="#85B839"
        />
        <path
          d="M15.9117 3.77786C16.9535 3.77786 17.8006 2.93073 17.8006 1.88893C17.8006 0.847135 16.9535 0 15.9117 0C14.8699 0 14.0228 0.847135 14.0228 1.88893C14.0228 2.93073 14.8699 3.77786 15.9117 3.77786Z"
          fill="#85B839"
        />
        <path
          d="M27.7608 20.7566C25.5402 20.7566 23.7342 22.5626 23.7342 24.7832V32.6201H8.05319V24.7832C8.05319 22.5626 6.24717 20.7566 4.0266 20.7566C1.80602 20.7566 0 22.5626 0 24.7832C0 27.0038 1.80602 28.8098 4.0266 28.8098H4.79803V35.8789H26.9894V28.8098H27.7608C29.9814 28.8098 31.7874 27.0038 31.7874 24.7832C31.7874 22.5626 29.9814 20.7566 27.7608 20.7566ZM4.0266 26.0341C3.33447 26.0341 2.77572 25.4753 2.77572 24.7832C2.77572 24.0911 3.33807 23.5323 4.0266 23.5323C4.71872 23.5323 5.27747 24.0911 5.27747 24.7832C5.27747 25.4753 4.71872 26.0341 4.0266 26.0341ZM27.7608 26.0341C27.0687 26.0341 26.5099 25.4753 26.5099 24.7832C26.5099 24.0911 27.0687 23.5323 27.7608 23.5323C28.4529 23.5323 29.0117 24.0911 29.0117 24.7832C29.0117 25.4753 28.4529 26.0341 27.7608 26.0341Z"
          fill="#85B839"
        />
        <path
          d="M8.69839 10.9875H23.0348C23.8171 10.1404 24.383 9.14546 24.6966 8.0604C23.7702 8.54706 22.732 8.81742 21.665 8.81742C19.138 8.81742 16.9499 7.37549 15.8648 5.27026C14.7797 7.37188 12.588 8.81742 10.0646 8.81742C8.99398 8.81742 7.9594 8.55787 7.03656 8.07482C7.35739 9.15267 7.91974 10.144 8.69839 10.9875Z"
          fill="#85B839"
        />
        <path
          d="M9.59609 37.4219H8.05322V38.9647H9.59609V37.4219Z"
          fill="#85B839"
        />
        <path
          d="M23.7342 37.4219H22.1913V38.9647H23.7342V37.4219Z"
          fill="#85B839"
        />
      </svg>

      <div className="p-inputgroup">
        <InputText placeholder="Search" />
        <Button icon="pi pi-search" className="p-button-success" />
      </div>

      <div className="profile-section justify-content-center align-items-center flex gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 6H18C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H6V10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10V8H16V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z"
            fill="#555555"
          />
        </svg>
        <i className="pi pi-bell text-2xl"></i>
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6182 11.1284C16.1539 10.0084 17.1539 8.19581 17.1539 6.15384C17.1539 2.76061 14.3933 0 11.0001 0C7.60685 0 4.84624 2.76061 4.84624 6.15384C4.84624 8.19581 5.84622 10.0084 7.38194 11.1284C3.56444 12.5892 0.846252 16.2905 0.846252 20.6154C0.846252 22.4817 2.36458 24 4.23086 24H17.7693C19.6356 24 21.1539 22.4817 21.1539 20.6154C21.1539 16.2905 18.4357 12.5892 14.6182 11.1284ZM6.69241 6.15384C6.69241 3.77859 8.62483 1.84617 11.0001 1.84617C13.3753 1.84617 15.3078 3.77859 15.3078 6.15384C15.3078 8.52909 13.3753 10.4616 11.0001 10.4616C8.62483 10.4616 6.69241 8.52909 6.69241 6.15384ZM17.7693 22.1538H4.23086C3.38257 22.1538 2.69242 21.4637 2.69242 20.6153C2.69242 16.0344 6.41918 12.3076 11.0001 12.3076C15.5811 12.3076 19.3078 16.0344 19.3078 20.6153C19.3078 21.4637 18.6176 22.1538 17.7693 22.1538Z"
            fill="#555555"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
