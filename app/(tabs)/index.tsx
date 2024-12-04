import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('Diario de Metas Semanales');
  const [estadoTarea, setEstadoTarea] = useState('Incompleto');

  const [lunes, setLunes] = useState('');
  const [martes, setMartes] = useState('');
  const [miercoles, setMiercoles] = useState('');
  const [jueves, setJueves] = useState('');
  const [viernes, setViernes] = useState('');
  const [sabado, setSabado] = useState('');
  const [domingo, setDomingo] = useState('');

  const [fontSize, setFontSize] = useState(24);
  const [bgColor, setBgColor] = useState('#fff');

  const [estadoLunes, setEstadoLunes] = useState('Incompleto');
  const [estadoMartes, setEstadoMartes] = useState('Incompleto');
  const [estadoMiercoles, setEstadoMiercoles] = useState('Incompleto');
const [estadoJueves, setEstadoJueves] = useState('Incompleto');
const [estadoViernes, setEstadoViernes] = useState('Incompleto');
const [estadoSabado, setEstadoSabado] = useState('Incompleto');
const [estadoDomingo, setEstadodomingo] = useState('Incompleto');

const [language, setLanguage] = useState('es');
const getTranslatedText = (key: string) => {
  const translations = {
  
  es: {
  greeting: `Diario de Metas Semanales`,
  textSize: 'Tamaño del Texto',
  language: 'Idioma',
  spanish: 'Español',
  english: 'Inglés',
  lunes:'LUNES',
  martes:'MARTES',
  miercoles:'MIERCOLES',
  jueves:'JUEVES',
  viernes:'VIERNES',
  sabado:'SABADO',
  domingo:'DOMINGO',
  tarea:'INGRESE LA TAREA',
  desc:'INGRESE LA DESCRIPCION',
  },
  en: {
  greeting: `Weekly Goals Diary`,
  textSize: 'Text Size',
  language: 'Language',
  spanish: 'Spanish',
  english: 'English',
  lunes:'MONDAY',
  martes:'TUESDAY',
  miercoles:'WEDNESDAY',
  jueves:'THURSDAY',
  viernes:'FRIDAY',
  sabado:'SATURDAY',
  domingo:'SUNDAY',
  tarea:'TASK',
  desc:'DESCRPTION',

  },
  };
  return translations[language][key];

};




  const toggleEstado = () => {
    setEstadoTarea(estadoTarea === 'Incompleto' ? 'Completo' : 'Incompleto');
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.greetingText, { fontSize }]}>{getTranslatedText('greeting')}</Text>
   
      <Text>Tamaño del Texto</Text>

      <Text>{getTranslatedText('language')}</Text>
      <Button title={getTranslatedText('spanish')} onPress={() => setLanguage('es')} />
      <Button title={getTranslatedText('english')} onPress={() => setLanguage('en')} />


      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
      />

      <View style={styles.gridContainer}>
        {/* LUNES */}
        <View style={styles.dayBox}>
          <Button
            title={getTranslatedText('lunes')} 
            onPress={() => {
              setBgColor('yellow');  
            }}
          />
          
          <Button 
  title={estadoLunes}
  onPress={() => setEstadoLunes(estadoLunes === 'Incompleto' ? 'Completo' : 'Incompleto')}
/>
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('tarea')}
            onChangeText={(text) => setLunes(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('desc')}
            onChangeText={(text) => setLunes(text)}
          />
        </View>

        {/* MARTES */}
        <View style={styles.dayBox}>
          <Button
            title={getTranslatedText('martes')} 
            onPress={() => {
              setBgColor('green');
            }}
          />
         
          <Button 
  title={estadoMartes}
  onPress={() => setEstadoMartes(estadoMartes === 'Incompleto' ? 'Completo' : 'Incompleto')}
/>
<TextInput
            style={styles.input}
            placeholder={getTranslatedText('tarea')}
            onChangeText={(text) => setLunes(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('desc')}
            onChangeText={(text) => setLunes(text)}
          />
        </View>

        {/* MIÉRCOLES */}
        <View style={styles.dayBox}>
          <Button
            title={getTranslatedText('miercoles')} 
            onPress={() => {
              setBgColor('blue');
              
            }}
          />
        
          <Button 
  title={estadoMiercoles}
  onPress={() => setEstadoMiercoles(estadoMiercoles === 'Incompleto' ? 'Completo' : 'Incompleto')}
/>
<TextInput
            style={styles.input}
            placeholder={getTranslatedText('tarea')}
            onChangeText={(text) => setLunes(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('desc')}
            onChangeText={(text) => setLunes(text)}
          />
        </View>

        {/* JUEVES */}
        <View style={styles.dayBox}>
          <Button
            title={getTranslatedText('jueves')} 
            onPress={() => {
              setBgColor('orange');
              
            }}
          />
         
          <Button 
  title={estadoJueves}
  onPress={() => setEstadoJueves(estadoJueves === 'Incompleto' ? 'Completo' : 'Incompleto')}
/>
<TextInput
            style={styles.input}
            placeholder={getTranslatedText('tarea')}
            onChangeText={(text) => setLunes(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('desc')}
            onChangeText={(text) => setLunes(text)}
          />
        </View>

        {/* VIERNES */}
        <View style={styles.dayBox}>
          <Button
            title={getTranslatedText('viernes')} 
            onPress={() => {
              setBgColor('purple');
             
            }}
          />
         
          <Button 
  title={estadoViernes}
  onPress={() => setEstadoViernes(estadoViernes === 'Incompleto' ? 'Completo' : 'Incompleto')}
/>
          
<TextInput
            style={styles.input}
            placeholder={getTranslatedText('tarea')}
            onChangeText={(text) => setLunes(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('desc')}
            onChangeText={(text) => setLunes(text)}
          />
        </View>

        {/* SÁBADO */}
        <View style={styles.dayBox}>
          <Button
            title={getTranslatedText('sabado')} 
            onPress={() => {
              setBgColor('white');
             
            }}
          />
        
          <Button 
  title={estadoSabado}
  onPress={() => setEstadoSabado(estadoSabado === 'Incompleto' ? 'Completo' : 'Incompleto')}
/>
<TextInput
            style={styles.input}
            placeholder={getTranslatedText('tarea')}
            onChangeText={(text) => setLunes(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('desc')}
            onChangeText={(text) => setLunes(text)}
          />
        </View>

        {/* DOMINGO */}
        <View style={styles.dayBox}>
          <Button
            title={getTranslatedText('domingo')} 
            onPress={() => {
              setBgColor('red');
             
            }}
          />
           <TextInput
            style={styles.input}
            placeholder={getTranslatedText('tarea')}
            onChangeText={(text) => setLunes(text)}
          />
          <TextInput
            style={styles.input}
            placeholder={getTranslatedText('desc')}
            onChangeText={(text) => setLunes(text)}
          />
        
          
          <Button 
  title={estadoDomingo}
  onPress={() => setEstadodomingo(estadoDomingo === 'Incompleto' ? 'Completo' : 'Incompleto')}
/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  slider: {
    width: 300,
    height: 40,
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  dayBox: {
    width: '30%',
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
}); 