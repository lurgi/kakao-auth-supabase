"use client";

import { useState } from "react";

import { Database } from "@/types/supabase";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProp {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProp> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
