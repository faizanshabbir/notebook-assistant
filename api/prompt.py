
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

For the response,
PROVIDE ONLY THE CODE FOR THE NOTEBOOK IN THE FORMAT I SPECIFY BELOW.
THIS IS THE FORMAT YOU MUST USE FOR YOUR ANSWER. PLEASE DO NOT USE ANY OTHER FORMAT OR ADD YES OR NO OR ADD ANY INFO LIKE "HERE YOU GO" OUTSIDE OF THE FORMAT I SPECIFY BELOW. USE THE FOLLOWING FORMAT: Json with the key "notebook" and the value as the code for the notebook.

Now here is the notebook you should productionize:
{notebook}
"""