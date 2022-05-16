import './App.css';
import { useState } from 'react';
import { Notes } from './components/Notes/Notes';
import { Textarea } from './components/Textarea/Textarea';
import { Search } from './components/Search/Search';

function App() {
  const [notes, setNotes] = useState([]); // Хук для массива записей
  const [note, setNote] = useState(''); // Хук для новой записи
  const [search, setSearch] = useState(''); // Хук для поиска
  const [editing, setEditing] = useState(false); // Хук для режима редактирования
  const [editId, setEditId] = useState(''); // Хук для id редактируемой записи

  // Функция очистки textarea после удаления всех записей
  const textareaClean = () => {
    if (notes.length === 1) {
      setNote('');
    }
  }

  // Функция добавления и редактирования записей
  const noteAdd = (note, data) => {
    if (!editing) { // Если режим редактирования не активирован
      if (note && data) { // Если оба аргумента получены, то создаем новую запись
        const newNote = {
          id: data, // Задаем записи id (время в миллисекундах на момент ее создания)
          text: note // Задаем записи текст из textarea
        }
        setNotes([...notes, newNote]); // Помещаем новую запись в массив записей
      } else {
        console.log('Ошибка записи');
      }
    } else { // Если режим редактирования активирован
      const editedNotes = notes.map(el => { // Перебираем массив записей
        if(el.id === editId) { // Находим нужную запись по id
            const newText = note; // Получаем новый текст записи
            return {
                ...el, // Оставляем нетронутыми все данные записи (в нашем случае это id)
                text: newText //Меняем старый текст записи на новый
            }
        } else {
            return el; // В противном случае просто возвращаем запись
        }
      });
      setNotes(editedNotes); // Записываем измененный массив записей
      setEditing(false); // Отключаем режим редактирования записи
    } 
  }

  // Функция удаления записи
  const removeNote = (id) => {
    setNotes([...notes.filter((note) => note.id !== id)]); // Ищем нужную запись по id и удаляем
    textareaClean(); // зЗапускаем функцию очистки textarea
  }

  // Функция редактирования записи
  const editNote = (id) => {
    let item = notes.find(note => note.id === id); // Ищем нужную запись по id
    setNote(item.text); // Передаем текст найденной записи в textarea
  }

  // Функция поиска по записям
  const filteredNotes = notes.filter(el => {
    return el.text.toLowerCase().includes(search.toLowerCase()); // Ищем совпадения в массиве записей
  });

  return (
    <div className="App">
      <div className="container">
        <Search notes={notes} search={search} setSearch={setSearch} />
        <div className="App__inner">
          <Notes 
            notes={notes}
            removeNote={removeNote} 
            filteredNotes={filteredNotes}
            setEditId={setEditId}
            setEditing={setEditing}
            editNote={editNote}
          />
          <Textarea 
            noteAdd={noteAdd}
            setNote={setNote} 
            note={note}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
