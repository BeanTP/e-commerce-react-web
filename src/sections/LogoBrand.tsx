import logoVersace from "../assets/icon/logo-versace.svg"
import logoZara from "../assets/icon/logo-zara.svg"
import logoGucci from "../assets/icon/logo-gucci.svg"
import logoPrada from "../assets/icon/logo-prada.svg"
import logoCK from "../assets/icon/logo-ck.svg"

const LogoBrand = () => {
	return (
    <section className="bg-black w-full h-[122px]">
      <div className="flex items-center justify-between h-full px-25">
        <img src={logoVersace} alt="logo-versace" />

        <img src={logoZara} alt="logo-zara" />

        <img src={logoGucci} alt="logo-gucci" />

        <img src={logoPrada} alt="logo-prada" />

        <img src={logoCK} alt="logo-ck" />
      </div>
    </section>
  );
}

export default LogoBrand;