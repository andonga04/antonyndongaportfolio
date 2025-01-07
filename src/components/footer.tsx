import {  P } from "@/components/ui/typography";
import { Button } from "./ui/button";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <P className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Shadcn ui
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Antony Ndonga
            </a>
            .
          </P>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <P
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </P>
              </li>
            ))}
            <Button variant="outline" color="gray">subscribe</Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;