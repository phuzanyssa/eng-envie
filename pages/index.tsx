import Input from "@components/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <Input text={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
}
