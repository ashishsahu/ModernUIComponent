import type { ComponentVariantPage } from "@/app/component-variants/types"

import { Login01Preview } from "@/app/component-examples/generated/login/01"
import { Login01Code } from "@/app/component-examples/generated/login/01.code"
import { Login02Preview } from "@/app/component-examples/generated/login/02"
import { Login02Code } from "@/app/component-examples/generated/login/02.code"
import { Login03Preview } from "@/app/component-examples/generated/login/03"
import { Login03Code } from "@/app/component-examples/generated/login/03.code"
import { Login04Preview } from "@/app/component-examples/generated/login/04"
import { Login04Code } from "@/app/component-examples/generated/login/04.code"
import { Login05Preview } from "@/app/component-examples/generated/login/05"
import { Login05Code } from "@/app/component-examples/generated/login/05.code"
import { Signup01Preview } from "@/app/component-examples/generated/signup/01"
import { Signup01Code } from "@/app/component-examples/generated/signup/01.code"
import { Signup02Preview } from "@/app/component-examples/generated/signup/02"
import { Signup02Code } from "@/app/component-examples/generated/signup/02.code"
import { Signup03Preview } from "@/app/component-examples/generated/signup/03"
import { Signup03Code } from "@/app/component-examples/generated/signup/03.code"
import { Signup04Preview } from "@/app/component-examples/generated/signup/04"
import { Signup04Code } from "@/app/component-examples/generated/signup/04.code"
import { Signup05Preview } from "@/app/component-examples/generated/signup/05"
import { Signup05Code } from "@/app/component-examples/generated/signup/05.code"

export const LoginVariantPage: ComponentVariantPage = {
  name: "login",
  title: "Login",
  description: "Authentication layouts and login form blocks.",
  install: "npx shadcn@latest add login-01",
  variants: [
    {
      id: "01",
      title: "Example 01",
      description: "A simple login form.",
      Preview: Login01Preview,
      code: Login01Code,
    },
    {
      id: "02",
      title: "Example 02",
      description: "A two column login page with a cover image.",
      Preview: Login02Preview,
      code: Login02Code,
    },
    {
      id: "03",
      title: "Example 03",
      description: "A login page with a muted background color.",
      Preview: Login03Preview,
      code: Login03Code,
    },
    {
      id: "04",
      title: "Example 04",
      description: "A login page with form and image.",
      Preview: Login04Preview,
      code: Login04Code,
    },
    {
      id: "05",
      title: "Example 05",
      description: "A simple email-only login page.",
      Preview: Login05Preview,
      code: Login05Code,
    },
  ],
}

export const SignupVariantPage: ComponentVariantPage = {
  name: "signup",
  title: "Signup",
  description: "Registration layouts and signup form blocks.",
  install: "npx shadcn@latest add signup-01",
  variants: [
    {
      id: "01",
      title: "Example 01",
      description: "A simple signup form.",
      Preview: Signup01Preview,
      code: Signup01Code,
    },
    {
      id: "02",
      title: "Example 02",
      description: "A two column signup page with a cover image.",
      Preview: Signup02Preview,
      code: Signup02Code,
    },
    {
      id: "03",
      title: "Example 03",
      description: "A signup page with a muted background color.",
      Preview: Signup03Preview,
      code: Signup03Code,
    },
    {
      id: "04",
      title: "Example 04",
      description: "A signup page with form and image.",
      Preview: Signup04Preview,
      code: Signup04Code,
    },
    {
      id: "05",
      title: "Example 05",
      description: "A simple signup form with social providers.",
      Preview: Signup05Preview,
      code: Signup05Code,
    },
  ],
}
