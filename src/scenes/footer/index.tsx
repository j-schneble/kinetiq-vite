import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-16">
      <div className="justify-content mx-auto w-5/6 gap-8 md:flex">
        <div className="mt-3 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />

          <p>© KINETIQ All Rights Reserved.</p>
        </div>
<div className='flex items-center justify-evenly'>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
