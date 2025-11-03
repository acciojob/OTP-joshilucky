// Ensure the script only runs once
if (!window.__otp_initialized) {
  window.__otp_initialized = true;

  const codeInputs = document.querySelectorAll('.code');

  // Focus first input
  codeInputs[0].focus();

  codeInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      if (/[^0-9]/.test(value)) {
        e.target.value = '';
        return;
      }

      if (value && index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (input.value === '' && index > 0) {
          codeInputs[index - 1].focus();
          codeInputs[index - 1].value = '';
        } else {
          input.value = '';
        }
      }
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData('text').trim();
      if (!/^\d+$/.test(pasteData)) return;
      const digits = pasteData.split('');
      digits.forEach((digit, i) => {
        if (codeInputs[index + i]) {
          codeInputs[index + i].value = digit;
        }
      });
      const nextIndex =
        index + digits.length >= codeInputs.length
          ? codeInputs.length - 1
          : index + digits.length;
      codeInputs[nextIndex].focus();
    });
  });
}
