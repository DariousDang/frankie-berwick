const favourites = [
  {
    number: "01",
    name: "The Monster",
    price: "$19",
    description:
      "Beef patty, chicken schnitzel, double cheese, lettuce, tomato, red onion, aioli and BBQ sauce.",
    note: "Frankie’s special",
  },
  {
    number: "02",
    name: "The Lot",
    price: "$17",
    description:
      "Beef patty, fried egg, bacon, pineapple, cheese, lettuce, tomato, red onion, Frankie’s mayo and ketchup.",
    note: "Gluten-free option",
  },
  {
    number: "03",
    name: "The Schnitty",
    price: "$15",
    description:
      "Chicken schnitzel, cheese, bacon, lettuce, coleslaw and aioli.",
    note: "Crowd favourite",
  },
  {
    number: "04",
    name: "The Porky",
    price: "$17",
    description:
      "Slow-cooked pulled pork, cheese, lettuce, coleslaw, spring onion and spicy mayo.",
    note: "Gluten-free option",
  },
  {
    number: "05",
    name: "Vietnamese Crispy Pork Roll",
    price: "$14",
    description:
      "Crispy pork, Vietnamese pâté, cucumber, carrot, lettuce, spring onion, caramelised onion and hoisin sauce.",
    note: "Crispy pork",
  },
  {
    number: "06",
    name: "The Velvet",
    price: "$16",
    description:
      "Double croquette, double cheese, lettuce, carrot, cabbage and aioli.",
    note: "Vegetarian",
  },
];

