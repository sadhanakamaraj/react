import { useState } from 'react';
import Arrchild from './archild/archild';
function ArrayComp() {
    const [text] = useState([
        {
            fname: "abc",
            Age: 20
        }
    ]
    )
    return <>

        {
            text.map((ele) => {
                return <Arrchild info={ele} />
            })
        }

    </>
}
export default ArrayComp;