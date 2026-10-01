---
id: "java-en-function-sslsocket-getenabledprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getEnabledProtocols"
signature: "public abstract String [] getEnabledProtocols()"
title: "SSLSocket.getEnabledProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getEnabledProtocols

```java
public abstract String [] getEnabledProtocols()
```

Returns the names of the protocol versions which are currently
 enabled for use on this connection.
 

 Note that even if a protocol is enabled, it may never be used.
 This can occur if the peer does not support the protocol, or its
 use is restricted, or there are no enabled cipher suites supported
 by the protocol.

**返回**

- an array of protocols

**参见**

- #setEnabledProtocols(String [])
