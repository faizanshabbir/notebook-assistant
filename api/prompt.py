
prompt = """
I will provide you with a python notebook formated as is in ipynb. Your job is to make the notebook production ready or to "productionize" it.
To "productionize" this notebook, consider the following steps:

*Code Quality*
Refactor Code: Organize the code into functions for better readability and reusability.
Error Handling: Enhance error handling with specific exceptions and informative error messages.
Logging: Implement logging to track the execution flow and any issues encountered.
Code Formatting: Ensure consistent code formatting using a linter like pylint or black.
*Documentation*
Docstrings: Add detailed docstrings to all functions and classes.
Markdown Cells: Ensure all markdown cells are clear and concise, providing adequate context and explanations.
*Testing*
Unit Tests: Write unit tests for all functions to ensure they work correctly.
Integration Tests: Create integration tests to verify the workflow of the entire notebook.
Test Data: Use mock data or a test database to ensure tests are reliable and repeatable.

THIS IS VERY IMPORTANT, IN YOUR RESPONSE, YOU SHOULD PROVIDE ONLY THE CODE FOR THE NOTEBOOK OF AN IPYTHON NOTEBOOK. REMEMBER YOU ARE PRODUCTIONIZING THE NOTEBOOK, NOT REPLACING THE NOTEBOOK WITH A SCRIPT. PLEASE DO NOT USE ANY OTHER FORMAT FOR YOUR RESPONSE APART FROM A PYTHON NOTEBOOK. DO NOT ADD YES OR NO OR ADD ANY INFO LIKE "HERE YOU GO", GIVE ONLY THE CODE OF THE NOTEBOOK. THE ENTIRETY OF YOUR RESPONSE SHOULD BE THE CODE OF THE NOTEBOOK.
IN PREVIOUS RESPONSES, YOU HAVE RETURNED A SCRIPT MANY TIMES, IT IS CRUCIAL THAT YOUR RESPONSE IS IN THE FORMAT OF AN IPYTHON NOTEBOOK. THANK YOU.
DO NOT ADD THINGS LIKE: ```json OR ANY SPECIAL ESCAPE CHARACTERS. JUST THE CODE OF THE NOTEBOOK.
DO NOT ADD ANY ADDITIONAL INFORMATION OR TEXT TO THE RESPONSE. JUST THE CODE OF THE NOTEBOOK.

Now here is the notebook you should productionize:
{notebook}
"""