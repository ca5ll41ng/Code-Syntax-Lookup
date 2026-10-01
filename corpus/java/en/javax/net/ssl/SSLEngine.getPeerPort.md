---
id: "java-en-function-sslengine-getpeerport"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getPeerPort"
signature: "public int getPeerPort()"
title: "SSLEngine.getPeerPort"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getPeerPort

```java
public int getPeerPort()
```

Returns the port number of the peer.
 

 Note that the value is not authenticated, and should not be
 relied upon.

**返回**

- the port number of the peer, or -1 if nothing is available.
