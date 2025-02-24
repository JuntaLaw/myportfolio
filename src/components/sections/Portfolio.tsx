import { PortfolioItem } from "@/components/portfolio/PortfolioItem"

export function Portfolio() {
  return (
    <section id="portfolio" className="mb-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Portfolio Highlights</h2>
      <div className="max-w-3xl mx-auto space-y-8">

        {/* ポートフォリオ1件目 */}
        <PortfolioItem
          title="新規事業案件 撮影＆編集"
          videoUrl="https://www.youtube.com/embed/MxdqvZI623c?si=1r-YiutuWPKT4QiU"
        >
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
        </PortfolioItem>
        {/* ポートフォリオ1件目ここまで */}


        {/* ポートフォリオ2件目 */}
        <PortfolioItem
          title="TVCM、SNS広告、デジタルサイネージ広告など含む大型キャンペーン<br />
            オフライン編集およびポストプロダクション"
          videoUrl="https://www.youtube.com/embed/J38PQrN7oGM?si=powzUSf3ZfLOjvbM"
        >
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
            ></iframe></div>
        </PortfolioItem>
        {/* ポートフォリオ2件目ここまで */}

        {/* ポートフォリオ3件目 */}
        <PortfolioItem
          title="劇場公開映画 制作進行"
          videoUrl="https://www.youtube.com/embed/_L8CLaDMDfA?si=vezxZpkVPKtCtBox"
        >
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
        </PortfolioItem>
        {/* ポートフォリオ3件目ここまで */}

        {/* ポートフォリオ4件目 */}
        <PortfolioItem
          title="企業広報 編集＆ディレクション"
          videoUrl="https://www.youtube-nocookie.com/embed/Q1MCF-38Lmg?si=4sCto0I2_nssh9W6"
        >
          <p>大手航空会社の広報映像案件。一時期フリーランスで活動していた時期にプロジェクトに参画し、その後、ディレクター兼カメラマンとして正社員になった制作会社にて、少人数チームで撮影・制作した。撮影・編集・ディレクションを担当。</p>
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
                <p className="text-slate-50 mt-1">約1ヶ月
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">担当範囲</h4>
                <p className="text-slate-50 mt-1">ディレクション、撮影（Canon EOS 5D Mark IV & DJI Ronin-S）、編集
                </p>
              </div>
            </li>
          </ul>
          <p className="text-white/80 text-lg font-semibold mb-4">類似案件</p>
          <div className="aspect-video w-full mb-4">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rS2ePWjg6sU?si=1iKruJYPz-dwCyQQ"
              title="類似案件"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </PortfolioItem>
        {/* ポートフォリオ4件目ここまで */}

        {/* ポートフォリオ5件目 */}
        <PortfolioItem
          title="商品プロモーション映像 制作および編集"
          videoUrl="https://www.youtube.com/embed/hlezSipU9Kc?si=laUrAFKTqzA7MeSA"
        >
          <p>新商品のプロモーション映像。ポジションとしてはプロダクションマネージャー。撮影準備や撮影当日の制作全般から、撮影映像の編集までを担当した案件。</p>
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
                <p className="text-slate-50 mt-1">約2週間
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">担当範囲</h4>
                <p className="text-slate-50 mt-1">プリプロから撮影当日の制作、編集
                </p>
              </div>
            </li>
          </ul>
          <p className="text-white/80 text-lg font-semibold mb-4">類似案件</p>
          <div className="aspect-video w-full mb-4">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/p5zEDP5Y5qI?si=4Doau8qu_3dRrQK_"
              title="類似案件"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </PortfolioItem>
        {/* ポートフォリオ5件目ここまで */}

        {/* ポートフォリオ6件目 */}
        <PortfolioItem
          title="サービス告知映像 編集＆ディレクション"
          videoUrl="https://www.youtube-nocookie.com/embed/c_dwyevoZ2c?si=hkmgv-xu7CFFdVBE"
        >
          <p>新規サービスの告知プロモーション映像。撮影を伴わないごくごくシンプルなタイプで、ディレクションから入って編集までを担当した。</p>
          <ul className="text-slate-50 mb-10 space-y-4">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">編集ソフト</h4>
                <p className="text-slate-50 mt-1">Adobe AfterEffects
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">制作期間</h4>
                <p className="text-slate-50 mt-1">約1週間
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">担当範囲</h4>
                <p className="text-slate-50 mt-1">ディレクションおよび編集
                </p>
              </div>
            </li>
          </ul>
        </PortfolioItem>
        {/* ポートフォリオ6件目ここまで */}

      </div>
    </section>
  )
}