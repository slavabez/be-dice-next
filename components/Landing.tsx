import React from "react";
import Link from "next/link";

const Landing: React.FC = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Link href="/debug">
        <a>Debug page</a>
      </Link>
    </section>
  );
};

export default Landing;
