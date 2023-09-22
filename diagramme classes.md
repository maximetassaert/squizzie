@startuml

class User {
  +id: int
  +name: string
  +password: string
  +loved: List<Quiz>
  +createQuiz(title: string, questions: Question): Quiz
  +modifierQuestionnaire(q: Quiz)
  +supprimerQuestionnaire(q: Quiz)
}

class Quiz {
  +id: int
  +titre: string
  +questions: List<Question>
  +ajouterQuestion(q: Question)
  +supprimerQuestion(q: Question)
}

class Question {
  +id: int
  +enonce: string
  +answer: boolean
  +ajouterImage(image: Image)
}

class Participation {
  +id: int
  +score: bool
}

class Image {
  +id: int
  +url: string
}

class Visiteur {
  +noterQuestionnaire(q: Questionnaire, note: int)
}

User -- Quiz : possède
User -- Visiteur : noter
Quiz -- Question : contient
Question -- Image : peut avoir
Quiz -- Image : peut avoir
Quiz -- User : créé par
User -- Quiz : modifie
User -- Quiz : supprime
User -- Quiz : ajoute aux favoris
Visiteur -- Quiz : note

@enduml
