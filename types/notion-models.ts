import { ParsedUrlQuery } from "querystring"

export interface NotionProps {
  posts: [any]
}
export interface IParams extends ParsedUrlQuery {
  id: string
}