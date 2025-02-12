/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <div className="bg-green-600 text-green-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h2 className="mb-4 text-2xl font-bold" />
            <img
              src="/logo.png?height=50&width=150"
              alt="logo"
              className="h-12"
            />
            <p className="mb-4">{siteConfig.tagLine}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-green-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/science/"
                  className="transition-colors hover:text-green-300"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  href="/math/"
                  className="transition-colors hover:text-orange-300"
                >
                  Math
                </Link>
              </li>
              <li>
                <Link
                  href="/math/"
                  className="transition-colors hover:text-red-300"
                >
                  English
                </Link>
              </li>
              <li>
                <Link
                  href="/math/"
                  className="transition-colors hover:text-blue-300"
                >
                  Coding
                </Link>
              </li>

              <li>
                <a
                  href="/about/"
                  className="transition-colors hover:text-green-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-green-800 pt-8">
          <div className="flex items-center justify-between">
            <p>&copy; {siteConfig.footerRights}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
