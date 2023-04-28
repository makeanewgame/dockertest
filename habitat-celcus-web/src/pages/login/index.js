import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useIntl } from "react-intl";

export default function Login() {
  //const { locales } = useRouter();
  const router = useRouter();

  const intl = useIntl();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginFailed, setLoginFailed] = useState(false);

  const sendForm = async (event) => {
    event.preventDefault();
    if (username && password) {
      const loginResult = await signIn("credentials", {
        redirect: false,
        email: username,
        password: password,
        callbackUrl: `/panel`,
      });

      if (loginResult.ok) {
        setLoginFailed(false);
        router.push(loginResult.url);
      } else {
        setLoginFailed(true);
      }
    }
  };

  return (
    <section>
      <h1>{intl.formatMessage({ id: "page.login.title" })}</h1>
      <form>
        <h2>Login</h2>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <label htmlFor="floatingInput">Kullanıcı Adı</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label htmlFor="floatingPassword">Şifre</label>
        </div>
        {loginFailed && (
          <div className="">
            Kullanıcı adı yada şifreniz hatalı... <br />
            Giriş bilgilerinizi kontrol edip tekrar deneyiniz.
          </div>
        )}
        <button
          className="btn btn-primary w-100 mt-4"
          onClick={(event) => sendForm(event)}
        >
          Giriş Yap
        </button>
      </form>
    </section>
  );
}
