import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
    const HomeRightbar = () => { 
        return (
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="./Assets/gift.png" alt="" />
                    <span className="birthdayText" >
                        <b>Johann Alvares</b> & <b>3 other friends</b> have their birthday today
                    </span>
                </div>

                <img className="rightbarAd" src="./Assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
            <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return ( 
          <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Contact Number :</span>
            <span className="rightbarInfoValue">1800 242 5858</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email Id :</span>
            <span className="rightbarInfoValue"> bradpitt12@example.com</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Aldona</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Goa, India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="./Assets/Persons/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Oshira Mayamotu</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./Assets/Persons/7.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Kasumi Arimura</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./Assets/Persons/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mira Oswald</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./Assets/Persons/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Rock</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./Assets/Persons/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./Assets/Persons/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Alan Burke</span>
          </div>
        </div>
          </>
        );
    };
            

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
};