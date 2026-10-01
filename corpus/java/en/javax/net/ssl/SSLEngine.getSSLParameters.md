---
id: "java-en-function-sslengine-getsslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getSSLParameters"
signature: "public SSLParameters getSSLParameters()"
title: "SSLEngine.getSSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getSSLParameters

```java
public SSLParameters getSSLParameters()
```

Returns the SSLParameters in effect for this SSLEngine.
 The ciphersuites and protocols of the returned SSLParameters
 are always non-null.

**返回**

- the SSLParameters in effect for this SSLEngine.

> *Since 1.6*
