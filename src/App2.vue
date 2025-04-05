<script setup>

import {ref,onMounted} from 'vue';

  const name = ref('John Doe');
  const status = ref('active');
  const tasks = ref(['task1','task2','task3']);
  const newtask = ref("enter your task");

  const togglestatus = () =>{
    if (status.value === 'active'){
        status.value = 'pending';
      } else if ( status.value === 'pending'){
          status.value = 'inactive';
          } else {
            status.value = 'active';
            }
  };

  const addtask = () =>{
    if(newtask.value.trim !== ''){
      tasks.value.push(newtask.value);
      newtask.value='';
    }
  }

  const deletetask = (index) =>{
    tasks.value.splice(index,1);
  }

  onMounted(async () =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      tasks.value = data.map((task)=> task.title);
    } catch(error) {
      console.log("error");
    }  
  }) 

</script>
<template>

<h1>{{ name }}</h1>
<p v-if="status === 'active'">User is active</p>
<p v-else-if="status === 'pending'">User is pending</p>
<P v-else>User is inactive</P>
<h3 >tasks:</h3>

<ul>
  <li v-for="(task, index) in tasks" :key="task">
    <sapn>
    {{ task }}
    </sapn>
    <button @click="deletetask(index)">x</button>
  </li>
</ul>

<form @submit.prevent="addtask">
  <label for="newtask">Add Task:</label>
  <input type="text" id="newtask" name="newtask" v-model="newtask"> 
  <input type="submit" value="Add Task">
</form>

<br>
<button @click="togglestatus">Change Status</button>

</template>

