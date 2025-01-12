import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import { Link, useNavigate } from "react-router-dom";

import { MdOutlineArrowBack } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";

function EsqueciSenha() {
  const navigate = useNavigate();
  const { autenticado, esqueciSenha } = useContext(MainContext);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (autenticado) {
      navigate("/compras");
    }
  }, [autenticado]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center h-40">
        <BsShop className="text-red-800" size={50} />
        <h1 className="text-gray-100 text-xl my-3">Cantina SENAI</h1>
      </div>
      <form className="flex flex-col justify-center items-center space-y-3 bg-white rounded p-4 ">
        <div className="w-full flex justify-start items-center">
          <Link className="mr-2" to="/">
            <MdOutlineArrowBack size={25} />
          </Link>
          <h1 className="text-lg font-bold text-black/80 mr-2">
            Recuperação de senha
          </h1>
        </div>
        <span className="text-black/90 my-3 text-ellipsis break w-96 text-justify">
          Digite seu email abaixo e enviaremos um link para mudar a senha
        </span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="placeholder:text-black/70 text-black/90 border-2 rounded border-gray-800 h-10 w-full p-2"
          type="email"
        />
        <button
          onClick={(e) => {
            setLoading(true);
            esqueciSenha(e, email)
              .finally(() => {
                setLoading(false);
              });
          }}
          className=" text-white w-96 bg-gray-400 h-10 rounded hover:scale-105 duration-500 flex justify-center items-center"
        >
          {loading ? (
            <VscLoading className="animate-spin text-white" size={30} />
          ) : (
            "Enviar Email"
          )}
        </button>
      </form>
    </div>
  );
}

export default EsqueciSenha;
