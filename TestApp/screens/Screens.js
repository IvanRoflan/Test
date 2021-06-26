import 'react-native-gesture-handler';
import React from 'react';
import { QuestionCard } from './QScreen';

export const Q1 = ({ navigation, route }) => {
    const {ext, neur, lies} = route.params;
    return (
      <QuestionCard question="Часто ли вы испытываете тягу к новым впечатлениям, к тому чтобы отвлечься, испытать сильные ощущения?"
        onPressYes={() => {navigation.navigate('Q2', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q2', {ext: ext, neur: neur, lies: lies})}}
      />
    )
};

export const Q2 = ({ route, navigation }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Часто ли вы чувствуете, что нуждаетесь в друзьях, которые могут вас понять, одобрить или посочувствовать?"
        onPressYes={() => {navigation.navigate('Q3', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q3', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q3 = ({ navigation, route}) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Считаете ли вы себя беззаботным человеком?"
        onPressYes={() => {navigation.navigate('Q4', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q4', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q4 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Очень ли трудно вам отказываться от своих намерений?"
        onPressYes={() => {navigation.navigate('Q5', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q5', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q5 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Обдумываете ли вы свои дела не спеша и предпочитаете подождать, прежде чем действовать?"
        onPressYes={() => {navigation.navigate('Q6', {ext: ext, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q6', {ext: ext+1, neur: neur, lies: lies})}}
      />
  );
};

export const Q6 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Всегда ли вы сдерживаете свои обещания, даже если вам это невыгодно?"
        onPressYes={() => {navigation.navigate('Q7', {ext: ext, neur: neur, lies: lies+1})}}
        onPressNo={() => {navigation.navigate('Q7', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q7 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Часто ли у вас бывают спады и подъемы настроения?"
        onPressYes={() => {navigation.navigate('Q8', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q8', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q8 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Быстро ли вы обычно действуете и говорите, не затрачиваете ли много времени на обдумывание?"
        onPressYes={() => {navigation.navigate('Q9', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q9', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q9 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Возникало ли у вас когда-нибудь чувство, что вы несчастны, хотя никакой серьезной причины на это не было?"
        onPressYes={() => {navigation.navigate('Q10', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q10', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q10 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Верно ли, что на спор вы способны решиться на все?"
        onPressYes={() => {navigation.navigate('Q11', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q11', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q11 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Смущаетесь ли вы, когда хотите познакомиться с человеком противоположного пола, который вам симпатичен?"
        onPressYes={() => {navigation.navigate('Q12', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q12', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q12 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Бывает ли когда-нибудь, что, разозлившись, вы выходите из себя?"
        onPressYes={() => {navigation.navigate('Q13', {ext: ext, neur: neur, lies: lies+1})}}
        onPressNo={() => {navigation.navigate('Q13', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q13 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Часто ли действуете необдуманно, под влиянием момента?"
        onPressYes={() => {navigation.navigate('Q14', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q14', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q14 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Часто ли вас беспокоят мысли о том, что вам не следовало чего-либо делать или говорить?"
        onPressYes={() => {navigation.navigate('Q15', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q15', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q15 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Предпочитаете ли вы чтение книг встречам с людьми?"
        onPressYes={() => {navigation.navigate('Q16', {ext: ext, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q16', {ext: ext+1, neur: neur, lies: lies})}}
      />
  );
};

export const Q16 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Верно ли, что вас легко задеть?"
        onPressYes={() => {navigation.navigate('Q17', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q17', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q17 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Любите ли вы часто бывать в компании?"
        onPressYes={() => {navigation.navigate('Q18', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q18', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q18 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Бывают ли у вас такие мысли, которыми вам не хотелось делиться с другими людьми?"
        onPressYes={() => {navigation.navigate('Q19', {ext: ext, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q19', {ext: ext, neur: neur, lies: lies+1})}}
      />
  );
};

export const Q19 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Верно ли, что иногда вы настолько полны энергии, что все горит в руках, а иногда вы чувствуете сильную вялость?"
        onPressYes={() => {navigation.navigate('Q20', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q20', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q20 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Стараетесь ли вы ограничить круг своих знакомств небольшим числом самых близких людей?"
        onPressYes={() => {navigation.navigate('Q21', {ext: ext, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q21', {ext: ext+1, neur: neur, lies: lies})}}
      />
  );
};

export const Q21 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Много ли вы мечтаете?"
        onPressYes={() => {navigation.navigate('Q22', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q22', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q22 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Когда на вас кричат, отвечаете ли тем же?"
        onPressYes={() => {navigation.navigate('Q23', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q23', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q23 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Считаете ли вы свои привычки хорошими?"
        onPressYes={() => {navigation.navigate('Q24', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q24', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q24 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Часто ли у вас появляется чувство, что вы чем-то виноваты?"
        onPressYes={() => {navigation.navigate('Q25', {ext: ext, neur: neur, lies: lies+1})}}
        onPressNo={() => {navigation.navigate('Q25', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q25 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Способны ли вы иногда дать волю своим чувств и беззаботно развлечься с веселой компанией?"
        onPressYes={() => {navigation.navigate('Q26', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q26', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q26 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Можно ли сказать, что часто у вас нервы бывают натянуты до предела?"
        onPressYes={() => {navigation.navigate('Q27', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q27', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q27 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Слывете ли вы за человека веселого и живого?"
        onPressYes={() => {navigation.navigate('Q28', {ext: ext+1, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q28', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q28 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="После того, как дело сделано, часто ли вы мысленно возвращаетесь к нему и думаете, что могли бы сделать лучше?"
        onPressYes={() => {navigation.navigate('Q29', {ext: ext, neur: neur+1, lies: lies})}}
        onPressNo={() => {navigation.navigate('Q29', {ext: ext, neur: neur, lies: lies})}}
      />
  );
};

export const Q29 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <QuestionCard question="Чувствуете ли вы себя неспокойно, находясь в большой компании?"
        onPressYes={() => {navigation.navigate('Results', {ext: ext, neur: neur, lies: lies})}}
        onPressNo={() => {navigation.navigate('Results', {ext: ext+1, neur: neur, lies: lies})}}
      />
  );
};
