import axios from "../config/axios_config";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import PostLists from "../PostList/PostList";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: [],
      data: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get("/popular.json", {
        params: {},
      });
      console.log("response-->", response);
      this.setState({ data: response.data.data.children });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchPost = (value) => {
    const filteredData = this.state.data.filter((post) => {
      return post.data.title.includes(value);
    });
    this.setState({ filteredData });
  };

  render() {
    const { isLoading, data, filteredData } = this.state;
    if (isLoading) {
      return (
        <div>
          "Loading " <LoadingOutlined />
        </div>
      );
    }
    const list = filteredData.length ? filteredData : data;
    return (
      <div>
        <PostLists onSearch={this.searchPost} list={list || []} />
      </div>
    );
  }
}
export default LandingPage;
