import React from "react"

export function Introduction() {
  return (
    <div className="space-y-4 mt-6">
      <p className="font-light ">I have a love for the <span className="font-semibold"> real world </span></p>
      <p className="font-light">
      Focusing on doing great work at the intersection of the <span className="text-muted-foreground font-semibold">digital</span> and <span className="text-muted-foreground font-semibold">physical </span> things. Currently building products in both realms with the aiming to expand my understanding of manufacturing processes/philosophies & digital infrastructure.
      </p>
      <p className="font-light">
        I have a formal education in Finance/Econ from Rotman Commerce @
        <span className="font-semibold"> University of Toronto. </span> My informal education spans 
        <span className="font-semibold"> UI design,</span>
        <span className="font-semibold"> Front-end develop </span> and
        <span className="font-semibold">  data-science.</span>
        
        {/* <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">React</span>, and{" "}
        <span className="font-semibold">TypeScript</span> for the frontend and{" "}
        <span className="font-semibold">Django</span> for the backend. */}
      </p>
      <p className="font-light">
        I currently work in warehousing {" "}
        <span className="font-semibold"> Analytics / Project Management</span> at{" "}
        <span className="font-semibold">Procter & Gamble</span>
      </p>
    </div>
  )
}
