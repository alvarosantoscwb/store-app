import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-8">
        <SectionHeaders
          subHeader="Não fique de fora"
          mainHeader="Ligue agora"
        />
        <div className="mt-8">
          <a className="text-4xl" href="tel:4199999-9999">
            (41) 99999-9999
          </a>
        </div>
      </section>
    </>
  );
}
