import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/components/animated_linear_progress_indicator.dart';
import 'package:portfolio/constant.dart';
import 'package:portfolio/widgets/user_list.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final screenOrientation = MediaQuery.of(context).orientation;
    return Scaffold(
      body: SafeArea(
        child: ListView(
          children: [
            SizedBox(
              height: 281,
              child: Stack(
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                          image: AssetImage(
                            "assets/images/bg.jpg",
                          ),
                          fit: BoxFit.cover),
                    ),
                    alignment: Alignment.topCenter,
                    height: 200,
                    child: Row(
                      children: [
                        IconButton(
                          onPressed: () {
                            Navigator.pop(context);
                          },
                          icon: const Icon(
                            Icons.arrow_back,
                            size: 30,
                          ),
                        )
                      ],
                    ),
                  ),
                  Positioned(
                    left: screenOrientation == Orientation.portrait
                        ? size.width * 0.3
                        : size.width * 0.4,
                    bottom: 0,
                    child: Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(100)),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(100),
                        child: Image.asset(
                          'assets/images/osas.jpg',
                          width: 150,
                        ),
                      ),
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(height: 10),
            Text(
              "Peter Osas",
              textAlign: TextAlign.center,
              style: GoogleFonts.roboto(
                fontSize: 30.sm,
                letterSpacing: 2,
                fontWeight: FontWeight.w500,
              ),
            ),
            const SizedBox(height: 5),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                UserList(label: "31", icon: Icons.thumb_up),
                SizedBox(width: 10),
                UserList(label: '14', icon: Icons.person_add_alt_rounded),
                SizedBox(width: 10),
                UserList(label: "14", icon: Icons.person_add_alt_rounded),
              ],
            ),
            const Divider(
              height: 40,
              thickness: 1,
            ),
            Padding(
              padding: const EdgeInsets.only(left: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "LOCATION",
                    style: GoogleFonts.roboto(
                      fontSize: 20.sm,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Row(
                    children: [
                      const Icon(
                        Icons.location_on,
                      ),
                      const SizedBox(width: 5),
                      Text(
                        "PortHarcourt, Nigeria",
                        style: GoogleFonts.roboto(
                          fontSize: 18.sm,
                        ),
                      )
                    ],
                  )
                ],
              ),
            ),
            const SizedBox(height: 30),
            Padding(
              padding: const EdgeInsets.only(left: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "ON THE WEB",
                    style: GoogleFonts.roboto(
                      fontSize: 20.sm,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 10),
                  SizedBox(
                    width: 200,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        IconButton(
                            onPressed: (() => urlLunacher(
                                "https://web.facebook.com/SirOsas")),
                            icon: const Icon(
                              Icons.facebook_rounded,
                              size: 30,
                            )),
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
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(height: 30),
            Padding(
              padding: const EdgeInsets.only(left: 20, right: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "ABOUT",
                    style: GoogleFonts.roboto(
                      fontSize: 20.sm,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 10),
                  SizedBox(
                    // width: 350,
                    child: Text(
                      "Peter Osas is a Mobile Engineer(Flutter/dart) | Firebase | Node Js| Api Integration | Building scalable Mobile Applications for the next billion users, with 2+ years of Experience. He has been involved in developing high-performance mobile app in collaboration with other creatives to give clients and end user optimua application  ",
                      style: GoogleFonts.roboto(
                        fontSize: 18.sm,
                        height: 1.5,
                      ),
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(height: 30),
            Padding(
              padding: const EdgeInsets.only(left: 20, right: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "WHAT I CAN OFFER",
                    style: GoogleFonts.roboto(
                      fontSize: 20.sm,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 10),
                  SizedBox(
                    // width: 350,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "1. Writing clean code -",
                          style: GoogleFonts.roboto(
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        const SizedBox(height: 5),
                        Text(
                          "When  you Hire me, you can sit back and not stress about your team getting clean codes. ",
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                          ),
                        ),
                        const SizedBox(height: 5),
                        Text(
                          "2. Participating in development lifecycles - ",
                          style: GoogleFonts.roboto(
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        const SizedBox(height: 5),
                        Text(
                          "I collaborate with UI/UX designers, QA engineers, project managers, etc., when creating apps. Consequently, you can expect better results when you hire me.",
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                          ),
                        ),
                        const SizedBox(height: 5),
                        Text(
                          "3. Creating better app designs -",
                          style: GoogleFonts.roboto(
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        const SizedBox(height: 5),
                        Text(
                          " you will need to keep up with the latest trends and habits to produce apps that end-users want when you hire a Flutter developer. These professionals possess the required creativity and knowledge to enhance and expand your app designs.",
                          style: GoogleFonts.roboto(
                            fontSize: 16,
                          ),
                        )
                      ],
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(height: 30),
            Padding(
              padding: const EdgeInsets.only(left: 20, right: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "KNOWLEDGE OF LANGUAGE",
                    style: GoogleFonts.roboto(
                      fontSize: 20.sm,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 10),
                  const AnimatedLinearProgressIndicator(
                    label: " (Native Language)",
                    percentage: 1,
                    color: primaryColor,
                  ),
                  const AnimatedLinearProgressIndicator(
                    label: "English (A1)",
                    percentage: 0.9,
                    color: Colors.blue,
                  ),
                  const AnimatedLinearProgressIndicator(
                    label: "Others (F9)",
                    percentage: 0.0,
                    color: Colors.blue,
                  )
                ],
              ),
            ),
            const SizedBox(height: 30),
            Padding(
              padding: const EdgeInsets.only(left: 20, right: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "HOBBIES",
                    style: GoogleFonts.roboto(
                      fontSize: 20.sm,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Container(
                    // width: 350,
                    child: Text(
                      "My hobby is coding and the will to develop, although apart from coding , i like to practice various sports and exercis reqularly in the gym",
                      style: GoogleFonts.roboto(
                        fontSize: 18.sm,
                        height: 1.5,
                      ),
                    ),
                  )
                ],
              ),
            ),
            const SizedBox(height: 30),
          ],
        ),
      ),
    );
  }
}
