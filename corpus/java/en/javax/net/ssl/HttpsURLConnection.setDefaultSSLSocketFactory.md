---
id: "java-en-function-httpsurlconnection-setdefaultsslsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.setDefaultSSLSocketFactory"
signature: "public static void setDefaultSSLSocketFactory(SSLSocketFactory sf)"
title: "HttpsURLConnection.setDefaultSSLSocketFactory"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.setDefaultSSLSocketFactory

```java
public static void setDefaultSSLSocketFactory(SSLSocketFactory sf)
```

Sets the default SSLSocketFactory inherited by new
 instances of this class.
 

 The socket factories are used when creating sockets for secure
 https URL connections.

**参数**

- **sf** — the default SSL socket factory

**异常**

- **IllegalArgumentException** — if the SSLSocketFactory parameter is null.

**参见**

- #getDefaultSSLSocketFactory()
