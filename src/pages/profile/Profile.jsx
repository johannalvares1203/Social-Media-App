import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";


export default function Profile() {
    return (
        <div>
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
              <div className="profileRightTop">
                  <div className="profileCover">
                    <img 
                    className="profileCoverImg" 
                    src="./Assets/Post/4.jpeg" alt="" 
                    />
                    <img 
                    className="profileUserImg" 
                    src="./Assets/Persons/9.jpeg" alt="" 
                    />
                  </div>

                  <div className="profileInfo">
                      <h4 className="profileInfoName">Brad Pitt</h4>
                      <span className="profileInfoDesc">American Actor. Golden Globe Winner x2 :)</span>
                  </div>

              </div>
                <div className="profileRightBottom"></div>
            <Feed/>
            <Rightbar profile/>
            </div>
        </div>
        
        </>
        </div>
    )
}
