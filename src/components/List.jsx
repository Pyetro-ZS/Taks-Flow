import styles from '../styles/List.module.css';

export function List(props) {
    const completedCount = props.itemsList.filter(item => item.completed).length;

    return (
        <div className={styles.listContainer}>
            {props.itemsList.length === 0 ? (
                <p className={styles.emptyMessage}>Nenhuma tarefa ainda.</p>
            ) : (
                <>
                    <ul className={styles.list}>
                        {props.itemsList.map((item) => (
                            <li key={item.id} className={`${styles.listItem} ${item.completed ? styles.completed : ''}`}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={item.completed}
                                    onChange={() => props.onToggle(item.id)}
                                />
                                <span className={styles.taskText}>{item.text}</span>
                                <button 
                                    className={styles.deleteButton}
                                    onClick={() => props.onDelete(item.id)}
                                    title="Deletar tarefa"
                                >
                                    Deletar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.taskCount}>
                        Total: {props.itemsList.length} | Completas: <span className={styles.completedCount}>{completedCount}</span>
                    </div>
                </>
            )}
        </div>
    );
}