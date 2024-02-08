import { MainContainers } from "./styledcomponents"
import {Name} from "./styledcomponents"
import {Role} from "./styledcomponents"
import {Discription} from "./styledcomponents"

const card = () => {
    return (
        <>
        <li>
            <MainContainers>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>     
            </MainContainers>
        </li>
        </>
    )

}
export default card