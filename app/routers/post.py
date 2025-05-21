from fastapi import FastAPI, Depends, HTTPException, Header, APIRouter
from typing import Optional
from dotenv import load_dotenv
from errors import messages
from pydantic import BaseModel
import os 
from fastapi.security import HTTPBasic,HTTPBearer, HTTPBasicCredentials, HTTPAuthorizationCredentials
import httpx

router = APIRouter()
security = HTTPBearer()
load_dotenv(dotenv_path='C:\\Users\\TESTE\\Documents\\desafio\\app\\core\\url.env')

class Credentials(BaseModel):
    username: str
    password: str
class Token(BaseModel):
    token: str
class Refresh(BaseModel):
    refresh: str

@router.post("/token")
async def retrive_token(credentials: Credentials):
    url_token = os.getenv("url_token")

    async with httpx.AsyncClient() as client:
        response = await client.post(url_token, json=credentials.model_dump())
        if response.status_code == 200:
            return response.json()
        elif response.status_code != 200:
            raise HTTPException(status_code = 401, detail=messages.login_incorreto)
        
@router.post("/verify")
async def verify_token(access: Token):
    headers = {"Content-Type": "application/JSON"}
    url_verify = os.getenv("url_verify")


    async with httpx.AsyncClient() as client:
         response = await client.post(url_verify, json=access.model_dump(), headers = headers)
         if response.status_code == 200:
             return "Tokén validado"
         elif response.status_code != 200:
            raise HTTPException(status_code = 401, detail=messages.unauthorized_token)
    

@router.post("/token/refresh")
async def token_refresh(refresh: Refresh):
    headers = {"Content-Type": "application/JSON"}
    url_refresh = os.getenv("url_refresh")
    
    async with httpx.AsyncClient() as client:
        response = await client.post(url_refresh, json = refresh.model_dump(), headers = headers)
        if response.status_code == 200:
            return response.json()
        elif response.status_code != 200:
            raise HTTPException(status_code = 401, detail=messages.unauthorized_token)