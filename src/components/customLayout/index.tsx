import react, { FC } from "react";
import {
  CalendarOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Layout, Menu, theme } from "antd";
import { ReactNode } from "react";
import Link from "next/link";
import MenuItem from "antd/es/menu/MenuItem";

interface MyProps {
  children?: ReactNode;
}
const { Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  { icon: UserOutlined, label: "zeinab sayyadi" },
  { icon: CalendarOutlined, label: "calendar" },
  { icon: BellOutlined, label: "reminders" },
].map((item, index) => ({
  key: String(index + 1),
  icon: react.createElement(item.icon),
  label: `${item.label}`,
}));

const CustomLayout: FC<MyProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          //items={items}
        >
          <Menu.Item key="1">
            <Avatar
              size="large"
              src={
                <img
                  src={"rickProfile.jpg"}
                  alt="Rick Sanchez"
                />
              }
            />
            <span
              style={{
                paddingLeft: "1rem",
              }}
            >
              Rick Sanchez
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <CalendarOutlined />
            <span>calendar</span>
            <Link href="/" />
          </Menu.Item>
          <Menu.Item key="3">
            <BellOutlined />
            <span>reminder</span>
            <Link href="/reminders" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout bg-violet-950"
        style={{ marginLeft: 200 }}
      >
        <Content
          style={{ overflow: "hidden" }}
          className="h-screen m-0"
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default CustomLayout;
