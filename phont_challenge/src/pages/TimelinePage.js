import "./page.css"

import { TimelineComponent } from "./elements/TimelineComponent"
import { NavComponent} from "./NavComponent"
import { InputComponent } from "./InputComponent";

export const TimelinePage = () => {


    return (
        <>
            <div className="grid-container">

                    <div className="nav-component"><NavComponent/></div>
                    <div ><InputComponent/></div>
                    <div xs={6}><TimelineComponent /></div>

            </div>
            {/* <div className="page">
                

            </div> */}

        </>
    )
}
