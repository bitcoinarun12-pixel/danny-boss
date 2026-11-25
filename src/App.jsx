import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  ShieldCheck,
  Headphones,
  LogOut,
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
  Sparkles,
  Users
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
    stateName: 'Maharashtra',
    linesAvailable: 9,
    ladiesToday: 5,
    clients: [
      { id: 'mum-1', name: 'Meera Nair', initials: 'MN', age: 27, gender: 'Female', time: '4:15 PM', amount: 24000 },
      { id: 'mum-2', name: 'Roshni Kulkarni', initials: 'RK', age: 30, gender: 'Female', time: '5:30 PM', amount: 36000 },
      { id: 'mum-3', name: 'Tanvi Sawant', initials: 'TS', age: 25, gender: 'Female', time: '6:45 PM', amount: 26000 },
      { id: 'mum-4', name: 'Neha Deshmukh', initials: 'ND', age: 28, gender: 'Female', time: '8:00 PM', amount: 22000 }
    ],
    boys: [
      { id: 'mum-b1', name: 'Aarav Shinde', initials: 'AS', age: 28, state: 'Maharashtra', city: 'Mumbai', time: '4:30 PM', amount: 20000 },
      { id: 'mum-b2', name: 'Siddharth Gokhale', initials: 'SG', age: 31, state: 'Maharashtra', city: 'Mumbai', time: '6:00 PM', amount: 40000 },
      { id: 'mum-b3', name: 'Rohan Pawar', initials: 'RP', age: 27, state: 'Maharashtra', city: 'Mumbai', time: '7:45 PM', amount: 30000 }
    ]
  },
  surat: {
    city: 'SURAT',
    displayName: 'Surat',
    stateName: 'Gujarat',
    linesAvailable: 7,
    ladiesToday: 4,
    clients: [
      { id: 'sur-1', name: 'Janki Modi', initials: 'JM', age: 26, gender: 'Female', time: '3:45 PM', amount: 25000 },
      { id: 'sur-2', name: 'Kinjal Zaveri', initials: 'KZ', age: 29, gender: 'Female', time: '5:20 PM', amount: 31000 },
      { id: 'sur-3', name: 'Hiral Vora', initials: 'HV', age: 25, gender: 'Female', time: '7:10 PM', amount: 23000 }
    ],
    boys: [
      { id: 'sur-b1', name: 'Darshan Patel', initials: 'DP', age: 29, state: 'Gujarat', city: 'Surat', time: '4:15 PM', amount: 20000 },
      { id: 'sur-b2', name: 'Kunal Mehta', initials: 'KM', age: 32, state: 'Gujarat', city: 'Surat', time: '6:10 PM', amount: 40000 },
      { id: 'sur-b3', name: 'Jayesh Desai', initials: 'JD', age: 28, state: 'Gujarat', city: 'Surat', time: '8:00 PM', amount: 25000 }
    ]
  },
  ahmedabad: {
    city: 'AHMEDABAD',
    displayName: 'Ahmedabad',
    stateName: 'Gujarat',
    linesAvailable: 8,
    ladiesToday: 4,
    clients: [
      { id: 'ahm-1', name: 'Drashti Shah', initials: 'DS', age: 27, gender: 'Female', time: '4:20 PM', amount: 27000 },
      { id: 'ahm-2', name: 'Mansi Thakkar', initials: 'MT', age: 30, gender: 'Female', time: '6:00 PM', amount: 34000 },
      { id: 'ahm-3', name: 'Bhoomi Pandya', initials: 'BP', age: 25, gender: 'Female', time: '7:40 PM', amount: 21000 }
    ],
    boys: [
      { id: 'ahm-b1', name: 'Hardik Parekh', initials: 'HP', age: 28, state: 'Gujarat', city: 'Ahmedabad', time: '4:40 PM', amount: 20000 },
      { id: 'ahm-b2', name: 'Vivek Trivedi', initials: 'VT', age: 31, state: 'Gujarat', city: 'Ahmedabad', time: '6:30 PM', amount: 40000 },
      { id: 'ahm-b3', name: 'Parth Vaghela', initials: 'PV', age: 26, state: 'Gujarat', city: 'Ahmedabad', time: '8:10 PM', amount: 28000 }
    ]
  },
  delhi: {
    city: 'DELHI',
    displayName: 'Delhi',
    stateName: 'Delhi NCR',
    linesAvailable: 12,
    ladiesToday: 6,
    clients: [
      { id: 'del-1', name: 'Ananya Sethi', initials: 'AS', age: 26, gender: 'Female', time: '4:00 PM', amount: 29000 },
      { id: 'del-2', name: 'Rhea Khanna', initials: 'RK', age: 29, gender: 'Female', time: '5:25 PM', amount: 39000 },
      { id: 'del-3', name: 'Ishita Bansal', initials: 'IB', age: 27, gender: 'Female', time: '6:50 PM', amount: 26000 },
      { id: 'del-4', name: 'Sonia Gill', initials: 'SG', age: 31, gender: 'Female', time: '8:15 PM', amount: 33000 }
    ],
    boys: [
      { id: 'del-b1', name: 'Kabir Malhotra', initials: 'KM', age: 29, state: 'Delhi NCR', city: 'Delhi', time: '4:20 PM', amount: 40000 },
      { id: 'del-b2', name: 'Raghav Kapoor', initials: 'RK', age: 27, state: 'Delhi NCR', city: 'Delhi', time: '6:00 PM', amount: 20000 },
      { id: 'del-b3', name: 'Aman Verma', initials: 'AV', age: 30, state: 'Delhi NCR', city: 'Delhi', time: '7:50 PM', amount: 35000 }
    ]
  },
  jaipur: {
    city: 'JAIPUR',
    displayName: 'Jaipur',
    stateName: 'Rajasthan',
    linesAvailable: 6,
    ladiesToday: 3,
    clients: [
      { id: 'jai-1', name: 'Diya Rajawat', initials: 'DR', age: 26, gender: 'Female', time: '4:30 PM', amount: 22000 },
      { id: 'jai-2', name: 'Bhavna Sisodia', initials: 'BS', age: 28, gender: 'Female', time: '6:05 PM', amount: 28000 },
      { id: 'jai-3', name: 'Ritu Choudhary', initials: 'RC', age: 25, gender: 'Female', time: '7:20 PM', amount: 24000 }
    ],
    boys: [
      { id: 'jai-b1', name: 'Vikramaditya Rathore', initials: 'VR', age: 30, state: 'Rajasthan', city: 'Jaipur', time: '4:50 PM', amount: 20000 },
      { id: 'jai-b2', name: 'Devendra Shekhawat', initials: 'DS', age: 28, state: 'Rajasthan', city: 'Jaipur', time: '6:40 PM', amount: 40000 },
      { id: 'jai-b3', name: 'Mohit Sharma', initials: 'MS', age: 26, state: 'Rajasthan', city: 'Jaipur', time: '8:05 PM', amount: 22000 }
    ]
  },
  lucknow: {
    city: 'LUCKNOW',
    displayName: 'Lucknow',
    stateName: 'Uttar Pradesh',
    linesAvailable: 7,
    ladiesToday: 4,
    clients: [
      { id: 'lko-1', name: 'Alina Rizvi', initials: 'AR', age: 25, gender: 'Female', time: '3:50 PM', amount: 23000 },
      { id: 'lko-2', name: 'Shraddha Tiwari', initials: 'ST', age: 29, gender: 'Female', time: '5:35 PM', amount: 29000 },
      { id: 'lko-3', name: 'Pragya Dubey', initials: 'PD', age: 27, gender: 'Female', time: '7:05 PM', amount: 25000 }
    ],
    boys: [
      { id: 'lko-b1', name: 'Aditya Srivastava', initials: 'AS', age: 29, state: 'Uttar Pradesh', city: 'Lucknow', time: '4:10 PM', amount: 20000 },
      { id: 'lko-b2', name: 'Faizan Siddiqui', initials: 'FS', age: 31, state: 'Uttar Pradesh', city: 'Lucknow', time: '6:15 PM', amount: 40000 },
      { id: 'lko-b3', name: 'Shubham Mishra', initials: 'SM', age: 27, state: 'Uttar Pradesh', city: 'Lucknow', time: '7:55 PM', amount: 26000 }
    ]
  }
};

