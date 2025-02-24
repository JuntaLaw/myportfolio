import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface PortfolioItemProps {
  title: string;
  videoUrl: string;
  children: React.ReactNode;
}

export function PortfolioItem({ title, videoUrl, children }: PortfolioItemProps) {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 overflow-hidden">
      <h3 className="text-xl font-semibold text-white p-6 pb-4">
        {title}
      </h3>
      <div className="px-6 pb-4">
        <div className="aspect-video w-full mb-4">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <Accordion type="single" collapsible className="border-t border-white/20 pt-4">
          <AccordionItem value="details" className="border-none">
            <AccordionTrigger className="text-white hover:text-pink-200">
              プロジェクト詳細
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-slate-50 space-y-4">
                {children}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
} 