import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Welcome to the best experience of learning &nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Web3&nbsp;</h1>
      </div>

      <div className="flex gap-3">
        Connect your wallet to start this journey.
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            If you dont have a Metamask click <a target="_blank" href="https://metamask.io/">here</a> to download it.
          </span>
        </Snippet>
      </div>
    </section>
  );
}
