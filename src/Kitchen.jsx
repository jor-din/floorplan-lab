import Sink from "./Sink"
import Oven from "./Oven"
const Kitchen = (props) => {
    return(
        <div className="kitchen" id="kitchen">
            <span className="kitchen-name">Kitchen</span>
            <Sink />
            <Oven />
        </div>
    )
}
export default Kitchen