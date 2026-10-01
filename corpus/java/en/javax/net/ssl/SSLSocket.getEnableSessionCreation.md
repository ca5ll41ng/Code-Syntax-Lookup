---
id: "java-en-function-sslsocket-getenablesessioncreation"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.getEnableSessionCreation"
signature: "public abstract boolean getEnableSessionCreation()"
title: "SSLSocket.getEnableSessionCreation"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.getEnableSessionCreation

```java
public abstract boolean getEnableSessionCreation()
```

Returns true if new SSL sessions may be established by this socket.

**返回**

- true indicates that sessions may be created; this is the default.  false indicates that an existing session must be resumed

**参见**

- #setEnableSessionCreation(boolean)
