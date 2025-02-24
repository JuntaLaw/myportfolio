import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="text-center mt-0 mb-6">
      {/* Heroセクションの内容 */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">
        Junko Sato's Portfolio
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-white mb-4">
            映像撮影・編集・制作・ディレクションで<br />10年の経験を持つクリエイター
          </h2>
          <p className="text-xl text-slate-50 leading-relaxed">
            法科大学院出身の変わり種。学生時代から映画が好きで、映像の仕事に憧れ、結婚式のエンドロール撮影の副業をきっかけに映像業界へ転職。
            <br /><br />
            その後、ブライダル映像の撮影・編集から、企業PVや研修教材映像の撮影・編集・ディレクション、TVCMのプロダクションマネージャー、映画の制作進行、大手外資系企業のインハウスビデオエディターを経験し、フリーランスへ。
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-md">
            <img
              src="/placeholder.svg?height=256&width=256"
              alt="Junko Sato"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Link href="#portfolio">
        <Button className="bg-pink-500 hover:bg-pink-600 text-slate-50 font-bold">
          View My Work
        </Button>
      </Link>
    </section>
  )
}