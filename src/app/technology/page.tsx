import { Brain, Cpu, Database, Network, Share2, Workflow } from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="container py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Our Technology
        </h1>
        <p className="text-lg text-muted-foreground">
          Powered by cutting-edge AI and machine learning, our technology
          is revolutionizing the way software is developed.
        </p>
      </div>

      {/* Core Technology Section */}
      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                {tech.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
                <p className="text-muted-foreground mb-6">
                  {tech.description}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tech.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <svg
                        className=" h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Innovation Section */}
      <div className="mx-auto mt-32 max-w-7xl">
        <div className="rounded-2xl bg-muted/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Continuous Innovation
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              We're constantly pushing the boundaries of what's possible with AI
              in software development. Our research team is dedicated to developing
              new technologies that make developers more productive.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-lg sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 lg:grid-cols-3">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border bg-background p-8"
                >
                  <div className="text-primary mb-4">{innovation.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">
                    {innovation.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {innovation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Research Stats */}
      <div className="mx-auto mt-32 max-w-7xl">
        <div className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col bg-muted/50 p-8">
              <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const technologies = [
  {
    name: "Advanced Language Models",
    description:
      "Our proprietary language models are trained on billions of lines of code and optimized specifically for software development tasks.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    features: [
      "Multi-language support",
      "Context-aware suggestions",
      "Semantic code understanding",
      "Natural language processing",
    ],
  },
  {
    name: "Neural Code Analysis",
    description:
      "Deep learning models that understand code structure and patterns to provide intelligent insights and suggestions.",
    icon: <Network className="h-8 w-8 text-primary" />,
    features: [
      "Pattern recognition",
      "Code similarity analysis",
      "Bug prediction",
      "Performance optimization",
    ],
  },
  {
    name: "Distributed AI Infrastructure",
    description:
      "Scalable and reliable infrastructure designed to handle complex AI computations and real-time code analysis.",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    features: [
      "Auto-scaling",
      "Low-latency inference",
      "High availability",
      "Global distribution",
    ],
  },
]

const innovations = [
  {
    name: "Quantum-Inspired Algorithms",
    description:
      "Developing next-generation algorithms inspired by quantum computing principles for faster code analysis.",
    icon: <Share2 className="h-6 w-6" />,
  },
  {
    name: "Adaptive Learning Systems",
    description:
      "AI systems that continuously learn and adapt from developer feedback and coding patterns.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    name: "Knowledge Graph Technology",
    description:
      "Building comprehensive code knowledge graphs to understand relationships and dependencies.",
    icon: <Database className="h-6 w-6" />,
  },
]

const stats = [
  { id: 1, name: "Research Papers Published", value: "50+" },
  { id: 2, name: "Patents Filed", value: "100+" },
  { id: 3, name: "Research Partners", value: "25+" },
  { id: 4, name: "R&D Investment", value: "$50M+" },
]
