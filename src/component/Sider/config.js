const titleList = [
  {
    id: 1,
    title: "管理员管理",
    children: [
      {
        id: "1-1",
        title: "管理员列表",
        path: "/adminlist",
      },
      {
        id: "1-2",
        title: "职位列表",
        path: "/positionlist",
      },
    ],
  },
  {
    id: 2,
    title: "用户管理",
    children: [
      {
        id: "2-1",
        title: "用户列表",
        path: "/userlist",
      }],
  },
  {
    id: 3,
    title: "商品管理",
    children: [
      {
        id: "3-1",
        title: "商品列表",
        path: "/goodslist",
      },
      {
        id: "3-2",
        title: "供应商列表",
        path: "/gyslist",
      }],
  },
];

export default titleList;