import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bathroom from "./Bathroom"

const FloorPlan = (props) => {
    return (
      <div id="floorplan">
      <Bedroom bedNum = {1} />
      <Kitchen />
      <Bathroom size='Full'/>
      <Bedroom bedNum = {2} />
      <LivingRoom />
      <Bathroom size='Half'/>
      <Bedroom bedNum = {3} />
      </div>
    );
  };
  

export default FloorPlan

