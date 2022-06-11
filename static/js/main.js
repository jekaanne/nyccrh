const footnotes = document.querySelector('section.footnotes');

if(footnotes){
    const reference=  document.querySelector('#flush-collapseTwo > .accordion-body');
    console.log(reference,footnotes)
    reference.appendChild(footnotes);

}

