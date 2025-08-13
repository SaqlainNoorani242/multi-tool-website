interface Step {
  title: string
  description: string
}

interface HowToUseSectionProps {
  title: string
  steps: Step[]
}

export function HowToUseSection({ title, steps }: HowToUseSectionProps) {
  return (
    <section className="rounded-2xl bg-muted/30 p-8">
      <h2 className="mb-8 text-center font-heading text-2xl font-bold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              {index + 1}
            </div>
            <h3 className="mb-2 font-heading text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
