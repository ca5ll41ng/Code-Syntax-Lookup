---
id: "java-en-function-httpsurlconnection-setdefaulthostnameverifier"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.setDefaultHostnameVerifier"
signature: "public static void setDefaultHostnameVerifier(HostnameVerifier v)"
title: "HttpsURLConnection.setDefaultHostnameVerifier"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.setDefaultHostnameVerifier

```java
public static void setDefaultHostnameVerifier(HostnameVerifier v)
```

Sets the default HostnameVerifier inherited by a
 new instance of this class.
 

 If this method is not called, the default
 HostnameVerifier assumes the connection should not
 be permitted.

**参数**

- **v** — the default host name verifier

**异常**

- **IllegalArgumentException** — if the HostnameVerifier parameter is null.

**参见**

- #getDefaultHostnameVerifier()
