document.addEventListener('DOMContentLoaded', function () {
    let activeAnswer = null;

    document.querySelectorAll('.toggle').forEach(function (element) {
        element.addEventListener('click', function () {
            const currentAnswer = this.nextElementSibling;

            if (activeAnswer === currentAnswer) {
                currentAnswer.style.maxHeight = currentAnswer.style.maxHeight === '0px' ? currentAnswer.scrollHeight + 'px' : '0';
                this.classList.remove('show');
                activeAnswer = null;
            } else {
                if (activeAnswer) {
                    activeAnswer.style.maxHeight = '0';
                    activeAnswer.previousElementSibling.classList.remove('show');
                }
                currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
                this.classList.add('show');
                activeAnswer = currentAnswer;
            }
            const icon = this.querySelector('.icon img');
            icon.src = this.classList.contains('show') ? '/assets/images/icon-minus.svg' : '/assets/images/icon-plus.svg';
        });
    });
});
