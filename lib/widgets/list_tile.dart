import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

class ListTileItem extends StatelessWidget {
  const ListTileItem(
      {Key? key,
      required this.imageUrl,
      required this.label,
      required this.onTap})
      : super(key: key);
  final String imageUrl;
  final String label;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Image.asset(imageUrl, width: 35),
      horizontalTitleGap: 20,
      minVerticalPadding: 0,
      title: Text(
        label,
        style: GoogleFonts.roboto(
          fontSize: 15.sm,
          fontWeight: FontWeight.w600,
        ),
      ),
      onTap: onTap,
    );
  }
}
