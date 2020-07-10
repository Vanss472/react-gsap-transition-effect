import React from 'react';

type BoxProps = {
  className?: string | undefined;
  children: React.ReactNode;
  bg?: string | undefined;
}

const Box: React.FunctionComponent<BoxProps> = ({ className, children, bg }: BoxProps) => (
  <section className={className} style={{ backgroundImage: bg }}>
    {children}
  </section>
);

export default Box;
