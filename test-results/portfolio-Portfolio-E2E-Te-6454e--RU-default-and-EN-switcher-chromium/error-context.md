# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.spec.ts >> Portfolio E2E Tests >> Localization - RU default and EN switcher
- Location: tests\portfolio.spec.ts:4:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Artem Mikhailov"
Error: strict mode violation: locator('h1') resolved to 2 elements:
    1) <h1 class="max-w-4xl font-display text-balance text-[2.75rem] font-bold leading-[0.9] sm:text-7xl lg:text-[5.75rem]">…</h1> aka getByRole('heading', { name: 'Artem Mikhailov' })
    2) <h1 class="max-w-4xl font-display text-balance text-[2.75rem] font-bold leading-[0.9] sm:text-7xl lg:text-[5.75rem]">…</h1> aka locator('h1').filter({ hasText: 'Артём Михайлов' })

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e3]:
    - navigation [ref=e6]:
      - link "AM Artem Mikhailov Frontend" [ref=e7] [cursor=pointer]:
        - /url: /en
        - generic [ref=e9]: AM
        - generic [ref=e11]:
          - generic [ref=e12]: Artem Mikhailov
          - generic [ref=e13]: Frontend
      - generic [ref=e14]:
        - link "About" [ref=e15] [cursor=pointer]:
          - /url: "#about"
          - text: About
        - link "Skills" [ref=e16] [cursor=pointer]:
          - /url: "#skills"
          - text: Skills
        - link "Projects" [ref=e17] [cursor=pointer]:
          - /url: "#projects"
          - text: Projects
        - link "Education" [ref=e18] [cursor=pointer]:
          - /url: "#education"
          - text: Education
        - link "Languages" [ref=e19] [cursor=pointer]:
          - /url: "#languages"
          - text: Languages
        - link "Contact" [ref=e20] [cursor=pointer]:
          - /url: "#contact"
          - text: Contact
      - generic [ref=e21]:
        - link "Download CV" [ref=e22] [cursor=pointer]:
          - /url: /cv.pdf
          - img [ref=e23]
          - text: Download CV
        - link "Русская версия" [ref=e25] [cursor=pointer]:
          - /url: /
          - generic [ref=e26]: EN
          - generic [ref=e27]: /
          - generic [ref=e28]: RU
        - button "Toggle theme" [ref=e29]:
          - img [ref=e30]
  - main [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e38]: Open to work and internships
          - paragraph [ref=e43]: Frontend developer who thinks about the product
          - heading "Artem Mikhailov" [level=1] [ref=e45]
          - generic [ref=e47]:
            - generic [ref=e48]: Next.js · React · TypeScript
            - generic [ref=e50]: clean implementation · clear communication · attention to detail
          - paragraph [ref=e52]:
            - text: speed
            - generic [ref=e53]: .trust
            - generic [ref=e54]: .result
          - paragraph [ref=e56]: I turn a design, idea or business task into a polished, fast and usable interface. I work with Next.js and keep SEO, responsiveness, accessibility and visual trust in focus.
          - generic [ref=e58]:
            - link "See what I have built" [ref=e59] [cursor=pointer]:
              - /url: "#projects"
            - link "Discuss work" [ref=e60] [cursor=pointer]:
              - /url: "#contact"
          - generic [ref=e62]:
            - img [ref=e63]
            - text: Prague, Czechia
        - generic [ref=e67]:
          - img "Artem Mikhailov Portrait" [ref=e68]
          - generic [ref=e71]:
            - generic [ref=e73]: Candidate / 2026
            - heading "Responsible frontend without chaos" [level=3] [ref=e76]
            - generic [ref=e77]:
              - generic [ref=e78]: Quality
              - generic [ref=e79]: Timing
              - generic [ref=e80]: Team
            - generic [ref=e81]:
              - generic [ref=e82]:
                - generic [ref=e83]: Stack
                - generic [ref=e84]: Next.js / React
              - generic [ref=e85]:
                - generic [ref=e86]: Base
                - generic [ref=e87]: Prague, Czechia
      - generic [ref=e89]:
        - generic [ref=e90]: NEXT.JS • REACT • TYPESCRIPT • RELIABLE FRONTEND • SEO • ACCESSIBILITY • RESPONSIVE UI • CLEAN UI •
        - generic [ref=e91]: NEXT.JS • REACT • TYPESCRIPT • RELIABLE FRONTEND • SEO • ACCESSIBILITY • RESPONSIVE UI • CLEAN UI •
        - generic [ref=e92]: NEXT.JS • REACT • TYPESCRIPT • RELIABLE FRONTEND • SEO • ACCESSIBILITY • RESPONSIVE UI • CLEAN UI •
        - generic [ref=e93]: NEXT.JS • REACT • TYPESCRIPT • RELIABLE FRONTEND • SEO • ACCESSIBILITY • RESPONSIVE UI • CLEAN UI •
        - generic [ref=e94]: NEXT.JS • REACT • TYPESCRIPT • RELIABLE FRONTEND • SEO • ACCESSIBILITY • RESPONSIVE UI • CLEAN UI •
        - generic [ref=e95]: NEXT.JS • REACT • TYPESCRIPT • RELIABLE FRONTEND • SEO • ACCESSIBILITY • RESPONSIVE UI • CLEAN UI •
      - link "Scroll down" [ref=e96] [cursor=pointer]:
        - /url: "#about"
        - text: Scroll down
        - img [ref=e97]
    - generic [ref=e101]:
      - generic [ref=e102]:
        - generic [ref=e103]:
          - generic [ref=e104]: "01"
          - heading "Why you can trust me with frontend" [level=2] [ref=e106]
        - generic [ref=e107]:
          - paragraph [ref=e108]: I do not just assemble pages from components — I try to understand the task, the user and the result the business needs.
          - generic [ref=e109]:
            - paragraph [ref=e110]: My focus is on interfaces that load quickly, guide the user clearly and look professional on every device. I work with Next.js, React, TypeScript and Tailwind CSS.
            - paragraph [ref=e111]: I pay attention to page structure, form states, responsive behavior, basic SEO, accessibility and code clarity. That reduces rework and makes the project easier to support.
            - paragraph [ref=e112]: I graduated from an IT school in Prague in the “Softwarové aplikace a programování” program. I communicate in Russian, Czech and English, so I can work smoothly with international teams, clients and users.
      - generic [ref=e113]:
        - generic [ref=e116]:
          - term [ref=e117]: Shipped projects
          - definition [ref=e118]: "0"
        - generic [ref=e121]:
          - term [ref=e122]: Years in IT environment
          - definition [ref=e123]: "0"
        - generic [ref=e126]:
          - term [ref=e127]: Working languages
          - definition [ref=e128]: "0"
    - generic [ref=e130]:
      - generic [ref=e131]:
        - generic [ref=e132]: "02"
        - heading "What I bring to a team" [level=2] [ref=e134]
        - paragraph [ref=e135]: A practical skill set for building, improving and maintaining web interfaces
      - generic [ref=e136]:
        - generic [ref=e139]:
          - generic [ref=e140]:
            - img [ref=e142]
            - heading "Quality frontend" [level=3] [ref=e144]
          - list [ref=e145]:
            - listitem [ref=e146]: Next.js
            - listitem [ref=e147]: React
            - listitem [ref=e148]: TypeScript
            - listitem [ref=e149]: JavaScript
            - listitem [ref=e150]: Tailwind CSS
            - listitem [ref=e151]: HTML5
            - listitem [ref=e152]: CSS3
        - generic [ref=e155]:
          - generic [ref=e156]:
            - img [ref=e158]
            - heading "Integrations & data" [level=3] [ref=e162]
          - list [ref=e163]:
            - listitem [ref=e164]: Node.js
            - listitem [ref=e165]: REST API
            - listitem [ref=e166]: SQL
            - listitem [ref=e167]: Databases
        - generic [ref=e170]:
          - generic [ref=e171]:
            - img [ref=e173]
            - heading "Engineering approach" [level=3] [ref=e175]
          - list [ref=e176]:
            - listitem [ref=e177]: Git
            - listitem [ref=e178]: SEO
            - listitem [ref=e179]: Responsive design
            - listitem [ref=e180]: Accessibility
            - listitem [ref=e181]: UI / UX
    - generic [ref=e183]:
      - generic [ref=e184]:
        - generic [ref=e185]: "03"
        - heading "Projects that show my approach" [level=2] [ref=e187]
        - paragraph [ref=e188]: "Different industries, one goal: clear interfaces, solid structure and trust from the first screen"
      - generic [ref=e189]:
        - button "All" [ref=e190]
        - button "Healthcare" [ref=e191]
        - button "Travel" [ref=e192]
        - button "Barbershop" [ref=e193]
        - button "Sports betting" [ref=e194]
        - button "Dental clinic" [ref=e195]
        - button "Creative & Artist" [ref=e196]
        - button "Photography" [ref=e197]
      - paragraph [ref=e198]: 8 projects
      - generic [ref=e199]:
        - generic [ref=e205]:
          - generic [ref=e206]:
            - generic [ref=e210]:
              - generic [ref=e216]: Creative & Artist
              - img "VK — Vision Kraft thumbnail" [ref=e219]
            - generic [ref=e229]:
              - img [ref=e230]
              - text: Key project
          - generic [ref=e232]:
            - generic [ref=e233]:
              - generic [ref=e234]: Next.js
              - generic [ref=e235]: TypeScript
              - generic [ref=e236]: Framer Motion
              - generic [ref=e237]: i18n
              - generic [ref=e238]: Parallax
            - heading "VK — Vision Kraft" [level=3] [ref=e239]
            - paragraph [ref=e240]: A premium multidisciplinary portfolio for VK — a photographer, techno DJ, fashion designer and model based in Berlin and Prague. Full-screen parallax hero, scroll-triggered animations, photo gallery with lightbox, career timeline, music section with SoundCloud integration, and booking form. Built with Next.js and Framer Motion.
            - generic [ref=e241]:
              - generic [ref=e242]: "96"
              - generic [ref=e244]: Lighthouse
            - generic [ref=e245]:
              - button "Case Study →" [ref=e246] [cursor=pointer]:
                - text: Case Study
                - generic [ref=e247]: →
              - link "View result" [ref=e248] [cursor=pointer]:
                - /url: https://neo-sigma-ruby.vercel.app/
                - text: View result
                - img [ref=e249]
        - generic [ref=e251]:
          - generic [ref=e256]:
            - generic [ref=e261]:
              - generic [ref=e267]: Creative & Artist
              - img "Nova Koval thumbnail" [ref=e270]
            - generic [ref=e280]:
              - heading "Nova Koval" [level=3] [ref=e281]
              - paragraph [ref=e282]: A bold creative portfolio for Nova Koval — a Prague-based photographer, DJ, producer and model director. Features a photography gallery with category filtering, music releases with audio previews, a model roster with stats, and a comprehensive booking form. Built with vanilla JS and advanced CSS.
              - generic [ref=e283]:
                - generic [ref=e284]: Vanilla JS
                - generic [ref=e285]: CSS3
                - generic [ref=e286]: Lightbox
                - generic [ref=e287]: Filtering
                - generic [ref=e288]: Audio
              - generic [ref=e289]:
                - generic [ref=e290]: "100"
                - generic [ref=e292]: Lighthouse
              - generic [ref=e293]:
                - button "Case Study →" [ref=e294] [cursor=pointer]:
                  - text: Case Study
                  - generic [ref=e295]: →
                - link "View result" [ref=e296] [cursor=pointer]:
                  - /url: https://r-avematej.vercel.app/
                  - text: View result
                  - img [ref=e297]
          - generic [ref=e303]:
            - generic [ref=e308]:
              - generic [ref=e314]: Photography
              - img "Markéta Photography thumbnail" [ref=e317]
            - generic [ref=e327]:
              - heading "Markéta Photography" [level=3] [ref=e328]
              - paragraph [ref=e329]: An editorial photography portfolio for Markéta, designed as a digital memory archive. Features curated photo series displayed as magazine spreads rather than grid tiles, parallax scrolling frames, custom cursor interactions, and bilingual support. Warm cream aesthetic with serif typography.
              - generic [ref=e330]:
                - generic [ref=e331]: i18n
                - generic [ref=e332]: CSS Grid
                - generic [ref=e333]: Lazy Loading
                - generic [ref=e334]: Parallax
                - generic [ref=e335]: Gallery
              - generic [ref=e336]:
                - generic [ref=e337]: "99"
                - generic [ref=e339]: Lighthouse
              - generic [ref=e340]:
                - button "Case Study →" [ref=e341] [cursor=pointer]:
                  - text: Case Study
                  - generic [ref=e342]: →
                - link "View result" [ref=e343] [cursor=pointer]:
                  - /url: https://fotogal.vercel.app/
                  - text: View result
                  - img [ref=e344]
          - generic [ref=e350]:
            - generic [ref=e355]:
              - generic [ref=e361]: Barbershop
              - img "Barbershop Iron & Steel thumbnail" [ref=e364]
            - generic [ref=e374]:
              - heading "Barbershop Iron & Steel" [level=3] [ref=e375]
              - paragraph [ref=e376]: A premium barbershop landing page with services, barbers, pricing and online booking. The goal was to communicate the brand quickly, remove friction and lead the user toward a reservation.
              - generic [ref=e377]:
                - generic [ref=e378]: Next.js
                - generic [ref=e379]: React
                - generic [ref=e380]: Tailwind
              - generic [ref=e381]:
                - generic [ref=e382]: "100"
                - generic [ref=e384]: Lighthouse
              - generic [ref=e385]:
                - button "Case Study →" [ref=e386] [cursor=pointer]:
                  - text: Case Study
                  - generic [ref=e387]: →
                - link "View result" [ref=e388] [cursor=pointer]:
                  - /url: https://barber-am.vercel.app/
                  - text: View result
                  - img [ref=e389]
          - generic [ref=e395]:
            - generic [ref=e400]:
              - generic [ref=e406]: Healthcare
              - img "Rehabilitation Center in Almaty thumbnail" [ref=e409]
            - generic [ref=e419]:
              - heading "Rehabilitation Center in Almaty" [level=3] [ref=e420]
              - paragraph [ref=e421]: "A multi-page rehabilitation center website where trust matters: treatment programs, doctors, documents, reviews, FAQ, pricing and a request form. I built clear navigation, a careful page structure and an SEO foundation so visitors can quickly find the information they need."
              - generic [ref=e422]:
                - generic [ref=e423]: Next.js
                - generic [ref=e424]: TypeScript
                - generic [ref=e425]: SEO
                - generic [ref=e426]: Routing
                - generic [ref=e427]: Tailwind
              - generic [ref=e428]:
                - generic [ref=e429]: "98"
                - generic [ref=e431]: Lighthouse
              - generic [ref=e432]:
                - button "Case Study →" [ref=e433] [cursor=pointer]:
                  - text: Case Study
                  - generic [ref=e434]: →
                - link "View result" [ref=e435] [cursor=pointer]:
                  - /url: https://reba-eight.vercel.app/
                  - text: View result
                  - img [ref=e436]
          - generic [ref=e442]:
            - generic [ref=e447]:
              - generic [ref=e453]: Travel
              - img "SecretTravel thumbnail" [ref=e456]
            - generic [ref=e466]:
              - heading "SecretTravel" [level=3] [ref=e467]
              - paragraph [ref=e468]: A concierge service for booking hotels, flights and tours. I created RU/EN content flow, a clear request path, pricing blocks, FAQ and crypto payment support so the service feels premium and transparent.
              - generic [ref=e469]:
                - generic [ref=e470]: Next.js
                - generic [ref=e471]: TypeScript
                - generic [ref=e472]: Tailwind
                - generic [ref=e473]: Animation
                - generic [ref=e474]: Crypto
              - generic [ref=e475]:
                - generic [ref=e476]: "99"
                - generic [ref=e478]: Lighthouse
              - generic [ref=e479]:
                - button "Case Study →" [ref=e480] [cursor=pointer]:
                  - text: Case Study
                  - generic [ref=e481]: →
                - link "View result" [ref=e482] [cursor=pointer]:
                  - /url: https://secrettravel.vercel.app/
                  - text: View result
                  - img [ref=e483]
          - generic [ref=e489]:
            - generic [ref=e494]:
              - generic [ref=e500]: Sports betting
              - img "BETZ Sportsbook thumbnail" [ref=e503]
            - generic [ref=e513]:
              - heading "BETZ Sportsbook" [level=3] [ref=e514]
              - paragraph [ref=e515]: A sports platform interface with matches, events and live odds. This type of product needs dense data presentation, clear hierarchy and fast access to key actions.
              - generic [ref=e516]:
                - generic [ref=e517]: Next.js
                - generic [ref=e518]: React
                - generic [ref=e519]: Real-time
              - generic [ref=e520]:
                - generic [ref=e521]: "95"
                - generic [ref=e523]: Lighthouse
              - generic [ref=e524]:
                - button "Case Study →" [ref=e525] [cursor=pointer]:
                  - text: Case Study
                  - generic [ref=e526]: →
                - link "View result" [ref=e527] [cursor=pointer]:
                  - /url: https://bwin-1x.vercel.app/
                  - text: View result
                  - img [ref=e528]
          - generic [ref=e534]:
            - generic [ref=e539]:
              - generic [ref=e545]: Dental clinic
              - img "Vakalova Dental thumbnail" [ref=e548]
            - generic [ref=e558]:
              - heading "Vakalova Dental" [level=3] [ref=e559]
              - paragraph [ref=e560]: A dental clinic website where the interface needs to feel calm and reliable. I structured services, doctor profiles and appointment booking so a patient can make a decision easily.
              - generic [ref=e561]:
                - generic [ref=e562]: Next.js
                - generic [ref=e563]: TypeScript
                - generic [ref=e564]: UI/UX
              - generic [ref=e565]:
                - generic [ref=e566]: "97"
                - generic [ref=e568]: Lighthouse
              - generic [ref=e569]:
                - button "Case Study →" [ref=e570] [cursor=pointer]:
                  - text: Case Study
                  - generic [ref=e571]: →
                - link "View result" [ref=e572] [cursor=pointer]:
                  - /url: https://dental-clinic-vakalova.vercel.app/
                  - text: View result
                  - img [ref=e573]
    - generic [ref=e576]:
      - generic [ref=e577]:
        - generic [ref=e578]: "04"
        - heading "Education that gave me a practical foundation" [level=2] [ref=e580]
      - generic [ref=e581]:
        - generic [ref=e585]:
          - img [ref=e587]
          - generic [ref=e590]:
            - generic [ref=e591]:
              - generic [ref=e592]: Graduated
              - generic [ref=e593]: 2019 — 2023
            - heading "Maturita · Information Technology and Software Development" [level=3] [ref=e594]
            - generic [ref=e595]:
              - paragraph [ref=e596]: VOŠIS a SŠEMI
              - paragraph [ref=e597]: Vyšší odborná škola informačních studií and Střední škola elektrotechniky, multimédií a informatiky
            - generic [ref=e598]:
              - generic [ref=e599]:
                - term [ref=e600]: Program
                - definition [ref=e601]: Softwarové aplikace a programování
              - generic [ref=e602]:
                - term [ref=e603]: Location
                - definition [ref=e604]: Prague 9, Czechia
            - paragraph [ref=e605]: "A practical IT program focused on programming, databases, web development and software product structure. It gave me more than theory: it trained me to approach tasks systematically, from data structure and application logic to interfaces people can actually use."
        - generic [ref=e606]:
          - heading "Chronological Milestones" [level=4] [ref=e607]: Chronological Milestones
          - paragraph [ref=e609]: "* Click on any milestone to view detailed achievements."
          - generic [ref=e611]:
            - generic [ref=e613]:
              - button [ref=e614] [cursor=pointer]
              - generic [ref=e616] [cursor=pointer]:
                - generic [ref=e617]: "2019"
                - heading "IT Education Journey Began" [level=5] [ref=e618]
            - generic [ref=e620]:
              - button [ref=e621] [cursor=pointer]
              - generic [ref=e623] [cursor=pointer]:
                - generic [ref=e624]: "2021"
                - heading "Exploring Frontend Ecosystems" [level=5] [ref=e625]
            - generic [ref=e627]:
              - button [ref=e628] [cursor=pointer]
              - generic [ref=e630] [cursor=pointer]:
                - generic [ref=e631]: "2023"
                - heading "Graduation & Maturita Exam" [level=5] [ref=e632]
            - generic [ref=e634]:
              - button [ref=e635] [cursor=pointer]
              - generic [ref=e637] [cursor=pointer]:
                - generic [ref=e638]: "2024"
                - heading "Freelance & Production Portfolios" [level=5] [ref=e639]
            - generic [ref=e641]:
              - button [ref=e642] [cursor=pointer]
              - generic [ref=e644] [cursor=pointer]:
                - generic [ref=e645]: 2025-2026
                - heading "Real-time Apps & UI Portals" [level=5] [ref=e646]
              - paragraph [ref=e648]: Focused on high-performance frontend interfaces, real-time sports feed displays (BETZ), and medical booking solutions (Vakalova Dental).
    - generic [ref=e650]:
      - generic [ref=e651]:
        - generic [ref=e652]: "05"
        - heading "Client Testimonials" [level=2] [ref=e654]
        - paragraph [ref=e655]: Feedback from partners and businesses I worked with over the years
      - generic [ref=e659]:
        - generic [ref=e660]:
          - img
          - generic [ref=e661]:
            - blockquote [ref=e662]: “Artem delivered the project ahead of schedule. The clear navigation and structured medical programs helped build trust. Patients find it easy to book and find information.”
            - generic [ref=e663]:
              - generic [ref=e664]: E
              - generic [ref=e665]:
                - generic [ref=e666]: Elena Karimova
                - generic [ref=e667]: Director of Tauly-Zholy Center
          - generic:
            - blockquote: “The multilingual flow is seamless and loading speed is perfect. It made our boutique concierge service look high-end. Artem is extremely responsive.”
            - generic:
              - generic: M
              - generic:
                - generic: Maxim V.
                - generic: Founder of SecretTravel
          - generic:
            - blockquote: “Highly aesthetic and fast booking interface. It completely solved our client conversion issues. Great attention to details and responsiveness.”
            - generic:
              - generic: D
              - generic:
                - generic: Dmitry R.
                - generic: Owner of Iron & Steel Barbershop
        - generic [ref=e668]:
          - generic [ref=e669]:
            - button "Go to testimonial 1" [ref=e670] [cursor=pointer]
            - button "Go to testimonial 2" [ref=e671] [cursor=pointer]
            - button "Go to testimonial 3" [ref=e672] [cursor=pointer]
          - generic [ref=e673]:
            - button "Previous testimonial" [ref=e674] [cursor=pointer]: ←
            - button "Next testimonial" [ref=e675] [cursor=pointer]: →
    - generic [ref=e677]:
      - generic [ref=e678]:
        - generic [ref=e679]: "06"
        - heading "Communication" [level=2] [ref=e681]
        - paragraph [ref=e682]: I can work with Russian-speaking, Czech-speaking and English-speaking teams or clients
      - generic [ref=e683]:
        - generic [ref=e686]:
          - generic [ref=e687]:
            - heading "Russian" [level=3] [ref=e688]
            - generic [ref=e689]: Native
          - generic [ref=e690]:
            - 'progressbar "Russian: Native"'
          - paragraph [ref=e691]: Fluent communication, task discussion and documentation
        - generic [ref=e694]:
          - generic [ref=e695]:
            - heading "Czech" [level=3] [ref=e696]
            - generic [ref=e697]: B2
          - generic [ref=e698]:
            - 'progressbar "Czech: B2"'
          - paragraph [ref=e699]: 4 years studying in Prague, passed the maturita exam
        - generic [ref=e702]:
          - generic [ref=e703]:
            - heading "English" [level=3] [ref=e704]
            - generic [ref=e705]: B2
          - generic [ref=e706]:
            - 'progressbar "English: B2"'
          - paragraph [ref=e707]: Working communication, reading docs and discussing projects
    - generic [ref=e709]:
      - generic [ref=e710]:
        - generic [ref=e711]: "07"
        - heading "Interactive Developer Console" [level=2] [ref=e713]
        - paragraph [ref=e714]: Interact directly with my background using retro CLI commands
      - generic [ref=e717]:
        - generic [ref=e718]:
          - generic [ref=e723]: artem@mikhailov:~
          - generic [ref=e724]: IDE CONSOLE
        - generic [ref=e725]:
          - generic [ref=e726]: Welcome to Artem Mikhailov CLI v1.0.0. Type 'help' for a list of available commands.
          - generic [ref=e727]: Type 'help' to see all available commands.
          - generic [ref=e728]:
            - generic [ref=e729]: visitor@artem-mikhailov:~$
            - textbox "Type a command (e.g. help)..." [ref=e730]
    - generic [ref=e732]:
      - generic [ref=e733]:
        - generic [ref=e734]: "08"
        - heading "Let’s discuss how I can help" [level=2] [ref=e736]
        - paragraph [ref=e737]: Open to frontend roles, internships and project work. I reply quickly and clearly.
      - generic [ref=e738]:
        - generic [ref=e742]:
          - generic [ref=e743]:
            - generic [ref=e744]:
              - generic [ref=e745]: Name
              - textbox "Name Имя" [ref=e746]:
                - /placeholder: Your name
            - generic [ref=e747]:
              - generic [ref=e748]: Email
              - textbox "Email Email" [ref=e749]:
                - /placeholder: you@example.com
          - generic [ref=e750]:
            - generic [ref=e751]: "Quick message templates:"
            - generic [ref=e752]:
              - button "Job Opportunity" [ref=e753] [cursor=pointer]
              - button "Project Collaboration" [ref=e754] [cursor=pointer]
              - button "Say Hello" [ref=e755] [cursor=pointer]
          - generic [ref=e756]:
            - generic [ref=e757]: Message
            - textbox "Message Сообщение" [ref=e758]:
              - /placeholder: Tell me about the role, project or task…
          - button "Send message" [ref=e759] [cursor=pointer]:
            - img [ref=e760]
            - text: Send message
        - generic [ref=e766]:
          - paragraph [ref=e767]: Convenient contact channels
          - button "Email fear75412@gmail.com" [ref=e768] [cursor=pointer]:
            - generic [ref=e769]:
              - img [ref=e771]
              - generic [ref=e774]:
                - generic [ref=e775]: Email
                - generic [ref=e776]: fear75412@gmail.com
            - img [ref=e778]
          - list [ref=e781]:
            - listitem [ref=e782]:
              - link "Telegram @liltrafficRUS" [ref=e783] [cursor=pointer]:
                - /url: https://t.me/liltrafficRUS
                - img [ref=e785]
                - generic [ref=e787]:
                  - generic [ref=e788]: Telegram
                  - generic [ref=e789]: "@liltrafficRUS"
            - listitem [ref=e790]:
              - link "GitHub GitHub Profile" [ref=e791] [cursor=pointer]:
                - /url: https://github.com/akira777777
                - img [ref=e793]
                - generic [ref=e795]:
                  - generic [ref=e796]: GitHub
                  - generic [ref=e797]: GitHub Profile
  - contentinfo [ref=e798]:
    - generic [ref=e799]:
      - generic [ref=e800]:
        - paragraph [ref=e801]: Artem Mikhailov
        - paragraph [ref=e802]: © 2026 Artem Mikhailov. All rights reserved.
        - paragraph [ref=e803]: Portfolio built with Next.js, React and Tailwind CSS.
      - generic [ref=e804]:
        - link "fear75412@gmail.com" [ref=e805] [cursor=pointer]:
          - /url: mailto:fear75412@gmail.com
        - link "Back to top" [ref=e806] [cursor=pointer]:
          - /url: "#hero"
          - img [ref=e807]
          - text: Back to top
  - alert [ref=e809]: Artem Mikhailov — Frontend Developer you can trust with the interface
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Portfolio E2E Tests", () => {
  4  |   test("Localization - RU default and EN switcher", async ({ page }) => {
  5  |     // Visit home page (RU default)
  6  |     await page.goto("/");
  7  |     await page.waitForSelector("html[data-hydrated='true']");
  8  |     await expect(page).toHaveTitle(/Артём Михайлов/);
  9  |     
  10 |     // Look for RU header descriptor
  11 |     const heroTitleRu = page.locator("h1");
  12 |     await expect(heroTitleRu).toContainText("Артём Михайлов");
  13 | 
  14 |     // Click language switcher (EN)
  15 |     const switcher = page.locator("a[aria-label='English version']");
  16 |     await expect(switcher).toBeVisible();
  17 |     await switcher.click();
  18 | 
  19 |     // Verify redirect to /en and content changes to English
  20 |     await page.waitForURL("**/en");
  21 |     await page.waitForSelector("html[data-hydrated='true']");
  22 |     await expect(page).toHaveTitle(/Artem Mikhailov/);
  23 |     const heroTitleEn = page.locator("h1");
> 24 |     await expect(heroTitleEn).toContainText("Artem Mikhailov");
     |                               ^ Error: expect(locator).toContainText(expected) failed
  25 |   });
  26 | 
  27 |   test("Theme Toggle - light and dark modes", async ({ page }) => {
  28 |     await page.goto("/");
  29 |     await page.waitForSelector("html[data-hydrated='true']");
  30 |     
  31 |     // Default theme should be dark (has 'dark' class on html)
  32 |     const html = page.locator("html");
  33 |     await expect(html).toHaveClass(/dark/);
  34 | 
  35 |     // Toggle theme to light
  36 |     const themeToggle = page.locator("button[title='Переключить тему']");
  37 |     await expect(themeToggle).toBeVisible();
  38 |     await themeToggle.click();
  39 | 
  40 |     // 'dark' class should be removed
  41 |     await expect(html).not.toHaveClass(/dark/);
  42 | 
  43 |     // Toggle theme back to dark
  44 |     await themeToggle.click();
  45 |     await expect(html).toHaveClass(/dark/);
  46 |   });
  47 | 
  48 |   test("Terminal Console commands", async ({ page }) => {
  49 |     await page.goto("/");
  50 |     await page.waitForSelector("html[data-hydrated='true']");
  51 | 
  52 |     const terminalInput = page.locator("input[placeholder*='Введите команду']");
  53 |     await expect(terminalInput).toBeVisible();
  54 | 
  55 |     // Run help command
  56 |     await terminalInput.fill("help");
  57 |     await terminalInput.press("Enter");
  58 | 
  59 |     // Verify output
  60 |     const terminalLogs = page.locator("#terminal-section");
  61 |     await expect(terminalLogs).toContainText("Доступные команды");
  62 | 
  63 |     // Run crt command and verify active classes are applied
  64 |     await terminalInput.fill("crt");
  65 |     await terminalInput.press("Enter");
  66 |     
  67 |     const glowCard = page.locator("#terminal-section .crt-active");
  68 |     await expect(glowCard).toBeVisible();
  69 | 
  70 |     // Run clear command and verify logs are cleared
  71 |     await terminalInput.fill("clear");
  72 |     await terminalInput.press("Enter");
  73 |     await expect(terminalLogs).not.toContainText("Доступные команды");
  74 |   });
  75 | });
  76 | 
```