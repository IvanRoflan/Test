import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { QuestionCard } from './QScreen';
import { QArray } from '../data/data_array';

export const Question = ({ navigation, route }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  let {ext, neur, lies} = route.params

  const onPressYesHandler = () => {
    route.params.ext = ext + QArray[currentQuestion].Yes.ext
    route.params.neur = neur + QArray[currentQuestion].Yes.neur
    route.params.lies = lies + QArray[currentQuestion].Yes.lies
    let nextQuestion = currentQuestion + 1
    if (nextQuestion < QArray.length)
      setCurrentQuestion(nextQuestion)
    else {
      navigation.navigate('Results', {
        ext: ext,
        neur: neur,
        lies: lies
      })
    }
  }
  const onPressNoHandler = () => {
    route.params.ext = ext + QArray[currentQuestion].No.ext
    route.params.neur = neur + QArray[currentQuestion].No.neur
    route.params.lies = lies + QArray[currentQuestion].No.lies
    let nextQuestion = currentQuestion + 1
    if (nextQuestion < QArray.length)
      setCurrentQuestion(nextQuestion)
    else {
      navigation.navigate('Results', {
        ext: ext,
        neur: neur,
        lies: lies
      })
    }
  }

  return (
    <QuestionCard question={QArray[currentQuestion].question}
    onPressYes={onPressYesHandler}
    onPressNo={onPressNoHandler}
    />
    )
}