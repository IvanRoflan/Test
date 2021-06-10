import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const Q1 = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={styles.question}>Часто ли Вы испытываете тягу к новым впечатлениям, к тому чтобы отвлечься, испытать сильные ощущения?</Text>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.push('Q2', {
                  ext: 1,
                  neur: 0,
                  lies: 0,
                })
              }
            >
              <Text style={styles.buttonText}>Да</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.push('Q2', {
                  ext: 0,
                  neur: 0,
                  lies: 0,
                })
              }
            >
              <Text style={styles.buttonText}>Нет</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
};

export const Q2 = ({ route, navigation }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Часто ли вы чувствуете, что нуждаетесь в друзьях, которые могут вас понять, одобрить или посочувствовать?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q3', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q3', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q3 = ({ navigation, route}) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Считаете ли вы себя беззаботным человеком?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q4', {
                ext: ext + 1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q4', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q4 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Очень ли трудно вам отказываться от своих намерений?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q5', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q5', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q5 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Обдумываете ли вы свои дела не спеша и предпочитаете подождать, прежде чем действовать?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q6', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q6', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q6 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Всегда ли вы сдерживаете свои обещания, даже если вам это невыгодно?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q7', {
                ext: ext,
                neur: neur,
                lies: lies+1,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q7', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q7 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Часто ли у вас бывают спады и подъемы настроения?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q8', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q8', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q8 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Быстро ли вы обычно действуете и говорите, не затрачиваете ли много времени на обдумывание?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q9', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q9', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q9 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Возникало ли у вас когда-нибудь чувство, что вы несчастны, хотя никакой серьезной причины на это не было?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q10', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q10', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q10 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Верно ли, что "на спор" вы способны решиться на все?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q11', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q11', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q11 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Смущаетесь ли вы, когда хотите познакомиться с человеком противоположного пола, который вам симпатичен?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q12', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q12', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q12 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Бывает ли когда-нибудь, что, разозлившись, вы выходите из себя?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q13', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q13', {
                ext: ext,
                neur: neur,
                lies: lies+1,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q13 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Часто ли действуете необдуманно, под влиянием момента?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q14', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q14', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q14 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Часто ли вас беспокоят мысли о том, что вам не следовало чего-либо делать или говорить?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q15', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q15', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q15 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Предпочитаете ли вы чтение книг встречам с людьми?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q16', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q16', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q16 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Верно ли, что вас легко задеть?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q17', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q17', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q17 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Любите ли вы часто бывать в компании?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q18', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q18', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q18 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Бывают ли у вас такие мысли, которыми вам не хотелось делиться с другими людьми?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q19', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q19', {
                ext: ext,
                neur: neur,
                lies: lies+1,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q19 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Верно ли, что иногда вы настолько полны энергии, что все горит в руках, а иногда вы чувствуете сильную вялость?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q20', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q20', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q20 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Стараетесь ли вы ограничить круг своих знакомств небольшим числом самых близких людей?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q21', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q21', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q21 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Много ли вы мечтаете?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q22', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q22', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q22 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Когда на вас кричат, отвечаете ли тем же?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q23', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q23', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q23 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Считаете ли вы свои привычки хорошими?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q24', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q24', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q24 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Часто ли у вас появляется чувство, что вы чем-то виноваты?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q25', {
                ext: ext,
                neur: neur,
                lies: lies+1,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q25', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q25 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Способны ли вы иногда дать волю своим чувств и беззаботно развлечься с веселой компанией?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q26', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q26', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q26 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Можно ли сказать, что часто у вас нервы бывают натянуты до предела?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q27', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q27', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q27 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Слывете ли вы за человека веселого и живого?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q28', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q28', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q28 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>После того, как дело сделано, часто ли вы мысленно возвращаетесь к нему и думаете, что могли бы сделать лучше?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q29', {
                ext: ext,
                neur: neur+1,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Q29', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Q29 = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.question}>Чувствуете ли вы себя неспокойно, находясь в большой компании?</Text>
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Results', {
                ext: ext,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Да</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.push('Results', {
                ext: ext+1,
                neur: neur,
                lies: lies,
              })
            }
          >
            <Text style={styles.buttonText}>Нет</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const Results = ({ navigation, route }) => {
  const { ext, neur, lies} = route.params;
  let isExtraveted, isNeurotick, isLiar;
  ext > 6? isExtraveted = true: isExtraveted = false;
  neur > 7? isNeurotick = true: isNeurotick = false;
  lies > 2? isLiar = true: isLiar = false;
  if (!isLiar) {
    if (isExtraveted && isNeurotick) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.question}>Вы холерик</Text>
              <Text style={styles.description}>Холерик отличается повышенной возбудимостью, действия прерывисты. Ему свойственны резкость и стремительность движений, сила, импульсивность, яркая выраженность эмоциональных переживаний. Вследствие неуравновешенности, увлекшись делом, склонен действовать изо всех сил, истощаться больше, чем следует.</Text>
            </View>
            <TouchableOpacity
              style={styles.home}
              onPress={() => {
                navigation.popToTop({
                  ext: 0,
                  neur:0,
                  lies:0
                })
              }}
            >
              <Text style={styles.homeText}>На главную</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else if (isExtraveted && !isNeurotick) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.question}>Вы сангвиник</Text>
              <Text style={styles.description}>Сангвиник быстро приспосабливается к новым условиям, быстро сходится с людьми, общителен. Чувства легко возникают и сменяются, эмоциональные переживания, как правило, неглубоки. Мимика богатая, подвижная, выразительная. Несколько непоседлив, нуждается в новых впечатлениях.</Text>
            </View>
            <TouchableOpacity
              style={styles.home}
              onPress={() => {
                navigation.popToTop({
                  ext: 0,
                  neur:0,
                  lies:0
                })
              }}
            >
              <Text style={styles.homeText}>На главную</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else if (!isExtraveted && isNeurotick) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.question}>Вы меланхолик</Text>
              <Text style={styles.description}>У него реакция часто не соответствует силе раздражителя, присутствует глубина и устойчивость чувств при слабом их выражении. Ему трудно долго на чем-то сосредоточиться. Ему свойственны сдержанность и приглушенность моторики и речи, застенчивость, робость, нерешительность. В нормальных условиях меланхолик — человек глубокий, содержательный, может успешно справляться с жизненными задачами.</Text>
            </View>
            <TouchableOpacity
              style={styles.home}
              onPress={() => {
                navigation.popToTop({
                  ext: 0,
                  neur:0,
                  lies:0
                })
              }}
            >
              <Text style={styles.homeText}>На главную</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.title}>
              <Text style={styles.question}>Вы флегматик</Text>
              <Text style={styles.description}>Флегматик характеризуется сравнительно низким уровнем активности поведения, новые формы которого вырабатываются медленно, но являются стойкими. Обладает медлительностью и спокойствием в действиях, мимике и речи, ровностью, постоянством, глубиной чувств и настроений. Настойчивый и упорный, он редко выходит из себя, доводит дело до конца, ровен в отношениях, в меру общителен.</Text>
            </View>
            <TouchableOpacity
              style={styles.home}
              onPress={() => {
                navigation.popToTop({
                  ext: 0,
                  neur:0,
                  lies:0
                })
              }}
            >
              <Text style={styles.homeText}>На главную</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={styles.question}>Попробуйте пройти заново</Text>
            <Text style={styles.description}>Мы заметили неискренность в ответах, свидетельствующая также о некоторой демонстративности поведения и ориентированности вас на социальное одобрение</Text>
          </View>
          <TouchableOpacity
            style={styles.home}
            onPress={() => {
              navigation.popToTop({
                ext: 0,
                neur:0,
                lies:0
              })
            }}
          >
            <Text style={styles.homeText}>На главную</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2e9e4',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    card: {
      width: '95%',
      height: '80%',
      backgroundColor: '#c9ada7',
      borderRadius: 20,
    },
    title: {
      height: '70%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    question: {
      color: '#22223b',
      fontSize: 33,
      fontWeight: '700',
      textAlign: 'center'
    },
    description: {
      color: '#22223b',
      fontSize: 22,
      paddingTop: 5,
      textAlign: 'center'
    },
    btns: {
      height: "30%",
      backgroundColor: '#f77f00',
      flexDirection: 'row',
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20
    },
    home: {
      height: "30%",
      backgroundColor: '#f77f00',
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeText: {
      color: '#fff',
      fontSize: 25,
      fontWeight: '700'
    },
    button: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '700'
    }
  });