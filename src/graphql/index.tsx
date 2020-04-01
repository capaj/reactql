import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from 'react-apollo'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type HackerNews = {
  __typename?: 'HackerNews'
  topStories?: Maybe<Array<Maybe<Story>>>
  newStories?: Maybe<Array<Maybe<Story>>>
}

export type Query = {
  __typename?: 'Query'
  hn?: Maybe<HackerNews>
}

export type Story = {
  __typename?: 'Story'
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  time?: Maybe<Scalars['Int']>
}

export type GetHackerNewsTopStoriesQueryVariables = {}

export type GetHackerNewsTopStoriesQuery = { __typename?: 'Query' } & {
  hn: Maybe<
    { __typename?: 'HackerNews' } & {
      topStories: Maybe<
        Array<
          Maybe<{ __typename?: 'Story' } & Pick<Story, 'id' | 'title' | 'url'>>
        >
      >
    }
  >
}

export type NewStoriesQueryVariables = {}

export type NewStoriesQuery = { __typename?: 'Query' } & {
  hn: Maybe<
    { __typename?: 'HackerNews' } & {
      newStories: Maybe<
        Array<
          Maybe<{ __typename?: 'Story' } & Pick<Story, 'id' | 'title' | 'time'>>
        >
      >
    }
  >
}

export const GetHackerNewsTopStoriesDocument = gql`
  query GetHackerNewsTopStories {
    hn {
      topStories {
        id
        title
        url
      }
    }
  }
`

/**
 * __useGetHackerNewsTopStoriesQuery__
 *
 * To run a query within a React component, call `useGetHackerNewsTopStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHackerNewsTopStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHackerNewsTopStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHackerNewsTopStoriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetHackerNewsTopStoriesQuery,
    GetHackerNewsTopStoriesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetHackerNewsTopStoriesQuery,
    GetHackerNewsTopStoriesQueryVariables
  >(GetHackerNewsTopStoriesDocument, baseOptions)
}
export function useGetHackerNewsTopStoriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetHackerNewsTopStoriesQuery,
    GetHackerNewsTopStoriesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetHackerNewsTopStoriesQuery,
    GetHackerNewsTopStoriesQueryVariables
  >(GetHackerNewsTopStoriesDocument, baseOptions)
}
export type GetHackerNewsTopStoriesQueryHookResult = ReturnType<
  typeof useGetHackerNewsTopStoriesQuery
>
export type GetHackerNewsTopStoriesLazyQueryHookResult = ReturnType<
  typeof useGetHackerNewsTopStoriesLazyQuery
>
export type GetHackerNewsTopStoriesQueryResult = ApolloReactCommon.QueryResult<
  GetHackerNewsTopStoriesQuery,
  GetHackerNewsTopStoriesQueryVariables
>
export const NewStoriesDocument = gql`
  query newStories {
    hn {
      newStories {
        id
        title
        time
      }
    }
  }
`

/**
 * __useNewStoriesQuery__
 *
 * To run a query within a React component, call `useNewStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewStoriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    NewStoriesQuery,
    NewStoriesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<NewStoriesQuery, NewStoriesQueryVariables>(
    NewStoriesDocument,
    baseOptions
  )
}
export function useNewStoriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    NewStoriesQuery,
    NewStoriesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    NewStoriesQuery,
    NewStoriesQueryVariables
  >(NewStoriesDocument, baseOptions)
}
export type NewStoriesQueryHookResult = ReturnType<typeof useNewStoriesQuery>
export type NewStoriesLazyQueryHookResult = ReturnType<
  typeof useNewStoriesLazyQuery
>
export type NewStoriesQueryResult = ApolloReactCommon.QueryResult<
  NewStoriesQuery,
  NewStoriesQueryVariables
>
