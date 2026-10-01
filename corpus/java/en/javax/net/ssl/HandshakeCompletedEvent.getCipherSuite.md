---
id: "java-en-function-handshakecompletedevent-getciphersuite"
language: "java"
lang: "en"
category: "function"
name: "HandshakeCompletedEvent.getCipherSuite"
signature: "public String getCipherSuite()"
title: "HandshakeCompletedEvent.getCipherSuite"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HandshakeCompletedEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HandshakeCompletedEvent.getCipherSuite

```java
public String getCipherSuite()
```

Returns the cipher suite in use by the session which was produced
 by the handshake.  (This is a convenience method for
 getting the ciphersuite from the SSLsession.)

**返回**

- the name of the cipher suite negotiated during this session.
