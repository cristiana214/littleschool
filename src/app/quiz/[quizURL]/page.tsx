"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions = [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Earth"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["Wa", "H2O", "O2", "CO2"],
      correctAnswer: "H2O",
    },
    {
      question: "Which of these is not a type of rock?",
      options: ["Igneous", "Sedimentary", "Metamorphic", "Bionic"],
      correctAnswer: "Bionic",
    },
  ];

  const handleAnswerSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 text-center text-4xl font-bold">Science Quiz</h1>
      {showScore ? (
        <Card>
          <CardHeader>
            <CardTitle>Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl">
              You scored {score} out of {questions.length}
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Question {currentQuestion + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button
              onClick={handleAnswerSubmit}
              className="mt-4"
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