const CITY_ROTATION_POOL = [
  {
    displayName: 'Mumbai',
    stateName: 'Maharashtra',
    boys: [
      { name: 'Aarav Shinde', initials: 'AS', age: 28, time: '4:30 PM', amount: 20000 },
      { name: 'Siddharth Gokhale', initials: 'SG', age: 31, time: '6:00 PM', amount: 40000 },
      { name: 'Rohan Pawar', initials: 'RP', age: 27, time: '7:45 PM', amount: 30000 }
    ]
  },
  {
    displayName: 'Delhi',
    stateName: 'Delhi NCR',
    boys: [
      { name: 'Kabir Malhotra', initials: 'KM', age: 29, time: '4:20 PM', amount: 40000 },
      { name: 'Raghav Kapoor', initials: 'RK', age: 27, time: '6:00 PM', amount: 20000 },
      { name: 'Aman Verma', initials: 'AV', age: 30, time: '7:50 PM', amount: 35000 }
    ]
  },
  {
    displayName: 'Surat',
    stateName: 'Gujarat',
    boys: [
      { name: 'Darshan Patel', initials: 'DP', age: 29, time: '4:15 PM', amount: 20000 },
      { name: 'Kunal Mehta', initials: 'KM', age: 32, time: '6:10 PM', amount: 40000 },
      { name: 'Jayesh Desai', initials: 'JD', age: 28, time: '8:00 PM', amount: 25000 }
    ]
  },
  {
    displayName: 'Jaipur',
    stateName: 'Rajasthan',
    boys: [
      { name: 'Vikramaditya Rathore', initials: 'VR', age: 30, time: '4:50 PM', amount: 20000 },
      { name: 'Devendra Shekhawat', initials: 'DS', age: 28, time: '6:40 PM', amount: 40000 },
      { name: 'Mohit Sharma', initials: 'MS', age: 26, time: '8:05 PM', amount: 22000 }
    ]
  },
  {
    displayName: 'Lucknow',
    stateName: 'Uttar Pradesh',
    boys: [
      { name: 'Aditya Srivastava', initials: 'AS', age: 29, time: '4:10 PM', amount: 20000 },
      { name: 'Faizan Siddiqui', initials: 'FS', age: 31, time: '6:15 PM', amount: 40000 },
      { name: 'Shubham Mishra', initials: 'SM', age: 27, time: '7:55 PM', amount: 26000 }
    ]
  },
  {
    displayName: 'Bengaluru',
    stateName: 'Karnataka',
    boys: [
      { name: 'Karthik Gowda', initials: 'KG', age: 28, time: '4:45 PM', amount: 40000 },
      { name: 'Nikhil Hegde', initials: 'NH', age: 26, time: '6:20 PM', amount: 20000 },
      { name: 'Praveen Rao', initials: 'PR', age: 30, time: '8:15 PM', amount: 32000 }
    ]
  }
];

