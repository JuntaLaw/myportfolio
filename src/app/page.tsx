import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Code, Mail, MessageSquare, Phone, Video, Sticker, BicepsFlexed, SquareArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-purple-500 to-rose-500">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            佐藤 淳子
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#profile" className="text-white hover:text-pink-200 transition-colors">
              自己紹介
            </Link>
            <Link href="#portfolio" className="text-white hover:text-pink-200 transition-colors">
              ポートフォリオ
            </Link>
          </nav>
          <Link href="#contact">
            <Button variant="outline" className="bg-slate-600/20 text-white border-white/30 hover:bg-white/30">
              Contact
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">
            Junko Sato's Portfolio
          </h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                映像撮影・編集・制作・ディレクションで<br />10年の経験を持つクリエイター
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
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
            <Button className="bg-pink-500 hover:bg-pink-600 text-slate-100 font-bold">
              View My Work
            </Button>
          </Link>
        </section>

        <section id="profile" className="mt-20 mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">自己紹介</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg border border-white/30">
              <div className="flex items-center gap-3 mb-4">
                <Sticker className="w-12 h-12 text-pink-300" />
                <h3 className="text-2xl font-semibold text-white">略歴</h3>
              </div>
              <p className="text-white/90 mb-10">
                早稲田大学政治経済学部経済学科卒業後、早稲田大学法学部卒業（学士入学）。
                <br />
                中央大学法科大学院法務研究科修了（第一種特別給付奨学生、学費全額免除）。
                <br /><br />
                家族の強い意向もあり、一度は法学を学んだものの、大学院修了後は法曹の道に進まず、2015年より、本来やりたかった映像クリエイターの仕事にチャレンジ。遠回りでも夢を叶えたという経験を持つ。
                <br /><br />
                詳しい職歴については こちらを
              </p>
              <div className="flex items-center gap-3 mb-4">
                <BicepsFlexed className="w-12 h-12 text-pink-300" />
                <h3 className="text-2xl font-semibold text-white">私の強み</h3>
              </div>
              <p className="text-white/90">
                常に新しいチャレンジをし、最短の過程で習得し、仕事にしていくこと。
                <br /><br />
                最近はテック系スタートアップに関心を持ち、ジーズアカデミーでプログラミングを学び、卒業制作でデモディに登壇。
                <br /><br />
                卒業後はジーズ発スタートアップでRobloxゲームの開発にも携わり、大手IP系のエクスペリエンスでUIデザインなども手掛けている。
                <br /><br />
                なお、こちらのポートフォリオサイトも、Next.js / TypeScriptで自作し、Vercelでデプロイしている。
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/20 p-6 rounded-lg border border-white/30">
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-12 h-12 text-blue-300" />
                <h3 className="text-2xl font-semibold text-white">スキルと経験</h3>
              </div>
              <ul className="text-white/90 mb-10 space-y-4">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-white">撮影</h4>
                    <p className="text-white/90 mt-1">一眼レフやミラーレス、小型シネマカメラを用いた、シネマティックかつ機動性の高い撮影を得意とする。これまでの使用機種は、Canon EOSシリーズ、Canon C100 / C200、Sony αシリーズ、Blackmagic Pocket Cinema Cameraシリーズなど。現在の所有機種は、Nikon Z6Ⅲ。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-white">編集ソフト</h4>
                    <p className="text-white/90 mt-1">Adobe Premiere Pro, After Effects, DaVinci Resolveを使用。現在は使用していないが、 EDIUSも経験あり。また、Adobe Illustrator, Photoshopでの2Dデザインや、それをもとにした2Dアニメーションの制作も可能。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-white">編集スキル</h4>
                    <p className="text-white/90 mt-1">ブライダルのエンドロール即編集や記録ビデオの編集、大手航空会社の社内研修教材の編集、企業広報ビデオや商品プロモーションビデオの編集、TVCMのオフライン編集、SNS向け広告映像の編集など、短尺から長尺まで、様々な業態・形態の編集経験があり、実写の編集やグレーディングから、モーショングラフィックスまで対応可能。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-white">制作・ディレクション</h4>
                    <p className="text-white/90 mt-1">企業広報ビデオや商品プロモーションビデオでは、撮影・編集のみならず、企画・制作・ディレクションも含めて少人数チームで一気通貫で対応してきた経験あり。また、ナショナルクライアントCMのプロダクションマネージャーや、劇場公開映画の制作進行も経験。</p>
                  </div>
                </li>
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-12 h-12 text-blue-300" />
                <h3 className="text-2xl font-semibold text-white">その他のスキル</h3>
              </div>
              <ul className="text-white/90 mb-10 space-y-4">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-white">ゲーム開発・UIデザイン</h4>
                    <p className="text-white/90 mt-1">ROBLOXゲームの開発プログラミング（使用言語: Lua）や、ゲーム内のUIデザイン、アイコンやゲーム内アイテムなどの2Dデザイン、演出高価のデザインなども実績あり。</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </section>

        <section id="portfolio" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Portfolio Highlights</h2>
          <div className="max-w-3xl mx-auto space-y-8">

            {/* 0件目 */}
            <div className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 overflow-hidden">
              <h3 className="text-xl font-semibold text-white p-6 pb-4">
                商品プロモーション映像 制作および編集
              </h3>
              <div className="px-6 pb-4">
                <div className="aspect-video w-full mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_L8CLaDMDfA?si=vezxZpkVPKtCtBox"
                    title="メインプロモーション"
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
                      <div className="text-white/90 space-y-4">
                        <p>2022年4月から2024年9月まで、外資系大手EC企業でインハウスのビデオエディターを務めた。この部署では、日本での小売部門におけるマーケティングや広告のクリエィティブをインハウスで行っている。年に何度か開催される大型セールや、会員システムについてのTVコマーシャル、SNS向け広告などのクリエイティブがその業務。</p>
                        <p>具体的な職務範囲としては、TVコマーシャルや、そこからのカットダウンにより制作されるSNSショート動画広告や、交通機関のデジタルサイネージ広告のオフライン編集、およびポストプロダクション全般を、社内のクリエイティブディレクター、プロデューサー、マーケティング担当者、また外部プロダクションや外注デザイナー・CGアーティストなど、多数の利害関係者と連携して遂行。</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>編集ソフト：Adobe Premiere Pro, AfterEffects</li>
                          <li>制作期間：それぞれのキャンペーンごとに約３ヶ月</li>
                          <li>担当範囲：オフライン編集、ポストプロダクション</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* 0件目ここまで  */}

            {/* 1件目 */}
            <div className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 overflow-hidden">
              <h3 className="text-xl font-semibold text-white p-6 pb-4">
                TVCM、SNS広告、デジタルサイネージ広告など含む大型キャンペーン<br />
                オフライン編集およびポストプロダクション
              </h3>
              <div className="px-6 pb-4">
                <div className="aspect-video w-full mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/J38PQrN7oGM?si=powzUSf3ZfLOjvbM"
                    title="メインプロモーション"
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
                      <div className="text-white/90 space-y-4">
                        <p>2022年4月から2024年9月まで、外資系大手EC企業でインハウスのビデオエディターを務めた。この部署では、日本での小売部門におけるマーケティングや広告のクリエィティブをインハウスで行っている。年に何度か開催される大型セールや、会員システムについてのTVコマーシャル、SNS向け広告などのクリエイティブがその業務。</p>
                        <p>具体的な職務範囲としては、TVコマーシャルや、そこからのカットダウンにより制作されるSNSショート動画広告や、交通機関のデジタルサイネージ広告のオフライン編集、およびポストプロダクション全般を、社内のクリエイティブディレクター、プロデューサー、マーケティング担当者、また外部プロダクションや外注デザイナー・CGアーティストなど、多数の利害関係者と連携して遂行。</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>編集ソフト：Adobe Premiere Pro, AfterEffects</li>
                          <li>制作期間：それぞれのキャンペーンごとに約３ヶ月</li>
                          <li>担当範囲：オフライン編集、ポストプロダクション</li>
                        </ul>
                        <p>下記にそれぞれ、SNS向け正方形バージョン、縦型バージョン、大型デジタルサイネージバージョンの例を添付。</p>
                        {/* Facebook動画 */}
                        <div className="aspect-video w-full">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/AmazonJP/videos/1002354721441760"
                            width="476"
                            height="476"
                            style={{ border: 'none', overflow: 'hidden' }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <div className="aspect-video w-full">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1266046774531360"
                            width="267"
                            height="476"
                            style={{ border: 'none', overflow: 'hidden' }}
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            className="rounded-lg"
                          ></iframe>
                        </div>
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/bYYSi4i9j10?si=pDwSpC5b_IwE5-oh"
                            title="デジタルサイネージバージョン"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          ></iframe>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* 2件目 */}
            <div className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 overflow-hidden">
              <h3 className="text-xl font-semibold text-white p-6 pb-4">
                劇場公開映画 制作進行
              </h3>
              <div className="px-6 pb-4">
                <div className="aspect-video w-full mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_L8CLaDMDfA?si=vezxZpkVPKtCtBox"
                    title="メインプロモーション"
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
                      <div className="text-white/90 space-y-4">
                        <p>2022年4月から2024年9月まで、外資系大手EC企業でインハウスのビデオエディターを務めた。この部署では、日本での小売部門におけるマーケティングや広告のクリエィティブをインハウスで行っている。年に何度か開催される大型セールや、会員システムについてのTVコマーシャル、SNS向け広告などのクリエイティブがその業務。</p>
                        <p>具体的な職務範囲としては、TVコマーシャルや、そこからのカットダウンにより制作されるSNSショート動画広告や、交通機関のデジタルサイネージ広告のオフライン編集、およびポストプロダクション全般を、社内のクリエイティブディレクター、プロデューサー、マーケティング担当者、また外部プロダクションや外注デザイナー・CGアーティストなど、多数の利害関係者と連携して遂行。</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>編集ソフト：Adobe Premiere Pro, AfterEffects</li>
                          <li>制作期間：それぞれのキャンペーンごとに約３ヶ月</li>
                          <li>担当範囲：オフライン編集、ポストプロダクション</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* 2件目ここまで  */}


            {/* ３件目 */}
            <div className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 overflow-hidden">
              <h3 className="text-xl font-semibold text-white p-6 pb-4">
                企業広報 編集＆ディレクション
              </h3>
              <div className="px-6 pb-4">
                <div className="aspect-video w-full mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_L8CLaDMDfA?si=vezxZpkVPKtCtBox"
                    title="メインプロモーション"
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
                      <div className="text-white/90 space-y-4">
                        <p>2022年4月から2024年9月まで、外資系大手EC企業でインハウスのビデオエディターを務めた。この部署では、日本での小売部門におけるマーケティングや広告のクリエィティブをインハウスで行っている。年に何度か開催される大型セールや、会員システムについてのTVコマーシャル、SNS向け広告などのクリエイティブがその業務。</p>
                        <p>具体的な職務範囲としては、TVコマーシャルや、そこからのカットダウンにより制作されるSNSショート動画広告や、交通機関のデジタルサイネージ広告のオフライン編集、およびポストプロダクション全般を、社内のクリエイティブディレクター、プロデューサー、マーケティング担当者、また外部プロダクションや外注デザイナー・CGアーティストなど、多数の利害関係者と連携して遂行。</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>編集ソフト：Adobe Premiere Pro, AfterEffects</li>
                          <li>制作期間：それぞれのキャンペーンごとに約３ヶ月</li>
                          <li>担当範囲：オフライン編集、ポストプロダクション</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* ３件目ここまで  */}

            {/* 4件目 */}
            <div className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 overflow-hidden">
              <h3 className="text-xl font-semibold text-white p-6 pb-4">
                商品プロモーション映像 制作および編集
              </h3>
              <div className="px-6 pb-4">
                <div className="aspect-video w-full mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_L8CLaDMDfA?si=vezxZpkVPKtCtBox"
                    title="メインプロモーション"
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
                      <div className="text-white/90 space-y-4">
                        <p>2022年4月から2024年9月まで、外資系大手EC企業でインハウスのビデオエディターを務めた。この部署では、日本での小売部門におけるマーケティングや広告のクリエィティブをインハウスで行っている。年に何度か開催される大型セールや、会員システムについてのTVコマーシャル、SNS向け広告などのクリエイティブがその業務。</p>
                        <p>具体的な職務範囲としては、TVコマーシャルや、そこからのカットダウンにより制作されるSNSショート動画広告や、交通機関のデジタルサイネージ広告のオフライン編集、およびポストプロダクション全般を、社内のクリエイティブディレクター、プロデューサー、マーケティング担当者、また外部プロダクションや外注デザイナー・CGアーティストなど、多数の利害関係者と連携して遂行。</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>編集ソフト：Adobe Premiere Pro, AfterEffects</li>
                          <li>制作期間：それぞれのキャンペーンごとに約３ヶ月</li>
                          <li>担当範囲：オフライン編集、ポストプロダクション</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* 4件目ここまで  */}
          </div>
        </section>

        <section id="contact" className="backdrop-blur-md bg-white/20 p-8 rounded-lg border border-white/30 scroll-mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-white/30 border-white/30 text-white placeholder-white/70" />
                <Input placeholder="Your Email" type="email" className="bg-white/30 border-white/30 text-white placeholder-white/70" />
                <Textarea placeholder="Your Message" className="bg-white/30 border-white/30 text-white placeholder-white/70" rows={4} />
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Send Message</Button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-pink-300" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-pink-300" />
                <span className="text-white">hello@creativevision.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-pink-300" />
                <span className="text-white">@creativevision</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 py-6">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} CreativeVision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}