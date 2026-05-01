import { createClient } from "@/lib/supabase/server";
import { StatsData } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function AdminIndexPage() {
  redirect("/admin/dashboard");
}
