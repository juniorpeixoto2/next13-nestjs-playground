"use client";
import { NextResponse } from "next/server";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
// import { setCookie } from "cookies-next";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormLogin = (event: any, name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  let nextResponse = NextResponse.next();

  const handleForm = async (event: any) => {
    event.preventDefault();

    try {
      // const response = await fetch("http://localhost:3001/auth/login", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      // });
      // const json = await response.json();
      // if (response.status !== 201) throw new Error(json);
      // nextResponse.cookies.set("authorization", json);
      // return NextResponse.redirect(new URL("/new", request.url));
      // console.log(response, json);
      // router.push("/client");

      await login(formData);
    } catch (err: any) {
      setError(err.message);
    }

    console.log(formData);
  };

  return (
    <div>
      <div>Login</div>

      <div>
        <form onSubmit={handleForm} className="flex flex-col gap-2">
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              required
              value={formData.email}
              onChange={(e) => handleFormLogin(e, "email")}
            />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input
              type="text"
              required
              value={formData.password}
              onChange={(e) => handleFormLogin(e, "password")}
            />
          </div>
          <div>{error && <p>{error}</p>}</div>

          <div>
            <input type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </div>
  );
}
