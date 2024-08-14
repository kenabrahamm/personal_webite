import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function PalindromePage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        The Space Around You Matters
      </h1>
    <Card className="p-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            When I moved out, my roommate and I discussed how we wanted to feel in the space, and of course the budget. We landed on no couch and no TV.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
            There is no wrong or right living setup, I thought it would be fun to experiment with a decision that's reversible.
        </p>
      </Card>
      <div className="flex justify-center">
        <Image 
          src="/space_around_you/pic1.jpg" 
          alt='pic of the full condo'
          width={800} 
          height={533} 
          className="rounded-lg" 
          priority 
        />
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Introducing the Space
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In the space there's a circular table surrounded by 3 floor chairs while both our desks and monitors sit facing the windows. On the table we always leave, coasters, a deck of cards, colouring pencils and a scroll of paper.
      </p>
      <div className="flex justify-center">
        <Image 
          src="/space_around_you/pic2.jpeg" 
          alt='pic of the table'
          width={800} 
          height={533} 
          className="rounded-lg" 
          priority 
        />
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Link to chair: <Link href="https://amzn.to/3jY1kq0" className="font-medium text-primary underline underline-offset-4">https://amzn.to/3jY1kq0</Link>
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Creating Intentionality
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Your undivided attention is your most valuable asset, I wanted to create an environment where I focused on one thing at a time.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Humans are visual creatures, or at least I am, so it's natural for us to focus on the things around us. I wanted to remove the default center of focus, the TV. By doing this there's space for a new one to emerge, one that is centered around people, one where you're less passively engaged. There's so many times where I found myself scrolling on my phone while watching TV. Getting nothing out of either experience. Now, I find myself sitting down looking blankly at nothing, there's nothing I am supposed to look at. sometimes I sit and only listen to music, or sit and eventually have my eyes shift focus to one of books on the table and read.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        For watching content, I regularly book out the condo theater room, which is always available, or just watch through my laptop. In all fairness I don't watch much TV, but when I do I like the sense of occasion and engagement the theater room brings.
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        A Childlike Wonder
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        In this world it's very easy to take yourself too seriously. Many of us lead very busy lives filled with deadlines, stress and obligations. You might be working on new technology in emerging markets, or high value deals, or at the edge of artistic vision, all this noise makes it really easy to take yourself too seriously.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        When you're sitting on the floor it brings you back to a simpler time. It brings everyone to the same level, a more intimate state where we can all feel a bit more like a kid again. My friends and I joke that the setup is a lot like a kindergarten classroom, with colouring pencils, paper and books in the middle.  At first there's confusion, excitement or a bit of hesitation, after a while I always find people doodling or using the scroll to explain thoughts or just play tic-tac-toe, in either situation I find it more dynamic than watching TV.
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Practicality
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        It's cheap. 3 floor chairs and 1 fancy swivel chair, brand new, cost us a total of $360. It's tough finding  a used sofa for that price seating 4. It also an ideal to cuddle with your girlfriend without falling, we've all been there, you can't fall if you're already on the floor.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Since the chairs folds and lay flat it is always easy to store away and create space, great for morning stretches or playing games. My favourite part of the compact size and low position is how it creates less visual clutter and feeling of openness throughout the space. 
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The seats also encourage you to sit in varied positions, cross legged, stretched out or weird crab stance through your sitting, which is great for mobility.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        It isn't for everyone, but truthfully, I always found myself sitting on the floor leaning against the sofa. So when I got my own place I wanted to recreate that experience everyday.
      </p>
    </div>
  )
}