import './sidebar.css'
import {RssFeed, Chat, VideoLibrary, Groups, Bookmark, Help, InsertInvitation} from "@mui/icons-material";
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
    return(
        <div className="sidebar"> 
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <RssFeed className="sidebarIcon"/>
                      <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                      <Chat className="sidebarIcon"/>
                      <span className="sidebarListItemText">Chat</span>
                    </li>

                    <li className="sidebarListItem">
                      <VideoLibrary className="sidebarIcon"/>
                      <span className="sidebarListItemText">Videos</span>
                    </li>

                    <li className="sidebarListItem">
                      <Groups className="sidebarIcon"/>
                      <span className="sidebarListItemText">Groups</span>
                    </li>

                    <li className="sidebarListItem">
                      <Bookmark className="sidebarIcon"/>
                      <span className="sidebarListItemText">Bookmark</span>
                    </li>

                    <li className="sidebarListItem">
                      <Help className="sidebarIcon"/>
                      <span className="sidebarListItemText">Help</span>
                    </li>

                    <li className="sidebarListItem">
                      <InsertInvitation className="sidebarIcon"/>
                      <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />

                <ul className="sidebarFriendList">
                {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
                ))}

                </ul>
            </div>
        </div>
    ); 
}