const foodHighlights = [
  {
    name: "Burger with the Lot",
    price: "$27",
    description:
      "Beef patty, bacon, chilli bacon jam, fried egg, onion, lettuce, cheese, tomato, pineapple, pickles and house sauce. Served with chips.",
    badge: "CGF",
  },
  {
    name: "Fried Chicken Burger",
    price: "$26",
    description:
      "Crispy fried chicken, bacon, lettuce, cheese, tomato, pickles and sriracha mayo. Served with chips.",
  },
  {
    name: "Saigon Breakfast Pan",
    price: "$28",
    description:
      "Vietnamese-style sizzling hotplate with sliced beef, a fried egg, chorizo, pâté, chips and homemade tomato sauce.",
    badge: "Frankie’s signature",
  },
  {
    name: "Banh Mi Taco",
    price: "$25",
    description:
      "Three soft tacos with fried chicken or tofu, butter, pâté, fresh salad, jalapeño, shallot and coriander.",
    badge: "CVG",
  },
  {
    name: "Smashed Avo",
    price: "$24",
    description:
      "Poached eggs, smashed avocado, beetroot hummus, feta, balsamic glaze, lemon and dukkah.",
    badge: "V · CVG · CGF",
  },
  {
    name: "Pulled Pork Loaded Chips",
    price: "$16",
    description:
      "Crispy chips, slow-cooked pulled pork, jalapeños, coriander, cheese sauce, barbecue sauce and mayo.",
  },
];

const drinks = [
  ["Salted Viet Iced Coffee", "$9"],
  ["Creamy Iced Matcha", "$9"],
  ["Strawberry Iced Matcha", "$9"],
  ["Coconut Cloud Matcha", "$9"],
  ["Blue Strawberry Soda", "$8"],
  ["Peach Iced Tea", "$8"],
  ["Milkshakes", "$8"],
  ["Smoothies", "$12"],
];

const hours = [
  ["Monday to Friday", "6:30am – 4pm"],
  ["Saturday", "7am – 3pm"],
  ["Sunday", "8am – 3pm"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Frankie’s Berwick home">
          <span>FRANKIE SAYS</span>
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
            Berwick’s easygoing stop for stacked burgers, bold brunch and a seriously good coffee.
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
            src="/brunch-spread.jpg"
            alt="A generous Frankie’s brunch spread with burgers, tacos, eggs, coffee and iced drinks"
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
        <span>Brunch all day</span>
      </div>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow">The good stuff</p>
          <h2>Come hungry.</h2>
          <p>Comfort-food favourites with a fresh Vietnamese twist, plus plenty for little Frankies.</p>
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
            <p className="coffee-note">Classic coffee starts at $3.50. Alternative milk, syrups and extra shots available.</p>
          </aside>
        </div>

        <div className="full-menu-block">
          <div>
            <p className="eyebrow">Everything on offer</p>
            <h3>See the full menus.</h3>
          </div>
          <div className="menu-downloads">
            <details>
              <summary>Food menu <span>View ↘</span></summary>
              <a href="/food-menu.webp" target="_blank" rel="noreferrer" aria-label="Open full food menu in a new tab">
                <img src="/food-menu.webp" alt="Frankie’s full food menu with all-day, lunch, dinner, kids, sides and add-ons" loading="lazy" />
              </a>
            </details>
            <details>
              <summary>Drinks menu <span>View ↘</span></summary>
              <a href="/drinks-menu.webp" target="_blank" rel="noreferrer" aria-label="Open full drinks menu in a new tab">
                <img src="/drinks-menu.webp" alt="Frankie’s drinks menu with coffee, non-coffee drinks, specials, smoothies and alcohol" loading="lazy" />
              </a>
            </details>
          </div>
          <p className="menu-fineprint">V: vegetarian · VG: vegan · CVG: can be vegan · CGF: can be gluten free. A 10% surcharge applies on weekends and a 1.15% card surcharge applies.</p>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-image-wrap">
          <img src="/cafe-interior.jpg" alt="Frankie’s light-filled cafe interior with warm timber tables" loading="lazy" />
          <span className="image-caption">Pull up a chair</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Your neighbourhood spot</p>
          <h2>Fast when you need it. Relaxed when you don’t.</h2>
          <p>
            Swing by for an early coffee, a late breakfast or lunch on the go. Frankie’s keeps things friendly, flexible and full of flavour, with takeaway favourites and options for a range of dietary needs.
          </p>
          <div className="story-points">
            <div><strong>Made for takeaway</strong><span>Call ahead and skip the wait.</span></div>
            <div><strong>Something for everyone</strong><span>Vegetarian, vegan and gluten-friendly choices.</span></div>
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
              <a className="text-link light" href="https://instagram.com/frankiesays" target="_blank" rel="noreferrer">@frankiesays ↗</a>
            </div>
          </div>
          <div className="hours">
            <p className="hours-label">Opening hours</p>
            {hours.map(([day, time]) => (
              <div key={day}><span>{day}</span><strong>{time}</strong></div>
            ))}
            <p className="holiday-note">Closed on Victorian public holidays. Hours can change, call ahead if you’re making a special trip.</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span>FRANKIE SAYS</span><small>BERWICK</small>
        </a>
        <p>Good food. Good coffee. Good people.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
