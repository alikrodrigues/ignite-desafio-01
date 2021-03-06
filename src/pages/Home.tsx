import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const task = { id: new Date().getTime(), title: newTaskTitle, done: false };
    setTasks([...tasks, task]);
    //TODO - add new task
  }

  function handleToggleTaskDone(id: number) {
    const updatedTask = tasks.find((item) => item.id === id);
    if (updatedTask) {
      updatedTask.done = !updatedTask.done;
      const newTasks = tasks.filter((item) => item.id !== id);
      newTasks.push(updatedTask);
      setTasks(newTasks);
    }


    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})