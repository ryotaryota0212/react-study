const onClickAdd = () => {
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = '';

    const div = document.createElement('div');
    div.className = 'list';

    const li = document.createElement('li');
    li.innerText = inputText;

    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        const deleteTarget = completeButton.parentNode;
        document.getElementById('todo-list').removeChild(deleteTarget);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        const deleteTarget = deleteButton.parentNode;
        document.getElementById('todo-list').removeChild(deleteTarget);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(div);
};

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
