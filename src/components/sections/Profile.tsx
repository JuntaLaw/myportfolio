import { Code, Sticker, BicepsFlexed } from "lucide-react"
import { ProfileBlock } from "@/components/profile/ProfileBlock"

export function Profile() {
  return (
    <section id="profile" className="mt-20 mb-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">自己紹介</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProfileBlock>
          <div className="flex items-center gap-3 mb-4">
            <Sticker className="w-12 h-12 text-pink-300" />
            <h3 className="text-2xl font-semibold text-white">略歴</h3>
          </div>
          <p className="text-slate-50 mb-10">
            早稲田大学政治経済学部経済学科卒業後、早稲田大学法学部卒業（学士入学）。
            <br />
            中央大学法科大学院法務研究科修了（第一種特別給付奨学生、学費全額免除）。
            <br /><br />
            家族の強い意向もあり、一度は法学を学んだものの、大学院修了後は法曹の道に進まず、2015年より、本来やりたかった映像クリエイターの仕事にチャレンジ。遠回りでも夢を叶えたという経験を持つ。
          </p>
          <ul className="text-slate-50 mb-10 space-y-4">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">2015年〜2019年　ブライダル映像カメラマン & 編集</h4>
                <p className="text-slate-50 mt-1">結婚式のエンドロール撮影カメラマンおよび編集、記録ビデオ編集など。
                  <br />業務委託の副業から開始し、正社員へ。
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">2020年〜　企業プロモーション、企業広報、研修教材など</h4>
                <p className="text-slate-50 mt-1">ブライダル以外の映像の仕事にも挑戦したくなり、映像制作会社へ転職。
                  <br />少人数チームでディレクター兼カメラマンや編集をこなした。</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">2021年〜　劇場映画の制作進行</h4>
                <p className="text-slate-50 mt-1">制作会社の社員として、2022年4月公開の劇場映画の制作進行を務めた。
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">2022年〜2024年　大手外資系企業　インハウスビデオエディター</h4>
                <p className="text-slate-50 mt-1">インハウスエディターとして、TVCMやSNS広告、大型サイネージ広告を含む大規模キャンペーンのオフライン編集やポストプロダクションを経験。</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">2025年現在　フリーランス</h4>
                <p className="text-slate-50 mt-1">2024年10月より、映像以外へも活動の幅を広げるため、フリーランスに。</p>
              </div>
            </li>
          </ul>
          {/* <br /> */}
          <div className="flex items-center gap-3 mb-4">
            <BicepsFlexed className="w-12 h-12 text-pink-300" />
            <h3 className="text-2xl font-semibold text-white">私の強み</h3>
          </div>
          <p className="text-slate-50">
            常に新しいチャレンジをし、最短の過程で習得し、仕事にしていくこと。
            <br /><br />
            最近はテック系スタートアップに関心を持ち、ジーズアカデミーでプログラミングを学び、卒業制作では、個人開発とチーム開発での２チームにて、プロダクトデモデーに登壇。
            <br /><br />
            卒業後はジーズ発スタートアップでRobloxゲームの開発にも携わり、大手IP系のエクスペリエンスでUIデザインなども手掛けている。
            <br /><br />
            Webフロントエンド開発も好きで、こちらのポートフォリオサイトも、Next.js, React, TailwindCSS, TypeScriptで自作し、Vercelでデプロイしている。現在はThree.jsを勉強中。
          </p>
        </ProfileBlock>

        <ProfileBlock>
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-12 h-12 text-blue-300" />
            <h3 className="text-2xl font-semibold text-white">スキルと経験</h3>
          </div>
          <ul className="text-slate-50 mb-10 space-y-4">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">撮影</h4>
                <p className="text-slate-50 mt-1">一眼レフやミラーレス、小型シネマカメラを用いた、シネマティックかつ機動性の高い撮影を得意とする。これまでの使用機種は、Canon EOSシリーズ、Canon C100 / C200、Sony αシリーズ、Blackmagic Pocket Cinema Cameraシリーズなど。現在の所有機種は、Nikon Z6Ⅲ。</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">編集ソフト</h4>
                <p className="text-slate-50 mt-1">Adobe Premiere Pro, After Effects, DaVinci Resolveを使用。現在は使用していないが、 EDIUSも経験あり。また、Adobe Illustrator, Photoshopでの2Dデザインや、それをもとにした2Dアニメーションの制作も可能。</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">編集スキル</h4>
                <p className="text-slate-50 mt-1">ブライダルのエンドロール即編集や記録ビデオの編集、大手航空会社の社内研修教材の編集、企業広報ビデオや商品プロモーションビデオの編集、TVCMのオフライン編集、SNS向け広告映像の編集など、短尺から長尺まで、様々な業態・形態の編集経験があり、実写の編集やグレーディングから、モーショングラフィックスまで対応可能。</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">制作・ディレクション</h4>
                <p className="text-slate-50 mt-1">企業広報ビデオや商品プロモーションビデオでは、撮影・編集のみならず、企画・制作・ディレクションも含めて少人数チームで一気通貫で対応してきた経験あり。また、ナショナルクライアントCMのプロダクションマネージャーや、劇場公開映画の制作進行も経験。</p>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-12 h-12 text-blue-300" />
            <h3 className="text-2xl font-semibold text-white">その他のスキル</h3>
          </div>
          <ul className="text-slate-50 mb-10 space-y-4">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">ゲーム開発・UIデザイン</h4>
                <p className="text-slate-50 mt-1">ROBLOXゲームの開発プログラミング（使用言語: Lua）や、ゲーム内のUIデザイン、アイコンやゲーム内アイテムなどの2Dデザイン、演出高価のデザインなども実績あり。</p>
              </div>
            </li>
          </ul>
          <ul className="text-slate-50 mb-3 space-y-4">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-pink-300 rounded-full flex-shrink-0 mt-2"></span>
              <div>
                <h4 className="font-semibold text-white">Web開発</h4>
                <p className="text-slate-50 mt-1">HTML / CSS, JavaScript, TypeScript, React, Next.js, PHP, PythonでのプログラミングやWebアプリ開発のスキルあり。個人開発とチーム開発の双方で下記プロダクトデモデー『GGA GLOBAL GEEK AUDITION』へ登壇。
                  <br /><br />
                </p>
                <a
                  href="https://www.dhw.co.jp/press-release/globalgeekaudition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/30 hover:bg-white/20 hover:border-pink-300/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {/* タイトル */}
                    <h3 className="text-white font-semibold group-hover:text-pink-300 transition-colors">
                      【5/10(金)開催】ジーズアカデミーのプロダクトデモデー『GLOBAL GEEK AUDITION』予選を勝ち抜いた登壇者16組が決定！
                    </h3>
                  </div>

                  {/* 説明文 */}
                  <p className="text-sm text-white/80">
                    日程：2024年5月10日(金)18:30-22:00　会場：渋谷ストリーム ホール + YouTube Live
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </ProfileBlock>

      </div>
    </section>
  )
}

