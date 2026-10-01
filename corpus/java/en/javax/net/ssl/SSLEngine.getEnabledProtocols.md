---
id: "java-en-function-sslengine-getenabledprotocols"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getEnabledProtocols"
signature: "public abstract String [] getEnabledProtocols()"
title: "SSLEngine.getEnabledProtocols"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getEnabledProtocols

```java
public abstract String [] getEnabledProtocols()
```

Returns the names of the protocol versions which are currently
 enabled for use with this `SSLEngine`.
 

 Note that even if a protocol is enabled, it may never be used.
 This can occur if the peer does not support the protocol, or its
 use is restricted, or there are no enabled cipher suites supported
 by the protocol.

**返回**

- an array of protocols

**参见**

- #setEnabledProtocols(String[])
