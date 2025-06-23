import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: {label:string; href:string}[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: [{ label: "Home", href: "/" },
      { label: "Services", href: "/#services-section" },
      { label: "About", href: "/#aboutus-section" },
      { label: "Contact", href: "/#contact-section" },],
  },
  {
    id: 2,
    section: "Services",
    link: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Desktop App Development", href: "/services/desktop-app-development" },
      { label: "E-Commerce site Management", href: "/services/ecommerce-management" },
     ],
  },
//   {
//     id: 3,
//     section: "Blogs",
//     link: ["", "", ""],
//   },
  {
    id: 4,
    section: "Others",
    link: [{ label: "Blogs", href: "/blog-section" },
      { label: "Testimonials", href: "/#testimonial-section" },
      { label: "FAQ", href: "/faq-section" },],
  },
];

const footer = () => {
  return (
    <div className="bg-bgblue -mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-4">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8 px-4 ">
          {/* COLUMN-1 */}

          <div className="col-span-3 ">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">
              {" "}
              TechYatra
            </h3>
            <div className="flex gap-4">
              <div className="footer-icons">
                <Link href="https://facebook.com">
                  <Image
                    src={"/images/footer/vec.svg"}
                    alt="facebook"
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://twitter.com">
                  <Image
                    src={"/images/footer/twitter.svg"}
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://instagram.com">
                  <Image
                    src={"/images/footer/instagram.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-3  ">
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((item, index) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={item.href}
                      className="text-white text-lg font-normal mb-6 space-links"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8 ">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2025 - All Rights Reserved by{" "}
                <Link href="https://techyatra.com/" target="_blank">
                  {" "}
                  TechYatra.com
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/PrivacyPolicy"
                 className="text-offwhite pr-6">Privacy policy
              </Link>
              <Link href="/TermsAndConditions"
                 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
