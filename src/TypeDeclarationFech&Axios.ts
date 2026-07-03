/**
 * Topic: Type Declarations, Axios & Fetch API in TypeScript
 *
 * TypeScript allows us to define the shape of API data
 * before making requests. This helps catch errors during
 * development and provides better IntelliSense.
 *

// 
// 1. Type Declaration
// 

/*
Definition
----------
Type declaration tells TypeScript what type of
data a variable, object, or function should have.
*/
type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Prathamesh",
  email: "prathamesh@gmail.com",
};

console.log(user);

/*
Output:
{
  id: 1,
  name: "Prathamesh",
  email: "prathamesh@gmail.com"
}
*/


// 
// 2. Interface for API Data
// 

/*
Definition
----------
Interfaces define the structure of
the response returned by an API.
*/

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


// 
// 3. Fetch API in TypeScript
// 

/*
Definition
----------
The Fetch API is a built-in JavaScript API
used to make HTTP requests.

• Built into browsers.
• Returns a Promise.
• Use async/await.
• Convert response using .json().
*/

async function fetchTodo() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const todo: Todo = await response.json();

    console.log(todo);

  } catch (error) {

    console.log(error);

  }

}

fetchTodo();

/*
Example Output
--------------
{
  userId: 1,
  id: 1,
  title: "...",
  completed: false
}
*/


// 
// 4. Axios in TypeScript
// 

/*
Definition
----------
Axios is a popular HTTP client
used for making API requests.
• Automatic JSON parsing.
• Better error handling.
• Supports request cancellation.
*/

import axios from "axios";

import type { AxiosResponse } from "axios";

interface TodoResponse {

  userId: number;
  id: number;
  title: string;
  completed: boolean;

}

const fetchData = async () => {

  try {

    const response: AxiosResponse<TodoResponse> =
      await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

    console.log(response.data);

  } catch (error) {

    console.log(error);

  }

};

fetchData();


// 
// 5. import type
// 

/*
Definition
----------
'import type' imports only TypeScript types.

Key Points
----------
• Removed after compilation.
• Improves performance.
• Used only for type checking.
*/

import axios  from "axios";
import type { AxiosResponse } from "axios"; // Only imports types


// ======================================================
// 6. Fetch vs Axios
// ======================================================

/*

Fetch API
---------
• Built into JavaScript.
• Need response.json().
• Manual error handling.

Axios
-----
• External library.
• Automatic JSON parsing.
• Better error handling.
• Supports interceptors.

*/