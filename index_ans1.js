

/* 定義全域變數 */
const memo_arr = [];


window.onload = function(){
    

    /** 建立新增按鈕事件監聽器 
    *  取事項、日期輸入框資料，再將資料放到陣列中，再將陣列值逐個渲染到contain */
    document.getElementsByClassName("newMemo")[0].addEventListener("click",function(){
        let memobox = document.getElementById("memobox").value;
        let datebox = document.getElementById("datebox").value;
        memo_arr.push([memobox,datebox]);
        console.log(memo_arr);

        renderContain(memo_arr);
    });
    

    
    /** 建立刪除按鈕事件監聽器  
     *  移出陣列最後新增的資料，再重新將陣列值逐個渲染到contain */
    document.getElementsByClassName("deleteMemo")[0].addEventListener("click",function(){
        memo_arr.pop();
        console.log(memo_arr);
        renderContain(memo_arr);
    });
    
}

/* 渲染contain用 */

function renderContain(arr){
    let memo = "";
    arr.forEach(element => {
        memo += 
            `
            <p>事項${element[0]}</p>
            <p>日期${element[1]}</p>
            <p>----------</p>
            `
        ;
    });
    document.getElementById("contain").innerHTML = memo;

}


