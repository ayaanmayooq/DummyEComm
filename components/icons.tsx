import {
    LucideProps,
    Moon,
    SunMedium,
  } from "lucide-react"

export const Icons = {
    sun: SunMedium,
    moon: Moon,
    logo: (props: LucideProps) => (
        <img
            src="/logo.png"
            alt="Logo"
            {...props}
        />
    ),
  }
  