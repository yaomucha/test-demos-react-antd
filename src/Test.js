import { useRequest } from "ahooks"


export default function Test(props) {

  const { data, error, loading, run, cancel,mutate } = useRequest(async () => {
    return fetch("http://127.0.0.1:4523/mock/2272042/api/partner/list").then(res => { return res.json() })
  },{
    debounceWait:500,
    debounceMaxWait:1000
  })

  if (error) {
    return <div>failed to load</div>;
  }
  // if (loading) {
  //   return <div>loading...</div>;
  // }

  return (<div>123,{data?.code} <div onClick={() => {run();}}>请求</div><div onClick={() => cancel()}>取消</div></div>)
}                                                                                             