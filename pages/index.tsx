import { Inter } from "next/font/google";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cardURL, setCardURL] = useState("");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const queryParams = Object.entries({
      firstName,
      lastName,
      company,
      position,
      address,
      phone,
      email,
    })
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    router.push(`/card?${queryParams}`);
  };

  return (
    <>
      <form className="flex flex-col mt-12" onSubmit={submitForm}>
        <p className="underline my-2">
          You can change these fields or leave them as is.
        </p>
        <label htmlFor="firstname">First Name</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Patrick"
          type="text"
          name="firstname"
          id="firstname"
          className="text-zinc-400 bg-transparent outline-none"
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Bateman"
          type="text"
          name="lastname"
          id="lastname"
          className="text-zinc-400 bg-transparent outline-none"
        />

        <label htmlFor="company">Company</label>
        <input
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Pierce & Pierce"
          type="text"
          name="company"
          id="company"
          className="text-zinc-400 bg-transparent outline-none"
        />

        <label htmlFor="position">Position</label>
        <input
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Vice President"
          type="text"
          name="position"
          id="position"
          className="text-zinc-400 bg-transparent outline-none"
        />

        <label htmlFor="address">Address</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          placeholder="358 Exchange Place, New York, N.Y. 100099"
          type="text"
          name="address"
          id="address"
          className="text-zinc-400 bg-transparent outline-none"
        />

        <label htmlFor="phone">Phone</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          placeholder="212 555 6342"
          type="tel"
          name="phone"
          id="phone"
          className="text-zinc-400 bg-transparent outline-none"
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="patrick@bateman.com"
          type="email"
          name="email"
          id="email"
          className="text-zinc-400 bg-transparent outline-none"
        />

        <button
          type="submit"
          className="max-w-fit my-4 p-4 rounded bg-stone-800"
        >
          Generate Business Card
        </button>
      </form>

      <h2 className="mt-10 font-bold text-xl">What is this?</h2>
      <p className="leading-loose text-stone-400">
        <a
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-300"
          href="https://www.youtube.com/watch?v=T4UQf7zb3Pk"
        >
          Context: https://www.youtube.com/watch?v=T4UQf7zb3Pk
        </a>
        <br />
        Welcome to the epitome of sophistication, where business cards transcend
        mundanity into the realm of Batemanesque brilliance. This is not just a
        business card generator; it's a pulsating vortex of corporate elegance
        that even Patrick Bateman would nod approvingly at.
        <br />
        In a world where Helvetica is more than just a font and subtle off-white
        coloring is a lifestyle choice, our Business Card Generator takes you on
        a journey through the refined corridors of Pierce & Pierce. Immerse
        yourself in the essence of{" "}
        <strong className="text-stone-200 whitespace-nowrap">
          {" "}
          VP-level charisma
        </strong>{" "}
        and let your business card scream success louder than a chainsaw in an
        abandoned building.
        <br />
        <strong className="text-stone-200">
          Unleash your inner Bateman.
        </strong>{" "}
        Generate a card that's as sharp as an axe, as crisp as a new stack of
        hundred-dollar bills, and as unforgettable as that business meeting you
        vaguely remember. This is not just a card; it's a status symbol, a
        testament to your unassailable position in the hierarchy of immaculate
        taste.
        <br />
        So, strap in, adjust your tie, and let the cardstock symphony begin.
        Because in this game of business, the only thing sharper than your card
        is your wit.
      </p>
    </>
  );
}
