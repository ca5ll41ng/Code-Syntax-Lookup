---
id: "java-en-function-httpsurlconnection-getdefaultsslsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.getDefaultSSLSocketFactory"
signature: "public static SSLSocketFactory getDefaultSSLSocketFactory()"
title: "HttpsURLConnection.getDefaultSSLSocketFactory"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.getDefaultSSLSocketFactory

```java
public static SSLSocketFactory getDefaultSSLSocketFactory()
```

Gets the default static SSLSocketFactory that is
 inherited by new instances of this class.
 

 The socket factories are used when creating sockets for secure
 https URL connections.

**返回**

- the default SSLSocketFactory

**参见**

- #setDefaultSSLSocketFactory(SSLSocketFactory)
