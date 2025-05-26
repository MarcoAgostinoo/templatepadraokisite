import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function FooTer() {
  return (
    <Footer container className="rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
            className="animate-on-scroll fade-in-up transition-all hover:scale-105"
          />
          <FooterLinkGroup className="animate-on-scroll fade-in-up">
            <FooterLink href="#" className="transition-all hover:scale-105">
              About
            </FooterLink>
            <FooterLink href="#" className="transition-all hover:scale-105">
              Privacy Policy
            </FooterLink>
            <FooterLink href="#" className="transition-all hover:scale-105">
              Licensing
            </FooterLink>
            <FooterLink href="#" className="transition-all hover:scale-105">
              Contact
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright
          href="#"
          by="Flowbite™"
          year={2022}
          className="animate-on-scroll fade-in-up transition-all hover:scale-105"
        />
      </div>
    </Footer>
  );
}
