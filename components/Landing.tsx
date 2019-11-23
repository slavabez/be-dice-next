import React from "react";
import Link from "next/link";

const Landing: React.FC = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Link href="/debug">Debug page</Link>
    </section>
  );
};

export default Landing;
