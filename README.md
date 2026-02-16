# Quiz App

A simple and interactive React quiz application with multiple choice questions.

## Features

- 5 multiple choice questions
- Real-time progress bar with green gradient
- Instant feedback on correct/incorrect answers
- Live score counter displayed during the quiz
- Final score display
- Replay option to take the quiz again

## Tech Stack

- React
- JavaScript (JSX)
- CSS3

## Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   └── Quiz.jsx  # Quiz component with logic and questions
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # React entry point
│   └── styles.css    # Styling
├── index.html        # HTML template
└── package.json      # Dependencies
```

## Screenshots

### Quiz Question

![Quiz Question](screenshots/question.png)

### Answer Feedback

![Answer Feedback](screenshots/feedback.png)

### Results Screen

![Results](screenshots/results.png)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/paudelKiran/Quiz-App.git
cd quiz-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## How It Works

The quiz displays questions one at a time with multiple choice options. When you select an answer:

- Correct answers are highlighted in green
- Incorrect answers are highlighted in red
- You can proceed to the next question after selecting an answer
- At the end, your final score is displayed with an option to restart

## Customization

You can easily add or modify questions by editing the `QUESTIONS` array in `src/components/Quiz.jsx`:

```javascript
const QUESTIONS = [
  {
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: "Correct Option",
  },
  // Add more questions...
];
```

## License

This project is open source and available for anyone to use.
