import React from "react";

function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          src="/x-tudo-2.png"
          className="max-h-auto max-h-24 block mx-auto"
          alt="hamburguer"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">X-TUDO</h4>
      <p className="text-gray-500 text-sm">
        Pão, Hamburguer, ovo, bacon, calabresa.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Adicionar pedido R$22
      </button>
    </div>
  );
}

export default MenuItem;
