import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  avatar: JsonValue;
  bio: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
