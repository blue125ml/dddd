// 'Choose File' 버튼 클릭 시 파일 선택 창을 호출하는 이벤트 리스너 추가
document.getElementById('choose-file-btn').addEventListener('click', function() {
    document.getElementById('file-input').click();
});

// 파일 선택 시 파일 정보를 출력하는 이벤트 리스너 추가
document.getElementById('file-input').addEventListener('change', function() {
    console.log(this.files[0]);
});
// 파일 선택 시 파일 정보를 표시하는 이벤트 리스너 추가
document.getElementById('file-input').addEventListener('change', function() {
    var file = this.files[0];
    var fileInfo = `<p>파일 이름: ${file.name}</p><p>파일 크기: ${file.size} bytes</p>`;
    document.getElementById('file-info').innerHTML = fileInfo;
});
// 파일 선택 시 파일 정보와 삭제 버튼을 표시하는 이벤트 리스너 추가
document.getElementById('file-input').addEventListener('change', function() {
    var file = this.files[0];
    var fileInfo = `<p>파일 이름: ${file.name}</p><p>파일 크기: ${file.size} bytes</p>`;
    document.getElementById('file-info').innerHTML = fileInfo;
    document.getElementById('delete-file-btn').style.display = 'inline-block';
});

// 'Delete File' 버튼 클릭 시 선택한 파일 삭제하는 이벤트 리스너 추가
document.getElementById('delete-file-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('file-input');
    fileInput.value = ''; // 파일 선택 창 초기화
    document.getElementById('file-info').innerHTML = ''; // 파일 정보 삭제
    this.style.display = 'none'; // 'Delete File' 버튼 숨기기
});


