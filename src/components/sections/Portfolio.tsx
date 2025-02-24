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

export function Portfolio() {
  return (
    <section id="portfolio" className="mb-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Portfolio Highlights</h2>
      <div className="max-w-3xl mx-auto space-y-8">

        {/* 0件目 */}
        <div className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 overflow-hidden">
          <h3 className="text-xl font-semibold text-white p-6 pb-4">
            新規事業案件 撮影＆編集
          </h3>
          <div className="px-6 pb-4">
            <div className="aspect-video w-full mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/test
              // "
                title="main video"
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
                    <p>ジーズアカデミーの卒業生仲間との新規構想事業案件。サンプル映像としての制作で、撮影・編集ともワンオペで行っている最新作例。</p>
                    <ul className="text-slate-50 mb-10 space-y-4">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">撮影機材</h4>
                          <p className="text-slate-50 mt-1">
                            メインカメラ：　Nikon Z6Ⅲ、レンズ：NIKKOR Z 24-120mm f/4 S
                            <br /> サブカメラ：　DJI Pocket 2 Creator Combo
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">編集ソフト</h4>
                          <p className="text-slate-50 mt-1">
                            DaVinci Resolve
                          </p>
                        </div>
                      </li>
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
                  <div className="text-slate-50 space-y-4">
                    <p>2022年4月から2024年9月まで、外資系大手EC企業でインハウスのビデオエディターを務めた。この部署では、日本での小売部門におけるマーケティングや広告のクリエィティブをインハウスで行っている。年に何度か開催される大型セールや、会員システムについてのTVコマーシャル、SNS向け広告などのクリエイティブがその業務。</p>
                    <p>具体的な職務範囲としては、TVコマーシャルや、そこからのカットダウンにより制作されるSNSショート動画広告や、交通機関のデジタルサイネージ広告のオフライン編集、およびポストプロダクション全般を、社内のクリエイティブディレクター、プロデューサー、マーケティング担当者、また外部プロダクションや外注デザイナー・CGアーティストなど、多数の利害関係者と連携して遂行。</p>
                    <ul className="text-slate-50 mb-10 space-y-4">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">編集ソフト</h4>
                          <p className="text-slate-50 mt-1">Adobe Premiere Pro, AfterEffects
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">制作期間</h4>
                          <p className="text-slate-50 mt-1">それぞれのキャンペーンごとに約３ヶ月
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">担当範囲</h4>
                          <p className="text-slate-50 mt-1">オフライン編集、ポストプロダクション
                          </p>
                        </div>
                      </li>
                    </ul>
                    <br />
                    <h4 className="">下記にそれぞれ、SNS向け正方形バージョン、縦型バージョン、大型デジタルサイネージバージョンの例を添付。</h4>
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
                title="本予告"
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
                    <p>2022年4月公開の劇場映画にて、制作会社の社員として制作進行を務めた。制作時期はちょうどコロナ禍の最中であり、度重なる撮影延期のため、当初より大幅に減少した厳しい予算状況の中、監督やプロデューサーとともに、クランクアップ後もポストプロダクション全般で進行管理やコーディネートに携わるなど、幅広い経験をした。ロードショー公開前の2月に開催された映画祭で先行上映されたのが初公開だったが、最後のDCP変換作業が終わり完パケたのはそのわずか数日前だった。あの時の「やり切った」という安堵感は今でも忘れられない。</p>
                    <ul className="text-slate-50 mb-10 space-y-4">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">編集ソフト</h4>
                          <p className="text-slate-50 mt-1">Adobe Premiere Pro（編集補助）, AfterEffects（VSX補助）
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">制作期間</h4>
                          <p className="text-slate-50 mt-1">約１年間
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
                        <div>
                          <h4 className="font-semibold text-white">担当範囲</h4>
                          <p className="text-slate-50 mt-1">プリプロ＆撮影期間の制作業務全般、予算管理、およびポストプロダクションコーディネート
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="aspect-video w-full mb-4">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/9t3170W1TJY?si=CnkN4QIC9QSiI6WN"
                        title="特報"
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
                  <div className="text-slate-50 space-y-4">
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
                  <div className="text-slate-50 space-y-4">
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
  )
}