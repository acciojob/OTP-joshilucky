const codes = document.querySelectorAll('.code');

// Focus the first field when the page loads
codes[0].focus();

codes.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      // Only numbers allowed
      e.target.value = '';
      return;
    }

    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = '';
      } else {
        input.value = '';
      }
    }
  });

  // Allow user to paste full OTP
  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim();
    if (!/^\d+$/.test(pasteData)) return;
    const digits = pasteData.split('');
    digits.forEach((digit, i) => {
      if (codes[index + i]) {
        codes[index + i].value = digit;
      }
    });
    const nextIndex = index + digits.length >= codes.length ? codes.length - 1 : index + digits.length;
    codes[nextIndex].focus();
  });
});
//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Focus the first field when the page loads
codes[0].focus();

codes.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) {
      // Only numbers allowed
      e.target.value = '';
      return;
    }

    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = '';
      } else {
        input.value = '';
      }
    }
  });

  // Allow user to paste full OTP
  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim();
    if (!/^\d+$/.test(pasteData)) return;
    const digits = pasteData.split('');
    digits.forEach((digit, i) => {
      if (codes[index + i]) {
        codes[index + i].value = digit;
      }
    });
    const nextIndex = index + digits.length >= codes.length ? codes.length - 1 : index + digits.length;
    codes[nextIndex].focus();
  });
});
