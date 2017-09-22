

import Position from "../modules/Position"
import dispatcher from "./dispatcher"

const actions = {
    getPosition() {
        Position((info)=>{
            dispatcher.dispatch({
                type: "CHANGE_POSITION_INFO",
                info
            })
        })
    },
    changePosition(info) {
        dispatcher.dispatch({
            type: "CHANGE_POSITION_INFO",
            info
        })
    }
}

export default actions

























































