import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  avatar?: InputJsonValue;
  bio?: string | null;
  user?: UserWhereUniqueInput | null;
};
