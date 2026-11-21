plugins {
    id("com.android.application")
}

android {
    namespace = "com.jkvk217.portfolio"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.jkvk217.portfolio"
        minSdk = 24
        targetSdk = 34
        versionCode = 4
        versionName = "1.3"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    // The built website is copied into app/src/main/assets and served to the
    // WebView by MainActivity, so the app works without a network connection.
}