const buildBoysForCity = (cityName, stateName, seedOffset = 0) => {
  const pool = CITY_ROTATION_POOL[(seedOffset + cityName.length) % CITY_ROTATION_POOL.length].boys;
  return pool.map((person, idx) => ({
    id: `boy-${cityName.toLowerCase()}-${idx}-${seedOffset}`,
    name: person.name,
    initials: person.initials,
    age: person.age,
    state: stateName,
    city: cityName,
    time: person.time,
    amount: person.amount
  }));
};

const generateCityData = (rawCity) => {
  const clean = rawCity.trim();
  const key = clean.toLowerCase();
  if (CITY_DATA[key]) return CITY_DATA[key];

  const formattedCity = clean.charAt(0).toUpperCase() + clean.slice(1);
  const stateLabel = 'India';
  return {
    city: clean.toUpperCase(),
    displayName: formattedCity,
    stateName: stateLabel,
    linesAvailable: 7,
    ladiesToday: 4,
    clients: [
      { id: `${key}-1`, name: 'Kavya Tiwari', initials: 'KT', age: 26, gender: 'Female', time: '4:10 PM', amount: 25000 },
      { id: `${key}-2`, name: 'Palak Singhania', initials: 'PS', age: 28, gender: 'Female', time: '5:45 PM', amount: 31000 },
      { id: `${key}-3`, name: 'Muskan Kapoor', initials: 'MK', age: 25, gender: 'Female', time: '7:15 PM', amount: 23000 }
    ],
    boys: buildBoysForCity(formattedCity, stateLabel, 1)
  };
};

