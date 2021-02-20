# Chatroom

[![Build Status](https://travis-ci.org/pengliheng/chatroom.svg?branch=develop)](https://travis-ci.org/pengliheng/chatroom)
[![codeCov](https://codecov.io/gh/pengliheng/chatroom/branch/develop/graph/badge.svg)](https://codecov.io/gh/pengliheng/chatroom)

## Run command

```bash
docker-compose up -d
```

## Api Code

```bash
code: 0 // success
code: 1 // fail

GET（SELECT）：从服务器取出资源（一项或多项）。
POST（CREATE）：在服务器新建一个资源。
PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
DELETE（DELETE）：从服务器删除资源。

GET /zoos：列出所有动物园
POST /zoos：新建一个动物园
GET /zoos/ID：获取某个指定动物园的信息
PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
DELETE /zoos/ID：删除某个动物园
GET /zoos/ID/animals：列出某个指定动物园的所有动物
DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物

?limit=10：指定返回记录的数量
?offset=10：指定返回记录的开始位置。
?page=2&per_page=100：指定第几页，以及每页的记录数。
?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。
?animal_type_id=1：指定筛选条件
```

## 功能说明

1. 登录/注册
2. 搜索框, 出现如下 4 个区域内容, 如果能搜出东西, 才会出现该区域.
   1. 用户的检索, 采用完全匹配
   2. 房间内有该人的房间
   3. 房间名字的检索
   4. 聊天内容的检索.
3. 添加好友, 同意或者拒绝, 后端API应该防止重复添加好友. 前端应该在搜索人的时候, 将已经是好友的, 点击直接进入聊天框. 还不是好友的
4. 添加聊天 2 人对话, 三人以上群聊, 都属于聊天框, 只能拉朋友进入聊天群.

## Test Account

```
username: admin
password: admin
```

## TODO

1. websocket.
2. unit test.
3. 添加好友功能优化.
4. 发语音.
5. 发视频.
