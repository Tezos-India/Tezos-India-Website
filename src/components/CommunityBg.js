import React, {useContext} from 'react'
import StyleContext from "../contexts/StyleContext";
import '../styles/Community.css'
import Community from './Community';

function CommunityBg(props) {
    const { isDark } = useContext(StyleContext);
    return (
        <div className={isDark ? "community-background dark-community-background" : "community-background"}>
            <div>{props.children}</div>
        </div>
    )
}

export default CommunityBg
