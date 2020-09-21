import React from "react";
import Post from "../Post/Post";
import { Pagination, Input } from "antd";

const { Search } = Input;
const PAGE_SIZE = 5;

class PostLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  onPageChange = (page) => {
    this.setState({ currentPage: page });
    console.log("page-->", page);
  };

  paginate = (list) => {
    const startIndex = (this.state.currentPage - 1) * PAGE_SIZE;

    return list.slice(startIndex, startIndex + PAGE_SIZE);
  };

  render() {
    const { list, onSearch } = this.props;
    const paginatedList = this.paginate(list);

    return (
      <div>
        <div>
          <Search
            enterButton="Search"
            placeholder="Search text"
            onSearch={onSearch}
            style={{ width: 300, marginTop: 30 }}
          />
        </div>
        {paginatedList.map((post) => {
          return <Post post={post.data} key={post.data.id} />;
        })}
        <br />
        <div style={{ paddingBottom: "30px" }}>
          <Pagination
            current={this.state.currentPage}
            total={list.length}
            pageSize={PAGE_SIZE}
            onChange={this.onPageChange}
          />
        </div>
      </div>
    );
  }
}
export default PostLists;
