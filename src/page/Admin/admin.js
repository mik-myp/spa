import axios from 'axios';


function queryAdminList() {
  axios.get('/api/admin/list').then(res => {
    console.log(res);
  })
}



export {
  queryAdminList,
}