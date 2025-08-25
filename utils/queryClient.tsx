'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react';

const STALE_TIME = 1000 * 30

const client = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : STALE_TIME
    }
  }
});

export const TanstackQueryProvider: FC<PropsWithChildren> = (props) => {
  const {children} = props
  return <QueryClientProvider client={client}>
    {children}
  </QueryClientProvider>
}