---
id: "java-en-function-sslparameters-getuseciphersuitesorder"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getUseCipherSuitesOrder"
signature: "public final boolean getUseCipherSuitesOrder()"
title: "SSLParameters.getUseCipherSuitesOrder"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getUseCipherSuitesOrder

```java
public final boolean getUseCipherSuitesOrder()
```

Returns whether the local cipher suites preference should be honored.

**返回**

- whether local cipher suites order in `#getCipherSuites` should be honored during SSL/TLS/DTLS handshaking.

**参见**

- #setUseCipherSuitesOrder(boolean)

> *Since 1.8*
