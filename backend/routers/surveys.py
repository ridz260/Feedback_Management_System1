from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import schemas, crud
from database import get_db

router = APIRouter()

@router.post("/surveys", response_model=schemas.SurveyCreate)
def create_survey(survey: schemas.SurveyCreate, db: Session = Depends(get_db)):
    return crud.create_survey(db, survey)

@router.get("/surveys")
def get_surveys(db: Session = Depends(get_db)):
    return crud.get_surveys(db)
