<script>
  // Add some dynamic effects
  const readme = document.getElementById('readme');
  const codeBlocks = readme.querySelectorAll('code');

  function animateText(element) {
    let text = element.textContent;
    let speed = 50; // Adjust speed as desired
    let i = 0;

    element.textContent = '';

    function typeWriter() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  }

  codeBlocks.forEach(codeBlock => {
    animateText(codeBlock);
  });
</script>
