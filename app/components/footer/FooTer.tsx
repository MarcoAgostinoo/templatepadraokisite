import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  ThemeProvider,
} from "flowbite-react";

export function FooTer() {
  return (
    <ThemeProvider>
      <Footer container className="rounded-none bg-white dark:bg-gray-800">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
              className="animate-on-scroll fade-in-up transition-all hover:scale-105 dark:text-white"
            />
            <FooterLinkGroup className="animate-on-scroll fade-in-up">
              <FooterLink href="#" className="transition-all hover:scale-105 dark:text-white dark:hover:text-gray-300">
                About
              </FooterLink>
              <FooterLink href="#" className="transition-all hover:scale-105 dark:text-white dark:hover:text-gray-300">
                Privacy Policy
              </FooterLink>
              <FooterLink href="#" className="transition-all hover:scale-105 dark:text-white dark:hover:text-gray-300">
                Licensing
              </FooterLink>
              <FooterLink href="#" className="transition-all hover:scale-105 dark:text-white dark:hover:text-gray-300">
                Contact
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider className="dark:border-gray-700" />
          <FooterCopyright
            href="#"
            by="Flowbite™"
            year={2022}
            className="animate-on-scroll fade-in-up transition-all hover:scale-105 dark:text-white"
          />
        </div>
      </Footer>
    </ThemeProvider>
  );
}
