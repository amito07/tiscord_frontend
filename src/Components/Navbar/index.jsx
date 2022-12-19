import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Col,
  Row,
  Image,
  Avatar,
  Dropdown,
  Drawer,
  Button,
  Input,
  Skeleton,
  Card,
  Typography,
} from "antd";
import { RiMessengerLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

import { ChatContext } from "../../Context/ChatProvider";
import { SearchOutlined } from "@ant-design/icons";
import { BaseAPI, config } from "../../utils/ApiGateway";
import { Notification } from "../../utils/Notification";

const { Search } = Input;
const { Text } = Typography;

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(ChatContext);
  const [open, setOpen] = useState(false);
  const [searchUsers, setSearchUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("searchUsers", searchUsers);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onSearch = async (value) => {
    setLoading(true);
    const config = {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    };
    try {
      const result = await BaseAPI.get(`/user?search=${value}`, config);
      setSearchUsers(result?.data?.requesteduser);
    } catch (error) {
      Notification("Error", "Something went wrong", "error");
    }
    setLoading(false);
  };

  console.log("searchUsers", searchUsers);

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  const items = [
    {
      label: "Logout",
      key: "0",
      icon: <FiLogOut />,
    },
  ];

  const menuProps = {
    items,
    onClick: logout,
  };

  return (
    <>
      <Drawer
        title={
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        {searchUsers.map((el, index) => (
          <>
            <Skeleton key={el._id} loading={loading} active={loading} />
            <Link to='/chat'>
              <Card onClick={()=> setOpen(false)} key={index}>
                <Avatar
                  src={
                    <Image
                      src={el.pic}
                      style={{
                        width: 30,
                      }}
                    />
                  }
                />
                <Text style={{ marginLeft: "1em" }} strong>
                  {el.name}
                </Text>
              </Card>
            </Link>
          </>
        ))}
      </Drawer>
      <Row justify="space-around">
        <Col xs={8}>
          <Button type="primary" icon={<SearchOutlined />} onClick={showDrawer}>
            Search
          </Button>
        </Col>
        <Col xs={12}>
          <Row justify="end">
            <Col>
              <Link>
                <Avatar
                  size={64}
                  icon={<RiMessengerLine />}
                  onClick={showDrawer}
                />
              </Link>
            </Col>
            <Col>
              <Link>
                <Avatar size={64} icon={<IoNotificationsOutline />} />
              </Link>
            </Col>
            <Col>
              <Dropdown menu={menuProps}>
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    marginLeft: "1em",
                  }}
                >
                  {user?.name[0].toUpperCase()}
                </Avatar>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
