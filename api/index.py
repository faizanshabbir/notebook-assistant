from fastapi import FastAPI
from fastapi import FastAPI, File, UploadFile
from api import wrapper

app = FastAPI()

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    nc = wrapper.NotebookClient()
    print("OpenAI client initialized") #TODO REMOVE
    try:
        cleaned_notebook = nc.notebook_preprocessing(contents.decode('utf-8')) 
    except Exception as e:
        print("Unable to preprocess notebook: ", e)
    print("Notebook preprocessed")
    response = await test_call_ai(cleaned_notebook_text=cleaned_notebook)
    return {"filename": file.filename, "nb_resp": response}

async def test_call_ai(cleaned_notebook_text):
    nc = wrapper.NotebookClient()
    response = await nc.make_request(cleaned_notebook_text)
    print("RESPONSE: " + response)
    return response