import "./page.css"

import { TimelineComponent } from "./elements/TimelineComponent"
import { NavComponent} from "./elements/NavComponent"
import { InputComponent } from "./elements/InputComponent";

export const TimelinePage = () => {


    return (
        <>
            <div className="grid-container">

                    <div className="nav-component"><NavComponent/></div>
                    <div ><InputComponent/></div>
                    <div ><TimelineComponent /></div>

            </div>

        </>
    )
}
