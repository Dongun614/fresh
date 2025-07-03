export default function List(){
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let 어레이 = [2,3,4]
  // let b = 어레이.map(function(a, i){
  //   return 10
  // })

  return (
    <div>
       <h4 className="title">상품목록</h4>
       {
        상품.map((a, i)=>{
          return(
            <div className="food">
              <h4>{ 상품[i] } $40</h4>
            </div>
          )
        })
       }
    </div>
  )
}
