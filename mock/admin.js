import mockjs, { Random } from 'mockjs';
import { Request, Response } from 'umi'



// 模拟管理员列表数据

function queryAdminList(req, res) {
  const data = mockjs.mock({
    'list|10': [{
      'id|+1': 1,
      'name': '@cname',
      'age': '@integer(18,60)',
      'address': '@county(true)',
      'tags': ['nice', 'developer']
    }]
  })
  res.json({
    code: 200,
    success: true,
    data: data,
    total: data.list.length,
  })
}

function queryClientLabelList(req, res) {
  const data = mockjs.mock({
    'tags|20': [
      {
        'id|+1': 1,
        name: Random.string(),
        type: Random.integer(0, 1),
      },
    ],
  });
  res.json({
    code: 200,
    message: '',
    data: data.tags,
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  'GET /api/admin/list': queryAdminList,
  'GET /user/tag/simplePage': queryClientLabelList,
}