import { Trophy } from "lucide-react";
import WinnerTable from "../Features/Winner/components/Winner-table/Winner-table";

export default function Winners() {
  return <div>
    <div>
      <h1 className="text-white text-[50px] text-center title">WINNERS</h1>
      <div className="flex justify-center">
        <Trophy className="text-[#FFD700]" size={64}/>
      </div>
    </div>
    <WinnerTable />
  </div>;
}