const INITIAL_FEED = [
  { id: 'f-1', name: 'Harshvardhan Rawat', initials: 'HR', location: 'Gurugram, Haryana', timeAgo: '2 min ago', amount: 20000 },
  { id: 'f-2', name: 'Pranav Kulkarni', initials: 'PK', location: 'Pune, Maharashtra', timeAgo: '9 min ago', amount: 40000 },
  { id: 'f-3', name: 'Farhan Qureshi', initials: 'FQ', location: 'Indore, Madhya Pradesh', timeAgo: '16 min ago', amount: 20000 },
  { id: 'f-4', name: 'Gaurav Dixit', initials: 'GD', location: 'Noida, Uttar Pradesh', timeAgo: '24 min ago', amount: 40000 },
  { id: 'f-5', name: 'Abhishek Rathore', initials: 'AR', location: 'Udaipur, Rajasthan', timeAgo: '31 min ago', amount: 20000 },
  { id: 'f-6', name: 'Siddharth Nair', initials: 'SN', location: 'Kochi, Kerala', timeAgo: '38 min ago', amount: 40000 }
];

const INCOMING_LIVE_EVENTS = [
  { name: 'Devansh Solanki', initials: 'DS', location: 'Vadodara, Gujarat', amount: 20000 },
  { name: 'Tarun Oberoi', initials: 'TO', location: 'Chandigarh, Punjab', amount: 40000 },
  { name: 'Mayank Bhardwaj', initials: 'MB', location: 'Bhopal, Madhya Pradesh', amount: 20000 },
  { name: 'Yashwant Gowda', initials: 'YG', location: 'Hubballi, Karnataka', amount: 40000 },
  { name: 'Chirag Sanghvi', initials: 'CS', location: 'Rajkot, Gujarat', amount: 20000 },
  { name: 'Prateek Chatterjee', initials: 'PC', location: 'Kolkata, West Bengal', amount: 40000 }
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

  const [boysRotationStep, setBoysRotationStep] = useState(0);
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

      setBoysRotationStep((prev) => prev + 1);

      if (incomingIndexRef.current % 2 === 0) {
        setLiveMeetingsCount((prev) => (prev >= 12 ? 9 : prev + 1));
        setPaymentReceivedTotal((prev) => {
          const updated = prev + nextEvent.amount;
          return updated > 365000 ? 264000 : updated;
        });
      }

      if (incomingIndexRef.current % 3 === 0) {
        setCitiesActiveCount((prev) => {
          const options = [7, 8, 9, 10];
          return options[(options.indexOf(prev) + 1) % options.length];
        });
      }

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
    }, 18000);

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
      ? `Client: ${bookingModalData.client.name} (${bookingModalData.city}) | Payment Received: ₹${formatINR(
          bookingModalData.client.amount
        )} | Time: ${bookingModalData.client.time}`
      : 'General Member Registration';

    const message = encodeURIComponent(
      `Hello DANNY BOSS Admin,\nMujhe apna Member Registration complete karna hai.\n\nEmail: ${userEmail || 'Member'}\nMember ID: DANNY001\n${clientPart}`
    );
    const waUrl = `https://wa.me/919999999999?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    showToast('Opening WhatsApp Admin Support to complete registration...');
  };

  const displayName = extractDisplayName(userEmail || 'member@dannyboss.in');

  const activeBoysList = activeCityResult
    ? buildBoysForCity(
        activeCityResult.displayName,
        activeCityResult.stateName,
        boysRotationStep
      )
    : (() => {
        const currentCity = CITY_ROTATION_POOL[boysRotationStep % CITY_ROTATION_POOL.length];
        return currentCity.boys.map((person, idx) => ({
          id: `default-boy-${boysRotationStep}-${idx}`,
          name: person.name,
          initials: person.initials,
          age: person.age,
          state: currentCity.stateName,
          city: currentCity.displayName,
          time: person.time,
          amount: person.amount
        }));
      })();

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
              <span className="text-zinc-400">VIP Access</span>
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
                <Users className="w-4 h-4 text-[#e5b84b]" />
                <h2
                  className="text-lg font-bold tracking-wide text-[#e5b84b] uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  BOYS SECTION
                </h2>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1c1507] border border-[#6b4f1d] text-[10px] font-bold tracking-wider text-[#f8dc81] uppercase">
                PAYMENT RECEIVED
              </span>
            </div>

            <p className="text-xs text-zinc-400 mt-1">
              State &amp; city wise male updates &mdash; sirf payment received status ke saath.
            </p>

            <div className="mt-4 space-y-2.5">
              {activeBoysList.map((boy) => (
                <div
                  key={boy.id}
                  onClick={() =>
                    setBookingModalData({
                      city: `${boy.city}, ${boy.state}`,
                      client: {
                        name: boy.name,
                        age: boy.age,
                        time: boy.time,
                        amount: boy.amount
                      }
                    })
                  }
                  className="rounded-xl bg-[#0c0c0c] border border-zinc-800/80 hover:border-[#523e1a] px-3.5 py-3 flex items-center justify-between gap-3 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#19140a] border border-[#4a3716] flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[#e5b84b]">{boy.initials}</span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">
                        {boy.name} <span className="text-zinc-400 font-normal">({boy.age} yrs)</span>
                      </p>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                        State: <span className="text-zinc-200">{boy.state}</span> &bull; City:{' '}
                        <span className="text-[#e5b84b] font-medium">{boy.city}</span>
                      </p>
                      <p className="text-[10.5px] text-zinc-500 mt-0.5">Time: {boy.time}</p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-xs font-extrabold text-emerald-400">
                      &#8377;{formatINR(boy.amount)}
                    </p>
                    <p className="text-[10px] font-semibold text-emerald-300 mt-0.5">
                      Payment Received
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                  onClick={() =>
                    setBookingModalData({
                      city: item.location,
                      client: {
                        name: item.name,
                        age: 27,
                        time: item.timeAgo,
                        amount: item.amount
                      }
                    })
                  }
                  className="rounded-xl bg-[#0c0c0c] border border-zinc-800/80 hover:border-emerald-500/40 px-3.5 py-3 flex items-center justify-between gap-3 cursor-pointer transition-colors"
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

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setBookingModalData({
                        city: item.location,
                        client: {
                          name: item.name,
                          age: 27,
                          time: item.timeAgo,
                          amount: item.amount
                        }
                      });
                    }}
                    className="text-right shrink-0 group cursor-pointer"
                  >
                    <p className="text-xs font-extrabold text-emerald-400">
                      &#8377;{formatINR(item.amount)}
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-600/40 text-[10px] font-semibold text-emerald-300 group-hover:bg-emerald-900/80 transition-colors">
                      Meeting Confirm
                    </span>
                  </button>
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
                <span className="text-zinc-400">Name:</span>
                <span className="font-semibold text-white">
                  {bookingModalData.client.name} ({bookingModalData.client.age} yrs)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Location:</span>
                <span className="font-semibold text-zinc-200">{bookingModalData.city}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" /> Time:
                </span>
                <span className="font-semibold text-zinc-200">{bookingModalData.client.time}</span>
              </div>
              <div className="flex items-center justify-between pt-1.5 border-t border-zinc-800/80">
                <span className="text-zinc-400">Payment Received:</span>
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
