---
id: "java-en-function-sslparameters-getapplicationprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.getApplicationProtocols"
signature: "public String[] getApplicationProtocols()"
title: "SSLParameters.getApplicationProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.getApplicationProtocols

```java
public String[] getApplicationProtocols()
```

Returns a prioritized array of application-layer protocol names that
 can be negotiated over the SSL/TLS/DTLS protocols.
 

 The array could be empty (zero-length), in which case protocol
 indications will not be used.
 

 This method will return a new array each time it is invoked.

**返回**

- a non-null, possibly zero-length array of application protocol `String`s.  The array is ordered based on protocol preference, with the first entry being the most preferred.

**参见**

- #setApplicationProtocols

> *Since 9*
