const Footer = () => {
  return (
    <footer className="mt-[10rem] w-full h-[19rem] bg-primary text-white">
      <div className="container w-full h-full py-[2rem] flex flex-col justify-between items-center text-center">
        <ul className="list-none flex items-center gap-[5rem]">
          <li className="text-[3.8rem] text-white">
            <a href="https://facebook.com">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li className="text-[3.8rem] text-white">
            <a href="https://instagram.com">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li className="text-[3.8rem] text-white">
            <a href="https://x.com">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </li>
          <li className="text-[3.8rem] text-white">
            <a href="https://youtube.com">
              <i className="fa-brands fa-square-youtube"></i>
            </a>
          </li>
        </ul>
        <ul className="list-none flex items-center gap-[5rem] flex-wrap text-[1.4rem]">
          <li className="text-white underline hover:cursor-pointer">
            Về chúng tôi
          </li>
          <li className="text-white underline hover:cursor-pointer">
            Liên lạc với chúng tôi
          </li>
          <li className="text-white underline hover:cursor-pointer">
            Chính sách riêng tư
          </li>
          <li className="text-white underline hover:cursor-pointer">
            Chính sách bản quyền
          </li>
        </ul>
        <p className="text-[1.4rem]">
          Copyright © 2024 TVT PTE. LTD. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
