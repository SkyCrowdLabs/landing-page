"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-dark-indigo from-10% via-mid-indigo via-60% to-light-indigo to-90%">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">SkyCrowd Labs</span>
            <Image
              src="/skycrowd-indigo-logo.svg"
              alt=""
              height={150}
              width={150}
            />
          </a>
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end tracking-wide">
          Bespoke web development services
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
