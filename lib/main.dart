import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:portfolio/functions/theme_provider.dart';

import 'package:portfolio/screens/home_screen.dart';
import 'package:provider/provider.dart';

void main() async {
  await Hive.initFlutter();
  await Hive.openBox<bool>("Theme");
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
        designSize: const Size(375, 812),
        builder: (BuildContext context, child) {
          return MultiProvider(
            providers: [
              ChangeNotifierProvider(
                create: (_) => ThemeModel(),
              ),
            ],
            child: Consumer<ThemeModel>(
              builder: (context, value, child) => MaterialApp(
                title: 'Portfolio',
                themeMode: value.getTheme,
                theme: ThemeData(
                  colorSchemeSeed: Colors.deepPurple,
                  useMaterial3: true,
                  brightness: Brightness.light,
                ),
                darkTheme: ThemeData(
                  colorSchemeSeed: Colors.deepPurple,
                  useMaterial3: true,
                  brightness: Brightness.dark,
                ),
                home: const HomeScreen(),
              ),
            ),
          );
        });
  }
}
