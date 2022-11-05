import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/constant.dart';
import 'package:portfolio/functions/theme_provider.dart';
import 'package:portfolio/screens/about_screen.dart';
import 'package:portfolio/widgets/list_tile.dart';
import 'package:provider/provider.dart';

class NavigatonDrawer extends StatelessWidget {
  const NavigatonDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context)
        .textTheme
        .apply(displayColor: Theme.of(context).colorScheme.onSurface);

    return SafeArea(
      child: Drawer(
        key: key,
        // backgroundColor: Colors.white,
        child: ListView(
          children: [
            // Drawer header
            Container(
              width: double.infinity,
              height: 200,
              decoration: const BoxDecoration(
                image: DecorationImage(
                    image: AssetImage(
                      "assets/images/bg.jpg",
                    ),
                    fit: BoxFit.cover),
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const SizedBox(height: 5),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(100),
                      child: Image.asset(
                        "assets/images/osas.jpg",
                        width: 100,
                      ),
                    ),
                    Text(
                      "Peter Osas",
                      style: GoogleFonts.roboto(
                        fontSize: 18.sm,
                        fontWeight: FontWeight.w400,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(height: 5),
                    Text(
                      "Junior flutter developer",
                      style: GoogleFonts.roboto(
                        fontSize: 18.sm,
                        fontWeight: FontWeight.w400,
                        color: Colors.white,
                      ),
                    )
                  ],
                ),
              ),
            ),
            ListTile(
              leading: const Icon(
                Icons.home,
                size: 30,
              ),
              horizontalTitleGap: 25,
              title: Text(
                "Home",
                style: GoogleFonts.roboto(
                  fontSize: 16.sm,
                ),
              ),
              onTap: () => Navigator.pop(context),
            ),
            const Divider(
              height: 30,
              color: Color(0x808B8B8D),
              thickness: 1.5,
            ),
            // list of application build wither flutter
            Padding(
              padding: const EdgeInsets.only(left: 20),
              child: Text(
                "Application Build: ",
                style: GoogleFonts.roboto(
                  fontSize: 16.sm,
                  fontWeight: FontWeight.w700,
                  textStyle: textTheme.headlineLarge,
                ),
              ),
            ),
            ListTileItem(
              imageUrl: "assets/icons/bmi.png",
              label: "BMI Calculator",
              onTap: () =>
                  urlLunacher('https://github.com/ojaciper/bmi-calcuator'),
            ),
            ListTileItem(
              imageUrl: "assets/icons/instagram.png",
              label: "Instagram Clone",
              onTap: () =>
                  urlLunacher("https://github.com/ojaciper/instagram-clone"),
            ),
            ListTileItem(
              imageUrl: "assets/icons/amazon.png",
              label: "Amazon Clone",
              onTap: () => urlLunacher(
                  "https://github.com/ojaciper/flutter-amazon-clone"),
            ),
            ListTileItem(
              imageUrl: "assets/icons/note.png",
              label: "Note App",
              onTap: () => urlLunacher("https://github.com/ojaciper/notely"),
            ),
            ListTileItem(
              imageUrl: "assets/icons/travel.png",
              label: "Travel App (UI)",
              onTap: () => urlLunacher("https://github.com/ojaciper/travel-ui"),
            ),
            const Divider(
              height: 30,
              color: Color(0x808B8B8D),
              thickness: 1.5,
            ),

            // setting and about developer
            ListTileItem(
              imageUrl: "assets/icons/about.png",
              label: "About Developer",
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const AboutScreen(),
                  ),
                );
              },
            ),
            const SizedBox(
              height: 50,
            ),
            Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 20),
                  child: Container(
                      height: 50,
                      width: 250,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.1),
                            spreadRadius: 5,
                            // blurRadius: 7,
                            offset: const Offset(
                                0, 3), // changes position of shadow
                          ),
                        ],
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          GestureDetector(
                            onTap: (() => urlLunacher(
                                "https://web.facebook.com/SirOsas")),
                            child: const Icon(
                              Icons.facebook_rounded,
                              size: 30,
                            ),
                          ),
                          GestureDetector(
                            onTap: () =>
                                urlLunacher("https://twitter.com/Ojasciper"),
                            child: Image.asset(
                              "assets/icons/twitter.png",
                              width: 30,
                            ),
                          ),
                          GestureDetector(
                            onTap: () => urlLunacher(
                                "https://github.com/ojaciper/ojaciper"),
                            child: Image.asset(
                              "assets/icons/github.png",
                              width: 30,
                            ),
                          ),
                          GestureDetector(
                            onTap: () => urlLunacher(
                                "https://www.linkedin.com/in/peter-osas-9b8433195/"),
                            child: Image.asset(
                              "assets/icons/linkinden.png",
                              width: 30,
                            ),
                          ),
                        ],
                      )),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
