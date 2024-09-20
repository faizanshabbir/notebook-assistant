
# Initialize claude API
# This can be abstracted to intialize AI API

# get necessary data or transforms for request

# clean request / validate format of request - validate format of notebook

# make request against API

# clean response
import os
import json
import anthropic
from api import prompt

class NotebookClaudeClient():
    client = None
    prompt = prompt.prompt

    def __init__(self):
        self.client = self.initialize_client()

    def initialize_client(self):
        # Initialize the OpenAI API client
        client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"),)
        return client
    
    # This method will be used to preprocess the notebook before sending it to the API
    # The notebook will be validated and the outputs will be cleared
    # Returns a json object as a dictionary
    def notebook_preprocessing(self, input_text: str) -> dict:
        notebook = self.validate_notebook(input_text)
        notebook = self.clear_jupyter_outputs(notebook)
        # make notebook a string
        return notebook

    def validate_notebook(self, input_text: str) -> dict:
        try:
            # Load the contents as JSON
            notebook_json = json.loads(input_text)
            # Check for essential keys in the notebook structure
            if isinstance(notebook_json, dict) and 'cells' in notebook_json and 'metadata' in notebook_json and 'nbformat' in notebook_json and 'nbformat_minor' in notebook_json:
                return notebook_json
            else:
                raise ValueError("Invalid notebook format")
        except (json.JSONDecodeError, TypeError):
            raise ValueError("Invalid notebook format")

    def clear_jupyter_outputs(self, notebook: dict) -> dict:
        for cell in notebook.get('cells', []):
            if 'outputs' in cell:
                cell['outputs'] = []
            if 'execution_count' in cell:
                cell['execution_count'] = None
        return notebook

    async def make_request(self, cleaned_notebook: str):
        print(self.prompt)
        full_query = self.prompt.format(notebook=cleaned_notebook)
        self.client
        message = self.client.messages.create(
            model = 'claude-3-5-sonnet-20240620',
            max_tokens=4096,
            temperature=0,
            system = self.prompt,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": full_query,
                        }
                    ]
                }
            ]
        )

        # message = self.client.messages.create(
        #     messages=[
        #         {
        #             "role": "user",
        #             "content": [
        #                 "type": "text",
        #                 "text": full_query,
        #             ]
        #         }
        #     ],
        #     model="claude-3-5-sonnet-20240620",
        # )
        return message.content[0].text
    
    def clean_response(self):
        pass