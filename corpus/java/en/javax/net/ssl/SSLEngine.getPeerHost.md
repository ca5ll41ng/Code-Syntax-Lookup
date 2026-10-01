---
id: "java-en-function-sslengine-getpeerhost"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getPeerHost"
signature: "public String getPeerHost()"
title: "SSLEngine.getPeerHost"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getPeerHost

```java
public String getPeerHost()
```

Returns the host name of the peer.
 

 Note that the value is not authenticated, and should not be
 relied upon.

**返回**

- the host name of the peer, or null if nothing is available.
