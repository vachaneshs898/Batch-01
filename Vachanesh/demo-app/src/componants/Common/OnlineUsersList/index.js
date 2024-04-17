import React from "react";
import UserWithImage from "../../UI/UserWithImage";
import Card from "../../UI/Card";
import "./index.css";
import Typography from "../../UI/Typography";
import Box from "componants/UI/Box";

const onlineUsers = [
  {
    name: "Vachanesh Saindane",
    imageSrc:
      "https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png",
  },
  {
    name: "Rakesh More",
    imageSrc:
      "https://e7.pngegg.com/pngimages/683/60/png-clipart-man-s-profile-illustration-computer-icons-user-profile-profile-ico-photography-silhouette-thumbnail.png",
  },
  {
    name: "Satish Gore",
    imageSrc:
      "https://e7.pngegg.com/pngimages/954/328/png-clipart-computer-icons-user-profile-avatar-heroes-head-thumbnail.png",
  },
  {
    name: "Rajesh Koli",
    imageSrc:
      "https://e7.pngegg.com/pngimages/51/162/png-clipart-computer-icons-colorado-state-university-female-user-profile-business-business-people-monochrome.png",
  },
];

function OnlineUsersList() {
  return (
    <Card className="online-users-list">
      <Box style={{ margin: "10px 0px" }}>
        <Typography type="heading">Online Users</Typography>
      </Box>
      {onlineUsers.map((user) => (
        <UserWithImage name={user.name} src={user.imageSrc} />
      ))}
    </Card>
  );
}

export default OnlineUsersList;
