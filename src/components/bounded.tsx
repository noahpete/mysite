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
      <div className="h-[100vh] relative">
        <Comp
          ref={ref}
          className={clsx(
            "md:p-8 min-h-[95vh] mx-auto max-w-[1200px]",
            className
          )}
          {...restProps}
        >
          <Header />
          {children}
        </Comp>
        <Footer />
      </div>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
