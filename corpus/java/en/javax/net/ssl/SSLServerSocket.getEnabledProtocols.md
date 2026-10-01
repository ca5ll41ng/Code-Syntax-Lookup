---
id: "java-en-function-sslserversocket-getenabledprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.getEnabledProtocols"
signature: "public abstract String [] getEnabledProtocols()"
title: "SSLServerSocket.getEnabledProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.getEnabledProtocols

```java
public abstract String [] getEnabledProtocols()
```

Returns the names of the protocols which are currently
 enabled for use by the newly accepted connections.
 

 Note that even if a protocol is enabled, it may never be used.
 This can occur if the peer does not support the protocol, or its
 use is restricted, or there are no enabled cipher suites supported
 by the protocol.

**返回**

- an array of protocol names

**参见**

- #getSupportedProtocols()
- #setEnabledProtocols(String[])
