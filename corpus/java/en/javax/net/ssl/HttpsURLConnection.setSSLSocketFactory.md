---
id: "java-en-function-httpsurlconnection-setsslsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.setSSLSocketFactory"
signature: "public void setSSLSocketFactory(SSLSocketFactory sf)"
title: "HttpsURLConnection.setSSLSocketFactory"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.setSSLSocketFactory

```java
public void setSSLSocketFactory(SSLSocketFactory sf)
```

Sets the SSLSocketFactory to be used when this instance
 creates sockets for secure https URL connections.
 

 New instances of this class inherit the default static
 SSLSocketFactory set by
 `setDefaultSSLSocketFactory(SSLSocketFactory)
 setDefaultSSLSocketFactory`.  Calls to this method replace
 this object's SSLSocketFactory.

**参数**

- **sf** — the SSL socket factory

**异常**

- **IllegalArgumentException** — if the SSLSocketFactory parameter is null.

**参见**

- #getSSLSocketFactory()
