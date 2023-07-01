function onClick(element) {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modalImage');
  
    modal.style.display = 'block';
    modalContent.src = element.src;
  }
  
  function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }