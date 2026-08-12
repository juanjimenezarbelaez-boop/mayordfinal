// --- Single source of truth for contact channels ---------------------------
// Swap PHONE for a Google Ads call-forwarding number here and it updates
// everywhere (header, heroes, sticky bars, landing pages, JSON-LD, etc.).
export const PHONE = "240-595-8547"
// Digits-only, country-coded number for WhatsApp deep links (wa.me).
export const WHATSAPP_NUMBER = "12405958547"
export const DEFAULT_WHATSAPP_MESSAGE = "Hi! I'm interested in your tire services."

// Build a WhatsApp click-to-chat link with an optional prefilled message.
export function whatsappHref(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const siteConfig = {
  name: "Mayo RD Tire Shop",
  phone: PHONE,
  phoneHref: `tel:${PHONE}`,
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappHref: whatsappHref(),
  address: {
    street: "175 Mayo Rd",
    city: "Edgewater",
    state: "MD",
    zip: "21037",
    full: "175 Mayo Rd, Edgewater, MD 21037",
  },
  directionsUrl: "https://maps.google.com/?q=175+Mayo+Rd+Edgewater+MD+21037",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.188470558778!2d-76.5524675240212!3d38.87391917173007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f574d538f5f1%3A0xc6cbfa864ac26ca0!2s175%20Mayo%20Rd%2C%20Edgewater%2C%20MD%2021037!5e0!3m2!1sen!2sus!4v1716503848123!5m2!1sen!2sus",
  yelpUrl: "https://www.yelp.com/biz/mayo-rd-tire-shop-edgewater-3",
  googleUrl: "https://maps.app.goo.gl/TX1Da9wrV3eeGTJk9",
  facebookUrl: "https://www.facebook.com/p/MAYO-RD-TIRE-SHOP-61576214745510/",
  logoUrl:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/MayoRD%2Fmayo%20rd%20logo%20(5).png?alt=media&token=272cafe7-e5ac-41a2-b3a1-b1fdad36444f",
  yelpLogoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/500px-Yelp_Logo.svg.png",
  rating: { value: "4.4", count: 206 },
}

export interface NavLink {
  href: string
  label: string
  submenu?: { href: string; label: string }[]
}

export const navLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/tires", label: "TIRES" },
  {
    href: "/services",
    label: "SERVICES",
    submenu: [
      { href: "/services", label: "All Services" },
      {
        href: "/mobile-tire-service-edgewater-md",
        label: "Mobile Tire Service",
      },
    ],
  },
  { href: "/reviews", label: "REVIEWS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
]

export const hours = [
  { day: "Mon", time: "8:00 AM - 6:30 PM" },
  { day: "Tue", time: "8:00 AM - 6:30 PM" },
  { day: "Wed", time: "8:00 AM - 6:30 PM" },
  { day: "Thu", time: "8:00 AM - 6:00 PM" },
  { day: "Fri", time: "8:00 AM - 6:30 PM" },
  { day: "Sat", time: "8:00 AM - 6:30 PM" },
  { day: "Sun", time: "9:00 AM - 4:00 PM" },
]

export const hoursEs = [
  { day: "Lun", time: "8:00 AM - 6:30 PM" },
  { day: "Mar", time: "8:00 AM - 6:30 PM" },
  { day: "Mié", time: "8:00 AM - 6:30 PM" },
  { day: "Jue", time: "8:00 AM - 6:00 PM" },
  { day: "Vie", time: "8:00 AM - 6:30 PM" },
  { day: "Sáb", time: "8:00 AM - 6:30 PM" },
  { day: "Dom", time: "9:00 AM - 4:00 PM" },
]

export interface Review {
  quote: string
  author: string
}

export const reviews: Review[] = [
  {
    quote:
      "I had a tire suddenly go flat. Just drive in this shop and they quickly had my tire off and fixed and back on with in 1/2 hour. This was on Friday night at 4:30. Just amazing service and prices are great too. Highly recommend. I will be using them my for my next set of tires.",
    author: "Michele S.",
  },
  {
    quote:
      "Absolutely no nonsense, got a nice discount on a single new Michelin tire, in and out in 20 minutes. Service was excellent!",
    author: "Josh G.",
  },
  {
    quote:
      "I drove up to this shop needing a used tire and 10 minutes later I had a tire on my car! Very much recommend this place after driving by it for many years. Had to follow the signs to the office, but overall they were very helpful and very quick.",
    author: "Rachel M.",
  },
  {
    quote:
      "My truck got a flat and Jose came with a new tire and had me back on the road within about 20 minutes of my call. He saved my Friday night!",
    author: "Doreen L.",
  },
  {
    quote:
      "I've been coming here for a few years now. I came here once, got a great deal, the people were wonderful, the tire was great, and I never went anywhere else again!\n\nMy views haven't changed since then. The staff is still wonderful! They'll work with you on the prices. They always check the tires to make sure they're good. If there's any issue at all, they let you know and if you're not happy, they fix it. They're prices are great! Friendly staff.\n\nHell, they'll even help you empty your trunk so you can put your spare tire away! They always go above and beyond when they really don't have to. I've never met a shop that went so above and beyond like this place does.\n\nNow I live about 30 minutes away and I still come here. Even when I lived an hour and a half away, this was still my go to place. The drive doesn't matter because the service they provide is absolutely worth it! They always have what I need. You never have to wait long. They get you in and out!\n\nI would never recommend anyplace else!",
    author: "Jennifer M.",
  },
  {
    quote:
      "2nd time taking my car in for flat tire issue. They fix it fast, cheap, and no BS. I am a woman and have been taken advantage of in the past. Not here. Highly recommend them!!",
    author: "Karin M.",
  },
  {
    quote:
      "Very gracious and helpful. Just needed a tire patched but was treated very well. Great work and I will be back when I need tires or another patch.",
    author: "Dale W.",
  },
  {
    quote:
      "Honestly, this was the best, no-nonsense experience I have ever had with a tire shop. They're tucked away but don't sleep on this tire place! Had a flat tire due to a slow leak in an old plug and two valve stems that needed replacing. We came on a Saturday afternoon, and he told us to bring it right in. He explained that the sidewall of the tire was bad and that we'd need to replace the whole tire. The back tires needed replacing anyway, so he replaced the back two tires and valve stems all in about 30 minutes. We were blown away at the price and ease of service. Everyone was super friendly and pleasant through the whole process. I would definitely recommend them for all your tire needs!",
    author: "Monica B.",
  },
  {
    quote:
      "Great place...friendly people and the tires were excellent!.recommend to anyone who needs tires on a low budget!",
    author: "Joni R.",
  },
  {
    quote:
      "Great service- quality work and very competitive pricing- Highly recommend!\nI met the owner and son and they were very concerned about my happiness- great place!",
    author: "micki f.",
  },
  {
    quote:
      "Got my tire patched here after Pep Boys failed to plug a small nail and it still took pep boy over 2 hours.\n\nClariaxel got my tire patched and put my wheel back on my car in under 20 minutes from the time I was walking in the door.\nThen when I noticed Pep boys had removed my wheel weights and it produced a vibration at highway speeds- Clariaxel got my tire balance and completely fixed in minutes- AND they were so unbelievably kind to not charge me for their 2 wheel weights and their time.\nI will be going back to them for any future issues.\nHIGHLY recommend",
    author: "Christian C.",
  },
]

export interface BlogSection {
  heading?: string
  body: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  /** ISO 8601 date for BlogPosting JSON-LD (datePublished). */
  dateISO: string
  category: string
  image: string
  /** Article body, rendered on the /blog/[slug] detail page. */
  content: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "flat-tire-cant-drive-on-it-edgewater-annapolis",
    title: "Flat Tire and Can't Drive On It? What To Do in Edgewater & Annapolis",
    excerpt:
      "A blown or shredded tire you can't safely drive on? Here's exactly what to do in the Edgewater and Annapolis area — how to stay safe, when to call for mobile help, and when to call a tow.",
    date: "8/12/2026",
    dateISO: "2026-08-12",
    category: "Roadside Help",
    image: "/blog/flat-tire-roadside.png",
    content: [
      {
        body: [
          "A flat you can patch is one thing. A tire that's shredded, blown out, or sitting on the rim is another — and driving on it can wreck your wheel and leave you truly stranded. If that's you right now in the Edgewater or Annapolis area, the fastest fix is often {{link:/mobile-tire-service-edgewater-md|mobile tire service in Edgewater}}: we bring the tire and tools to your location so you don't have to move the car at all.",
        ],
      },
      {
        heading: "First, get to a safe spot",
        body: [
          "If you're still moving, ease off the gas, don't slam the brakes, and steer gently onto the shoulder or into the nearest lot. A ruined tire is cheaper than a crash. Once you're stopped, turn on your hazard lights and get yourself and any passengers away from traffic.",
        ],
      },
      {
        heading: "Decide: can this tire be driven on at all?",
        body: [
          "If the tire is completely flat, torn, or off the bead, do not drive on it — even a short distance can bend the rim or damage brake and suspension parts. If it's only low and still holding some air, you may be able to creep slowly to a safe place, but don't count on it.",
        ],
      },
      {
        heading: "Call for mobile tire help",
        body: [
          "During shop hours, seven days a week, we can come to you across Edgewater, Annapolis, Riva, Mayo and the surrounding area. Tell us your tire size (it's printed on the sidewall, like 205/55R16) and where you are, and we'll bring a used or new tire in your size, install your spare, or get you rolling again on the spot. We'll give you an honest arrival estimate when you call.",
        ],
      },
      {
        heading: "When to call a tow truck instead",
        body: [
          "We'll always be straight with you: if your car isn't safe to work on where it sits — you're in a live traffic lane, on a narrow bridge, or the damage goes beyond the tire — a tow is the right call, not mobile service. In those cases we'll tell you so and point you toward the safest option. Honest advice is the whole point.",
        ],
      },
    ],
  },
  {
    slug: "how-much-does-mobile-tire-service-cost-in-maryland",
    title: "How Much Does Mobile Tire Service Cost in Maryland?",
    excerpt:
      "A transparent look at how mobile tire service pricing works in Maryland — the service-call fee, how it's applied to your repair, and what actually drives the final cost.",
    date: "8/12/2026",
    dateISO: "2026-08-12",
    category: "Pricing",
    image: "/blog/mobile-tire-cost.png",
    content: [
      {
        body: [
          "\"How much is it going to cost?\" is the first thing most people ask when they call for mobile tire service — and fair enough. Here's how the pricing actually works at Mayo RD, in plain terms, so there are no surprises.",
        ],
      },
      {
        heading: "The service-call fee",
        body: [
          "Mobile service starts with a service-call fee that covers coming to your location. The key thing to know: that fee is applied to the cost of your service. So if you end up buying a used or new tire from us, the trip charge goes toward the work — you're not paying twice.",
        ],
      },
      {
        heading: "What you pay for the tire or repair",
        body: [
          "On top of the trip, you pay for whatever the job actually needs: a flat repair, installing your own spare, or a used or new tire in your size. Used tires cost less than new; a simple spare install costs less than a full tire replacement. We tell you the number before we do the work.",
        ],
      },
      {
        heading: "What can change the price",
        body: [
          "A few things move the total: your tire size and type, whether you need a repair versus a replacement, and how far out you are. We confirm all of it by phone before we dispatch, so you approve the price before we ever get in the van.",
        ],
      },
      {
        heading: "Why we quote by phone",
        body: [
          "We don't post a single flat price because honest pricing depends on your specific tire and situation. Call us with your tire size and location and we'll give you a real number — not a lowball that changes when we arrive. No guarantees we can't keep, and no surprise add-ons.",
        ],
      },
    ],
  },
  {
    slug: "spare-tire-vs-mobile-tire-help-whats-safer",
    title: "Spare Tire vs. Calling for Mobile Tire Help: What's Safer?",
    excerpt:
      "Should you put on the spare yourself or call for mobile tire help? A practical, honest comparison of safety, donut-spare limits, and when each option makes the most sense.",
    date: "8/12/2026",
    dateISO: "2026-08-12",
    category: "Tire Safety",
    image: "/blog/spare-tire-trunk.png",
    content: [
      {
        body: [
          "When you catch a flat, you've usually got two options: change to the spare yourself, or call someone to come help. Neither is automatically \"right\" — it depends on your spare, where you are, and how comfortable you are on the side of the road. Here's an honest way to decide.",
        ],
      },
      {
        heading: "Changing the spare yourself",
        body: [
          "If you have a full-size spare, you're parked somewhere safe and flat, and you know how to use the jack, changing it yourself is quick and free. The risks are real, though: jacking a car on soft ground or a slope, or working close to passing traffic, is where people get hurt. If any of that is true, it's not worth it.",
        ],
      },
      {
        heading: "About that donut spare",
        body: [
          "Most cars today come with a compact \"donut\" spare, not a full-size one. Donuts are built for limited use only — typically a low speed limit and a short distance, just enough to get to a shop. They offer less grip and no long-term safety. If you're far from home or it's raining, a donut is a stopgap, not a solution.",
        ],
      },
      {
        heading: "Calling for mobile tire help",
        body: [
          "Mobile service makes the most sense when you don't have a usable spare, you're not in a safe spot to change one, or you'd rather not drive on a donut. We come to you, install a proper used or new tire in your size, and you drive away on a real tire instead of a temporary one — no second trip to the shop needed.",
        ],
      },
      {
        heading: "The bottom line",
        body: [
          "If you've got a full-size spare and a safe spot, changing it yourself is fine. If you've got a donut, no spare, or any doubt about safety, calling for help is the smarter, safer move. When in doubt, call us — we'll tell you honestly which one fits your situation.",
        ],
      },
    ],
  },
  {
    slug: "new-vs-used-tires-in-maryland-which-one-makes-sense-for-your-car",
    title: "New vs. Used Tires in Maryland: Which One Makes Sense for Your Car?",
    excerpt:
      "New tires or quality used tires? We break down cost, safety, and how long each lasts so Edgewater and Annapolis drivers can pick the right set with confidence.",
    date: "5/26/2026",
    dateISO: "2026-05-26",
    category: "Tire Buying Guide",
    image:
      "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/blog%2Fpost_thumbnail_1779818341971_ChatGPT%20Image%2026%20may%202026%2C%2010_58_41%20a.m.%20(1).png?alt=media&token=a5ef767f-163e-4100-9a48-a562b42ff810",
    content: [
      {
        body: [
          "Buying tires in Maryland comes down to one honest question: do you need brand-new tires, or will a set of quality used tires get you safely down the road for less? At Mayo RD Tire Shop in Edgewater, we sell both every single day — and the right answer depends on your car, your budget, and how long you plan to keep driving it.",
        ],
      },
      {
        heading: "When new tires make the most sense",
        body: [
          "New tires give you the longest tread life, the best wet-weather grip, and a full manufacturer warranty. If you drive a lot of highway miles between Edgewater and Annapolis, tow a trailer, or want to buy a matched set that will last for years, new is usually the smarter long-term value.",
          "New is also the right call when the other three tires on your car are already new. Mixing a fresh tire with worn ones can affect handling, so matching tread depth matters.",
        ],
      },
      {
        heading: "When used tires are the smart buy",
        body: [
          "Quality used tires are a great fit when you need to replace one or two tires, you're selling the car soon, or you simply need a safe, affordable option today. Every used tire we sell is inspected for tread depth, sidewall damage, patches, and age before it ever goes on your vehicle.",
          "For many drivers, a good used tire installed the same day for a fraction of the price is exactly what the situation calls for — and there is no shame in being practical.",
        ],
      },
      {
        heading: "How to decide",
        body: [
          "Ask yourself three things: How long will I keep this car? How many miles do I drive a week? And what is my budget right now? If you plan to keep the car for years and drive daily, lean new. If you need a safe fix today or you're replacing just one tire, used is often perfect.",
          "Still not sure? Call us or drive in. We'll look at your tires, tell you honestly what we'd do, and never upsell you on something you don't need.",
        ],
      },
    ],
  },
  {
    slug: "hit-a-pothole-in-maryland-tire-problems",
    title: "Hit a Pothole in Maryland? 5 Tire Problems You Should Check Immediately",
    excerpt:
      "A simple guide for Maryland drivers to check tire damage, air leaks, bent rims, alignment issues, and steering vibration after hitting a pothole.",
    date: "5/26/2026",
    dateISO: "2026-05-26",
    category: "Tire Safety",
    image:
      "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/blog%2Fpost_thumbnail_1779818008240_ChatGPT%20Image%2026%20may%202026%2C%2010_52_53%20a.m.%20(1).png?alt=media&token=1ab2dd1d-61f9-4dd1-91b9-16ba52ebdf56",
    content: [
      {
        body: [
          "Maryland winters and heavy rain leave our roads full of potholes, and hitting one at speed can do real damage in a split second. If you clipped a bad one around Edgewater or Annapolis, here are the five things to check right away before a small problem turns into a blowout.",
        ],
      },
      {
        heading: "1. Visible tire damage",
        body: [
          "Look at the tread and especially the sidewall for cuts, gouges, or a bulge. A bulge means the internal structure is damaged and the tire can fail without warning — replace it, don't drive on it.",
        ],
      },
      {
        heading: "2. Sudden air loss",
        body: [
          "Check your tire pressure or watch for a low-pressure warning light. A slow leak from a pothole impact is common and easy to miss until the tire is nearly flat.",
        ],
      },
      {
        heading: "3. A bent rim",
        body: [
          "Potholes can bend or crack an alloy wheel. If you feel a rhythmic vibration or the tire won't hold air even after a patch, the rim may be the real problem.",
        ],
      },
      {
        heading: "4. Alignment knocked off",
        body: [
          "If your car pulls to one side or the steering wheel sits crooked, the impact may have thrown off your alignment. Driving on it wears your tires unevenly and fast.",
        ],
      },
      {
        heading: "5. Steering wheel vibration",
        body: [
          "A shaking steering wheel after a pothole usually points to a knocked-off balance weight or a bent wheel. It's a quick thing for us to diagnose and fix.",
          "Not sure how bad it is? Drive in or call us — we'll check all five in a few minutes and get you back on the road safely.",
        ],
      },
    ],
  },
  {
    slug: "will-my-tires-pass-maryland-state-inspection",
    title: "Will My Tires Pass Maryland State Inspection? A Simple Guide for Drivers",
    excerpt:
      "Not sure if your tires will pass Maryland State Inspection? Learn what inspectors check, how to spot tire problems, and when to replace your tires before inspection.",
    date: "5/26/2026",
    dateISO: "2026-05-26",
    category: "Tires",
    image:
      "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/blog%2Fpost_thumbnail_1779818116936_ChatGPT%20Image%2026%20may%202026%2C%2010_54_52%20a.m.%20(1).png?alt=media&token=cb6e378c-0e34-4e53-b946-917290d6d0c8",
    content: [
      {
        body: [
          "Buying a used car or transferring a title in Maryland means passing a state safety inspection, and tires are one of the most common reasons a vehicle gets flagged. Here's what inspectors actually look at so you're not caught off guard.",
        ],
      },
      {
        heading: "Tread depth",
        body: [
          "Maryland requires a minimum tread depth of 2/32 of an inch. An easy home check: insert a penny into the tread with Lincoln's head down. If you can see the top of his head, your tread is too low and the tire will fail.",
        ],
      },
      {
        heading: "Sidewall and tread condition",
        body: [
          "Inspectors reject tires with visible cord or fabric, cuts deep enough to expose the body plies, bulges, or improper repairs. Any of these are automatic failures because they're genuine safety hazards.",
        ],
      },
      {
        heading: "Matching and proper size",
        body: [
          "Your tires need to be the correct size for the vehicle and free of dangerous mismatches. Oversized tires that rub or extend beyond the fenders can also cause a rejection.",
        ],
      },
      {
        heading: "Get ahead of it",
        body: [
          "The good news: tire problems are the easiest inspection item to fix ahead of time. Bring your car to Mayo RD Tire Shop before your inspection and we'll tell you honestly whether your tires will pass — and swap in new or quality used tires the same day if they won't.",
        ],
      },
    ],
  },
]

