---
id: "java-en-function-sslsocket-getsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getSSLParameters"
signature: "public SSLParameters getSSLParameters()"
title: "SSLSocket.getSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getSSLParameters

```java
public SSLParameters getSSLParameters()
```

Returns the SSLParameters in effect for this SSLSocket.
 The ciphersuites and protocols of the returned SSLParameters
 are always non-null.

**返回**

- the SSLParameters in effect for this SSLSocket.

> *Since 1.6*
