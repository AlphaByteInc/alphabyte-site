import { Building2, GraduationCap, Heart, Laptop, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="container py-24">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-muted-foreground">
          Help us shape the future of software development with AI.
          We're looking for passionate individuals who want to make a difference.
        </p>
      </div>

      {/* Culture Section */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {culturePoints.map((point) => (
            <div
              key={point.name}
              className="relative overflow-hidden rounded-lg border bg-background p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                {point.icon}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold">{point.name}</h3>
                <p className="mt-2 text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mx-auto mt-32 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Benefits & Perks</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We take care of our team with comprehensive benefits and perks.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.name}
              className="flex items-start space-x-4 rounded-lg border bg-background p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{benefit.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mx-auto mt-32 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Open Positions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join us in building the future of software development.
          </p>
        </div>
        <div className="grid gap-4">
          {positions.map((position) => (
            <div
              key={position.title}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 rounded-lg border bg-background p-6"
            >
              <div>
                <h3 className="text-lg font-semibold">{position.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {position.location} · {position.type}
                </p>
                <div className="flex gap-2 mt-2">
                  {position.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild>
                <Link href={position.href}>Apply Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const culturePoints = [
  {
    name: "Innovation First",
    description:
      "We're constantly pushing the boundaries of what's possible with AI and software development.",
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
  {
    name: "Collaborative Environment",
    description:
      "Work with talented individuals who are passionate about technology and innovation.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    name: "Growth & Learning",
    description:
      "Continuous learning is part of our DNA. We provide resources and opportunities for professional development.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
]

const benefits = [
  {
    name: "Comprehensive Healthcare",
    description:
      "Full medical, dental, and vision coverage for you and your dependents.",
    icon: <Heart className="h-6 w-6 text-primary" />,
  },
  {
    name: "Remote-First Culture",
    description:
      "Work from anywhere with our flexible remote work policy.",
    icon: <Laptop className="h-6 w-6 text-primary" />,
  },
  {
    name: "Learning Budget",
    description:
      "Annual budget for courses, conferences, and learning materials.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    name: "Company Equity",
    description:
      "Share in our success with competitive equity packages.",
    icon: <Building2 className="h-6 w-6 text-primary" />,
  },
]

const positions = [
  {
    title: "Senior AI Engineer",
    location: "Remote",
    type: "Full-time",
    tags: ["AI/ML", "Python", "TensorFlow"],
    href: "/careers/senior-ai-engineer",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    tags: ["React", "Node.js", "TypeScript"],
    href: "/careers/full-stack-developer",
  },
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    tags: ["Product", "AI", "Developer Tools"],
    href: "/careers/product-manager",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    tags: ["Kubernetes", "AWS", "CI/CD"],
    href: "/careers/devops-engineer",
  },
]
