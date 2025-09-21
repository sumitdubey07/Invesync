import React, { useState } from "react";
import "./DisclaimerFooter.css";

export default function DisclaimerFooter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const footerData = [
    {
      title: "Share Market",
      links: [
        { text: "Top Gainers Stocks", url: "#" },
        { text: "Top Losers Stocks", url: "#" },
        { text: "52 Weeks High Stocks", url: "#" },
        { text: "52 Weeks Low Stocks", url: "#" },
        { text: "Tata Motors", url: "#" },
        { text: "IREDA", url: "#" },
        { text: "NHPC", url: "#" },
        { text: "State Bank of India", url: "#" },
        { text: "ITC", url: "#" },
        { text: "Adani Power", url: "#" },
        { text: "Wipro", url: "#" },
        { text: "CDSL", url: "#" },
        { text: "BSE", url: "#" },
        { text: "Cochin Shipyard", url: "#" },
        { text: "NTPC", url: "#" },
        { text: "SJVN", url: "#" },
      ],
    },
    {
      title: "Indices",
      links: [
        {
          text: "Nifty 50",
          url: "https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%2050",
        },
        {
          text: "Nifty Bank",
          url: "https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%20BANK",
        },
        {
          text: "Nifty Financial Services",
          url: "https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%20FINANCIAL%20SERVICES",
        },
        { text: "BSE Small Cap", url: "https://www.bseindia.com/" },
        {
          text: "Nifty Next 50",
          url: "https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%20NEXT%2050",
        },
        {
          text: "Nifty Midcap 100",
          url: "https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%20MIDCAP%20100",
        },
        { text: "BSE Sensex", url: "https://www.bseindia.com/" },
        {
          text: "India Vix",
          url: "https://www.nseindia.com/market-data/india-vix",
        },
        { text: "Gift Nifty", url: "https://www.giftcity.com/" },
      ],
    },
    {
      title: "F&O",
      links: [
        { text: "Stocks Feed", url: "#" },
        { text: "Suzlon Energy", url: "#" },
        { text: "Zomato (Eternal)", url: "#" },
        { text: "Yes Bank", url: "#" },
        { text: "Infosys", url: "#" },
        { text: "NBCC", url: "#" },
        { text: "IRCTC", url: "#" },
        { text: "Share Market Live Update", url: "#" },
      ],
    },
    {
      title: "Mutual Funds",
      links: [
        { text: "FII DII Activity", url: "#" },
        { text: "IRFC", url: "#" },
        { text: "Bharat Electronics", url: "#" },
        { text: "HDFC Bank", url: "#" },
        { text: "Vedanta", url: "#" },
        { text: "Reliance Power", url: "#" },
        { text: "Jaiprakash Power Ventures", url: "#" },
      ],
    },
    {
      title: "Gold Rates",
      links: [
        {
          text: "Gold Rate Today in Mumbai",
          url: "https://www.goodreturns.in/gold-rates/mumbai.html",
        },
        {
          text: "Gold Rate Today in Delhi",
          url: "https://www.goodreturns.in/gold-rates/delhi.html",
        },
        {
          text: "Gold Rate Today in Ahmedabad",
          url: "https://www.goodreturns.in/gold-rates/ahmedabad.html",
        },
        {
          text: "Gold Rate Today in Chennai",
          url: "https://www.goodreturns.in/gold-rates/chennai.html",
        },
        {
          text: "Gold Rate Today in Hyderabad",
          url: "https://www.goodreturns.in/gold-rates/hyderabad.html",
        },
        {
          text: "Gold Rate Today in Bangalore",
          url: "https://www.goodreturns.in/gold-rates/bangalore.html",
        },
      ],
    },
    {
      title: "Mutual Fund AMCs",
      links: [
        {
          text: "Angel One Mutual Fund",
          url: "https://www.angelone.in/mutual-funds",
        },
        { text: "SBI Mutual Funds", url: "https://www.sbimf.com/en-us" },
        { text: "Axis Mutual Funds", url: "https://www.axismf.com/" },
        { text: "HDFC Mutual Funds", url: "https://www.hdfcfund.com/" },
        {
          text: "ICICI Prudential Mutual Funds",
          url: "https://www.icicipruamc.com/",
        },
        {
          text: "Nippon India Mutual Funds",
          url: "https://mf.nipponindiaim.com/",
        },
      ],
    },
    {
      title: "Mutual Funds Categories",
      links: [
        {
          text: "ELSS Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/elss.html",
        },
        {
          text: "Liquid Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/liquid-fund.html",
        },
        {
          text: "Small Cap Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/small-cap-fund.html",
        },
        {
          text: "Arbitrage Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/arbitrage-fund.html",
        },
        {
          text: "Gilt Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/gilt-fund.html",
        },
        {
          text: "Mid Cap Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/mid-cap-fund.html",
        },
        {
          text: "Multi Cap Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/multi-cap-fund.html",
        },
        {
          text: "Large Cap Funds",
          url: "https://www.moneycontrol.com/mutual-funds/performance-tracker/returns/large-cap-fund.html",
        },
      ],
    },
  ];

  return (
    <footer className="disclaimer-footer">
      <div className="footer-columns">
        {footerData.map((section, index) => (
          <div className="section" key={index}>
            <div className="section-title" onClick={() => toggleSection(index)}>
              <h3>{section.title}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="disclaimer-text">
        <marquee>
          <h2>
            <strong>Disclaimer:</strong> Investments in securities market are
            subject to market risk, read all the related documents carefully
            before investing.
          </h2>
        </marquee>
        <p>
          We collect, retain, and use your contact information for legitimate
          business purposes only, to contact you and to provide you information
          & latest updates regarding our products & services.
        </p>
        <p>We do not sell or rent your contact information to third parties.</p>
        <p>
          By submitting the above-mentioned details, you are authorizing us to
          Call/SMS you even though you may be registered under DND. We shall
          Call/SMS you for a period of 12 months.
        </p>
      </div>
    </footer>
  );
}
