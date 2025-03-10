from sqlalchemy.orm import Session
import models, schemas

def create_survey(db: Session, survey: schemas.SurveyCreate):
    db_survey = models.Survey(title=survey.title)
    db.add(db_survey)
    db.commit()
    db.refresh(db_survey)

    for question in survey.questions:
        db_question = models.Question(survey_id=db_survey.id, question_text=question.question_text, question_type=question.question_type)
        db.add(db_question)

    db.commit()
    return db_survey

def get_surveys(db: Session):
    return db.query(models.Survey).all()

def submit_response(db: Session, survey_response: schemas.SurveyResponse):
    for response in survey_response.responses:
        db_response = models.Response(survey_id=survey_response.survey_id, user_response=response)
        db.add(db_response)
    db.commit()
    return {"message": "Response recorded"}
