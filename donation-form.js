document.querySelectorAll('.donation-form [type="radio"]').forEach(input => input.addEventListener('change', e => {
	    
		document.querySelector('.donation-form [type="number"]').value = e.target.value;
	    
}));

document.querySelector('.donation-form--currency').addEventListener('change', e => document.querySelector('.donation-form').dataset.currency = e.target.value);
