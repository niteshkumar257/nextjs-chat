import { FC } from "react";
import Button from "../_components/ui/buttonx";
interface DashboardProps {}
const Dashboard: FC<DashboardProps> = () => {
  return (
    <div>
      <Button variant={"outline"} size={"lg"} isLoading={true}>Hello there</Button>
    </div>
  );
};
export default Dashboard;
