import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="w-2/3 mx-auto">{children}</div>;
}
