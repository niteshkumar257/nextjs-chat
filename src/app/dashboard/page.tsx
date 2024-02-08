import { FC } from "react";
import Button from "../_components/ui/buttonx";
import { db } from "@/lib/db";
interface DashboardProps {}
const Dashboard: FC<DashboardProps> = async () => {
  return (
    <div>
      <Button
        className="bg-red-500 text-black font-medium"
        variant="primary"
        size="sm"
      >
        Send Request
      </Button>
    </div>
  );
};
export default Dashboard;
