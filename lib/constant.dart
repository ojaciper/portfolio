import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

const primaryColor = Color(0xFFFFC107);
const secondaryColor = Color(0xFF242430);
const darkColor = Color(0xFF191923);
const bodyTextColor = Color(0xFF8B8B8D);
const bgColor = Color(0xFF1E1E28);

const defaultPadding = 20.0;
const defaultDuration = Duration(seconds: 1); // we use it on our animation
const maxWidth = 1440.0; // max width of our web

// this is the function for url launcher
Future<void> urlLunacher(url) async {
  if (!await launchUrl(Uri.parse(url),
      mode: LaunchMode.externalNonBrowserApplication)) {
    throw "Could Not Launch $url";
  }
}
