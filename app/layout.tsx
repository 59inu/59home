import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>메인 페이지 입니다</title>
      </head>
      <body>
        <nav>
          <Link href={"/posts"}>MAIN</Link>
          <Link href={"/posts"}>POSTS</Link>
          <Link href={"/portfolio"}>PORTFOLIO</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
