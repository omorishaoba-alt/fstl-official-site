#!/bin/bash
# =====================================================
# FSTL OSHOBE TWA Project Generator (Bubblewrap CLI)
# =====================================================
# Usage:
#   1. Replace the PWA_URL variable with your live PWA URL
#   2. Run: chmod +x generate_fstl_twa.sh
#   3. Run: ./generate_fstl_twa.sh
#
# Requirements:
# - Node.js and npm installed
# - Java JDK 11+ installed
# - Android SDK installed + ANDROID_HOME set
# - Bubblewrap CLI
# =====================================================

# === CONFIGURATION ===
PWA_URL="https://yourusername.github.io/FSTL-OSHOBE-PWA/"
PACKAGE_ID="com.fstl.oshobe"
APP_NAME="FSTL OSHOBE"
OUTPUT_DIR="FSTL-OSHOBE-TWA"

echo "⏳ Starting TWA project generation..."

# Step 1: Install Bubblewrap globally (if not installed)
echo "➡️ Installing Bubblewrap CLI..."
npm install -g @bubblewrap/cli

# Step 2: Initialize Bubblewrap project
echo "➡️ Initializing TWA project..."
bubblewrap init --manifest "$PWA_URL/manifest.json" --appid "$PACKAGE_ID" --name "$APP_NAME" --directory "$OUTPUT_DIR"

# Step 3: Build the Android Project
echo "➡️ Building Android TWA project..."
cd "$OUTPUT_DIR" || { echo "❌ Failed to enter output directory"; exit 1; }
bubblewrap build

echo "🎉 TWA project generated in: $OUTPUT_DIR"
echo "Next Steps:"
echo "  1. Open this directory in Android Studio"
echo "  2. Sync Gradle and configure SDK versions"
echo "  3. Build signed APK/AAB for Play Store"
echo "  4. Submit via affiliate publisher"
echo ""
echo "📍 Your PWA remains live and indexed while the native app is built."