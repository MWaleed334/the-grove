import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/footer/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-[#283606] to-[#0F1500]">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
