import React from 'react';
import TiltGlowCard from '@/components/TiltGlowCard';
import { Server, Cpu, Layers, CheckCircle2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Backend Software Engineer",
    company: "Deepsafer Company",
    period: "2025 - Present",
    location: "Yemen (Remote/Hybrid)",
    description: "قيادة تصميم وتطوير الأنظمة الخلفية لتطبيقات الأمن السيبراني (Cybersecurity Applications)، وبناء واجهات برمجية آمنة وعالية الأداء.",
    metrics: [
      { label: "Database Load", value: "-40%", desc: "عبر Redis Caching والمعالجة غير المتزامنة" },
      { label: "API Response Time", value: "-50%", desc: "بفضل تحسين الاستعلامات الحاد والكاش" },
      { label: "Direct DB Writes", value: "-60%", desc: "باستخدام تقنيات الـ Batching والـ Workers الخلفية" }
    ],
    achievements: [
      "بناء نظام تراسل موزع (Distributed Messaging System) باستخدام Apache Kafka مع دعم كامل لخصائص إتاحة الخدمة ومقاومة الأخطاء (Replication & Fault Tolerance).",
      "تصميم وهندسة معمارية برمجية موجهة بالأحداث (Event-Driven Architecture) لمعالجة أحداث الأجهزة الفورية بكفاءة تامة.",
      "تطوير وبناء واجهات برمجية (REST APIs) متينة ومقاومة للاختراق تخدم خدمات داخلية وخارجية متعددة.",
      "فحص وحل مشاكل الأداء البرمجي الحاد واختناقات قواعد البيانات (Database Bottlenecks) لرفع الكفاءة التشغيلية لأقصى طاقة."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
      <div className="text-center lg:text-left mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Production <span className="text-sky-400 font-mono">&lt;Experience /&gt;</span>
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl">
          الأنظمة البرمجية الحية والمقاييس الهندسية التي قمت بالإشراف عليها وتطويرها في بيئات الإنتاج الفعلية.
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <TiltGlowCard key={index} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-800/60">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Cpu className="text-sky-400 w-6 h-6 animate-pulse" />
                  {exp.role}
                </h3>
                <p className="text-sky-300 font-medium text-lg mt-1">{exp.company}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-mono bg-black/20 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  {exp.location}
                </div>
              </div>
            </div>

            <p className="text-slate-300 my-6 leading-relaxed text-base">
              {exp.description}
            </p>

            {/* شبكة المقاييس الهندسية الحقيقية */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {exp.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 font-mono">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">{metric.label}</span>
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 block my-1">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-400 block leading-normal">{metric.desc}</span>
                </div>
              ))}
            </div>

            {/* نقاط الإنجاز التقنية بالتفصيل */}
            <div className="space-y-3.5 mt-6">
              <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" /> System Metrics Trace Log
              </h4>
              {exp.achievements.map((ach, aIdx) => (
                <div key={aIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(52,211,153,0.2)]" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </TiltGlowCard>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
