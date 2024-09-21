import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProfileTitle } from "../profile/ProfileTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput source="profiles" reference="Profile">
          <SelectArrayInput
            optionText={ProfileTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
