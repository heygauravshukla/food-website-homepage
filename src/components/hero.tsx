"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable, InertiaPlugin, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(Draggable, InertiaPlugin, MotionPathPlugin);

import { Button } from "@/components/ui/button";

interface DishItem {
  name?: string;
  image?: string;
}

const dishes: DishItem[] = [
  { name: "Italian", image: "/dishes/italian.svg" },
  { name: "Mexican", image: "/dishes/mexican.svg" },
  { name: "Non veg", image: "/dishes/non-veg.svg" },
  { name: "North Indian", image: "/dishes/north-indian.svg" },
  { name: "Salad", image: "/dishes/salad.svg" },
  { name: "South Indian", image: "/dishes/south-indian.svg" },
];

export function Hero() {
  const dishPlates = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current || dishPlates.current.length === 0) return;

    const boxesAmount = dishes.length;
    const step = 360 / boxesAmount;
    let nextIndex = 0;

    // Set initial positions
    gsap.set(dishPlates.current.filter(Boolean), {
      motionPath: {
        path: "#myPath",
        align: "#myPath",
        alignOrigin: [0.5, 0.5],
        start: -0.25,
        end: (i) => i / boxesAmount - 0.25,
        autoRotate: true,
      },
    });

    // Create draggable
    Draggable.create(containerRef.current, {
      type: "rotation",
      inertia: true,
      snap: (endVal) => {
        const snap = gsap.utils.snap(step, endVal);
        const modulus = snap % 360;
        nextIndex = Math.abs((modulus > 0 ? 360 - modulus : modulus) / step);
        return snap;
      },
      onThrowComplete: () => {
        const plates = dishPlates.current.filter(Boolean);
        plates[activeIndex]?.classList?.toggle("active");
        plates[nextIndex]?.classList?.toggle("active");
        setActiveIndex(nextIndex);
      },
    });
  }, [activeIndex]);

  return (
    <section className="hero-section">
      <div className="mx-auto max-w-7xl py-20">
        <div className="container grid items-end gap-10 xl:grid-cols-2">
          {/* text box */}
          <div>
            <h1 className="grid gap-1 text-3xl sm:text-5xl">
              <span className="text-primary font-semibold">Delicious.</span>
              <span className="text-muted-foreground font-medium">
                One stop destination
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm sm:mt-6">
              Hunger pangs? You’re at the right stop to drive it away! Order
              delicious food or reserve a table at your next cafe from the
              comfort of your home!
            </p>

            <p className="text-muted-foreground mt-10 text-2xl font-medium italic sm:mt-12">
              One stop, Many routes
            </p>

            {/* button group */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button variant="outline">Book a table</Button>
              <Button size="lg">Order now!</Button>
            </div>
          </div>

          {/* dishes wheel */}
          <div ref={containerRef} className="relative">
            {/* svg to mimic border */}
            <svg viewBox="0 0 400 400">
              <path
                strokeWidth="2"
                stroke="currentColor"
                id="myPath"
                fill="none"
                d="M396,200 C396,308.24781 308.24781,396 200,396 91.75219,396 4,308.24781 4,200 4,91.75219 91.75219,4 200,4 308.24781,4 396,91.75219 396,200 z"
              ></path>
            </svg>

            {/* dish plates */}
            {dishes.map((dish, index) => (
              <div
                key={dish.name}
                ref={(el: HTMLDivElement | null) => {
                  dishPlates.current[index] = el;
                }}
                className={`box absolute top-0 left-0 grid size-40 place-content-center transition-transform ${index === 0 ? "active" : ""}`}
              >
                <Image
                  src={dish.image || "/placeholder-image.svg"}
                  alt={dish.name || "Food dish"}
                  width={113}
                  height={113}
                  className="select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
