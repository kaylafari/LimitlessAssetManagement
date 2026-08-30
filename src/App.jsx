import { useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ArrowRight, BadgeCheck, CalendarCheck, CarFront, ChevronLeft, ChevronRight, CircleCheck, Clock3, Menu, Phone, Search, ShieldCheck, SlidersHorizontal, Sparkles, X } from "lucide-react";
import "./App.css";
import { cars } from "./inventory";

const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const navItems = [
  ["Home", "/"],
  ["Used Inventory", "/inventory"],
  ["Auto Broker", "/broker"],
  ["Financing", "/financing"],
  ["About Us", "/about"],
];

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [message, setMessage] = useState("");

  const requestDrive = () => {
    setMessage(
      "Thanks — a broker will follow up to arrange your preferred time.",
    );
    window.setTimeout(() => setMessage(""), 4500);
  };

  return (
    <div className="site-shell">
      <header className="header">
        <Link
          to="/"
          className="brand"
          aria-label="Limitless Asset Management home"
        >
          <span className="brand-mark">L</span>
          <span>
            <strong>LIMITLESS</strong>
            <em>ASSET MANAGEMENT</em>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <a className="call-link" href="tel:3107771026">
            <Phone size={16} /> (310) 777-1026
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="mobile-menu">
            {navItems.map(([label, to]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                {label}
                <ChevronRight size={18} />
              </NavLink>
            ))}
          </div>
        )}
      </header>
      <main key={location.pathname}>{children}</main>
      <section className="cta-band">
        <div>
          <span className="eyebrow">LET'S FIND YOUR NEXT DRIVE</span>
          <h2>Luxury should feel effortless.</h2>
        </div>
        <button className="button light" onClick={requestDrive}>
          Schedule a consultation <ArrowRight size={17} />
        </button>
      </section>
      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">L</span>
          <div>
            <strong>LIMITLESS ASSET MANAGEMENT</strong>
            <p>Thoughtful guidance for your next vehicle.</p>
          </div>
        </div>
        <div>
          <span className="footer-label">VISIT</span>
          <p>
            8885 Venice Blvd, Suite 200
            <br />
            Los Angeles, CA 90034
          </p>
        </div>
        <div>
          <span className="footer-label">HOURS</span>
          <p>
            Monday–Friday
            <br />
            9:00 AM–5:00 PM
          </p>
        </div>
        <div>
          <span className="footer-label">CONTACT</span>
          <p>Isaac Mizrahi</p>
          <a href="tel:3107771026">(310) 777-1026</a>
        </div>
      </footer>
      {message && (
        <div className="toast">
          <CircleCheck size={18} />
          {message}
        </div>
      )}
    </div>
  );
}

