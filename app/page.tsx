import { redirect } from "next/navigation"

import { DEFAULT_LOCALE } from "@/lib/constants"

export default function RedirectPage(1) {
  redirect(DEFAULT_LOCALE)
}
