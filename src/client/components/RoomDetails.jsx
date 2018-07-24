import React from 'react';
import { inject, observer } from 'mobx-react';

// local
import Avatar from './Avatar/index';

@inject('store')
@observer
export default class RoomDetails extends React.Component {
  render() {
    const { group, showRoomDetail, onlineUsers } = this.props.store;
    const showRoomDetailListText = [
      {
        title: '群头像',
        onlineUsers: [{
          // 为了配合循环，故意叫做user_name   ,他的真名叫做group_name
          user_name: group.group_name,
          avatar_url: group.avatar_url,
        }],
        offlineUsers: [],
      },
      {
        title: '管理员',
        onlineUsers: [...group.administratorList.filter(e => onlineUsers.indexOf(e.user_id) >= 0)],
        offlineUsers: [...group.administratorList.filter(e => onlineUsers.indexOf(e.user_id) === -1)],
      }, {
        title: '成员',
        onlineUsers: [...group.memberList.filter(e => onlineUsers.indexOf(e.user_id) >= 0)],
        offlineUsers: [...group.memberList.filter(e => onlineUsers.indexOf(e.user_id) === -1)],
      },
    ];
    return (
      <div id="contentRoomDetails" className={`contentRoomDetails ${showRoomDetail ? 'show' : 'hide'}`}>
        {group &&
          showRoomDetailListText.map((avatars, i) => (
            <div className="showRoomDetailList" key={i}>
              <span className="title">{avatars.title}:</span>
              <span className="avatarContainer">
                {[...avatars.onlineUsers, ...avatars.offlineUsers].map((avatar, j) => (
                  <span className="avatar" key={j}>
                    <Avatar
                      badge={`${j < avatars.onlineUsers.length ? 'online' : 'offline'}`}
                      data-id={avatar.user_id}
                      src={avatar.avatar_url}
                      className="slideAvatar"
                      id="showMoreUserInfo"
                      shape="square"
                      size="middle"
                    />
                    <span className="name">
                      {avatar.user_name}
                    </span>
                  </span>
                ))}
              </span>
            </div>
        ))}
      </div>
    );
  }
}
