import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Tudo
          <br />
          é melhor
          <br />
          com <span className="text-primary">Hamburguer</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Um lanche é o que falta para fazer o seu dia mais completo
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex gap-2 items-center text-white px-8 py-2 rounded-full ">
            Faça seu pedido <FaAngleRight />
          </button>
          <button className="flex gap-2 items-center py-2 text-gray-600 font-semibold">
            Veja mais <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/hamburguer-img.jpg"
          alt="hamburguer"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Hero;
