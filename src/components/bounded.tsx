import React from "react";
import clsx from "clsx";
import Header from "./header";
import Footer from "./footer";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <React.Fragment>
        <Comp ref={ref} className={clsx("md:p-8", className)} {...restProps}>
          <Header />
          {children}
          <Footer />
        </Comp>
      </React.Fragment>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