const drinks = [
  ["Espresso", "$3"],
  ["Long black", "from $5"],
  ["Latte", "from $5"],
  ["Cappuccino", "from $5"],
  ["Iced coffee", "$8.50"],
  ["Bubble tea", "from $7"],
  ["Milkshakes", "from $7"],
  ["Smoothies", "from $7.50"],
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Frankies+Cafe+Eden+Rise+Village+Berwick";

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="service-strip">
        <p>Open 7 days at Eden Rise Village</p>
        <p className="service-strip-desktop">Lunch &amp; dinner, 12 pm to 8 pm</p>
        <a href="tel:+61387868405">03 8786 8405</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Frankie’s Berwick home">
          <span>Frankie’s</span>
          <small>Berwick</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#favourites">Favourites</a>
          <a href="#menus">Menus</a>
          <a href="#our-place">Our place</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="order-button" href="tel:+61387868405">
          Call to order <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-one">Café · burgers · takeaway</p>
            <h1 id="hero-title" className="reveal reveal-two">
              Big bites.<br />
              <span>Good coffee.</span>
              <br />Zero fuss.
            </h1>
            <p className="hero-intro reveal reveal-three">
              Frankie’s is Berwick’s easygoing stop for stacked burgers, café favourites and coffee made for the road.
            </p>
            <div className="hero-actions reveal reveal-four">
              <a className="button button-orange" href="#favourites">
                Find your favourite
              </a>
              <a className="underlined-link" href={mapUrl} target="_blank" rel="noreferrer">
                Get directions <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-image">
            <img
              src="/burger-hero.png"
              alt="A loaded beef burger with cheese and salad, hot chips and a takeaway coffee"
            />
            <div className="hero-badge" aria-hidden="true">
              <span>Made for</span>
              <strong>BIG</strong>
              <span>appetites</span>
            </div>
            <div className="hero-caption">
              <span>Lunch &amp; dinner</span>
              <strong>12–8 daily</strong>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Frankie’s highlights">
          <span>Burgers worth the detour</span>
          <b aria-hidden="true">✦</b>
          <span>Coffee done properly</span>
          <b aria-hidden="true">✦</b>
          <span>Call ahead, pick up easy</span>
          <b aria-hidden="true">✦</b>
          <span>Right here in Berwick</span>
        </div>

        <section className="favourites-section" id="favourites" aria-labelledby="favourites-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Frankie’s favourites</p>
              <h2 id="favourites-title">Come hungry.</h2>
            </div>
            <p>
              Beef, schnitzel, pulled pork and proper veggie choices. Every burger is packed to order and built to satisfy.
            </p>
          </div>

          <div className="favourites-layout">
            <div className="favourites-list">
              {favourites.map((item) => (
                <article className="favourite" key={item.name}>
                  <span className="favourite-number" aria-hidden="true">{item.number}</span>
                  <div className="favourite-copy">
                    <div className="favourite-title">
                      <h3>{item.name}</h3>
                      <strong>{item.price}</strong>
                    </div>
                    <p>{item.description}</p>
                    <span className="menu-note">{item.note}</span>
                  </div>
                </article>
              ))}
            </div>

            <aside className="coffee-board" aria-labelledby="coffee-title">
              <div className="coffee-board-top">
                <p>From the coffee bar</p>
                <span>Hot · iced · fun</span>
              </div>
              <h3 id="coffee-title">Your usual?</h3>
              <div className="drink-list">
                {drinks.map(([name, price]) => (
                  <div key={name}>
                    <span>{name}</span>
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>
              <p className="board-fineprint">
                Alternative milk and flavour shots are available for $1 extra.
              </p>
            </aside>
          </div>
        </section>

        <section className="menu-section" id="menus" aria-labelledby="menus-title">
          <div className="menu-heading">
            <p className="eyebrow">The full line-up</p>
            <h2 id="menus-title">Two menus.<br />Plenty of reasons.</h2>
            <p>
              Open either menu to browse every item and price, then give us a call when you’re ready.
            </p>
          </div>

          <div className="menu-folds">
            <details className="menu-fold">
              <summary>
                <span className="menu-index">01</span>
                <span className="menu-name">Lunch &amp; dinner</span>
                <span className="menu-action">Open menu <b aria-hidden="true">＋</b></span>
              </summary>
              <div className="menu-sheet">
                <img
                  src="/burger-menu.jpg"
                  alt="Frankie’s lunch and dinner menu with burgers, specials, vegetarian choices, sides and add-ons"
                  loading="lazy"
                />
                <a href="/burger-menu.jpg" target="_blank" rel="noreferrer">
                  View full size <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>

            <details className="menu-fold">
              <summary>
                <span className="menu-index">02</span>
                <span className="menu-name">Coffee &amp; café</span>
                <span className="menu-action">Open menu <b aria-hidden="true">＋</b></span>
              </summary>
              <div className="menu-sheet">
                <img
                  src="/coffee-menu.jpg"
                  alt="Frankie’s coffee and café menu with hot and iced drinks, tea, shakes, desserts and café food"
                  loading="lazy"
                />
                <a href="/coffee-menu.jpg" target="_blank" rel="noreferrer">
                  View full size <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
          </div>

          <p className="dietary-copy">
            Gluten-free and vegan options are available for $2 extra. Please tell the team about allergies when ordering.
          </p>
        </section>

        <section className="callout" aria-label="Call ahead for takeaway">
          <p>Short on time?</p>
          <h2>Call ahead.<br />We’ll get it going.</h2>
          <a className="button button-cream" href="tel:+61387868405">
            Call 03 8786 8405
          </a>
          <div className="callout-mark" aria-hidden="true">F</div>
        </section>

        <section className="story-section" id="our-place" aria-labelledby="story-title">
          <div className="story-lead">
            <p className="eyebrow">Your neighbourhood stop</p>
            <h2 id="story-title">Made for real days.</h2>
          </div>
          <div className="story-body">
            <p className="story-intro">
              Morning coffee, a quick lunch, an after-school bite or burgers for dinner. Frankie’s keeps it friendly, flexible and full of flavour.
            </p>
            <div className="story-points">
              <div>
                <span>01</span>
                <h3>Easy takeaway</h3>
                <p>Call ahead, pick up and get on with your day.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Choices for the crew</h3>
                <p>Beef, chicken and vegetarian burgers, with vegan and gluten-free options.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Local, not corporate</h3>
                <p>A cheerful counter, familiar faces and the kind of food you actually feel like eating.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="visit-heading">
            <p className="eyebrow">Find Frankie’s</p>
            <h2 id="visit-title">Right around<br />the corner.</h2>
          </div>

          <div className="visit-details">
            <div>
              <p className="detail-label">Address</p>
              <p>Kiosk 1, Eden Rise Village<br />Clyde Road &amp; O’Shea Road<br />Berwick VIC 3806</p>
              <a className="underlined-link" href={mapUrl} target="_blank" rel="noreferrer">
                Open in maps <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div>
              <p className="detail-label">Kitchen hours</p>
              <p>Lunch &amp; dinner<br /><strong>12 pm to 8 pm, daily</strong></p>
              <p className="hours-note">Call ahead to confirm café hours before making a special trip.</p>
            </div>
            <div>
              <p className="detail-label">Call us</p>
              <a className="phone-number" href="tel:+61387868405">03 8786 8405</a>
              <p className="hours-note">Phone orders welcome.</p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span>Frankie’s</span>
          <small>Berwick</small>
        </a>
        <p>Good food. Good coffee. Good people.</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      <div className="mobile-actions" aria-label="Quick actions">
        <a href="#menus">View menus</a>
        <a href="tel:+61387868405">Call to order</a>
      </div>
    </main>
  );
}
