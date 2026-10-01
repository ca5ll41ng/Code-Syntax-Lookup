---
id: "java-en-function-javax-net-ssl-httpsurlconnection"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.HttpsURLConnection"
title: "HttpsURLConnection"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection

HttpsURLConnection extends HttpURLConnection
 with support for https-specific features.
 

 See 
 http://www.w3.org/pub/WWW/Protocols/ and
  RFC 2818 
 for more details on the
 https specification.
 

 This class uses HostnameVerifier and
 SSLSocketFactory.
 There are default implementations defined for both classes.
 However, the implementations can be replaced on a per-class (static) or
 per-instance basis.  All new HttpsURLConnections instances
 will be assigned
 the "default" static values at instance creation, but they can be overridden
 by calling the appropriate per-instance set method(s) before
 connecting.

> *Since 1.4*
