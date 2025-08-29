"use client";

import Image from "next/image";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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
  { name: "Italian", image: "/dishes/italian.svg" },
  { name: "Mexican", image: "/dishes/mexican.svg" },
  { name: "Non veg", image: "/dishes/non-veg.svg" },
  { name: "North Indian", image: "/dishes/north-indian.svg" },
  { name: "Salad", image: "/dishes/salad.svg" },
  { name: "South Indian", image: "/dishes/south-indian.svg" },
];

export function Hero() {
  // Refs to store references to dish plate elements and container
  const dishPlates = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP animation setup
  useGSAP(() => {
    /* make sure there are ncessary elements to work with */
    if (!containerRef.current || dishPlates.current.length === 0) return;

    // calculate positions for circular arrangement
    const boxesAmount = dishes.length;
    const step = 360 / boxesAmount;
    let nextIndex = 0;

    // initialize positions of dish plates along the circular path
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

    // draggable functionality for rotation (for mobile devices)
    Draggable.create(containerRef.current, {
      type: "rotation",
      inertia: true,

      /* add snapping effect */
      snap: (endVal) => {
        const snap = gsap.utils.snap(step, endVal);
        const modulus = snap % 360;
        nextIndex = Math.abs((modulus > 0 ? 360 - modulus : modulus) / step);
        return snap;
      },
    });

    // create quick rotation animation function
    const rotateTo = gsap.quickTo(containerRef.current, "rotation", {
      duration: 0.5,
      ease: "power2.out",
    });

    // handle mouse wheel rotation
    const handleWheel = (event: WheelEvent) => {
      const sensitivity = 0.5;
      const currentRotation = gsap.getProperty(
        containerRef.current,
        "rotation",
      ) as number;
      rotateTo(currentRotation + event.deltaY * sensitivity);
    };

    // add wheel event listener
    document.addEventListener("wheel", handleWheel);

    // cleanup function
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section>
      <div className="relative mx-auto max-w-7xl overflow-hidden pt-74 pb-22">
        <div className="container grid items-end gap-30 xl:grid-cols-[2fr_3fr]">
          {/* Left side content section */}
          <div className="z-20">
            {/* Hero title and description */}
            <h1 className="x grid gap-1 text-3xl sm:text-5xl">
              <span className="text-primary font-semibold">Delicious.</span>
              <span className="text-muted-foreground font-medium xl:text-4xl">
                One stop destination
              </span>
            </h1>

            {/* Description text */}
            <p className="mt-4 max-w-xl text-sm sm:mt-6">
              Hunger pangs? You&apos;re at the right stop to drive it away!
              Order delicious food or reserve a table at your next cafe from the
              comfort of your home!
            </p>

            {/* Tagline */}
            <p className="text-muted-foreground mt-10 text-2xl font-medium italic sm:mt-12 xl:mt-11 xl:text-3xl">
              One stop, Many routes
            </p>

            {/* Action buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button variant="outline">Book a table</Button>
              <Button size="lg">Order now!</Button>
            </div>
          </div>

          {/* Right side - Interactive dish wheel */}
          <div className="-order-1 xl:order-1">
            <div className="bg-primary absolute inset-x-0 top-0 z-10 grid aspect-square w-screen items-end justify-items-center overflow-hidden rounded-b-full xl:right-auto xl:left-0 xl:w-294 xl:translate-x-1/5 xl:-translate-y-3/5 xl:rounded-full">
              <div
                ref={containerRef}
                className="size-80 translate-y-1/2 xl:size-150"
              >
                {/* Circular path SVG */}
                <svg
                  width={571}
                  height={571}
                  viewBox="0 0 571 571"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_40)">
                    <path
                      d="M565.129,281.62 A280,280 0 0,0 5.129,281.62 A280,280 0 0,0 565.129,281.62 Z"
                      transform="rotate(37.4826 285.129 281.62)"
                      stroke="#35580F"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      strokeDasharray="10 20"
                      id="myPath"
                      fill="none"
                      shapeRendering="crispEdges"
                    />
                  </g>
                </svg>

                {/* Dish plates arranged in circle */}
                {dishes?.map((dish, index) => (
                  <div
                    key={index}
                    ref={(el: HTMLDivElement | null) => {
                      dishPlates.current[index] = el;
                    }}
                    className={`box absolute top-0 left-0 z-10 grid size-40 place-content-center transition-transform ${index === 0 ? "active" : ""}`}
                  >
                    <Image
                      src={dish?.image || "/placeholder-image.svg"}
                      alt={dish?.name || "Food dish"}
                      width={113}
                      height={113}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
