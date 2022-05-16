import './Textarea.css';

const Textarea = ({noteAdd, setNote, note}) => {
    const data = new Date().getTime(); // Получаем миллисекунды в момент создания новой записи (для key и id)

    const handleChange = e => {
        setNote(e.target.value); // Обрабатываем введенный в textarea текст
    }

    const handleSubmit = data => {
        noteAdd(note, data); // Добавляем новую запись
        setNote(''); // Очищаем textarea после сохранения новой записи
    }

    return(
        <div className="textarea">
            <textarea 
                className="text"
                value={note}
                onChange={handleChange}
            >
            </textarea>
            <button 
                className="textarea__btn"
                onClick={() => handleSubmit(data)} // Передаем миллисекунды в App.js для генерации уникального key
            >
                Сохранить
            </button>
        </div>
    );
}

export { Textarea };