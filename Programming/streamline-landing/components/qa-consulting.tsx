import { ShieldCheck, Zap, Heart, ArrowRight, Bug, Rocket, Gauge } from "lucide-react";

export default function ConsultingSection() {
  return (
    <section
      id="consulting"
      className="relative overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-300">
              <ShieldCheck size={16} />
              QA Consulting
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              I Help Startups Ship{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Bug-Free Products
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I provide QA audits, test strategies, automation guidance, and release confidence
              so your team can launch faster with fewer risks.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-purple-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-600/25 transition hover:-translate-y-1 hover:bg-purple-700"
              >
                Book a Free Consultation
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-purple-500 hover:text-purple-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-purple-400 dark:hover:text-purple-300"
              >
                View My Work
              </a>
            </div>

            {/* Benefits */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Better Quality",
                  desc: "Find bugs early",
                },
                {
                  icon: Zap,
                  title: "Faster Releases",
                  desc: "Reduce testing delays",
                },
                {
                  icon: Heart,
                  title: "Happy Users",
                  desc: "Improve experience",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                >
                  <item.icon className="mb-4 text-purple-500" size={26} />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-500/30 to-pink-500/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b14]/80">
              
              {/* Browser Top */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <h3 className="text-xl font-bold">Product Quality Overview</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                A quick snapshot of what I can improve.
              </p>

              {/* Score */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Overall Quality Score
                    </p>
                    <h4 className="mt-2 text-5xl font-bold">92%</h4>
                  </div>
                  <Gauge className="text-green-500" size={42} />
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-6 space-y-5">
                {[
                  ["Functional Testing", "95%"],
                  ["Performance", "88%"],
                  ["Usability", "93%"],
                  ["Automation Coverage", "78%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{label}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Issues */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                <h4 className="mb-4 font-semibold">Top Issues I Can Help With</h4>

                <div className="space-y-3 text-sm">
                  <Issue icon={Bug} text="Login validation missing" tag="High" />
                  <Issue icon={Rocket} text="Release checklist not ready" tag="Medium" />
                  <Issue icon={Zap} text="No automation in CI/CD pipeline" tag="Low" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Issue({ icon: Icon, text, tag }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Icon size={16} className="text-purple-500" />
        <span className="text-slate-600 dark:text-slate-300">{text}</span>
      </div>
      <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-300">
        {tag}
      </span>
    </div>
  );
}