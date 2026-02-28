const AGE_CAP = 90
const currentAge = 28.4

const metricCards = [
  { label: 'Money', value: '$142,300', detail: 'Net Growth +2.1%' },
  { label: 'Relationship', value: '87 / 100', detail: 'Connection Streak 14d' },
  { label: 'Self Improvement', value: '312h', detail: 'Focused Practice This Year' },
]

const logs = [
  {
    tag: 'Money',
    timestamp: 'Today · 08:10',
    note: 'Moved 10% of freelance payment into long-term index fund allocation.',
  },
  {
    tag: 'Self',
    timestamp: 'Today · 06:45',
    note: 'Completed 40-minute deep work sprint before checking messages.',
  },
  {
    tag: 'Relationship',
    timestamp: 'Yesterday · 21:30',
    note: 'Scheduled monthly dinner with parents and blocked calendar time.',
  },
  {
    tag: 'Money',
    timestamp: '2 days ago · 17:05',
    note: 'Reviewed discretionary spending and cut two subscriptions.',
  },
  {
    tag: 'Self',
    timestamp: '3 days ago · 07:00',
    note: 'Tracked sleep consistency and adjusted nighttime routine.',
  },
]

function App() {
  const yearsRemaining = (AGE_CAP - currentAge).toFixed(1)
  const lifeProgress = ((currentAge / AGE_CAP) * 100).toFixed(1)

  return (
    <div className="min-h-screen bg-black pb-56 text-white">
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-8">
        <header className="border-2 border-white p-4 sm:p-6">
          <div className="mb-4 flex flex-col gap-2 border-2 border-white p-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em]">Age Engine</p>
              <h1 className="font-mono text-3xl font-bold sm:text-4xl">Current Age: {currentAge}</h1>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs uppercase tracking-[0.2em]">Countdown to {AGE_CAP}</p>
              <p className="font-mono text-2xl font-bold">{yearsRemaining} years remaining</p>
              <p className="text-xs">Life Progress: {lifeProgress}%</p>
            </div>
          </div>

          <section className="grid gap-3 md:grid-cols-3">
            {metricCards.map((card) => (
              <article key={card.label} className="border-2 border-white p-4">
                <p className="text-xs uppercase tracking-[0.2em]">{card.label}</p>
                <p className="mt-2 font-mono text-2xl font-bold sm:text-3xl">{card.value}</p>
                <p className="mt-2 text-sm">{card.detail}</p>
              </article>
            ))}
          </section>
        </header>

        <section className="mt-6 border-2 border-white p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between border-b-2 border-white pb-3">
            <h2 className="text-lg font-bold uppercase tracking-[0.15em]">Reverse Timeline</h2>
            <span className="font-mono text-sm">Top = Today</span>
          </div>

          <div className="max-h-[420px] space-y-4 overflow-y-auto pr-1">
            {logs.map((log, index) => {
              const depth = ((index + 1) / logs.length) * (AGE_CAP - currentAge)
              return (
                <article key={`${log.tag}-${log.timestamp}`} className="border-2 border-white p-4">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="border-2 border-white px-2 py-1 text-xs font-bold uppercase tracking-[0.1em]">
                      {log.tag}
                    </span>
                    <span className="font-mono text-sm">{log.timestamp}</span>
                    <span className="font-mono text-xs uppercase">-{depth.toFixed(1)}y from now</span>
                  </div>
                  <p className="text-sm leading-relaxed">{log.note}</p>
                </article>
              )
            })}
          </div>
        </section>
      </main>

      <button
        type="button"
        className="fixed bottom-28 right-4 border-2 border-white bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:shadow-[0_0_0_2px_#fff] sm:bottom-24 sm:right-8"
      >
        Log Activity
      </button>

      <aside className="fixed bottom-0 left-0 right-0 border-t-2 border-white bg-black p-4">
        <div className="mx-auto max-w-6xl border-2 border-white p-4">
          <p className="mb-2 text-xs uppercase tracking-[0.2em]">Daily AI Reflection Prompt</p>
          <p className="font-mono text-sm font-bold sm:text-base">
            How did your financial actions today align with your 5-year goal?
          </p>
        </div>
      </aside>
    </div>
  )
}

export default App
