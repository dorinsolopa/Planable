import React from "react";
import { Card, Avatar, Button, Space } from "antd";
import {
  HeartOutlined,
  CommentOutlined,
  RightOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Post = (props) => {
  const { post } = props;
  console.log("post-->", post);

  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          <Card
            style={{ marginTop: 32, width: 500 }}
            type="inner"
            title={post.title}
            align="center"
            extra={
              <a href={post.url} target="_blank">
                More <LogoutOutlined />
              </a>
            }
            actions={[
              <Button style={{ border: "none" }} icon={<HeartOutlined />}>
                {post.score}
              </Button>,
              <Button style={{ border: "none" }} icon={<CommentOutlined />}>
                {post.num_comments}
              </Button>,
              <Button style={{ border: "none" }} icon={<RightOutlined />}>
                {post.pwls}
              </Button>,
            ]}
          >
            <Meta
              align="start"
              avatar={<Avatar src={post.thumbnail} />}
              title={post.name}
              description={post.selftext}
            />
          </Card>
        </Space>
      </div>
    </div>
  );
};
export default Post;
