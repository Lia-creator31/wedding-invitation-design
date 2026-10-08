import { Countdown } from '@/components/invitation/countdown'
import { EventDetails } from '@/components/invitation/event-details'
import { Hero } from '@/components/invitation/hero'
import { OurStory } from '@/components/invitation/our-story'
import { Rsvp } from '@/components/invitation/rsvp'

export default function Page() {
  return (
    <main>
      <Hero />
      <Countdown />
      <OurStory />
      <EventDetails />
      <Rsvp />
    </main>
  )
}
