from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import schemas, crud
from database import get_db

router = APIRouter()

@router.post("/responses")
def submit_response(response: schemas.SurveyResponse, db: Session = Depends(get_db)):
    return crud.submit_response(db, response)
