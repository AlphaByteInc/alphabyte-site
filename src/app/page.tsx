import Link from "next/link"
import { ArrowRight, Bot, Code2, Cpu, GitBranch, Globe2, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/ui/sparkles"
import { Globe } from "@/components/ui/globe"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { DemoHeroGeometric } from "@/components/ui/shape-landing-hero.demo"
import { TimelineDemo } from "@/components/ui/timeline.demo"
import { Section as VortexSection } from "@/components/ui/vortex.demo"

export default function Home() {
  return (
    <main>
      <VortexSection />
      <DemoHeroGeometric />
      <TimelineDemo />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="py-24 sm:py-32">
            <div className="text-center">
              <div className="relative z-20">
                <h1 className="inline-block text-5xl font-bold tracking-tight sm:text-7xl text-white">
                  開発の未来を、
                  <br />
                  AIと共に創る
                </h1>
                <div className="h-[100px] mt-6">
                  <GooeyText
                    texts={[
                      "より速く",
                      "より賢く",
                      "より効率的に",
                      "より創造的に",
                      "より革新的に",
                    ]}
                    morphTime={1}
                    cooldownTime={2}
                    className="font-bold text-white"
                    textClassName="text-4xl sm:text-5xl"
                  />
                </div>
                <p className="mt-6 text-xl leading-8 text-neutral-300 max-w-2xl mx-auto">
                  最先端のAI技術で、あなたのコードをもっと洗練された、
                  より優れたものへ。開発の新時代を、共に切り拓きましょう。
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end hover:opacity-90 transition-opacity"
                  >
                    <Link href="/solutions">
                      無料で始める <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">詳しく見る</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sparkles background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#00DC82"
            speed={0.8}
          />
        </div>
      </section>

      {/* Global Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">GLOBAL</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-transparent bg-clip-text">
              世界中で選ばれる
              <br />
              AIソリューション
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              AlphaByte AIは、世界40カ国以上で利用されています。
              グローバルな開発チームと共に、最先端のAI技術を提供し続けています。
            </p>
          </div>
          <div className="relative mt-16 h-[600px]">
            <Globe className="mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center z-10">
                <div className="stats grid grid-cols-2 gap-8 mt-[400px]">
                  <div className="stat">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-transparent bg-clip-text">40+</div>
                    <div className="text-sm text-neutral-300 mt-1">Countries</div>
                  </div>
                  <div className="stat">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-transparent bg-clip-text">1M+</div>
                    <div className="text-sm text-neutral-300 mt-1">Developers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sparkles background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#00DC82"
            speed={0.3}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">INNOVATION</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-transparent bg-clip-text">
              次世代の開発体験
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              AIがあなたの開発プロセスを革新的に変革。
              コーディングからテストまで、すべてをスマートに。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative group">
                  <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-neutral-900/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold leading-8 text-white">{feature.name}</h3>
                    </div>
                    <p className="mt-6 text-base leading-7 text-neutral-300">
                      {feature.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-primary"
                      >
                        詳しく見る <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Sparkles background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#00DC82"
            speed={0.5}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 relative bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-transparent bg-clip-text">
                実績が証明する、確かな価値
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                世界中の開発者が選ぶ、信頼のAIソリューション
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 group hover:border-primary/50 transition-colors"
                >
                  <dt className="text-sm font-semibold leading-6 text-neutral-300">
                    {stat.name}
                  </dt>
                  <dd className="mt-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-transparent bg-clip-text">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* Sparkles background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#00DC82"
            speed={0.3}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8 bg-black">
        <div className="mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            あなたのプロジェクトを、
            <br />
            次のレベルへ
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            AIの力で、開発の限界を超える。
            今すぐ始めましょう。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end hover:opacity-90 transition-opacity"
            >
              <Link href="/solutions">無料で始める</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
        {/* Sparkles background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#00DC82"
            speed={0.4}
          />
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    name: '次世代コード生成',
    description:
      '最先端のAIが、あなたのアイデアを洗練されたコードへと変換。開発効率を飛躍的に向上させます。',
    icon: <Bot className="h-6 w-6 text-white" />,
    href: '/solutions#code-generation',
  },
  {
    name: 'インテリジェント解析',
    description:
      'リアルタイムでコードを解析し、最適な改善案を提示。品質と安全性を常に最高レベルに保ちます。',
    icon: <Code2 className="h-6 w-6 text-white" />,
    href: '/solutions#code-review',
  },
  {
    name: 'AI駆動テスト',
    description:
      '網羅的なテストを自動生成し、バグを未然に防止。開発に集中できる環境を実現します。',
    icon: <GitBranch className="h-6 w-6 text-white" />,
    href: '/solutions#testing',
  },
]

const stats = [
  { id: 1, name: '導入企業数', value: '1,000+' },
  { id: 2, name: '月間コード生成量', value: '100M+' },
  { id: 3, name: '開発時間削減率', value: '40%' },
  { id: 4, name: 'ユーザー満足度', value: '98%' },
]