export const images = {
  homeHero:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fhero_image%2Fmayord%20branding%20(8).png?alt=media&token=56312f02-969b-433a-adc6-ffccbf3d89ea",
  homeAbout:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fabout_image%2Ffull-frame-shot-building.jpg?alt=media&token=18b63faf-8f56-4325-b7ad-31f50acd8da7",
  tiresHero:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Ftires_hero_bg%2Fmayord--(1).png?alt=media&token=55ac5ab2-e5c2-435e-b383-5fcd34a48b3c",
  tiresTall:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Ftsg_left_tall_image%2Fcar-tires-stand-row-3d-rendering.jpg?alt=media&token=bb8de410-01e0-4bd6-9fe6-6cd1a8317a88",
  tiresDetail1:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Ftsg_tall_image_1%2Fcar-tire-size-sale-represents-dimensions-construction.jpg?alt=media&token=6af55cae-6149-41ad-a3fb-f9b87a170637",
  tiresDetail2:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Ftsg_tall_image_2%2Fclose-up-view-tire-with-tire-width-height-wheel-diameter-designation-tire-size-types-labels%20(1).jpg?alt=media&token=1eb2ad23-080a-4a83-b5f4-98b2333e782c",
  tiresDetail3:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Ftsg_tall_image_3%2Fclose-up-view-tire-with-tire-width-height-wheel-diameter-designation-tire-size-types-labels%20(2).jpg?alt=media&token=51fb53a6-30e6-4c06-977a-da8e8cdc38a2",
  tiresDetail4:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Ftsg_tall_image_4%2Fclose-up-view-tire-with-tire-width-height-wheel-diameter-designation-tire-size-types-labels.jpg?alt=media&token=3a21cdfa-6d53-4110-920d-9258c7a3f33d",
  servicesHero:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fservices_hero_bg%2Fmayord--5.png?alt=media&token=a545717e-e3bb-47f9-91d7-0e1b8f0b696b",
  serviceMounting:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fserv_row_1_img%2Fo%20(12).jpg?alt=media&token=393965d4-7370-49d7-84e8-9ce07bc34310",
  serviceRepair:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fserv_row_2_img%2FTirePlug_650x400.jpg?alt=media&token=f58f92d5-f573-4443-b0fa-f3fadea6ebed",
  serviceBalancing:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fserv_row_3_img%2Fo%20(5).jpg?alt=media&token=06d223ea-fbc3-41a8-810c-bff85598b77f",
  reviewsHero:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Freviews_hero_bg%2Ffull-frame-shot-building.jpg?alt=media&token=21038064-9391-4863-8cb7-5e4bdce689a9",
  aboutHero:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fabout_hero_bg%2Fmayord%20%20(2).png?alt=media&token=615470b3-78c3-47e5-ab7c-5b745428bfba",
  aboutStory:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fabout_story_img%2Fmayord--(1).png?alt=media&token=01e73d0d-ca05-478c-bc24-50cc49b5eaba",
  contactHero:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fcontact_hero_bg%2FWhatsApp%20Image%202026-01-06%20at%201.23.38%20PM.jpeg?alt=media&token=be1151d3-edb6-4eed-81f6-8df85fc694d4",
  blogHero:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fblog_hero_bg%2Fo%20(6).jpg?alt=media&token=a2147d1f-bdf4-43d3-8ffd-6fa70f64ac0a",
  gallery1:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fgallery_img_1%2Fo%20(2).jpg?alt=media&token=e76fe7b0-871f-4b99-a66f-f4f21ca183cf",
  gallery2:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fgallery_img_2%2Fo%20(12).jpg?alt=media&token=0626301c-8dd4-44ee-b2e7-9f41044c99a5",
  gallery3:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fgallery_img_3%2Fo%20(1).jpg?alt=media&token=ad8145ac-e76e-46b2-9ca1-9bedf4b52d85",
  gallery4:
    "https://firebasestorage.googleapis.com/v0/b/braindy-brand-guideline.firebasestorage.app/o/homepage%2Fgallery_img_4%2Fo%20(5).jpg?alt=media&token=bafe7eac-6314-4920-b18d-2f9756870248",
}
