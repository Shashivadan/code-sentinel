import { currentUser } from "@/src/lib/auth";

export default async function Mail() {
  const userdata = await currentUser();
  return <div className="w-full h-screen  ">{userdata?.user.name}</div>;
}
