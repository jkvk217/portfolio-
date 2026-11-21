package com.jkvk217.portfolio;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;

/**
 * A single WebView showing the portfolio that ships inside the APK.
 *
 * The files in app/src/main/assets are served to the WebView from a fake https
 * origin (https://appassets.androidplatform.net/) by intercepting requests, so
 * the site keeps a normal origin for its router, storage and absolute asset
 * paths while never touching the network.
 */
public class MainActivity extends Activity {

    private static final String TAG = "PortfolioWeb";
    private static final String HOST = "appassets.androidplatform.net";
    /**
     * Opened on launch. This is a real route rather than "/index.html": the site's
     * router matches on the path, and "/index.html" would land on its 404 page.
     */
    private static final String START_URL = "https://" + HOST + "/about";

    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        webView = new WebView(this);
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setBuiltInZoomControls(false);

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage message) {
                Log.d(TAG, "console " + message.messageLevel() + " " + message.message()
                        + " (" + message.sourceId() + ":" + message.lineNumber() + ")");
                return true;
            }
        });

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                Log.e(TAG, "load error " + request.getUrl() + " " + error.getErrorCode() + " " + error.getDescription());
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                if (url != null && HOST.equals(url.getHost())) {
                    return serveFromAssets(url.getPath());
                }
                Log.d(TAG, "network request " + url);
                return null;
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                if (url == null || HOST.equals(url.getHost())) {
                    return false;
                }
                // mailto:, tel: and outside links belong to the rest of the phone.
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, url));
                } catch (Exception ignored) {
                    // No app can handle the link; stay where we are.
                }
                return true;
            }
        });

        webView.loadUrl(START_URL);
    }

    /** Answers a request from the bundled assets, falling back to index.html for client routes. */
    private WebResourceResponse serveFromAssets(String path) {
        if (path == null || path.isEmpty() || path.equals("/") || path.equals("/index.html")) {
            path = "/index.html";
        }

        String name = path.startsWith("/") ? path.substring(1) : path;
        String mime = mimeType(name);
        InputStream stream = openAsset(name);

        if (stream == null) {
            // A route such as /experience has no file of its own: hand back the app shell.
            stream = openAsset("index.html");
            mime = "text/html";
        }
        if (stream == null) {
            return null;
        }

        boolean text = mime.startsWith("text/") || mime.endsWith("javascript") || mime.endsWith("json") || mime.endsWith("svg+xml");
        return new WebResourceResponse(mime, text ? "utf-8" : null, stream);
    }

    private InputStream openAsset(String name) {
        try {
            return getAssets().open(name);
        } catch (IOException e) {
            return null;
        }
    }

    private static String mimeType(String path) {
        String p = path.toLowerCase();
        if (p.endsWith(".html")) return "text/html";
        if (p.endsWith(".js") || p.endsWith(".mjs")) return "application/javascript";
        if (p.endsWith(".css")) return "text/css";
        if (p.endsWith(".json")) return "application/json";
        if (p.endsWith(".svg")) return "image/svg+xml";
        if (p.endsWith(".webp")) return "image/webp";
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return "image/jpeg";
        if (p.endsWith(".ico")) return "image/x-icon";
        if (p.endsWith(".woff2")) return "font/woff2";
        if (p.endsWith(".woff")) return "font/woff";
        return "application/octet-stream";
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
