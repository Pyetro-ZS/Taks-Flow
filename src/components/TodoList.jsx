import { useState } from 'react';
import { List } from './List';
import { Input } from './Input';
import { Form } from './Form';
import { Button } from './Button';
import styles from '../styles/TodoList.module.css';

export function TodoList() {

    const [task, setTask] = useState("");
    const [itemsList, setItemsList] = useState([]);

    function handleChangeInput(event) {
        const inputTask = event.target.value;
        setTask(inputTask);
    }

    function handleAddItemToList(event) {
        event.preventDefault();

        if (!task) {
            return;
        }

        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        };

        setItemsList([...itemsList, newTask]);
        setTask('');
    }

    function handleToggleTask(id) {
        setItemsList(itemsList.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    }

    function handleDeleteTask(id) {
        setItemsList(itemsList.filter(item => item.id !== id));
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <img src="./logo-task.png" alt="Task Flow logo" className={styles.logo} />
                        <p className={styles.subtitle}>Organize suas tarefas com estilo</p>
                    </div>

                    <Form onSubmit={handleAddItemToList}>
                        <Input
                            type="text"
                            placeholder="Adicione uma tarefa..."
                            onChange={handleChangeInput}
                            value={task}
                        />
                        <Button type="submit"><img src="./add.svg" alt="adicionar" /></Button>
                    </Form>
                    <List itemsList={itemsList} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
                </div>
            </div>
        </>
    );

}
