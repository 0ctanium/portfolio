import { ModeToggle } from "@/components/theme-toggle";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FileUser, Github, Linkedin, Mails } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CardSections, CardSectionsItem } from "./card-section";
import { HeroTitle, Shake } from "./hero";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full fixed inset-0 h-screen -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
        />
      </div>
      <div className="w-full m-auto px-12">
        <div className="flex-1 items-center justify-center">
          <HeroTitle>
            {t.rich("title", {
              shake: (chunks) => <Shake>{chunks}</Shake>,
              title: (chunks) => (
                <div id="light">
                  <span className="sr-only">{chunks}</span>
                  <TextHoverEffect
                    text={chunks}
                    strokeWith={1}
                    textClass="text-7xl font-bold font-[helvetica]"
                  />
                </div>
              ),
            })}
          </HeroTitle>
        </div>
      </div>

      <CardSections>
        <a
          href="https://www.linkedin.com/in/benjaminlepas/"
          target="blank"
          rel="noopener noreferrer"
        >
          <CardSectionsItem
            title={t("cards.linkedin")}
            icon={<Linkedin />}
            effect={{
              containerClassName: "bg-[#333] dark:bg-white",
              colors: [
                [0, 119, 181],
                [0, 160, 220],
              ],
            }}
          />
        </a>

        <a
          href="https://github.com/0ctanium"
          target="blank"
          rel="noopener noreferrer"
        >
          <CardSectionsItem
            title={t("cards.github")}
            icon={<Github />}
            effect={{
              containerClassName: "bg-[#2b3137] dark:bg-white",
              colors: [
                [47, 187, 79],
                [13, 116, 231],
              ],
            }}
          />
        </a>

        <CardSectionsItem
          title={t("cards.contact")}
          icon={<Mails />}
          effect={{
            containerClassName: "bg-sky-600",
            colors: [[125, 211, 252]],
          }}
        />

        <a href="/resume.pdf" download>
          <CardSectionsItem
            title={t("cards.resume")}
            icon={<FileUser />}
            effect={{
              containerClassName: "bg-sky-600",
              colors: [[125, 211, 252]],
            }}
          />
        </a>
      </CardSections>

      <ModeToggle className="fixed bottom-4 right-4" />
    </div>
  );
}
