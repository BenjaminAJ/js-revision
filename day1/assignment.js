      //Exercise 1: Write a function that takes two numbers as arguments and returns true if both numbers are greater than 10, otherwise returns false.
      //Exercise 2: Write a function that takes two numbers as arguments and returns true if at least one number is greater than 10, otherwise returns false.
      //Exercise 3: Write a function that takes a number as an argument and returns true if the number is even, otherwise returns false.
      //Exercise on local and global variables: Write a function that takes a number as an argument and returns true if the number is greater than 10, otherwise returns false. Inside the function, declare a local variable with the same name as a global variable and log both variables to the console.


      //Exercise 5:
      let x = 10;

      function testScope() {
        let x = 20;
        console.log("Inside function: ", x);
      }
      testScope();
      console.log("Outside function: ", x);

      //Task: Explain why the outputs are different. What happens if you remove "let x =20;" inside the function?

      //Exercise 6: Even or Odd
      let number = 7;

      //Use a ternary operator to log "Even" or "Odd"

      let result = // your code here

      console.log(result);

      //Task: Write a ternary expression that checks if number is even or odd

      //Exercise 7: Replace if-else with Ternary

      let isLoggedIn = true;

      let welcomeMessage;

      if (isLoggedIn) {
        welcomeMessage = "Welcome back!";
      }else{
        welcomeMessage = "Please log in.";
      }     

      //Rewrite the above logic using a ternary operator

      //Task: Convert the if-else block to a sngle line using a ternary operator