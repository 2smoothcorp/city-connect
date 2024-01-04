
import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const defaultOptions: DefaultOptions = {
  queries: {
    retry: false,
    enabled: false,
    refetchOnWindowFocus: false,
    staleTime: 500
  }
}

const queryClient = new QueryClient({
  defaultOptions
})

export default queryClient;