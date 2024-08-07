import Image from "next/image";
import "./qna.css";
import firstHome from "@/../public/first-home.webp";
import onedayMortgage from "@/../public/one-day-mortgage.webp";
import betterHeloc from "@/../public/better-heloc.webp";
import insurance from "@/../public/insurance.webp";

interface QNAS {
  image: any;
  heading: string;
  content: string;
}

const qnas: Record<string, QNAS> = {
  firstHome: {
    image: firstHome,
    heading: "Buying your first home with Better",
    content: "",
  },
  onedayMortgage: {
    image: onedayMortgage,
    heading: "One Day Mortgage",
    content:
      "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
  },
  betterHeloc: {
    image: betterHeloc,
    heading: "Better HELOC",
    content:
      "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
  },
  insurance: {
    image: insurance,
    heading: "Insurance",
    content: "",
  },
};

const QNA: React.FC = () => {
  return (
    <div className="">
      <div className="qnaMain">
        <h1 className="qnaHeading">Got questions?</h1>
        <div className="qnaSubheading">
          <h1>We&apos;ve got answers</h1>
          <div className="qnaSelector">
            <button className="button">Our products</button>
            <button className="button">Calculators</button>
            <button className="button">Guides & FAQs</button>
          </div>
        </div>
        <div className="gridContainer">
          {Object.values(qnas).map((qna, index) => (
            <div key={index} className="card">
              <h2>{qna.heading}</h2>
              <p>{qna.content}</p>
              <div className="arrow">&rarr;</div>
              <Image
                src={qna.image}
                alt={qna.heading}
                className="image"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default QNA;
