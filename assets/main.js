const addButtonLabelEl = document.getElementById('addButtonLabel');
const addButtonEl = document.getElementById('addButton');
const butContEl = document.getElementById('but-cont'); 

function newCounter() {
    let counter = 0;
    function count() {
        counter++;
        return counter;
    }
    function reset() {
        counter = 0;
        return counter;
    }
    return { count: count, reset: reset };
}

function newId() {
    let id;
    let num = 1;

    function idGen() {
        id = 'but' + num.toString().padStart(3, '0');
        num++;
        return id
    }
    return idGen;
}

function getLabelText() {
    const labelText = addButtonLabelEl.value.trim();
    if (labelText) return labelText;
    else return "Unlabeled";
}

const butId = newId();

addButtonEl.addEventListener('click', () => {
    let curBut = null;
    let curButLabelText = getLabelText();
    let curButId = butId();
    const count = newCounter();
    const curButCount = count.count();
    
    curButLabel = document.createElement('label');
    curButLabel.setAttribute('for', curButId);
    curButLabel.setAttribute('class', 'counter__label');
    curButLabel.textContent = curButLabelText;

    curWrapper = document.createElement('div');
    curWrapper.setAttribute('id', 'counter_' + curButId);
    curWrapper.setAttribute('class', 'counter__wrapper');

    curButWrapper = document.createElement('div');
    curButWrapper.setAttribute('class', 'main__wrapper');
    
    curBut = document.createElement('button');
    curBut.setAttribute('id', curButId);
    curBut.setAttribute('name', curButId);
    curBut.setAttribute('class', 'counter__btn');
    curBut.setAttribute('title', `Counter for '${curButLabelText}'`);
    curBut.textContent = 'Counter: ' + curButCount;
    curBut.addEventListener('click', (event) => {
        event.target.textContent = 'Counter: ' + count.count();
    });

    curButReset = document.createElement('button');
    curButReset.setAttribute('id', 'reset_' + curButId);
    curButReset.setAttribute('name', 'reset_' + curButId);
    curButReset.setAttribute('class', 'counter__btn--reset');
    curButReset.setAttribute('title', `Reset counter for '${curButLabelText}' to 0`);
    curButReset.textContent = 'C';
    curButReset.addEventListener('click', () => {
        document.getElementById(curButId).textContent = 'Counter: ' + count.reset();
    });

    curButDelete =  document.createElement('button');
    curButDelete.setAttribute('id', 'delete_' + curButId);
    curButDelete.setAttribute('class', 'counter__btn--delete');
    curButDelete.setAttribute('title', `Delete counter for '${curButLabelText}'`);
    curButDelete.textContent = 'X';
    curButDelete.addEventListener('click', () => {
        document.getElementById('counter_' + curButId).remove();
    });

    curButWrapper.appendChild(curBut);
    curButWrapper.appendChild(curButReset);
    curButWrapper.appendChild(curButDelete);

    curWrapper.appendChild(curButLabel);
    curWrapper.appendChild(curButWrapper);

    butContEl.appendChild(curWrapper);
});