const foodHighlights = [
  {
    name: "The Monster",
    price: "$19",
    description:
      "Beef patty, chicken schnitzel, double cheese, lettuce, tomato, red onion, aioli and BBQ sauce.",
    badge: "Frankie’s special",
  },
  {
    name: "The Lot",
    price: "$17",
    description:
      "Beef patty, fried egg, bacon, pineapple, cheese, lettuce, tomato, red onion, Frankie’s mayo and ketchup.",
    badge: "GF option",
  },
  {
    name: "The Schmitty",
    price: "$15",
    description:
      "Chicken schnitzel, cheese, bacon, lettuce, coleslaw and aioli.",
  },
  {
    name: "The Porky",
    price: "$17",
    description:
      "Slow-cooked pulled pork, cheese, lettuce, coleslaw, spring onion and spicy mayo.",
    badge: "GF option",
  },
  {
    name: "Banh Mi Taco",
    price: "$15",
    description:
      "Beksul fried chicken or fried tofu, Vietnamese pâté, coleslaw, jalapeños, spring onion, lettuce, sriracha mayo and hoisin sauce.",
  },
  {
    name: "The Velvet",
    price: "$16",
    description:
      "Double croquette, double cheese, lettuce, carrot, cabbage and aioli.",
    badge: "Vegetarian",
  },
];

const drinks = [
  ["Long Black", "from $5"],
  ["Latte", "from $5"],
  ["Cappuccino", "from $5"],
  ["Mocha", "from $6"],
  ["Iced Coffee", "$8.50"],
  ["Bubble Tea", "from $7"],
  ["Milkshakes", "from $7"],
  ["Smoothies", "from $7.50"],
];

const hours = [
  ["Coffee & cafe", "Open daily"],
  ["Lunch & dinner", "12pm – 9pm"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Frankie’s Berwick home">
          <span>FRANKIE’S</span>
          <small>BERWICK</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our place</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-call" href="tel:+61387868405">
          Call to order <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Cafe · burgers · takeaway</p>
          <h1>Big flavour.<br />Good mood.</h1>
          <p className="hero-intro">
            Berwick’s easygoing stop for stacked burgers, cafe favourites and a seriously good coffee.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">See the menu</a>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Frankies+Cafe+Eden+Rise+Village+Berwick"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="open-note"><span aria-hidden="true" /> Open 7 days at Eden Rise Village</p>
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="/burger-hero.png"
            alt="A classic beef burger with cheese, salad and pickles, served with chips and takeaway coffee"
          />
          <div className="hero-sticker" aria-hidden="true">
            <span>LOCAL</span>
            <strong>FAVE</strong>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Frankie’s favourites">
        <span>Burgers worth the detour</span><b>✦</b>
        <span>Coffee done properly</span><b>✦</b>
        <span>Takeaway made easy</span><b>✦</b>
        <span>Lunch &amp; dinner 12–9</span>
      </div>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow">The good stuff</p>
          <h2>Come hungry.</h2>
          <p>Classic beef and chicken burgers, big Frankie’s specials, loaded fries and vegetarian choices.</p>
        </div>

        <div className="food-layout">
          <div className="food-list">
            {foodHighlights.map((item, index) => (
              <article className="menu-item" key={item.name}>
                <span className="item-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <div className="item-title-row">
                    <h3>{item.name}</h3>
                    <strong>{item.price}</strong>
                  </div>
                  <p>{item.description}</p>
                  {item.badge ? <span className="dietary">{item.badge}</span> : null}
                </div>
              </article>
            ))}
          </div>

          <aside className="drinks-panel" aria-labelledby="drinks-title">
            <p className="panel-kicker">From the bar</p>
            <h3 id="drinks-title">Sip something fun.</h3>
            <div className="drink-list">
              {drinks.map(([name, price]) => (
                <div key={name}><span>{name}</span><strong>{price}</strong></div>
              ))}
            </div>
            <p className="coffee-note">Espresso starts at $3. Alternative milk and flavour shots are available for $1 extra.</p>
          </aside>
        </div>

        <div className="full-menu-block">
          <div>
            <p className="eyebrow">Everything on offer</p>
            <h3>See the full menus.</h3>
          </div>
          <div className="menu-downloads">
            <details>
              <summary>Lunch &amp; dinner <span>View ↘</span></summary>
              <a href="/burger-menu.jpg" target="_blank" rel="noreferrer" aria-label="Open Frankie’s lunch and dinner menu in a new tab">
                <img src="/burger-menu.jpg" alt="Frankie’s lunch and dinner menu with beef burgers, chicken burgers, specials, vegetarian burgers, sides and add-ons" loading="lazy" />
              </a>
            </details>
            <details>
              <summary>Coffee &amp; cafe <span>View ↘</span></summary>
              <a href="/coffee-menu.jpg" target="_blank" rel="noreferrer" aria-label="Open Frankie’s coffee menu in a new tab">
                <img src="/coffee-menu.jpg" alt="Frankie’s coffee menu with hot and iced coffee, tea, bubble tea, milkshakes, smoothies, desserts and cafe food" loading="lazy" />
              </a>
            </details>
          </div>
          <p className="menu-fineprint">GF: gluten-free option · V: vegetarian. Gluten-free and vegan options are available for $2 extra. Please tell the team about any allergies when ordering.</p>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-poster" aria-hidden="true">
          <span>MADE</span>
          <strong>FRESH.</strong>
          <span>PACKED</span>
          <strong>FAST.</strong>
          <i>Berwick’s local stop</i>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Your neighbourhood spot</p>
          <h2>Fast when you need it. Relaxed when you don’t.</h2>
          <p>
            Swing by for coffee on the run, a quick lunch or a stacked burger for dinner. Frankie’s keeps things friendly, flexible and full of flavour, with takeaway favourites and options for a range of dietary needs.
          </p>
          <div className="story-points">
            <div><strong>Made for takeaway</strong><span>Call ahead and skip the wait.</span></div>
            <div><strong>Something for everyone</strong><span>Vegetarian, vegan-option and gluten-free-option choices.</span></div>
            <div><strong>Good company</strong><span>Friendly faces, warm service, zero fuss.</span></div>
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-topline">
          <p className="eyebrow">Find Frankie’s</p>
          <span>Berwick, Victoria</span>
        </div>
        <div className="visit-grid">
          <div className="visit-intro">
            <h2>See you soon?</h2>
            <p>Kiosk 1, Eden Rise Village<br />Clyde Road &amp; O’Shea Road<br />Berwick VIC 3806</p>
            <div className="visit-actions">
              <a className="button button-light" href="tel:+61387868405">03 8786 8405</a>
              <a className="text-link light" href="https://www.google.com/maps/search/?api=1&query=Frankies+Cafe+Eden+Rise+Village+Berwick" target="_blank" rel="noreferrer">Get directions ↗</a>
            </div>
          </div>
          <div className="hours">
            <p className="hours-label">Opening hours</p>
            {hours.map(([day, time]) => (
              <div key={day}><span>{day}</span><strong>{time}</strong></div>
            ))}
            <p className="holiday-note">The lunch and dinner menu states 12pm to 9pm. Call ahead to confirm daily trading hours before making a special trip.</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span>FRANKIE’S</span><small>BERWICK</small>
        </a>
        <p>Good food. Good coffee. Good people.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
