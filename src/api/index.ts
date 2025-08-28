import ApiSlice from "@/api/slice";
import EngineSlice from "@/api/Slices/engine";
import GarageSlice from "@/api/Slices/garage";
import WinnersSlice from "@/api/Slices/winners";

class Api extends ApiSlice {
  static garage = GarageSlice;
  static winners = WinnersSlice;
  static engine = EngineSlice;
}

export default Api;
