import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Mutation = {
  __typename?: 'Mutation';
  updateProfile: User;
  updatePassword: User;
};


export type MutationUpdateProfileArgs = {
  user: UserUpdateInput;
};


export type MutationUpdatePasswordArgs = {
  passwords: PasswordUpdateInput;
};

export type PasswordUpdateInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<User>>;
  profile: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserUpdateInput = {
  name: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
};

export type UpdatePasswordMutationVariables = Exact<{
  passwords: PasswordUpdateInput;
}>;


export type UpdatePasswordMutation = (
  { __typename?: 'Mutation' }
  & { updatePassword: (
    { __typename?: 'User' }
    & ProfileFragment
  ) }
);

export type UpdateProfileMutationVariables = Exact<{
  user: UserUpdateInput;
}>;


export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateProfile: (
    { __typename?: 'User' }
    & ProfileFragment
  ) }
);

export type ProfileFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'imageUrl'>
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { profile: (
    { __typename?: 'User' }
    & ProfileFragment
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'createdAt' | 'updatedAt'>
  )>> }
);

export const ProfileFragmentDoc = gql`
    fragment profile on User {
  id
  name
  email
  imageUrl
}
    `;
export const UpdatePasswordDocument = gql`
    mutation updatePassword($passwords: PasswordUpdateInput!) {
  updatePassword(passwords: $passwords) {
    ...profile
  }
}
    ${ProfileFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePasswordGQL extends Apollo.Mutation<UpdatePasswordMutation, UpdatePasswordMutationVariables> {
    document = UpdatePasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProfileDocument = gql`
    mutation updateProfile($user: UserUpdateInput!) {
  updateProfile(user: $user) {
    ...profile
  }
}
    ${ProfileFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProfileGQL extends Apollo.Mutation<UpdateProfileMutation, UpdateProfileMutationVariables> {
    document = UpdateProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProfileDocument = gql`
    query profile {
  profile {
    ...profile
  }
}
    ${ProfileFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
    document = ProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsersDocument = gql`
    query users {
  users {
    id
    email
    name
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }