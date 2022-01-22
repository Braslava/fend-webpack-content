import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

//alert('I still exist');
const submitButton = document.querySelector('.form__submit');
submitButton.addEventListener('click', handleSubmit);

export { checkForName, handleSubmit };
