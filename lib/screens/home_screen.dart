import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/functions/theme_provider.dart';
import 'package:portfolio/widgets/about_list_tile.dart';
import 'package:provider/provider.dart';

import '../components/component.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final screenOrientation = MediaQuery.of(context).orientation;
    final GlobalKey<ScaffoldState> key = GlobalKey();
    return Scaffold(
      key: key,
      appBar: AppBar(
        toolbarHeight: 70,
        elevation: 0.5,
        leading: IconButton(
          onPressed: () {},
          icon: IconButton(
              onPressed: () {
                key.currentState!.openDrawer();
              },
              icon: const Icon(
                Icons.dehaze,
                size: 30,
              )),
        ),
        title: Text(
          "Porfolio",
          style: GoogleFonts.roboto(
            fontSize: 25,
            fontWeight: FontWeight.w500,
          ),
        ),
        actions: [
          Row(
            children: [
              Consumer<ThemeModel>(
                builder: (context, value, child) => TextButton.icon(
                  label: value.getTheme == ThemeMode.system
                      ? const Text("System")
                      : value.getTheme == ThemeMode.dark
                          ? const Text("Dark")
                          : const Text("Light"),
                  onPressed: () {
                    Provider.of<ThemeModel>(context, listen: false)
                        .toggleTheme();
                  },
                  icon: value.getTheme == ThemeMode.system
                      ? const Icon(Icons.settings)
                      : value.getTheme == ThemeMode.dark
                          ? const Icon(Icons.dark_mode_rounded)
                          : const Icon(Icons.light_mode_rounded),
                ),
              ),
            ],
          ),
          const SizedBox(width: 20),
        ],
        centerTitle: true,
      ),
      drawer: const NavigatonDrawer(),
      body: SafeArea(
        child: ListView(
          children: [
            const SizedBox(height: 40),
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(200),
                  child: Image.asset(
                    'assets/images/osas.jpg',
                    width: screenOrientation == Orientation.portrait
                        ? size.height * 0.2
                        : size.width * 0.3,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  "Peter Osas",
                  style: GoogleFonts.roboto(
                    fontSize: 45.sm,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  "Junior Flutter Engineer",
                  style: GoogleFonts.roboto(
                    fontSize: 18.sp,
                  ),
                ),
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Image.asset(
                    'assets/images/flutter.png',
                    width: 50,
                    fit: BoxFit.cover,
                  ),
                ),
              ],
            ),
            const Divider(
              height: 30,
              thickness: 1,
            ),
            Column(
              children: [
                Text(
                  "About Me",
                  style: GoogleFonts.roboto(
                    fontSize: 20.sp,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: 10),
                Container(
                  alignment: Alignment.center,
                  padding: EdgeInsets.symmetric(horizontal: 50.sm),
                  child: Column(children: const [
                    AboutMeListTile(left: "Residence", right: "Rivers"),
                    SizedBox(height: 10),
                    AboutMeListTile(left: "City", right: "PortHarcourt"),
                    SizedBox(height: 10),
                    AboutMeListTile(left: "Age", right: "21"),
                  ]),
                ),
              ],
            ),
            const SizedBox(height: 25),
            const Divider(
              height: 30,
              thickness: 1.5,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: Column(
                // mainAxisAlignment: MainAxisAlignment.center,
                // crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "Skills (as Junior/Mid)",
                    style: GoogleFonts.roboto(
                      fontSize: 20.sp,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 30),
                  // first skill row
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      SizedBox(
                          width: size.width * 0.2 + 30,
                          child: const AnimatedCircularProgressIndicator(
                            color: Color(0xFF286F6C),
                            label: "Flutter",
                            percentage: 0.95,
                          )),
                      const SizedBox(width: 5),
                      SizedBox(
                          width: size.width * 0.2 + 30,
                          child: const AnimatedCircularProgressIndicator(
                            color: Color(0xFFF1C249),
                            label: "Dart",
                            percentage: 0.8,
                          )),
                      const SizedBox(width: 5),
                      SizedBox(
                        width: size.width * 0.2 + 30,
                        child: const AnimatedCircularProgressIndicator(
                          color: Color(0xFFF26440),
                          label: "Firebase",
                          percentage: 0.8,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 30),
                  // second skills row
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      SizedBox(
                          width: size.width * 0.2 + 30,
                          child: const AnimatedCircularProgressIndicator(
                            color: Color(0xFFe8c1a9),
                            label: "Github",
                            percentage: 0.75,
                          )),
                      const SizedBox(width: 5),
                      SizedBox(
                          width: size.width * 0.2 + 30,
                          child: const AnimatedCircularProgressIndicator(
                            color: Color(0xFF008ad3),
                            label: "Vs Code",
                            percentage: 0.95,
                          )),
                      const SizedBox(width: 5),
                      SizedBox(
                        width: size.width * 0.2 + 30,
                        child: const AnimatedCircularProgressIndicator(
                          color: Color(0xFF3e2d01),
                          label: "Git",
                          percentage: 0.85,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 20),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
