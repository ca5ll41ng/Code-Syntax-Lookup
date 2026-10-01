---
id: "java-en-function-httpsurlconnection-sethostnameverifier"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.setHostnameVerifier"
signature: "public void setHostnameVerifier(HostnameVerifier v)"
title: "HttpsURLConnection.setHostnameVerifier"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.setHostnameVerifier

```java
public void setHostnameVerifier(HostnameVerifier v)
```

Sets the HostnameVerifier for this instance.
 

 New instances of this class inherit the default static hostname
 verifier set by `setDefaultHostnameVerifier(HostnameVerifier)
 setDefaultHostnameVerifier`.  Calls to this method replace
 this object's HostnameVerifier.

**参数**

- **v** — the host name verifier

**异常**

- **IllegalArgumentException** — if the HostnameVerifier parameter is null.

**参见**

- #getHostnameVerifier()
- #setDefaultHostnameVerifier(HostnameVerifier)
