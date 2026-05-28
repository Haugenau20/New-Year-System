import Nav from './components/Nav'
import Hero from './sections/Hero'
import Story from './sections/Story'
import SystemOverview from './sections/SystemOverview'
import HardwareDeepDive from './sections/HardwareDeepDive'
import SoftwareDeepDive from './sections/SoftwareDeepDive'
import InAction from './sections/InAction'
import Links from './sections/Links'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <SystemOverview />
        <HardwareDeepDive />
        <SoftwareDeepDive />
        <InAction />
        <Links />
      </main>
    </>
  )
}
