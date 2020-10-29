import { useQuery, gql } from '@apollo/client';

import { Lookups } from './__generated__/Lookups';

export const LOOKUPS_QUERY = gql`
  query Lookups {
    authors {
      value: id
      label: fullName
    }
  }
`;

export type LookupItem = {
  value: number;
  label: string;
};

export type LookupsHook = () => {
  authors: LookupItem[];
};

export const useLookups: LookupsHook = () => {
  const { data } = useQuery<Lookups>(LOOKUPS_QUERY);

  return {
    authors:
      data?.authors?.map((a) => ({ ...a, value: Number(a.value) })) || [],
  };
};
