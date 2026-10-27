import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BÜB Assist',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0F1115),
        primaryColor: const Color(0xFFEC0016),
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF1A1D23),
        elevation: 0,
        title: const Text(
          'BÜB Assist',
          style: TextStyle(color: Color(0xFFEC0016), fontWeight: FontWeight.bold),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Moin, Alexander 👋',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            const Text(
              'TB 4.2 · Region Süd · Verfügbar',
              style: TextStyle(color: Colors.grey, fontSize: 14),
            ),
            const SizedBox(height: 24),
            
            // Kacheln für die Funktionen
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
                children: [
                  _buildFeatureTile(Icons.description, 'BTB erstellen', 'PDF + Share'),
                  _buildFeatureTile(Icons.warning_amber, 'Mängel', 'Foto · GPS'),
                  _buildFeatureTile(Icons.calculate, 'Rechner', 'BL-Spa'),
                  _buildFeatureTile(Icons.chat_bubble_outline, 'Fach-Chat', 'Fragen & Antworten'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  // Eine kleine Hilfsfunktion, um die Kacheln zu bauen
  Widget _buildFeatureTile(IconData icon, String title, String subtitle) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF1A1D23),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF2D323B)),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, size: 40, color: const Color(0xFFEC0016)),
          const SizedBox(height: 12),
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15)),
          const SizedBox(height: 4),
          Text(subtitle, style: const TextStyle(color: Colors.grey, fontSize: 12)),
        ],
      ),
    );
  }
}