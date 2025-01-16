import { memo, useEffect, useRef } from "react";

function TradingViewWidget({ className, Btc_Data }) {
  const container = useRef();

  // Function to initialize the TradingView widget
  const initializeWidget = () => {
    if (!container.current) return;

    // Clear previous content to prevent duplicate widgets
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    // Dynamically set the symbol based on Btc_Data
    const tradingSymbol = `BITSTAMP:${Btc_Data.symbol.toUpperCase()}USD`;

    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${tradingSymbol}",
        "interval": "W",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "hide_top_toolbar": true,
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current.appendChild(script);
  };

  // Trigger widget initialization after server action or static delay
  useEffect(() => {
    if (!Btc_Data || !Btc_Data.symbol) return;

    // For static data, use a timeout to simulate delayed initialization
    const timeoutId = setTimeout(() => {
      initializeWidget();
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, [Btc_Data]);

  return (
    <div className={`tradingview-widget-container ${className}`} ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);

  

