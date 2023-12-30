import { useRouter } from "next/router";
import { Balthazar } from "next/font/google";
import { useEffect } from "react";
import QRCode from "qrcode.react";
import copy from "clipboard-copy";

const copper = Balthazar({ subsets: ["latin"], weight: "400" });

interface CardProps {
  firstName?: string;
  lastName?: string;
  company?: string;
  position?: string;
  email?: string;
  phone?: string;
}

const formatText = (originalText: string = ""): JSX.Element => {
  const words = originalText.split(" ");

  return (
    <span className="mb-6">
      {words.map((word, index) => (
        <span key={index}>
          {/* Apply larger font size to the first letter of each word */}
          <span className="uppercase text-2xl">{word.charAt(0)}</span>
          {/* Apply regular font size to the rest of the word */}
          <span className="uppercase text-sm">{word.slice(1)}</span>
          {/* Add space between words */}
          {index < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
};

const Card: React.FC<CardProps> = () => {
  const router = useRouter();
  const {
    firstName = "Patrick",
    lastName = "Bateman",
    company = "Pierce & Pierce",
    position = "Vice President",
    email = "patrick@bateman.com",
    address = "358 Exchange Place, New York, N.Y. 100099",
    phone = "212 555 6342",
  } = router.query;

  const checkedFirstName = firstName || "Patrick";
  const checkedLastName = lastName || "Bateman";
  const checkedCompany = company || "Pierce & Pierce";
  const checkedPosition = position || "Vice President";
  const checkedEmail = email || "patrick@bateman.com";
  const checkedAddress = address || "358 Exchange Place, New York, N.Y. 100099";
  const checkedPhone = phone || "212 555 6342";

  const currentURL = typeof window !== "undefined" ? window.location.href : "";
  const cardURL = `${currentURL}`;

  useEffect(() => {
    copy(cardURL); // Copy the card URL to clipboard when the component mounts
  }, [cardURL]);

  return (
    <>
      <div
        id="parchment"
        className={`bg-white ${copper.className} shadow-md p-10 w-96 mx-auto mt-12 text-center relative`}
      >
        {/* Phone (Top Left) */}
        <p className="text-gray-600 absolute top-4 left-4">{checkedPhone}</p>
        {/* Company (Top Right) */}
        <p className="text-gray-600 absolute top-4 right-4">
          {formatText(checkedCompany as string)}
        </p>
        {/* Name (Center Top) */}
        <h1 className="uppercase text-2xl mt-12">
          {String(checkedFirstName)?.[0]}
          <span className="uppercase text-sm">
            {String(checkedFirstName)?.slice(1)}
          </span>{" "}
          {checkedLastName}
        </h1>
        {/* Position (Center Top) */}
        <h2 className="mb-8">{formatText(checkedPosition as string)}</h2>
        {/* Email (Center Bottom) */}
        <p className="text-gray-600 absolute text-xs bottom-0 left-0 right-0">
          {checkedAddress} {" | "} {checkedEmail}{" "}
        </p>
      </div>
      {/* QR Code */}
      <div className="mt-12">
        <QRCode value={currentURL} size={100} />
      </div>

      <div className="flex flex-col w-fit">
        {/* Button or link to download the QR code */}
        <button
          onClick={() => {
            const canvas = document.querySelector("canvas");
            const image = canvas
              ?.toDataURL("image/png")
              .replace("image/png", "image/octet-stream");
            const link = document.createElement("a");
            link.href = image || "";
            link.download = "business_card_qr_code.png";
            link.click();
          }}
          className="mt-4 p-2 bg-blue-500 text-white rounded font-sans"
        >
          Download QR Code
        </button>

        {/* Copy Link button */}
        <button
          onClick={() => {
            copy(cardURL); // Copy the card URL to clipboard on button click
          }}
          className="mt-4 p-2 bg-green-500 text-white rounded font-sans"
        >
          Copy Link
        </button>
      </div>
    </>
  );
};

export default Card;
