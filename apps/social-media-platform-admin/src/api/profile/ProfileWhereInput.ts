import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  avatar?: JsonFilter;
  bio?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
