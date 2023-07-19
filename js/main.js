const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },

        390: {
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },

        768: {
            slidesPerView: 2,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },

        992: {
            slidesPerView: 2,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }


});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const errorMessages = document.getElementById("emailError");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const errorMessages = document.getElementById("emailError");
      let valid = true;
      errorMessages.innerHTML = "";
  
      if (name === "") {
        errorMessages.innerHTML += "Enter your name.";
        valid = false;
      } else {
        document.getElementById("name").classList.add("accept");
      }
  
      emailError.textContent = "";

      if (email === "") {
        errorMessages.innerHTML += "Please complete this email field.";
        valid = false;
      } else if (email !== "") {
        if (!validateEmail(email)) {
            errorMessages.innerHTML = "This email does not seem to look right.";
            const emailInput = document.getElementById("email");
            const emailLabel = document.getElementById("email-label");
            const emailErrorText = document.getElementById("emailError");

            emailInput.classList.add("invalid");
            emailLabel.classList.add("invalid");
            emailErrorText.classList.add("show");

            valid = false;
        }
      }



      if (message === "") {
        errorMessages.innerHTML += "Enter your message.";
        
      } else {
          document.getElementById("message").classList.add("accept");
      }

      const recaptchaResponse = grecaptcha.getResponse();
      if (recaptchaResponse === "") {
        valid = false;
      }
  
      if (valid) {
        form.submit();
      }
    });
  
    function validateEmail(email) {
      const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailPattern.test(email);
    }
  
    form.addEventListener("input", function () {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const recaptchaResponse = grecaptcha.getResponse();


      if (name !== "" && email !== "" && message !== "" && recaptchaResponse !== "") {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    });
  });
  
