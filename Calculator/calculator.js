document.getElementById('sumButton').addEventListener('click', function() {
    var num1 = BigInt(document.getElementById('num1').value);
    var num2 = BigInt(document.getElementById('num2').value);
    var sum = num1 + num2;
    
  document.getElementById('result').value = sum;

  });

  $(document).ready(function() {
    // Update character count on input
    $('#num1').on('input', function() {
      var maxLength = parseInt($(this).attr('maxlength'));
      var currentLength = $(this).val().length;
      var remaining = maxLength - currentLength;
  
      $('#characterCount').text(remaining + ' characters remaining');
    });
  });