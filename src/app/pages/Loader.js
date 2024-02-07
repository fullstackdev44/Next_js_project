const Loader = () => (
    <>
      <style jsx>{`
        /* preloader */
        .loader_bg {
          position: fixed;
          z-index: 999999;
          background: #fff;
          width: 100%;
          height: 100%;
        }
        .loader {
          border: 0 solid transparent;
          border-radius: 50%;
          width: 150px;
          height: 150px;
          position: absolute;
          top: calc(50vh - 75px);
          left: calc(50vw - 75px);
        }
        .loader:before,
        .loader:after {
          content: '';
          border: 1em solid black;
          border-radius: 50%;
          width: inherit;
          height: inherit;
          position: absolute;
          top: 0;
          left: 0;
          animation: loader 2s linear infinite;
          opacity: 0;
        }
        .loader:before {
          animation-delay: 0.5s;
        }
        @keyframes loader {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
      <div className="loader_bg">
        <div className="loader"></div>
      </div>
    </>
  );
  
  export default Loader;
  