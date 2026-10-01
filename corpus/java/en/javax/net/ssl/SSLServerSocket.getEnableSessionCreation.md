---
id: "java-en-function-sslserversocket-getenablesessioncreation"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.getEnableSessionCreation"
signature: "public abstract boolean getEnableSessionCreation()"
title: "SSLServerSocket.getEnableSessionCreation"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.getEnableSessionCreation

```java
public abstract boolean getEnableSessionCreation()
```

Returns true if new SSL sessions may be established by the
 sockets which are created from this server socket.

**返回**

- true indicates that sessions may be created; this is the default.  false indicates that an existing session must be resumed

**参见**

- #setEnableSessionCreation(boolean)
