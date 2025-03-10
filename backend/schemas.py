from pydantic import BaseModel
from typing import List

class QuestionBase(BaseModel):
    question_text: str
    question_type: str

class SurveyBase(BaseModel):
    title: str
    questions: List[QuestionBase]

class SurveyCreate(SurveyBase):
    pass

class SurveyResponse(BaseModel):
    survey_id: int
    responses: List[str]
