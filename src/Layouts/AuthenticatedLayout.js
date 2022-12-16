import { Layout } from "antd";
import AppRoutes from "../routes";

const { Content, Footer } = Layout;

const AuthenticatedLayout = () => {
  return (
    <Layout>
      <Content>
        <AppRoutes />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        TisCord ©{new Date().getFullYear()} Nanosoft Ltd
      </Footer>
    </Layout>
  );
};

export default AuthenticatedLayout;
