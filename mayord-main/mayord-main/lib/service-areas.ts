import type { FaqItem } from "@/components/services/faq-accordion"

export interface ServiceArea {
  /** URL segment, e.g. "annapolis-md". */
  slug: string
  /** Town name only, e.g. "Annapolis". */
  town: string
  /** Schema City name, e.g. "Annapolis, MD". */
  cityLabel: string
  /** Honest, approximate drive time from 175 Mayo Rd. */
  driveTime: string
  /** Short meta description for this area page. */
  metaDescription: string
  /** Unique, landmark-specific intro paragraphs. */
  intro: string[]
  /** Area-specific FAQ (kept distinct per town). */
  faqs: FaqItem[]
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "annapolis-md",
    town: "Annapolis",
    cityLabel: "Annapolis, MD",
    driveTime: "typically about 15–20 minutes",
    metaDescription:
      "Stuck with a flat in Annapolis, MD? Mayo RD offers mobile tire service across Forest Drive, Bay Ridge, West Street and the US-50 corridor. Call 240-595-8547 — dispatched during shop hours.",
    intro: [
      "If you have a flat tire in Annapolis, we can usually come to you. Our shop sits just across the South River in Edgewater, so reaching most of Annapolis — Forest Drive, the Bay Ridge and Eastport neighborhoods, and the West Street corridor — is a short hop for our mobile van. From 175 Mayo Rd the drive is typically about 15 to 20 minutes depending on traffic on Forest Drive and the US-50 interchange.",
      "We handle a lot of calls from drivers stranded near the Annapolis Mall, along Riva Road heading into town, and in the office parks off Bestgate. Whether you caught a nail on West Street or a curb bent your wheel near the City Dock, we can change the tire, install your spare, or bring a used tire in your size so you are not stuck waiting on a tow.",
    ],
    faqs: [
      {
        question: "Do you cover all of Annapolis?",
        answer:
          "We cover most of Annapolis within about 15 to 20 minutes of our Edgewater shop, including Forest Drive, Bay Ridge, Eastport, West Street and the areas around the Annapolis Mall. For downtown near the City Dock or farther out past the Naval Academy, give us a call and we'll confirm we can reach you before we head out.",
      },
      {
        question: "I'm stuck on Forest Drive — can you reach me quickly?",
        answer:
          "Forest Drive is one of our most common mobile-service areas because it's a straight shot from the shop over the South River. Call us and, during shop hours, we can typically be on our way within a short window. We'll give you an honest arrival estimate when you call.",
      },
      {
        question: "Can you help if I'm stranded near US-50?",
        answer:
          "Yes. If you're safely off the roadway on a shoulder or in a nearby lot along the US-50 corridor, we can come change or replace your tire. If you're in an unsafe spot in live traffic, we'll tell you to call for a tow or police assistance first — your safety comes before anything else.",
      },
    ],
  },
  {
    slug: "riva-md",
    town: "Riva",
    cityLabel: "Riva, MD",
    driveTime: "typically under 10 minutes",
    metaDescription:
      "Flat tire in Riva, MD? Mayo RD's mobile tire service reaches Riva Road and the South River bridge area fast. Call 240-595-8547 — used tires in your size brought to you.",
    intro: [
      "Riva is right next door. From our shop at 175 Mayo Rd, most of Riva is typically under 10 minutes away, which makes it one of the fastest areas for us to reach. If you're stuck along Riva Road, near the South River bridge, or in the shopping centers around the Riva Road and Central Avenue intersection, we can be there quickly during shop hours.",
      "Because we're so close, Riva drivers often get the choice we like best: we can bring a mobile fix to you, or if it's easier and safer, tow-free, you can limp the car the short distance to the shop where we have the full inventory. Either way, we'll change the flat, mount a spare, or install a used or new tire in your size.",
    ],
    faqs: [
      {
        question: "How fast can you get to Riva?",
        answer:
          "Riva is one of our closest service areas — typically under 10 minutes from the shop during business hours. Call us and we'll give you an honest arrival window based on what we've got going on that day.",
      },
      {
        question: "Should I come to the shop instead since I'm close?",
        answer:
          "If your car is safe to drive slowly, coming to the shop is often the quickest option for Riva drivers and gives you our full tire inventory to choose from. If the tire is fully flat or damaged, don't risk it — call and we'll come to you.",
      },
      {
        question: "Can you come to the South River bridge area?",
        answer:
          "Yes, the South River bridge area on Riva Road is well within our range. If you're pulled over safely off the travel lanes, we can reach you. If you're stopped in an unsafe spot on the bridge itself, call for roadside assistance or police first.",
      },
    ],
  },
  {
    slug: "davidsonville-md",
    town: "Davidsonville",
    cityLabel: "Davidsonville, MD",
    driveTime: "typically about 15 minutes",
    metaDescription:
      "Mobile tire service in Davidsonville, MD along Route 214 and Route 424. Mayo RD brings flat repair and used tires to you. Call 240-595-8547 during shop hours.",
    intro: [
      "Davidsonville sits just west of us, and we reach it mainly along Route 214 (Central Avenue) and Route 424 (Davidsonville Road). From 175 Mayo Rd the trip is typically about 15 minutes, so if you catch a flat near the Route 214 and Route 424 crossroads, by the parks, or out on one of the rural stretches where a tow can take a long time to arrive, mobile service often makes the most sense.",
      "Davidsonville's roads are exactly the kind of place where being stranded is a headache — long distances between service, fewer places to safely pull off. If you're parked safely at home, at work, or in a lot, we can come change the tire or bring a replacement in your size so you're not waiting hours for help.",
    ],
    faqs: [
      {
        question: "Do you really drive out to Davidsonville?",
        answer:
          "Yes. Davidsonville is within our mobile range along Route 214 and Route 424, typically about 15 minutes from the shop. Because some Davidsonville addresses sit at the edge of our range, call first and we'll confirm we can reach you before dispatching.",
      },
      {
        question: "A tow will take forever out here — can you come faster?",
        answer:
          "That's exactly why drivers in Davidsonville call us. During shop hours we can often reach you faster than a general tow service, and we fix the tire on the spot instead of hauling your car somewhere. We'll always give you an honest arrival estimate up front.",
      },
      {
        question: "What if I'm past your normal range?",
        answer:
          "If you're a little farther out past Route 424, call anyway — we'll tell you honestly whether we can reach you and roughly how long it will take. If we can't get to you safely and quickly, we'll point you toward the best alternative.",
      },
    ],
  },
  {
    slug: "mayo-md",
    town: "Mayo",
    cityLabel: "Mayo, MD",
    driveTime: "typically about 10 minutes",
    metaDescription:
      "Flat tire on the Mayo Peninsula or near Beverly Beach? Mayo RD's mobile tire service comes to you, typically in about 10 minutes. Call 240-595-8547 during shop hours.",
    intro: [
      "Mayo is practically in our backyard. The shop is named for Mayo Road, and the Mayo Peninsula — down toward Beverly Beach, Loch Haven, and the communities along the South and Rhode rivers — is typically about 10 minutes away. If you've got a flat at home on the peninsula or you're loading up at the beach and find a tire down, we can come to you fast during shop hours.",
      "The peninsula's a place where a flat is especially inconvenient: it's a long, single way in and out, and nobody wants to risk driving on a bad tire all the way back up Mayo Road. Let us bring the fix to you — a flat change, a spare install, or a used tire in your size — so you can get back to your day.",
    ],
    faqs: [
      {
        question: "How quickly can you reach the Mayo Peninsula?",
        answer:
          "Mayo is one of our closest areas — typically about 10 minutes from the shop during business hours. Call us and we'll give you an honest arrival window before we head down the peninsula.",
      },
      {
        question: "Can you come to Beverly Beach?",
        answer:
          "Yes, Beverly Beach and the surrounding Mayo communities are well within our mobile range. If you're parked safely, we can change or replace your tire on location so you don't have to drive back up the peninsula on a bad tire.",
      },
      {
        question: "Do you carry a tire in my size for peninsula calls?",
        answer:
          "Often, yes. When you call, give us your tire size (it's on the sidewall, like 205/55R16) and we'll check our used and new stock before we head out, so we can bring the right tire with us whenever possible.",
      },
    ],
  },
]

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug)
}
