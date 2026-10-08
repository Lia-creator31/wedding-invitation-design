import { Cover3D } from '@/components/invitation/cover-3d'
import { Countdown } from '@/components/invitation/countdown'
import { EventDetails } from '@/components/invitation/event-details'
import { Hero } from '@/components/invitation/hero'
import { OurStory } from '@/components/invitation/our-story'
import { Rsvp } from '@/components/invitation/rsvp'

export default function Page() {
  return (
    <main>
      <Cover3D />
      <Hero />
      <Countdown />
      <OurStory />
      <EventDetails />
      <Rsvp />
    </main>
  )
}
