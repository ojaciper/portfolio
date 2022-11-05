// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

class AboutMeListTile extends StatelessWidget {
  const AboutMeListTile({
    Key? key,
    required this.left,
    required this.right,
  }) : super(key: key);
  final String left;
  final String right;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          left,
          style: GoogleFonts.roboto(
            fontSize: 16.sp,
            fontWeight: FontWeight.w700,
          ),
        ),
        Text(
          right,
          style: GoogleFonts.roboto(
            fontSize: 16.sp,
          ),
        ),
      ],
    );
  }
}
