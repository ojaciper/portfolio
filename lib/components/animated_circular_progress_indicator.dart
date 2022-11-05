import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

class AnimatedCircularProgressIndicator extends StatelessWidget {
  const AnimatedCircularProgressIndicator({
    super.key,
    required this.percentage,
    required this.label,
    required this.color,
  });
  final double percentage;
  final String label;
  final Color color;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        AspectRatio(
          aspectRatio: 1,
          child: TweenAnimationBuilder(
            tween: Tween<double>(begin: 0, end: percentage),
            duration: const Duration(seconds: 2),
            builder: (context, double value, child) => Stack(
              fit: StackFit.expand,
              children: [
                CircularProgressIndicator(
                  strokeWidth: 10,
                  value: value,
                  color: color,
                  backgroundColor: Colors.white,
                ),
                Center(
                  child: Text(
                    (value * 100).round().toString() + '%',
                    style: GoogleFonts.roboto(
                        fontSize: 16.sp, fontWeight: FontWeight.w600
                        // color: const Color(0xFF0D2F3F),
                        ),
                  ),
                )
              ],
            ),
          ),
        ),
        const SizedBox(height: 10),
        Text(
          label,
          maxLines: 1,
          style: GoogleFonts.roboto(
            fontSize: 16.sm,
            fontWeight: FontWeight.w500,
          ),
        )
      ],
    );
  }
}
