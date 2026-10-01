---
id: "java-en-function-sslparameters-sslparameters"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.SSLParameters"
signature: "public SSLParameters()"
title: "SSLParameters.SSLParameters"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.SSLParameters

```java
public SSLParameters()
```

Constructs SSLParameters.
 

 The values of cipherSuites, protocols, cryptographic algorithm
 constraints, endpoint identification algorithm, signature schemes,
 server names and server name matchers are set to `null`;
 useCipherSuitesOrder, wantClientAuth and needClientAuth are set
 to `false`; enableRetransmissions is set to `true`;
 maximum network packet size is set to `0`.
