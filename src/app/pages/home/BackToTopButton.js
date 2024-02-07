import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      console.log(winScroll)
      if (winScroll > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 54;
      document.querySelector('.progress-ring').style.strokeDashoffset = `calc(54 - ${scrolled})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ display: showButton ? 'block' : 'none' }}>
    <a
      id="qodef-back-to-top"
      href="#"
      className="qodef--predefined"
      style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      onClick={scrollToTop}
    >
      <span className="qodef-back-to-top-icon">
        <span className="qodef-back-to-top-icon-text">top</span>
        <span className="qodef-back-to-top-icon-svg">
          <svg
            className="qodef-svg--back-to-top"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="18px"
            height="18px"
            viewBox="0 0 18 18"
            style={{ enableBackground: 'new 0 0 18 18' }}
            xmlSpace="preserve"
          >
            <circle fill="none" stroke="currentColor" cx="9" cy="9" r="8.5" />
            <circle
              className="progress-ring"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              cx="9"
              cy="9"
              r="8.5"
              strokeDasharray="54"
              transform="rotate(-90 9 9)"
              style={{
                strokeDashoffset: 'calc(54 - (54 * window.scrollY) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))',
                transition: 'stroke-dashoffset 0.1s ease',
              }}
            />
            <circle fill="currentColor" stroke="none" cx="9" cy="9" r="1.5"/>
          </svg>
        </span>
      </span>
    </a>
    </div>
  );
};

export default BackToTopButton;