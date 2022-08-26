
/* write */
var v_form = document.querySelector("#id_wform");
v_form.onsubmit = function () {
    event.preventDefault(); // 전송 막음
    v_form.submit();  // 전송
}

/* dummyData */
var v_dummyDatas = [];

    for (var i = 1; i <= 3; i++) {
        var v_gul = {}; // 빈 객체 생성
        v_gul.pid = i;
        v_gul.title = "제목" + i;
        v_gul.writer = "작성자" + i;
        v_gul.content = "내용" + i;
        v_dummyDatas.push(v_gul); // 배열에 담기
    }

    // 배열을 localStorage에 저장
    localStorage.setItem("gesiTB", JSON.stringify(v_dummyDatas));