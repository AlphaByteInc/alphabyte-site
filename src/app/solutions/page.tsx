import { Bot, Code2, GitBranch, Cpu, LineChart, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SolutionsPage() {
  return (
    <div className="container py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          AI-Powered Development Solutions
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover how our AI solutions can transform your development workflow
          and help your team build better software faster.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.name}
              className="relative overflow-hidden rounded-lg border bg-background p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                {solution.icon}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold">{solution.name}</h3>
                <p className="mt-2 text-muted-foreground">
                  {solution.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key Features:</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-primary"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="mx-auto mt-32 max-w-7xl">
        <div className="rounded-2xl bg-muted/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Seamless Integration
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Our solutions integrate with your existing development tools and workflows.
              Get started in minutes with our easy-to-use APIs and SDKs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-lg sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {integrations.map((integration) => (
                <div key={integration.name} className="flex flex-col">
                  <div className="text-base font-semibold leading-7">
                    {integration.name}
                  </div>
                  <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto mt-32 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Join thousands of developers who are already using our AI-powered solutions.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const solutions = [
  {
    name: "AI Code Generation",
    description:
      "Generate high-quality code snippets and entire functions with our advanced AI models.",
    icon: <Bot className="h-6 w-6 text-primary" />,
    features: [
      "Context-aware code suggestions",
      "Multiple programming languages support",
      "Custom model training",
      "Code documentation generation",
    ],
  },
  {
    name: "Intelligent Code Review",
    description:
      "Automatically detect bugs, security vulnerabilities, and performance issues.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    features: [
      "Real-time code analysis",
      "Security vulnerability detection",
      "Performance optimization suggestions",
      "Code style enforcement",
    ],
  },
  {
    name: "Automated Testing",
    description:
      "Generate and run comprehensive test suites automatically.",
    icon: <GitBranch className="h-6 w-6 text-primary" />,
    features: [
      "Test case generation",
      "Integration test automation",
      "Coverage analysis",
      "Test maintenance automation",
    ],
  },
  {
    name: "AI Infrastructure",
    description:
      "Deploy and scale AI models with our managed infrastructure solutions.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    features: [
      "Automated model deployment",
      "Scalable inference APIs",
      "Model monitoring",
      "Version control for AI models",
    ],
  },
  {
    name: "Performance Analytics",
    description:
      "Monitor and optimize your application performance with AI-powered insights.",
    icon: <LineChart className="h-6 w-6 text-primary" />,
    features: [
      "Real-time performance monitoring",
      "Anomaly detection",
      "Resource optimization",
      "Custom metrics tracking",
    ],
  },
  {
    name: "Security & Compliance",
    description:
      "Ensure your applications are secure and compliant with AI-powered security tools.",
    icon: <Shield className="h-6 w-6 text-primary" />,
    features: [
      "Automated security scanning",
      "Compliance monitoring",
      "Threat detection",
      "Security policy enforcement",
    ],
  },
]

const integrations = [
  {
    name: "IDE Integration",
    description:
      "Seamlessly integrate with popular IDEs including VS Code, IntelliJ, and more.",
  },
  {
    name: "CI/CD Pipeline",
    description:
      "Integrate with your existing CI/CD pipeline tools like GitHub Actions, Jenkins, and GitLab CI.",
  },
  {
    name: "API & SDK Support",
    description:
      "Comprehensive API and SDK support for all major programming languages and frameworks.",
  },
]
