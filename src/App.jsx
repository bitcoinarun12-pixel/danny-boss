import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  ShieldCheck,
  Headphones,
  LogOut,
  Users,
  MapPin,
  Search,
  Radio,
  CheckCircle2,
  Clock,
  Lock,
  X,
  Calendar,
  User,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const DannyCrownLogo = ({ size = 'lg' }) => {
  const isSmall = size === 'sm';
  return (
    <div
      className={`relative flex items-center justify-center select-none ${
        isSmall ? 'w-9 h-9' : 'w-24 h-24'
      }`}
    >
      {!isSmall && (
        <div className="absolute inset-0 rounded-full bg-[#e5b84b]/15 blur-xl pointer-events-none" />
      )}
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-[0_2px_10px_rgba(229,184,75,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8dc81" />
            <stop offset="45%" stopColor="#e5b84b" />
            <stop offset="100%" stopColor="#9e721e" />
          </linearGradient>
          <linearGradient id="goldDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f3c65f" />
            <stop offset="100%" stopColor="#b68627" />
          </linearGradient>
        </defs>

        <circle
          cx="60"
          cy="64"
          r="46"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <circle
          cx="60"
          cy="64"
          r="41"
          stroke="url(#goldGrad)"
          strokeWidth="0.75"
          strokeDasharray="3 3"
          strokeOpacity="0.35"
        />

        <path
          d="M41 29L46 18L54 25L60 14L66 25L74 18L79 29H41Z"
          fill="url(#goldGrad)"
          stroke="#523e1a"
          strokeWidth="1"
        />
        <rect x="41" y="30.5" width="38" height="3" rx="1.5" fill="url(#goldDark)" />
        <circle cx="46" cy="16" r="1.8" fill="#f8dc81" />
        <circle cx="60" cy="12" r="2.2" fill="#f8dc81" />
        <circle cx="74" cy="16" r="1.8" fill="#f8dc81" />

        <text
          x="60"
          y="80"
          textAnchor="middle"
          fill="url(#goldGrad)"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="900"
          fontSize="44"
          letterSpacing="-2"
        >
          DB
        </text>

        <path
          d="M34 91C45 96 75 96 86 91"
          stroke="url(#goldGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const CITY_DATA = {
  mumbai: {
    city: 'MUMBAI',
    displayName: 'Mumbai',
    linesAvailable: 8,
    ladiesToday: 4,
    clients: [
      { id: 'mum-1', name: 'Anjali Verma', initials: 'AV', age: 26, gender: 'Female', time: '4:00 PM', amount: 21000 },
      { id: 'mum-2', name: 'Aarti Chauhan', initials: 'AC', age: 31, gender: 'Female', time: '5:00 PM', amount: 35000 },
      { id: 'mum-3', name: 'Sneha Joshi', initials: 'SJ', age: 24, gender: 'Female', time: '4:30 PM', amount: 25000 },
      { id: 'mum-4', name: 'Priya Sharma', initials: 'PS', age: 29, gender: 'Female', time: '3:00 PM', amount: 18000 }
    ]
  },
  surat: {
    city: 'SURAT',
    displayName: 'Surat',
    linesAvailable: 6,
    ladiesToday: 3,
    clients: [
      { id: 'sur-1', name: 'Riya Patel', initials: 'RP', age: 25, gender: 'Female', time: '3:30 PM', amount: 24000 },
      { id: 'sur-2', name: 'Kajal Desai', initials: 'KD', age: 28, gender: 'Female', time: '5:15 PM', amount: 30000 },
      { id: 'sur-3', name: 'Neha Shah', initials: 'NS', age: 27, gender: 'Female', time: '6:30 PM', amount: 22000 }
    ]
  },
  ahmedabad: {
    city: 'AHMEDABAD',
    displayName: 'Ahmedabad',
    linesAvailable: 7,
    ladiesToday: 4,
    clients: [
      { id: 'ahm-1', name: 'Pooja Trivedi', initials: 'PT', age: 26, gender: 'Female', time: '4:00 PM', amount: 26000 },
      { id: 'ahm-2', name: 'Shruti Mehta', initials: 'SM', age: 30, gender: 'Female', time: '5:30 PM', amount: 32000 },
      { id: 'ahm-3', name: 'Divya Parekh', initials: 'DP', age: 24, gender: 'Female', time: '7:00 PM', amount: 20000 }
    ]
  },
  delhi: {
    city: 'DELHI',
    displayName: 'Delhi',
    linesAvailable: 11,
    ladiesToday: 5,
    clients: [
      { id: 'del-1', name: 'Simran Kaur', initials: 'SK', age: 25, gender: 'Female', time: '3:45 PM', amount: 28000 },
      { id: 'del-2', name: 'Natasha Malhotra', initials: 'NM', age: 29, gender: 'Female', time: '5:00 PM', amount: 38000 },
      { id: 'del-3', name: 'Kritika Arora', initials: 'KA', age: 27, gender: 'Female', time: '6:15 PM', amount: 25000 },
      { id: 'del-4', name: 'Megha Kapoor', initials: 'MK', age: 31, gender: 'Female', time: '7:30 PM', amount: 32000 }
    ]
  },
  jaipur: {
    city: 'JAIPUR',
    displayName: 'Jaipur',
    linesAvailable: 5,
    ladiesToday: 3,
    clients: [
      { id: 'jai-1', name: 'Kavita Rathore', initials: 'KR', age: 26, gender: 'Female', time: '4:15 PM', amount: 21000 },
      { id: 'jai-2', name: 'Tanya Shekhawat', initials: 'TS', age: 28, gender: 'Female', time: '5:45 PM', amount: 27000 },
      { id: 'jai-3', name: 'Nandini Jain', initials: 'NJ', age: 25, gender: 'Female', time: '6:45 PM', amount: 23000 }
    ]
  },
  lucknow: {
    city: 'LUCKNOW',
    displayName: 'Lucknow',
    linesAvailable: 6,
    ladiesToday: 3,
    clients: [
      { id: 'lko-1', name: 'Zoya Siddiqui', initials: 'ZS', age: 24, gender: 'Female', time: '3:30 PM', amount: 22000 },
      { id: 'lko-2', name: 'Pallavi Srivastava', initials: 'PS', age: 29, gender: 'Female', time: '5:00 PM', amount: 28000 },
      { id: 'lko-3', name: 'Aditi Mishra', initials: 'AM', age: 27, gender: 'Female', time: '6:30 PM', amount: 24000 }
    ]
  }
};

const generateCityData = (rawCity) => {
  const clean = rawCity.trim();
  const key = clean.toLowerCase();
  if (CITY_DATA[key]) return CITY_DATA[key];

  const formattedCity = clean.charAt(0).toUpperCase() + clean.slice(1);
  return {
    city: clean.toUpperCase(),
    displayName: formattedCity,
    linesAvailable: 6,
    ladiesToday: 3,
    clients: [
      { id: `${key}-1`, name: 'Aarohi Sharma', initials: 'AS', age: 25, gender: 'Female', time: '4:00 PM', amount: 24000 },
      { id: `${key}-2`, name: 'Nidhi Rajput', initials: 'NR', age: 28, gender: 'Female', time: '5:30 PM', amount: 30000 },
      { id: `${key}-3`, name: 'Sakshi Verma', initials: 'SV', age: 26, gender: 'Female', time: '6:45 PM', amount: 22000 }
    ]
  };
};

const INITIAL_FEED = [
  { id: 'f-1', name: 'Amit Patel', initials: 'AP', location: 'Delhi, Delhi NCR', timeAgo: 'Just now', amount: 28000 },
  { id: 'f-2', name: 'Deepak Verma', initials: 'DV', location: 'Surat, Gujarat', timeAgo: '8 min ago', amount: 35000 },
  { id: 'f-3', name: 'Imran Khan', initials: 'IK', location: 'Ahmedabad, Gujarat', timeAgo: '15 min ago', amount: 23000 },
  { id: 'f-4', name: 'Suresh Yadav', initials: 'SY', location: 'Delhi, Delhi NCR', timeAgo: '22 min ago', amount: 25000 },
  { id: 'f-5', name: 'Manish Gupta', initials: 'MG', location: 'Jaipur, Rajasthan', timeAgo: '29 min ago', amount: 21000 },
  { id: 'f-6', name: 'Amit Patel', initials: 'AP', location: 'Lucknow, Uttar Pradesh', timeAgo: '36 min ago', amount: 28000 },
  { id: 'f-7', name: 'Arjun Reddy', initials: 'AR', location: 'Bengaluru, Karnataka', timeAgo: '43 min ago', amount: 18000 },
  { id: 'f-8', name: 'Nitin Rao', initials: 'NR', location: 'Hyderabad, Telangana', timeAgo: '50 min ago', amount: 45000 },
  { id: 'f-9', name: 'Karan Mehta', initials: 'KM', location: 'Chennai, Tamil Nadu', timeAgo: '2 min ago', amount: 23000 }
];

const INCOMING_LIVE_EVENTS = [
  { name: 'Rohit Chauhan', initials: 'RC', location: 'Hyderabad, Telangana', amount: 35000 },
  { name: 'Vikram Singh', initials: 'VS', location: 'Chennai, Tamil Nadu', amount: 23000 },
  { name: 'Sandeep Joshi', initials: 'SJ', location: 'Mumbai, Maharashtra', amount: 25000 },
  { name: 'Nitin Rao', initials: 'NR', location: 'Lucknow, Uttar Pradesh', amount: 45000 },
  { name: 'Karan Mehta', initials: 'KM', location: 'Bengaluru, Karnataka', amount: 23000 },
  { name: 'Arjun Reddy', initials: 'AR', location: 'Jaipur, Rajasthan', amount: 18000 }
];

const formatINR = (num) => num.toLocaleString('en-IN');

const extractDisplayName = (email) => {
  const prefix = email.split('@')[0] || 'Member';
  const lettersOnly = prefix.replace(/[0-9._-]+$/, '') || prefix;
  return lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1);
};

export default function App() {
  const [userEmail, setUserEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => window.location.pathname === '/dashboard');

  const [cityQuery, setCityQuery] = useState('');
  const [activeCityResult, setActiveCityResult] = useState(null);
  const cityResultRef = useRef(null);

  const [liveMeetingsCount, setLiveMeetingsCount] = useState(8);
  const [citiesActiveCount, setCitiesActiveCount] = useState(8);
  const [paymentReceivedTotal, setPaymentReceivedTotal] = useState(246000);
  const [liveFeed, setLiveFeed] = useState(INITIAL_FEED);
  const incomingIndexRef = useRef(0);

  const [bookingModalData, setBookingModalData] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    const interval = setInterval(() => {
      const nextEvent =
        INCOMING_LIVE_EVENTS[incomingIndexRef.current % INCOMING_LIVE_EVENTS.length];
      incomingIndexRef.current += 1;

      setLiveMeetingsCount((prev) => (prev >= 12 ? 9 : prev + 1));
      setCitiesActiveCount((prev) => {
        const options = [7, 8, 9, 10];
        return options[(options.indexOf(prev) + 1) % options.length];
      });
      setPaymentReceivedTotal((prev) => {
        const updated = prev + nextEvent.amount;
        return updated > 365000 ? 264000 : updated;
      });

      setLiveFeed((prev) => [
        {
          id: `live-${Date.now()}`,
          name: nextEvent.name,
          initials: nextEvent.initials,
          location: nextEvent.location,
          timeAgo: 'Just now',
          amount: nextEvent.amount
        },
        ...prev.slice(0, 9)
      ]);
    }, 25000);

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const trimmed = emailInput.trim();
    if (!trimmed) {
      setLoginError('Kripya apna Email ID daalein.');
      return;
    }
    if (!trimmed.includes('@') || !trimmed.includes('.')) {
      setLoginError('Sahi Email ID format daalein (e.g. name@gmail.com).');
      return;
    }
    setLoginError('');
    setUserEmail(trimmed);
    setIsLoggedIn(true);
    window.history.pushState({}, '', '/dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setActiveCityResult(null);
    setCityQuery('');
    setBookingModalData(null);
    window.history.pushState({}, '', '/');
  };

  const triggerCitySearch = (cityName) => {
    const query = (cityName ?? cityQuery).trim();
    if (!query) {
      showToast('Kripya kisi city ka naam type karein (e.g. Mumbai)');
      return;
    }
    setCityQuery(query);
    const result = generateCityData(query);
    setActiveCityResult(result);
    setTimeout(() => {
      cityResultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  };

  const handleCompleteRegistration = () => {
    const clientPart = bookingModalData
      ? `Client: ${bookingModalData.client.name} (${bookingModalData.city}) | Amount: ₹${formatINR(
          bookingModalData.client.amount
        )} | Time: ${bookingModalData.client.time}`
      : 'General Member Registration';

    const message = encodeURIComponent(
      `Hello DANNY BOSS Admin,\nMujhe apna Member Registration complete karna hai.\n\nEmail: ${userEmail || 'Member'}\nMember ID: DANNY001\n${clientPart}`
    );
    const waUrl = `https://t.me/Dannyboss89/?text=*i-want-job*♠️♠️}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    showToast('Opening telegram Admin Support to complete registration...');
  };

  const displayName = extractDisplayName(userEmail || 'member@dannyboss.in');

  return (
    <div
      className="min-h-screen bg-[#070707] text-[#f5f5f5] antialiased selection:bg-[#e5b84b]/30 selection:text-[#f8dc81]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[420px] h-[220px] bg-[#e5b84b]/[0.06] blur-[110px] pointer-events-none z-0" />

      {!isLoggedIn ? (
        <div className="relative z-10 max-w-md mx-auto min-h-screen px-5 py-8 flex flex-col justify-between">
          <div className="flex flex-col items-center text-center pt-2">
            <DannyCrownLogo size="lg" />

            <h1
              className="mt-3 text-[34px] leading-none font-bold tracking-wide text-[#e5b84b] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              DANNY BOSS
            </h1>

            <p className="mt-2.5 text-[10.5px] font-semibold tracking-[0.26em] text-[#a39476] uppercase">
              PREMIUM &bull; PROFESSIONAL &bull; TRUSTED
            </p>

            <div className="mt-4 inline-flex items-center px-5 py-1.5 rounded-full bg-[#120f08] border border-[#523e1a] shadow-[0_0_20px_rgba(229,184,75,0.08)]">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-[#e5b84b] uppercase">
                ALL INDIA &bull; VERIFIED &bull; SECURE
              </span>
            </div>
          </div>

          <div className="my-7 rounded-2xl bg-[#101010] border border-[#3a2c14] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.85)]">
            <div className="w-12 h-12 rounded-full bg-[#19140a] border border-[#523e1a] flex items-center justify-center mx-auto mb-4">
              <User className="w-5 h-5 text-[#e5b84b]" />
            </div>

            <h2
              className="text-center text-2xl font-bold tracking-wide text-white uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              MEMBER LOGIN
            </h2>
            <p className="text-center text-xs text-zinc-400 mt-1.5">
              Sign in to your DANNY BOSS account
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-[#b8923a]" />
                </div>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                    if (loginError) setLoginError('');
                  }}
                  placeholder="Enter your Email ID"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#090909] border border-[#3a2c14] focus:border-[#e5b84b] focus:outline-none text-sm text-white placeholder-zinc-500 transition-colors"
                />
              </div>

              {loginError && (
                <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/25 rounded-lg px-3 py-2 text-center">
                  {loginError}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#c9952c] via-[#f3c65f] to-[#c9952c] hover:brightness-105 active:scale-[0.99] text-[#090909] font-extrabold text-sm tracking-[0.12em] uppercase shadow-[0_6px_24px_rgba(229,184,75,0.28)] transition-all cursor-pointer"
              >
                INSTANT LOGIN
              </button>
            </form>

            <p className="mt-4 text-center text-[11.5px] text-zinc-400 leading-relaxed">
              No ID &middot; No Password &mdash; bas email daalein aur turant andar aa jaayein.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1 pb-2 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-[#e5b84b] mb-1.5" />
              <span
                className="text-xs font-bold tracking-wider text-zinc-200 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                ALL INDIA COVERAGE
              </span>
              <span className="text-[11px] text-zinc-500 mt-0.5">All major cities</span>
            </div>

            <div className="flex flex-col items-center">
              <Headphones className="w-5 h-5 text-[#e5b84b] mb-1.5" />
              <span
                className="text-xs font-bold tracking-wider text-zinc-200 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                24/7 SUPPORT
              </span>
              <span className="text-[11px] text-zinc-500 mt-0.5">Direct assistance</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 max-w-md mx-auto min-h-screen px-4 py-4 pb-12 space-y-5">
          <header className="flex items-center justify-between gap-2 pb-2 border-b border-zinc-900">
            <div className="flex items-center gap-2.5 min-w-0">
              <DannyCrownLogo size="sm" />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span
                    className="text-base font-bold tracking-wide text-[#e5b84b] uppercase leading-none"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    DANNY BOSS
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-[#241b09] border border-[#6b4f1d] text-[#e5b84b] uppercase leading-none">
                    MEMBER
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {userEmail || 'member@dannyboss.in'}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] hover:bg-[#1a1a1a] border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-zinc-400" />
              <span>Logout</span>
            </button>
          </header>

          <section className="rounded-2xl bg-gradient-to-b from-[#171208] to-[#0e0c07] border border-[#4a3716] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.75)]">
            <p className="text-[10.5px] font-bold tracking-[0.2em] text-[#d4a843] uppercase">
              MEMBER DASHBOARD
            </p>
            <h1
              className="mt-1 text-[28px] leading-tight font-bold text-white"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Welcome, {displayName}
            </h1>
            <p className="mt-1 text-xs text-zinc-400">
              Member ID: <span className="text-[#e5b84b] font-semibold">DANNY001</span> &bull; Active
            </p>

            <div className="mt-4 pt-3.5 border-t border-[#2e220e] flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <Users className="w-3.5 h-3.5 text-[#e5b84b]" />
                <span>Total Members:</span>
                <strong className="text-white font-bold">18500</strong>
              </div>
              <span className="text-[#e5b84b] font-semibold">All India</span>
            </div>
          </section>

          <section className="rounded-2xl bg-[#101010] border border-[#3a2c14] p-5 shadow-[0_8px_28px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e5b84b]" />
              <h2
                className="text-lg font-bold tracking-wide text-[#e5b84b] uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                CHECK YOUR CITY
              </h2>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Apni city ka naam likhein aur dekhein kitne lines aur ladies available hain.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') triggerCitySearch();
                  }}
                  placeholder="Type city name (e.g. Mumbai)"
                  className="w-full pl-9 pr-3 py-3 rounded-xl bg-[#090909] border border-[#3a2c14] focus:border-[#e5b84b] focus:outline-none text-sm text-white placeholder-zinc-500"
                />
              </div>

              <button
                type="button"
                onClick={() => triggerCitySearch()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#c9952c] via-[#f3c65f] to-[#c9952c] hover:brightness-105 active:scale-[0.98] text-[#090909] font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(229,184,75,0.25)] transition-all cursor-pointer"
              >
                SEARCH
              </button>
            </div>

            <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
              {['Mumbai', 'Surat', 'Ahmedabad', 'Delhi', 'Jaipur', 'Lucknow'].map((cityLabel) => {
                const isSelected =
                  activeCityResult?.displayName.toLowerCase() === cityLabel.toLowerCase();
                return (
                  <button
                    key={cityLabel}
                    type="button"
                    onClick={() => triggerCitySearch(cityLabel)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#261c08] border-[#e5b84b] text-[#f8dc81]'
                        : 'bg-[#151515] hover:bg-[#1e1a10] border-zinc-800 hover:border-[#523e1a] text-zinc-300'
                    }`}
                  >
                    {cityLabel}
                  </button>
                );
              })}
            </div>

            {activeCityResult && (
              <div
                ref={cityResultRef}
                className="mt-5 pt-5 border-t border-zinc-800/90 space-y-4 animate-fadeIn"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="text-xl font-bold tracking-wide text-[#e5b84b] uppercase"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {activeCityResult.city}
                  </h3>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Slots Open
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#0c0c0c] border border-zinc-800/90 p-3.5 text-center">
                    <p
                      className="text-2xl font-bold text-[#e5b84b] leading-none"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {activeCityResult.linesAvailable}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1.5">Lines Available</p>
                  </div>

                  <div className="rounded-xl bg-[#0c0c0c] border border-zinc-800/90 p-3.5 text-center">
                    <p
                      className="text-2xl font-bold text-emerald-400 leading-none"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {activeCityResult.ladiesToday}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1.5">Ladies Today</p>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  {activeCityResult.clients.map((client) => (
                    <div
                      key={client.id}
                      className="rounded-xl bg-[#0d0d0d] border border-zinc-800/90 hover:border-[#4a3716] p-3.5 flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-full bg-[#1b1509] border border-[#523e1a] flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-[#e5b84b] tracking-wider">
                            {client.initials}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-bold text-white truncate">{client.name}</p>
                          <p className="text-[11.5px] text-zinc-400 mt-0.5">
                            {client.age} yrs &bull; {client.gender}
                          </p>
                          <p className="text-[11px] text-zinc-500 mt-0.5">
                            Time: <span className="text-zinc-300">{client.time}</span> &bull;{' '}
                            <span className="text-[#e5b84b] font-semibold">
                              &#8377;{formatINR(client.amount)}
                            </span>
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setBookingModalData({
                            city: activeCityResult.displayName,
                            client
                          })
                        }
                        className="shrink-0 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#c9952c] via-[#f3c65f] to-[#c9952c] hover:brightness-105 active:scale-[0.98] text-[#090909] font-extrabold text-[10.5px] leading-tight tracking-wider uppercase text-center shadow-[0_4px_14px_rgba(229,184,75,0.22)] transition-all cursor-pointer"
                      >
                        BOOK &middot;
                        <br />
                        MEETING CONFIRM
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section className="rounded-2xl bg-[#101010] border border-[#3a2c14] p-5 shadow-[0_8px_28px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                <h2
                  className="text-lg font-bold tracking-wide text-white uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  LIVE MEMBER MEETINGS
                </h2>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-700/50 text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE UPDATES
              </span>
            </div>

            <p className="text-xs text-zinc-400 mt-1">
              Real-time updates &mdash; members jo abhi meeting confirm kar rahe hain.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <div className="rounded-xl bg-[#0b0b0b] border border-zinc-800/90 p-3 text-center">
                <p
                  className="text-xl font-bold text-emerald-400 leading-none"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {liveMeetingsCount}
                </p>
                <p className="text-[10px] text-zinc-400 mt-1.5 leading-tight">Live Meetings</p>
              </div>

              <div className="rounded-xl bg-[#0b0b0b] border border-zinc-800/90 p-3 text-center">
                <p
                  className="text-xl font-bold text-[#e5b84b] leading-none"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {citiesActiveCount}
                </p>
                <p className="text-[10px] text-zinc-400 mt-1.5 leading-tight">Cities Active</p>
              </div>

              <div className="rounded-xl bg-[#0b0b0b] border border-zinc-800/90 p-3 text-center">
                <p
                  className="text-[17px] font-bold text-[#e5b84b] leading-none"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  &#8377;{formatINR(paymentReceivedTotal)}
                </p>
                <p className="text-[10px] text-zinc-400 mt-1.5 leading-tight">Payment Received</p>
              </div>
            </div>

            <div className="mt-4 max-h-[370px] overflow-y-auto pr-1 space-y-2.5">
              {liveFeed.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-[#0c0c0c] border border-zinc-800/80 px-3.5 py-3 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-[#19140a] border border-[#4a3716] flex items-center justify-center shrink-0">
                      <span className="text-[11px] font-bold text-[#e5b84b]">{item.initials}</span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-bold text-white truncate">{item.name}</p>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </div>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.location}</p>
                      <div className="flex items-center gap-1 text-[10.5px] text-zinc-500 mt-0.5">
                        <Clock className="w-3 h-3 text-zinc-500" />
                        <span>{item.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-xs font-extrabold text-emerald-400">
                      &#8377;{formatINR(item.amount)}
                    </p>
                    <p className="text-[10px] text-zinc-500 mt-0.5">Meeting Confirm</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {bookingModalData && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setBookingModalData(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-[#111111] border border-[#523e1a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.95)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setBookingModalData(null)}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white absolute top-4 right-4 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#241907] border border-[#6b4f1d] flex items-center justify-center mx-auto mb-3.5">
              <Lock className="w-5 h-5 text-[#e5b84b]" />
            </div>

            <h3
              className="text-center text-xl font-bold tracking-wide text-[#e5b84b] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              REGISTRATION INCOMPLETE
            </h3>

            <p className="text-center text-xs text-zinc-300 mt-2 leading-relaxed">
              Aapka registration abhi complete nahi hua hai. Meeting confirm karne ke liye pehle
              registration complete karein.
            </p>

            <div className="mt-4 rounded-xl bg-[#090909] border border-zinc-800/90 p-3.5 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Client:</span>
                <span className="font-semibold text-white">
                  {bookingModalData.client.name} ({bookingModalData.client.age} yrs)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">City:</span>
                <span className="font-semibold text-zinc-200">{bookingModalData.city}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" /> Time:
                </span>
                <span className="font-semibold text-zinc-200">{bookingModalData.client.time}</span>
              </div>
              <div className="flex items-center justify-between pt-1.5 border-t border-zinc-800/80">
                <span className="text-zinc-400">Amount:</span>
                <span className="font-extrabold text-[#e5b84b] text-sm">
                  &#8377;{formatINR(bookingModalData.client.amount)}
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              <button
                type="button"
                onClick={handleCompleteRegistration}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#c9952c] via-[#f3c65f] to-[#c9952c] hover:brightness-105 active:scale-[0.99] text-[#090909] font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_6px_20px_rgba(229,184,75,0.25)] transition-all cursor-pointer"
              >
                <span>COMPLETE REGISTRATION</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setBookingModalData(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#181818] hover:bg-[#202020] border border-zinc-800 text-xs font-semibold text-zinc-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 max-w-xs w-[90%] rounded-xl bg-[#181308] border border-[#e5b84b]/60 px-4 py-2.5 text-center text-xs font-medium text-[#f8dc81] shadow-lg flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#e5b84b] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
