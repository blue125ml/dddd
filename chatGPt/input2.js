window.onload = function() {
    // 'Choose File' 버튼 클릭 시 파일 선택 창을 호출하는 이벤트 리스너 추가
    document.getElementById('choose-file-btn').addEventListener('click', function() {
        document.getElementById('file-input').click();
    });

    // 파일 선택 시 파일 정보를 출력하는 이벤트 리스너 추가
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
        document.getElementById('delete-file-btn').style.display = 'none'; // 'Delete File' 버튼 숨기기
    });
}
// Get model menu elements
const modelMenu = document.querySelector('.model-menu');
const modelSelect = modelMenu.querySelector('.model-select');
const modelOptions = modelMenu.querySelector('.model-options');

// Get selected image element
const selectedImage = document.querySelector('#selected-image');

// Show/hide model options on hover/click
modelSelect.addEventListener('mouseover', function() {
    modelOptions.style.display = 'block';
});

modelSelect.addEventListener('mouseout', function() {
    modelOptions.style.display = 'none';
});

modelSelect.addEventListener('click', function(e) {
    e.preventDefault();
    modelOptions.style.display = modelOptions.style.display === 'block' ? 'none' : 'block';
});

modelOptions.addEventListener('click', function(e) {
    e.preventDefault();
    const imageSrc = e.target.dataset.image;
    selectedImage.src = imageSrc;
});

