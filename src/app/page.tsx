import { redirect } from "next/navigation";

export default function Page() {
  const isLoggedIn = false; // بعداً از cookie/localStorage میاد

  if (isLoggedIn) {
    redirect("/home");
  } else {
    redirect("/login");
  }
}