function PageHero({ eyebrow, title, copy, imageUrl }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(8,12,17,.86), rgba(8,12,17,.34)), url(${imageUrl})`,
      }}
    >
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

function CarCard({ car }) {
  const [activeImage, setActiveImage] = useState(0);
  const move = (direction) => setActiveImage((current) => (current + direction + car.images.length) % car.images.length);
  return (
    <article className="car-card">
      <div className="car-image">
        <img src={car.images[activeImage]} alt={`${car.name}, photo ${activeImage + 1} of ${car.images.length}`} loading="lazy" />
        <span>AVAILABLE</span>
        <div className="gallery-controls">
          <button type="button" aria-label={`Previous photo of ${car.name}`} onClick={() => move(-1)}><ChevronLeft size={18} /></button>
          <small>{activeImage + 1} / {car.images.length}</small>
          <button type="button" aria-label={`Next photo of ${car.name}`} onClick={() => move(1)}><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="car-info"><p>{car.body}</p><h3>{car.name}</h3><div><strong>Call for price</strong><span>{car.miles}</span></div><small className="vin">VIN {car.vin}</small><Link to="/financing" className="text-link">Explore options <ArrowRight size={16} /></Link></div>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">A BETTER WAY TO BUY</span>
          <h1>
            Drive something
            <br />
            <i>exceptional.</i>
          </h1>
          <p>
            Limitless Asset Management makes the search for your next vehicle
            clear, personal, and refreshingly uncomplicated.
          </p>
          <div className="hero-buttons">
            <Link className="button" to="/inventory">
              View available inventory <ArrowRight size={17} />
            </Link>
            <Link className="button ghost" to="/broker">
              How our brokerage works
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={image("photo-1492144534655-ae79c964c9d7")}
            alt="Luxury coupe in a desert landscape"
          />
          <div className="hero-detail">
            <Sparkles size={18} />
            <span>
              <strong>Curated, not crowded</strong>Hand-selected premium
              vehicles
            </span>
          </div>
        </div>
      </section>
      <section className="intro-section">
        <span className="eyebrow">THE LIMITLESS DIFFERENCE</span>
        <div className="split-heading">
          <h2>
            A broker who works
            <br />
            for <i>you.</i>
          </h2>
          <p>
            We pair considered vehicle sourcing with simple, honest guidance.
            From first conversation to final handoff, every detail is shaped
            around your needs—not a showroom quota.
          </p>
        </div>
        <div className="value-grid">
          <Value
            icon={<Search />}
            title="Curated sourcing"
            text="Tell us the car, color, mileage, and must-haves. We do the careful searching."
          />
          <Value
            icon={<ShieldCheck />}
            title="Clear confidence"
            text="Every vehicle receives a thoughtful review before it earns a place in our collection."
          />
          <Value
            icon={<CalendarCheck />}
            title="Easy ownership"
            text="Financing, trade-ins, and delivery are coordinated around your schedule."
          />
        </div>
      </section>
      <section className="featured">
        <div className="section-head">
          <div>
            <span className="eyebrow">FEATURED INVENTORY</span>
            <h2>In the driver's seat.</h2>
          </div>
          <Link className="text-link" to="/inventory">
            See all inventory <ArrowRight size={16} />
          </Link>
        </div>
        <div className="car-grid">
          {cars.slice(0, 3).map((car) => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>
      </section>
      <section className="editorial">
        <div className="editorial-image">
          <img
            src={image("photo-1503376780353-7e6692767b70")}
            alt="Sport coupe on an open road"
          />
        </div>
        <div className="editorial-copy">
          <span className="eyebrow">YOUR VEHICLE, YOUR TERMS</span>
          <h2>
            We make the details feel <i>simple.</i>
          </h2>
          <p>
            Whether you know exactly what you want or are just beginning to
            explore, our team creates a route that feels informed and entirely
            your own.
          </p>
          <Link className="button" to="/broker">
            Meet your broker <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Value({ icon, title, text }) {
  return (
    <article className="value-card">
      <div className="icon-wrap">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <ArrowRight size={18} />
    </article>
  );
}

function Inventory() {
  const [filter, setFilter] = useState("All vehicles");
  const filters = ["All vehicles", "SUVs", "Sedans", "Performance", "Electric", "Trucks"];
  const visibleCars = filter === "All vehicles" ? cars : cars.filter((car) => car.category === filter.slice(0, -1) || car.category === filter);
  return <><PageHero eyebrow="PRE-OWNED, REIMAGINED" title="Find your next favorite." copy="A rotating selection of late-model luxury, performance, and everyday-exceptional vehicles." imageUrl={image("photo-1504215680853-026ed2a45def")} /><section className="inventory-section"><div className="filter-row"><div className="filter-label"><SlidersHorizontal size={18} />Filter inventory</div>{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "filter active" : "filter"}>{item}</button>)}</div><p className="results-copy">Showing {visibleCars.length} thoughtfully selected vehicles</p><div className="car-grid inventory-grid">{visibleCars.map((car) => <CarCard key={car.vin} car={car} />)}</div></section></>;
}

function Broker() {
  return (
    <>
      <PageHero
        eyebrow="WHY USE A BROKER"
        title="The search should be the easy part."
        copy="Our process brings focus, access, and clarity to an important purchase."
        imageUrl={image("photo-1533473359331-0135ef1b58bf")}
      />
      <section className="broker-intro">
        <span className="eyebrow">A MORE PERSONAL PROCESS</span>
        <div className="split-heading">
          <h2>
            Built around your
            <br />
            <i>real life.</i>
          </h2>
          <p>
            Buying a car involves more than comparing listings. We translate
            your priorities into a focused search, provide useful context, and
            coordinate the steps that usually consume your time.
          </p>
        </div>
        <div className="steps">
          {[
            [
              "01",
              "Start with a conversation",
              "We learn the way you drive, what matters most, and the details that make a vehicle feel right.",
            ],
            [
              "02",
              "We source and evaluate",
              "Our team narrows the market and reviews the options that deserve your attention.",
            ],
            [
              "03",
              "You choose with confidence",
              "We coordinate a smooth path through financing, trade-in, paperwork, and delivery.",
            ],
          ].map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="dark-split">
        <div>
          <span className="eyebrow">CONSIDERED AT EVERY TURN</span>
          <h2>
            More guidance.
            <br />
            <i>Less guesswork.</i>
          </h2>
        </div>
        <ul>
          <li>
            <BadgeCheck />A focused search that respects your time
          </li>
          <li>
            <BadgeCheck />A clear view of options, history, and ownership costs
          </li>
          <li>
            <BadgeCheck />
            One point of contact from sourcing to delivery
          </li>
        </ul>
      </section>
    </>
  );
}

function Financing() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    setError(false);

    const form = event.currentTarget;
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/isaaclimitless@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        },
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };
  return (
    <>
      <PageHero
        eyebrow="FLEXIBLE FINANCING"
        title="Take the next step."
        copy="Complete the application below and Isaac Mizrahi will help you understand your available paths."
        imageUrl={image("photo-1563013544-824ae1b704d3")}
      />
      <section className="finance-layout">
        <aside>
          <span className="eyebrow">WHAT TO EXPECT</span>
          <h2>A straightforward start.</h2>
          <p>
            Work directly with Isaac Mizrahi, who has more than 20 years of
            experience helping clients find the right financing path.
          </p>
          <div className="finance-points">
            <p>
              <Clock3 />A quick response during business hours
            </p>
            <p>
              <ShieldCheck />A private, people-first conversation
            </p>
            <p>
              <CarFront />
              Guidance for purchase or trade-in
            </p>
            <p>
              <Phone /> (310) 777-1026
            </p>
          </div>
        </aside>
        <form className="finance-form" onSubmit={submit}>
          <input
            name="_subject"
            type="hidden"
            value="New Limitless Asset Management finance application"
          />
          {submitted ? (
            <div className="form-success">
              <CircleCheck size={40} />
              <h3>Your application is ready for review.</h3>
              <p>
                Your application has been sent to Isaac. He will follow up with
                next steps.
              </p>
              <button
                className="button"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Start another application
              </button>
            </div>
          ) : (
            <>
              <div className="form-head">
                <h2>Finance application</h2>
                <p>
                  Fields marked with * are required. Please do not include
                  sensitive information in this form.
                </p>
              </div>
              {error && (
                <p className="form-error">
                  We could not send your application. Please try again or call
                  (310) 777-1026.
                </p>
              )}
              <div className="form-grid">
                <Label label="First name *">
                  <input required name="first_name" placeholder="Isaac" />
                </Label>
                <Label label="Last name *">
                  <input required name="last_name" placeholder="Morgan" />
                </Label>
                <Label label="Email *">
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                  />
                </Label>
                <Label label="Phone">
                  <input name="phone" type="tel" placeholder="(555) 000-0000" />
                </Label>
                <Label label="Home street address *" full>
                  <input
                    required
                    name="home_address"
                    autoComplete="street-address"
                    placeholder="123 Main Street, Apt. 4"
                  />
                </Label>
                <Label label="City *">
                  <input
                    required
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Los Angeles"
                  />
                </Label>
                <Label label="State and ZIP code *">
                  <input
                    required
                    name="state_and_zip"
                    autoComplete="postal-code"
                    placeholder="CA 90034"
                  />
                </Label>
                <Label label="Employer *">
                  <input
                    required
                    name="employer"
                    autoComplete="organization"
                    placeholder="Company name"
                  />
                </Label>
                <Label label="Job title">
                  <input name="job_title" placeholder="Your position" />
                </Label>
                <Label label="Time with employer *">
                  <input
                    required
                    name="time_with_employer"
                    placeholder="e.g., 3 years, 6 months"
                  />
                </Label>
                <Label label="Gross monthly income *">
                  <input
                    required
                    name="gross_monthly_income"
                    inputMode="decimal"
                    placeholder="$0.00"
                  />
                </Label>
                <Label label="Vehicle of interest">
                  <select name="vehicle_of_interest" defaultValue="">
                    <option value="" disabled>
                      Select a vehicle
                    </option>
                    {cars.map((car) => (
                      <option key={car.name}>{car.name}</option>
                    ))}
                  </select>
                </Label>
                <Label label="Preferred contact">
                  <select name="preferred_contact" defaultValue="Email">
                    <option>Email</option>
                    <option>Phone</option>
                    <option>Text</option>
                  </select>
                </Label>
                <Label label="Tell us what you have in mind" full>
                  <textarea
                    name="additional_details"
                    rows="4"
                    placeholder="Vehicle, budget, trade-in details, or anything else you'd like us to know."
                  />
                </Label>
              </div>
              <label className="consent">
                <input required name="consent" type="checkbox" />{" "}
                <span>
                  I confirm that the information is accurate and agree to be
                  contacted by Isaac Mizrahi about my financing request.
                </span>
              </label>
              <button className="button submit" type="submit">
                Review finance application <ArrowRight size={17} />
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Label({ label, children, full = false }) {
  return (
    <label className={full ? "field full" : "field"}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT LIMITLESS"
        title="Cars, considered differently."
        copy="A small team with a large respect for your time, your taste, and the road ahead."
        imageUrl={image("photo-1449965408869-eaa3f722e40d")}
      />
      <section className="about-story">
        <div>
          <span className="eyebrow">OUR POINT OF VIEW</span>
          <h2>
            Good service is never
            <br />
            <i>an afterthought.</i>
          </h2>
        </div>
        <div>
          <p>
            Limitless Asset Management is led by Isaac Mizrahi, with more than
            20 years in the business. We believe thoughtful questions, honest
            context, and a little extra care make all the difference.
          </p>
          <p>
            Our clients come to us for premium vehicles, but they stay for a
            process that feels clear and personal. Visit us at 8885 Venice Blvd,
            Suite 200, Los Angeles, CA 90034, or call (310) 777-1026.
          </p>
        </div>
      </section>
      <section className="about-image">
        <img
          src={image("photo-1486496572940-2bb2341af4fa")}
          alt="Auto broker speaking with a client"
        />
        <div>
          <span className="eyebrow">SHOWROOM HOURS</span>
          <h2>Come say hello.</h2>
          <p>
            <strong>Monday–Friday</strong>
            <br />
            9:00 AM–5:00 PM
          </p>
          <p>
            Visits are welcome by appointment so we can give every conversation
            the time it deserves.
          </p>
          <a className="button" href="tel:3107771026">
            Call (310) 777-1026 <Phone size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
