"use client";

import { FormEvent, useEffect, useState } from "react";

const menuItems = [
  { name: "سفرة الجبل", desc: "تشكيلة مشاوي، مقبلات شامية، خبز ساخن وخضار مشوية", tag: "الأكثر طلباً", symbol: "🔥" },
  { name: "فروج عالفحم", desc: "متبّل بخلطة حكاية جبل، مع بطاطا وثوم", tag: "من قلب النار", symbol: "♨" },
  { name: "بيتزا مارغريتا", desc: "عجينة يومية، صلصة طماطم وجبنة ذائبة", tag: "للصغار والكبار", symbol: "◒" },
  { name: "عصير الفريز", desc: "فريز طازج، ثلج ونعنع — منعش حتى آخر رشفة", tag: "طازج", symbol: "✦" },
];

const moments = [
  { icon: "☾", title: "قعدة تحت القمر", text: "ضو دافي، هوا الشام، وحكايات ما بدها تخلص." },
  { icon: "♨", title: "الفحم عم يحكي", text: "مشاوي بتوصل عالطاولة وهي بعدها عم تغني." },
  { icon: "✦", title: "العيلة كلها معنا", text: "منطقة ألعاب آمنة لعصافير الجبل وراحة بال للأهل." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || reserveOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, reserveOpen]);

  function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main dir="rtl">
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" aria-label="حكاية جبل، الصفحة الرئيسية">
          <span className="brand-moon">☾</span>
          <span><b>حكاية جبل</b><small>ما بتخلص حكاياتنا</small></span>
        </a>
        <div className="nav-links">
          <a href="#story">الحكاية</a>
          <a href="#menu">من السفرة</a>
          <a href="#experience">القعدة</a>
          <a href="#visit">وين تلاقونا</a>
        </div>
        <button className="reserve-nav" onClick={() => setReserveOpen(true)}>احجز طاولتك <span>←</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="فتح القائمة">
          <span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["الحكاية", "من السفرة", "القعدة", "وين تلاقونا"].map((label, i) => (
          <a key={label} href={["#story", "#menu", "#experience", "#visit"][i]} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <button onClick={() => { setMenuOpen(false); setReserveOpen(true); }}>احجز طاولتك</button>
      </div>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="hero-content">
          <p className="eyebrow"><span /> مطعم وتراس · دمشق</p>
          <h1>القعدة إلها<br /><em>حكاية.</em></h1>
          <p className="hero-copy">بين ضو القمر ووهج الفحم، بتبلّش سهرة شامية طيبة… والباقي بصير حكاية.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setReserveOpen(true)}>احجز قعدتك <span>↙</span></button>
            <a className="play-link" href="#experience"><span className="play">▶</span> عيش الأجواء</a>
          </div>
        </div>
        <div className="hero-note"><span>مساكن برزة</span><b>خلف مول قاسيون · حرم معهد HIBA</b></div>
        <a className="scroll-cue" href="#story" aria-label="اكتشف المزيد"><span>انزل للحكاية</span><i /></a>
      </section>

      <section className="story section-pad" id="story">
        <div className="story-kicker"><span>01</span> الحكاية</div>
        <div className="story-grid">
          <h2>مو بس مطعم.<br />هون بتصير <em>الذِكرى.</em></h2>
          <div className="story-copy">
            <p>حكاية جبل هي القعدة يلي بتجمع اللي منحبهم: سفرة مليانة، ضحكة طالعة من القلب، وليل دمشق عم يطوّل شوي كرمالنا.</p>
            <p>من أول سيخ عالفحم لآخر كاسة عصير، كل تفصيل معمول ليخلّيكم تقولوا: <b>منرجع.</b></p>
          </div>
        </div>
        <div className="quote-ribbon">
          <span>لقمة طيبة</span><i>◆</i><span>رواق</span><i>◆</i><span>قعدة حلوة</span><i>◆</i><span>ما بتخلص حكاياتنا</span>
        </div>
      </section>

      <section className="fire-section" id="menu">
        <div className="fire-visual">
          <div className="fire-photo" />
          <div className="fire-stamp"><small>عالفحم</small><strong>كل يوم</strong><span>♨</span></div>
        </div>
        <div className="menu-panel">
          <div className="section-label"><span>02</span> من السفرة</div>
          <h2>نكهات بتحكي<br /><em>ألف حكاية</em></h2>
          <p className="menu-intro">أطباق معمولة للمشاركة، لأن أطيب لقمة هي يلي بتتقاسمها مع حدا بتحبه.</p>
          <div className="menu-list">
            {menuItems.map((item) => (
              <article className="menu-item" key={item.name}>
                <span className="dish-symbol">{item.symbol}</span>
                <div><h3>{item.name}</h3><p>{item.desc}</p><small>{item.tag}</small></div>
                <b>—</b>
              </article>
            ))}
          </div>
          <a href="https://www.instagram.com/hekayet.jabal/" target="_blank" rel="noreferrer" className="text-link">شوف آخر أطباقنا عالإنستغرام <span>↗</span></a>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="experience-head">
          <div className="section-label light"><span>03</span> القعدة</div>
          <h2>ليلة واحدة.<br /><em>حكايات كتيرة.</em></h2>
        </div>
        <div className="moment-grid">
          {moments.map((moment, i) => (
            <article className="moment-card" key={moment.title}>
              <span className="moment-no">0{i + 1}</span>
              <div className="moment-icon">{moment.icon}</div>
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
        <div className="moon-line"><span /><i>☾</i><span /></div>
      </section>

      <section className="family">
        <div className="family-copy">
          <p className="eyebrow dark"><span /> لعصافير الجبل</p>
          <h2>هنّي بيلعبوا.<br /><em>وإنت بتروق.</em></h2>
          <p>منطقة ألعاب آمنة وممتعة للصغار، لتكمل لمة العيلة براحة بال وضحكات أعلى.</p>
          <button className="outline-btn" onClick={() => setReserveOpen(true)}>احجز للعيلة <span>←</span></button>
        </div>
        <div className="family-art" aria-hidden="true">
          <div className="sun" /><div className="mountain m1" /><div className="mountain m2" />
          <span className="bird b1">⌁</span><span className="bird b2">⌁</span>
          <strong>ZO <i>O</i><br />GA <i>M</i>E</strong>
          <small>ضحكتهم بتكمّل الحكاية</small>
        </div>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="visit-card">
          <p className="eyebrow"><span /> ناطرينكم</p>
          <h2>تعوا نكتب<br /><em>حكاية جديدة.</em></h2>
          <div className="visit-details">
            <div><small>العنوان</small><p>مساكن برزة، خلف مول قاسيون<br />حرم معهد HIBA — دمشق</p></div>
            <div><small>للحجز والاستعلام</small><p><a href="tel:0993551133">099 355 1133</a><br /><a href="tel:0996666477">099 666 6477</a></p></div>
          </div>
          <div className="visit-actions">
            <button className="primary-btn gold" onClick={() => setReserveOpen(true)}>احجز هلق <span>←</span></button>
            <a className="map-link" href="https://maps.google.com/?q=Qasioun+Mall+Damascus" target="_blank" rel="noreferrer">افتح الخريطة ↗</a>
          </div>
        </div>
        <div className="visit-moon"><span>☾</span><p>مع ضوء القمر</p></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-moon">☾</span><span><b>حكاية جبل</b><small>ما بتخلص حكاياتنا</small></span></a>
        <p>مطعم وتراس للعيلة والأصحاب · دمشق</p>
        <div><a href="https://www.instagram.com/hekayet.jabal/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="tel:0115112341">011 511 2341</a><a href="tel:0115141347">011 514 1347</a></div>
        <small>© 2026 حكاية جبل. كل الحقوق محفوظة.</small>
      </footer>

      <div className={`modal-backdrop ${reserveOpen ? "show" : ""}`} onClick={() => setReserveOpen(false)}>
        <section className="reserve-modal" role="dialog" aria-modal="true" aria-labelledby="reserve-title" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setReserveOpen(false)} aria-label="إغلاق">×</button>
          {submitted ? (
            <div className="success">
              <span>☾</span><h2>وصلتنا الحكاية!</h2><p>للتأكيد الفوري، اتصل فينا على <a href="tel:0993551133">099 355 1133</a></p>
              <button className="primary-btn" onClick={() => { setSubmitted(false); setReserveOpen(false); }}>تمام</button>
            </div>
          ) : (
            <>
              <p className="eyebrow dark"><span /> احجز قعدتك</p>
              <h2 id="reserve-title">مين جاي<br /><em>معك عالحكاية؟</em></h2>
              <form onSubmit={submitReservation}>
                <label>الاسم<input required placeholder="اسمك الكريم" /></label>
                <label>رقم الموبايل<input required inputMode="tel" placeholder="09X XXX XXXX" /></label>
                <div className="form-row">
                  <label>التاريخ<input required type="date" /></label>
                  <label>عدد الضيوف<select defaultValue="4"><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option></select></label>
                </div>
                <button className="primary-btn" type="submit">ابعث طلب الحجز <span>←</span></button>
                <small>هذا نموذج تجريبي. تأكيد الحجز يتم هاتفياً.</small>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
