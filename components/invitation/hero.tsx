import Image from 'next/image'
import { wedding } from '@/lib/wedding'
import { FloralDivider } from './floral-divider'

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-20 md:pb-28">
      <div className="relative -ml-[30%] w-[160%] overflow-hidden md:ml-0 md:w-full">
        <Image
          src="/images/floral-top.png"
          alt=""
          width={1376}
          height={768}
          priority
          sizes="160vw"
          className="h-auto w-full scale-[1.06] [mask-image:linear-gradient(to_bottom,black_65%,transparent_92%)]"
        />
      </div>

      <div className="relative -mt-[44%] px-6 text-center md:-mt-[31%]">
        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-xl duration-1000">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground md:text-sm">
            Together with their families
          </p>

          <h1 className="mt-6 font-script text-6xl leading-none text-primary md:text-8xl">
            <span className="block">{wedding.bride}</span>
            <span className="my-2 block font-serif text-3xl italic text-ring md:text-4xl">&amp;</span>
            <span className="block">{wedding.groom}</span>
          </h1>

          <p className="mt-8 text-lg italic text-muted-foreground md:text-xl">
            request the honour of your presence
            <br />
            at the celebration of their marriage
          </p>

          <FloralDivider className="my-8" />

          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">{wedding.weekday}</p>
          <p className="mt-2 text-2xl font-medium uppercase tracking-[0.2em] md:text-3xl">{wedding.dateLabel}</p>
          <p className="mt-2 text-lg text-muted-foreground">{wedding.year}</p>
          <p className="mt-6 text-lg">
            <span className="font-medium">{wedding.venue.name}</span>
            <br />
            <span className="text-muted-foreground">{wedding.venue.address}</span>
          </p>

          <a
            href="#rsvp"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Kindly Reply
          </a>
        </div>
      </div>
    </header>
  )
}
