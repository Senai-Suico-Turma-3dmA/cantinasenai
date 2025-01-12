import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsShop } from "react-icons/bs";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const navigate = useNavigate();
  const { manipulaLogin, autenticado } = useContext(MainContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [tipoSenha, setTipoSenha] = useState("password");

  useEffect(() => {
    if (autenticado) {
      navigate("/compras");
    }
  }, [autenticado]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center h-60">
        <BsShop className="text-red-800" size={100} />
        <h1 className="text-gray-100 text-4xl my-3">Cantina SENAI</h1>
        <span className="text-gray-100 my-3">Faça login abaixo</span>
      </div>
      <form className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-row justify-start items-center bg-red-800 h-10 w-96 rounded">
          <MdEmail className="mx-3" size={25} />
          <input
            tabIndex={1}
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="placeholder:text-gray-100 h-full w-full bg-transparent focus:outline-none text-gray-100"
            type="email"
          />
        </div>
        <div className="flex flex-row justify-start items-center bg-red-800 h-10 w-96 rounded">
          <RiLockPasswordFill className="mx-3" size={25} />
          <input
            tabIndex={2}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className=" placeholder:text-gray-100 h-full w-full bg-transparent focus:outline-none text-gray-100"
            type={tipoSenha}
          />
          {tipoSenha === "password" ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setTipoSenha("text");
              }}
            >
              <MdVisibility className="mx-3" size={25} />
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                setTipoSenha("password");
              }}
            >
              <MdVisibilityOff className="mx-3" size={25} />
            </button>
          )}
        </div>
        <button
          tabIndex={3}
          onClick={(e) => manipulaLogin(e, email, senha)}
          className=" text-gray-900 w-96 bg-gray-100 h-10 rounded hover:scale-105 duration-500"
        >
          Entrar
        </button>
        <Link
          to="/esqueci-senha"
          className="text-red-800 mt-5 hover:text-red-500"
        >
          Esqueci minha senha
        </Link>
      </form>
    </div>
  );
}

export default Login;
