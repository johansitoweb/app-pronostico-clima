import React, { useState } from 'react';  
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';  

const WeatherApp = () => {  
  const [city, setCity] = useState('');  
  const [weatherData, setWeatherData] = useState(null);  

  const fetchWeatherData = () => {  
    // Aquí puedes realizar una llamada a la API para obtener datos en tiempo real  
    const mockData = {  
      location: city || 'Ciudad Ejemplo',  
      temperature: '25°C',  
      condition: 'Soleado',  
      airQuality: 'Bueno',  
    };  

    setWeatherData(mockData);  
    setCity('');  
  };  

  return (  
    <View style={styles.container}>  
      <Image  
        source={{ uri: 'https://example.com/weather-background.jpg' }} // Reemplaza con una URL de imagen real  
        style={styles.backgroundImage}  
      />  
      <View style={styles.overlay}>  
        <Text style={styles.title}>Pronóstico del Clima</Text>  
        <TextInput  
          style={styles.input}  
          placeholder="Ingresa una ciudad"  
          value={city}  
          onChangeText={setCity}  
        />  
        <Button title="Ver Clima" onPress={fetchWeatherData} />  
        {weatherData && (  
          <View style={styles.card}>  
            <Text style={styles.label}>Ubicación: {weatherData.location}</Text>  
            <Text style={styles.label}>Temperatura: {weatherData.temperature}</Text>  
            <Text style={styles.label}>Condición: {weatherData.condition}</Text>  
            <Text style={styles.label}>Calidad del Aire: {weatherData.airQuality}</Text>  
          </View>  
        )}  
      </View>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  backgroundImage: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    opacity: 0.3, // Ajusta la opacidad según tus preferencias  
  },  
  overlay: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#ecf0f1',  
    padding: 20,  
    borderRadius: 10,  
    opacity: 0.9,  
  },  
  title: {  
    fontSize: 24,  
    marginBottom: 20,  
    fontWeight: 'bold',  
  },  
  input: {  
    height: 40,  
    borderColor: 'gray',  
    borderWidth: 1,  
    marginBottom: 20,  
    width: '100%',  
    paddingHorizontal: 10,  
  },  
  card: {  
    padding: 20,  
    borderRadius: 10,  
    backgroundColor: '#fff',  
    marginTop: 20,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 1 },  
    shadowOpacity: 0.2,  
    shadowRadius: 1.5,  
    elevation: 3,  
  },  
  label: {  
    fontSize: 18,  
    marginVertical: 5,  
  },  
});  

export default WeatherApp;