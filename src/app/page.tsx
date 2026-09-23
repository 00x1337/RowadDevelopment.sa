"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header Bar */}
      <div className="bg-slate-900 border-b border-amber-500/20 text-xs py-2.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              خبرة عريقة في المقاولات وتجهيز المشاعر المقدسة منذ عام 2007م
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-400">معتمدة لدى هيئة المقاولين ومصنفة لدى وزارة البلديات والإسكان</span>
          </div>
          <div className="flex items-center gap-5 text-xs font-sans">
            <span className="text-amber-400/90 font-medium">مكة المكرمة والمشاعر المقدسة</span>
            <span className="text-slate-700">|</span>
            <a href="#contact" className="hover:text-amber-400 transition font-medium">طلب خدمات المشاريع</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Mark */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-black text-2xl border border-amber-300/40">
              <svg className="w-7 h-7 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 21h18M5 21V7l8-4v18m0 0l6-3V10l-6 3" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-black text-white tracking-tight">رواد التعمير والتنمية</span>
              <span className="block text-xs font-bold text-amber-400 tracking-widest font-sans uppercase">Rowad Contracting & Development</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition">نبذة عن المؤسسة</a>
            <a href="#services" className="hover:text-amber-400 transition">خدماتنا</a>
            <a href="#hajj-services" className="hover:text-amber-400 transition text-amber-300">خدمات الحج والمشاعر</a>
            <a href="#projects" className="hover:text-amber-400 transition">سابقة الأعمال</a>
            <a href="#partners" className="hover:text-amber-400 transition">شركاء النجاح</a>
          </nav>

          {/* Action CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:brightness-105 transition transform active:scale-95"
          >
            <span>تواصل معنا</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.15),rgba(255,255,255,0))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              مسيرة نجاح لا نهاية لها وشراكات تنموية كبرى منذ 2007
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight">
              نبني الحاضر ونمهد <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">مستقبل المشاعر والإنشاءات</span> بأعلى المقاييس
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              من فلل مكة المكرمة وبنيتها التحتية إلى تجهيز أرقى مخيمات كبار الشخصيات (VIP) للحجاج في منى وعرفات ومجمعات الإعاشة والمستودعات الكبرى. نضع خبراتنا بين أيديكم لتحقيق أهداف رؤية 2030.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition transform active:scale-95"
              >
                شاهد سابقة الأعمال
              </a>
              <a
                href="#hajj-services"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-8 py-3.5 rounded-xl transition"
              >
                تجهيزات الحج والمشاعر VIP
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <span className="block text-3xl font-black text-amber-400 font-sans">+17</span>
                <span className="text-xs text-slate-400">عاماً من الخبرة المتواصلة</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <span className="block text-3xl font-black text-white font-sans">2,650م²</span>
                <span className="text-xs text-slate-400">مطبخ إعاشة 4 أدوار بمكة</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <span className="block text-3xl font-black text-amber-400 font-sans">6,000م²</span>
                <span className="text-xs text-slate-400">مستودعات مركزية منفذة</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <span className="block text-3xl font-black text-white font-sans">VIP</span>
                <span className="text-xs text-slate-400">مخيمات حجاج المشاعر</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md">
                نبذة عن المؤسسة • About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                تأسست عام 2007م لتكون ركيزة أساسية في النهضة العمرانية
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                تأسست شركة رواد التعمير والتنمية عام 2007م كمؤسسة فردية ومنذ إنشائها حققت نجاحات على مستوى المشاريع بتنفيذ مجموعة فلل دوبلكس في مكة المكرمة ومشروع إنشاء مطابخ ودورات مياه في المشاعر المقدسة وبعض الأعمال الكهربائية.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                وسرعان ما توسعت أعمالها لتصبح شركة معتمدة لدى هيئة المقاولين ومصنفة لدى وزارة الإسكان والبلديات، لتشمل أعمال ورش الحدادة والديكورات والفرش وتجهيز المخيمات والمعارض والمؤتمرات وفق رؤية المملكة 2030.
              </p>

              {/* Three Pillars */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-amber-400 font-bold text-base mb-1">الأمانة</div>
                  <p className="text-xs text-slate-400">أيدينا الأمينة تضمن لك مستقبلاً ناجحاً وآمناً لكل استثماراتك.</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-amber-400 font-bold text-base mb-1">السرعة</div>
                  <p className="text-xs text-slate-400">سرعة التسليم هي أولى أولوياتنا لأننا الأكثر كفاءة وتنظيماً.</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-amber-400 font-bold text-base mb-1">الخبرة</div>
                  <p className="text-xs text-slate-400">خبرتنا المتراكمة تمكننا من تنفيذ أصعب المشاريع بالمواصفات المطلوبة.</p>
                </div>
              </div>
            </div>

            {/* Vision and Mission Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-slate-800 to-slate-950 border border-amber-500/20 p-6 rounded-2xl shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">الرؤية (Vision)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  تمكين الاقتصاد ودفع عجلة التنمية من خلال تطوير البنية التحتية والمساهمة في ازدهار المجتمع من خلال رؤية القيادة الرشيدة 2030، لنكون الشركة الرائدة المتخصصة في أعمال المقاولات والإنشاءات وتقديم حلول مبتكرة للمشاريع على اختلافها.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">الرسالة (Mission)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  تنويع الاستثمارات وتنفيذ المشاريع بأعلى المعايير العالمية، وتقديم أفضل الخدمات وتسويق الأفكار التنموية، وتوظيف الخبرات المتراكمة لتقديم الحلول الشاملة جنباً إلى جنب مع العميل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Services Section */}
      <section id="services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">قطاعات العمل الإنشائي</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">خدماتنا العامة والمتخصصة</h2>
            <p className="text-slate-400 text-sm">
              نمتلك حلولاً متكاملة تبدأ من دراسة الجدوى والتصميم الأولي حتى التنفيذ والتشغيل والصيانة:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">أعمال الإنشاءات</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                تنفيذ أعمال المقاولات للمباني السكنية، التجارية، والصناعية، والتصاميم والديكورات الداخلية والخارجية والحدائق.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">الهندسة والتصاميم</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                دراسة التحليلات النظرية والتصاميم الإنشائية المقاومة للرياح والزلازل ومختلف التأثيرات الاستاتيكية والديناميكية.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">البنية التحتية</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                شبكات المياه، الصرف الصحي، محطات المعالجة، وربط المشاريع الحيوية بالمخططات والمقاييس المعتمدة.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/50 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-bold text-white text-base mb-2">سفلتة وتعبيد الطرق</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                إنشاء وتعبيد الطرق التي تستوعب أكبر حركة للمركبات لربط المدن والقرى بأعلى مقاييس الهيئة العامة للطرق.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Hajj Services Section */}
      <section id="hajj-services" className="py-20 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">تخصصنا الفريد في المشاعر المقدسة</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">خدمات وتجهيزات الحج (مواسم البركة)</h2>
            <p className="text-slate-300 text-sm">
              خبرة ممتدة في تشييد وتجهيز المخيمات والخدمات اللوجستية المتكاملة لحجاج بيت الله الحرام:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition">
              <div className="text-amber-400 text-xl font-bold mb-2">01. الخيام والمخيمات VIP</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                إنشاء وتجهيز خيام الحجاج وخيام المساجد والتخييم بأفضل معايير الجودة والسلامة ومقاومة الحريق.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition">
              <div className="text-amber-400 text-xl font-bold mb-2">02. أعمال البنية التحتية</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                تمديد شبكات الكهرباء، المياه، والصرف الصحي للمخيمات لضمان التشغيل المتواصل طوال فترة الحج.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition">
              <div className="text-amber-400 text-xl font-bold mb-2">03. أنظمة التكييف والتبريد</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                تزويد المخيمات والمباني المتنقلة بأحدث حلول التكييف المركزي والصحراوي الصديق للبيئة لدرجات حرارة قصوى.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition">
              <div className="text-amber-400 text-xl font-bold mb-2">04. المباني الجاهزة والكرفانات</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                كافة أنواع المباني الجاهزة المقاومة للحرارة والرياح، ودورات المياه وخزانات المياه والصرف الصحي.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition">
              <div className="text-amber-400 text-xl font-bold mb-2">05. المفروشات والأثاث المريح</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                تشكيلة متنوعة وعصرية من السجاد، الصوفات، المخدات، والبطانيات لإضفاء راحة تامة للحاج.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition">
              <div className="text-amber-400 text-xl font-bold mb-2">06. مولدات الطاقة والصيانة 24/7</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                توفير مولدات كهربائية عملاقة مع فريق فني متكامل (كهرباء، تبريد، سباكة، دهان، ونظافة) على مدار الساعة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase / سابقة الأعمال */}
      <section id="projects" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">سجل الإنجازات</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">سابقة أعمال شركة رواد التعمير</h2>
            <p className="text-slate-400 text-sm">
              مشاريع نفذت على أرض الواقع في مكة المكرمة والمشاعر المقدسة:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">مكة المكرمة - العزيزية</span>
              <h3 className="font-bold text-white text-base">ترميم برج القمرية</h3>
              <p className="text-xs text-slate-400 leading-relaxed">أعمال ترميم وتجديد شاملة للبرج وتطوير الواجهات والأنظمة الداخلية.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">مشعر عرفات</span>
              <h3 className="font-bold text-white text-base">مخيمات حجاج VIP لشركة مشارق</h3>
              <p className="text-xs text-slate-400 leading-relaxed">إنشاء وتجهيز مخيمات كبار الشخصيات بمشعر عرفات بمواصفات فندقية فاخرة.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">مكة المكرمة</span>
              <h3 className="font-bold text-white text-base">إنشاء مجمع مطبخ إعاشة (4 أدوار)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">إنشاء مطبخ إعاشة مركزي متطور بمساحة إجمالية 2,650 م² مخصص للمواسم.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">مكة المكرمة</span>
              <h3 className="font-bold text-white text-base">إنشاء 4 مستودعات تجارية (6,000 م²)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">بناء عدد 4 مستودعات بمساحة 1,500 م² لكل مستودع مجهزة للمواد الغذائية واللوجستية.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">مشعر عرفات</span>
              <h3 className="font-bold text-white text-base">البنية التحتية لمشارق الذهبية</h3>
              <p className="text-xs text-slate-400 leading-relaxed">تنفيذ شبكات ومرافق البنية التحتية الخاصة بمشاريع شركة مشارق الذهبية بعرفات.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">طريق مكة - جدة</span>
              <h3 className="font-bold text-white text-base">تشطيب مشروع الإيواء</h3>
              <p className="text-xs text-slate-400 leading-relaxed">تنفيذ أعمال التشطيبات المعمارية الدقيقة في مشروع الإيواء الحيوي.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">شركاء النجاح • Partners</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-10">نفخر بثقة كبرى الجهات والشركات</h2>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-slate-400">
            {["مشارق MASHARIQ", "ركين RAKEEN", "طيران ناس flynas", "ضيوف البيت Al Bait Guests", "TABUNG HAJI", "ANDALUSIA Tours", "MKM Travel", "Persada Indonesia", "الماسية almasiah", "EBAD", "RAYHAR"].map((partner, idx) => (
              <div key={idx} className="bg-slate-950 px-6 py-3 rounded-xl border border-slate-800 text-sm font-bold text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">جاهزون لتنفيذ مشاريعكم ومخيماتكم بأعلى درجات الاحتراف</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            تواصلوا مع الإدارة الهندسية والمشاريع لشركة رواد التعمير والتنمية للحصول على استشارة فنية ودراسة تسعير فورية.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-slate-900 rounded-xl border border-slate-800 text-amber-400 font-semibold text-sm">
              المقر: مكة المكرمة - المملكة العربية السعودية
            </span>
            <span className="px-6 py-3 bg-amber-500 text-slate-950 rounded-xl font-bold text-sm">
              معتمد ومصنف لدى البلديات وهيئة المقاولين
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-500 py-8 border-t border-slate-900 text-xs text-center">
        <p className="text-slate-400 font-bold mb-1">شركة رواد التعمير والتنمية للمقاولات العامة</p>
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} • Rowad Contracting</p>
      </footer>
    </div>
  );
}
