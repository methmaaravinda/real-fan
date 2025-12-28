import { useState, useEffect } from 'react'
import SignIn from './components/SignIn'
import Header from './components/Header'
import BalanceCard from './components/BalanceCard'
import AppointmentsList from './components/AppointmentsList'
import EarningsGrid from './components/EarningsGrid'
import AlertBox from './components/AlertBox'
import RecentCredits from './components/RecentCredits'
import Footer from './components/Footer'
import CollapsibleSection from './components/CollapsibleSection'
import SectionDivider from './components/SectionDivider'

const AppointmentStatus = {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
};

const MOCK_DATA = {
  userHandle: "#8821",
  creditBalance: 2450,
  totalEarnings: 12450.00,
  monthlyEarnings: 2100,
  yearlyEarnings: 8450,
  missedAmount: 450,
  appointments: [
    {
      id: '1',
      userId: '#123',
      type: 'Dinner Date',
      status: AppointmentStatus.ACTIVE,
      date: 'Today',
      time: '8:00 PM'
    },
    {
      id: '2',
      userId: '#559',
      type: 'Coffee Chat',
      status: AppointmentStatus.PENDING,
      date: 'Tmrw',
      time: '10:30 AM'
    },
    {
      id: '3',
      userId: '#210',
      type: 'Movie Night',
      status: AppointmentStatus.PENDING,
      date: 'Fri',
      time: '7:00 PM'
    }
  ],
  transactions: [
    {
      id: 't1',
      userId: '#992',
      description: 'Sent appointment request',
      amount: 50.00,
      timestamp: '2h ago',
      avatarUrl: 'https://picsum.photos/seed/992/100/100'
    },
    {
      id: 't2',
      userId: '#341',
      description: 'Profile unlock',
      amount: 15.00,
      timestamp: '5h ago'
    },
    {
      id: 't3',
      userId: '#778',
      description: 'Gift received',
      amount: 100.00,
      timestamp: '1d ago',
      avatarUrl: 'https://picsum.photos/seed/778/100/100'
    }
  ]
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (hasEntered) {
      // Simulate loading
      const timer = setTimeout(() => {
        setData(MOCK_DATA);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [hasEntered]);

  if (!isSignedIn) {
    return <SignIn onSignIn={() => setIsSignedIn(true)} />
  }

  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-7xl md:text-8xl font-bold mb-8" style={{ color: '#f90643' }}>
            Secret Crush
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            This is very secure place and your privacy is the first and we are following hundreds of new methods to keep your data secret.
          </p>
          <button
            onClick={() => setHasEntered(true)}
            className="text-white font-semibold py-4 px-12 rounded-lg text-xl transition duration-200 shadow-lg"
            style={{ 
              backgroundColor: '#f90643',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d60036'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f90643'}
          >
            Enter
          </button>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-dark">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" style={{ borderColor: '#f90643' }}></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background-dark font-display text-white selection:bg-primary/30 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.15]" style={{ backgroundSize: '24px 24px' }}></div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/5 via-background-dark to-background-dark"></div>

      <div className="relative z-10 mx-auto max-w-md border-x border-zinc-800 bg-background-dark shadow-2xl min-h-screen flex flex-col overflow-x-hidden">
        <Header />

        <main className="relative z-10 flex-1 flex flex-col gap-10 p-6 pb-36 overflow-y-auto overflow-x-hidden">
          {/* Section 01: Identity & Assets */}
          <CollapsibleSection
            number="01"
            title="Identity & Assets"
            icon="fingerprint"
            iconColor="#f90643"
            borderColor="#f90643"
            bgColor="bg-surface-dark"
            pattern="grid"
            patternSize="24px"
            defaultOpen={true}
          >
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-zinc-500 text-sm font-medium mb-1 flex items-center gap-1">
                    Welcome back, 
                    <span className="material-symbols-outlined text-[14px]" style={{ color: '#10b981' }}>lock</span>
                  </p>
                  <div className="group relative inline-flex items-center gap-2 cursor-pointer">
                    <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      User <span className="font-mono text-primary blur-reveal relative z-10">{data.userHandle}</span>
                    </h2>
                    <span className="material-symbols-outlined text-zinc-600 text-sm group-hover:text-zinc-400 transition-colors">visibility_off</span>
                    <div className="absolute bottom-full left-0 mb-2 w-max px-2 py-1 bg-black border border-zinc-800 rounded text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      This information is encrypted.
                    </div>
                  </div>
                </div>
              </div>
              <BalanceCard balance={data.creditBalance} />
            </div>
          </CollapsibleSection>

          <SectionDivider />

          {/* Section 02: Schedule */}
          <CollapsibleSection
            number="02"
            title="Schedule"
            icon="calendar_month"
            iconColor="#71717a"
            borderColor="#71717a"
            bgColor="bg-[#0c0c0c]"
            pattern="dots"
            patternSize="16px"
            defaultOpen={false}
          >
            <div className="p-6">
              <AppointmentsList appointments={data.appointments} />
            </div>
          </CollapsibleSection>

          <SectionDivider />

          {/* Section 03: Revenue */}
          <CollapsibleSection
            number="03"
            title="Revenue"
            icon="account_balance_wallet"
            iconColor="#d60036"
            borderColor="#d60036"
            bgColor="bg-zinc-900/60"
            pattern="circuit"
            patternSize="auto"
            defaultOpen={false}
          >
            <div className="p-6">
              <EarningsGrid 
                total={data.totalEarnings} 
                monthly={data.monthlyEarnings} 
                yearly={data.yearlyEarnings} 
              />
            </div>
          </CollapsibleSection>

          {/* Alert Box */}
          <AlertBox amount={data.missedAmount} />

          <SectionDivider />

          {/* Section 04: Logs */}
          <CollapsibleSection
            number="04"
            title="Logs"
            icon="receipt_long"
            iconColor="#71717a"
            borderColor="#71717a"
            bgColor="bg-zinc-950"
            pattern="grid"
            patternSize="24px"
            defaultOpen={false}
          >
            <div className="p-6 flex flex-col gap-3">
              <RecentCredits transactions={data.transactions} />
            </div>
          </CollapsibleSection>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App

