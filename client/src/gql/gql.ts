/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation createUser($email: String, $username: String, $password: String!, $firstName: String!, $lastName: String!, $role: String) {\n      createUser(user: {email: $email, username: $username, password: $password, firstName: $firstName, lastName: $lastName, role: $role}) {\n        id\n        fullName\n        firstName\n        lastName\n        email\n        username\n        role\n      }\n    }\n  ": types.CreateUserDocument,
    "\n    mutation login($email: String, $password: String!) {\n      login(authLogin: {email: $email, password: $password}) {\n        token\n        user {\n          id\n          fullName\n          firstName\n          lastName\n          email\n          username\n          role\n        }\n      }\n    }\n  ": types.LoginDocument,
    "\n    query getAllUsers {\n      getAllUsers {\n        id\n        fullName\n        firstName\n        lastName\n        email\n        username\n        role\n      }\n    }\n  ": types.GetAllUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createUser($email: String, $username: String, $password: String!, $firstName: String!, $lastName: String!, $role: String) {\n      createUser(user: {email: $email, username: $username, password: $password, firstName: $firstName, lastName: $lastName, role: $role}) {\n        id\n        fullName\n        firstName\n        lastName\n        email\n        username\n        role\n      }\n    }\n  "): (typeof documents)["\n    mutation createUser($email: String, $username: String, $password: String!, $firstName: String!, $lastName: String!, $role: String) {\n      createUser(user: {email: $email, username: $username, password: $password, firstName: $firstName, lastName: $lastName, role: $role}) {\n        id\n        fullName\n        firstName\n        lastName\n        email\n        username\n        role\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation login($email: String, $password: String!) {\n      login(authLogin: {email: $email, password: $password}) {\n        token\n        user {\n          id\n          fullName\n          firstName\n          lastName\n          email\n          username\n          role\n        }\n      }\n    }\n  "): (typeof documents)["\n    mutation login($email: String, $password: String!) {\n      login(authLogin: {email: $email, password: $password}) {\n        token\n        user {\n          id\n          fullName\n          firstName\n          lastName\n          email\n          username\n          role\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAllUsers {\n      getAllUsers {\n        id\n        fullName\n        firstName\n        lastName\n        email\n        username\n        role\n      }\n    }\n  "): (typeof documents)["\n    query getAllUsers {\n      getAllUsers {\n        id\n        fullName\n        firstName\n        lastName\n        email\n        username\n        role\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;