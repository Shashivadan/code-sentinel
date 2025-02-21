import { currentUser } from "@/src/lib/auth";

export default async function Mail() {
  const userdata = await currentUser();
  return <div>{userdata?.user.name}</div>;
}
