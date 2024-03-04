const albumTitle = document.querySelector('#album-title');
const albumDescription = document.querySelector('#album-description');
const albumArt = document.querySelector('#album-art');
const albumForm = document.querySelector('#album-form');
const feedback = document.querySelector('#feedback');

albumForm.addEventListener('submit', onSubmission);
albumTitle.addEventListener('focus', onTitleCount);
albumDescription.addEventListener('focus', onDescriptionCount);

function onSubmission(e) {
    e.preventDefault();
    isEmptyString(e.target.elements['album-title'].value.trim());
    isEmptyString(e.target.elements['album-description'].value.trim());
    isEmptyString(e.target.elements['album-art'].value);
}

function isEmptyString(text) {

    if (text === '' || text === 'Select album art') {
        feedback.classList.add('invalid-feedback');
        feedback.textContent = 'Cannot be empty.';
    }

    else {
        feedback.classList.remove('invalid-feedback');
    }
}

function onTitleCount(e) {
    const letterCount = e.currentTarget.value.length;
    document.querySelector('#album-title').textContent = letterCount;

    if (letterCount > 15) {
        feedback.textContent = 'Too Many Characters!';
        
    }

    if (letterCount <= 15) {
        feedback.textContent = '(15 character max)';
        
    }
}

function onDescriptionCount(e) {
    const letterCount2 = e.currentTarget.value.length;
    document.querySelector('#album-description').textContent = letterCount2;

    if (letterCount2 > 30) {
        feedback.textContent = 'Too Many Characters!';
        
    }

    if (letterCount2 <= 30) {
        feedback.textContent = '(30 character max)';
        
    }
}





