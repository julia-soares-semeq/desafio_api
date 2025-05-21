from fastapi import FastAPI, Depends, HTTPException, Header
from fastapi.security import HTTPBasic,HTTPBearer, HTTPBasicCredentials, HTTPAuthorizationCredentials
import httpx
from .routers import post, get


app = FastAPI()
security = HTTPBearer()

app.include_router(post.router)
app.include_router(get.router)