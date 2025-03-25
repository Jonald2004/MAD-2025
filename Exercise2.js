import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header dengan Background */}
      <View style={styles.header}>
        <Image
          source={require('./assets/jonald.jpg')} // Menggunakan gambar dari folder lokal
          style={styles.profileImage}
        />
        <Text style={styles.name}>Jonald Filemon Kaparang</Text>
        <Text style={styles.profession}>
          Software Engineer | Mobile Developer | Back-End Developer
        </Text>
      </View>

      {/* Deskripsi Singkat */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.description}>
          Seorang Software Engineer, Mobile Developer, dan Back-End Developer
          yang berdedikasi dalam mengembangkan aplikasi berkualitas tinggi.
          Berpengalaman dalam React Native, JavaScript, serta arsitektur sistem
          back-end, dengan fokus pada efisiensi dan pengalaman pengguna yang
          optimal.
        </Text>

        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>📧 filemonkaparang88@gmail.com</Text>
          <Text style={styles.contactText}>📞 +62 821-9797-0831</Text>
          <Text style={styles.contactText}>🌍 Jonald.dev</Text>
        </View>

        {/* Formulir Pesan */}
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <TextInput
          style={styles.input}
          placeholder="Your message..."
          placeholderTextColor="gray"
        />

        {/* Tombol Kirim */}
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#1e3a8a',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#ffffff',
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  profession: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 10,
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Untuk efek shadow di Android
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 10,
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify', // Membuat teks lebih rapi
    marginBottom: 15,
    lineHeight: 24, // Menambah jarak antar baris agar lebih nyaman dibaca
    paddingHorizontal: 10, // Memberi ruang di kiri-kanan agar tidak terlalu mepet
  },
  contactContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#1e3a8a',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: 'white',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  button: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
