import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  avatar?: InputJsonValue;
  bio?: string | null;
  user?: UserWhereUniqueInput | null;
};
