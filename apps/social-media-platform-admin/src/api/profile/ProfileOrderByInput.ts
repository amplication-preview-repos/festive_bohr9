import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  avatar?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
