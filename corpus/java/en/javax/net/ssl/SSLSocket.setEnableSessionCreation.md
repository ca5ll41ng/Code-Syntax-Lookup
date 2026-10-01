---
id: "java-en-function-sslsocket-setenablesessioncreation"
language: "java"
lang: "en"
category: "function"
name: "SSLSocket.setEnableSessionCreation"
signature: "public abstract void setEnableSessionCreation(boolean flag)"
title: "SSLSocket.setEnableSessionCreation"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket.setEnableSessionCreation

```java
public abstract void setEnableSessionCreation(boolean flag)
```

Controls whether new SSL sessions may be established by this socket.
 If session creations are not allowed, and there are no
 existing sessions to resume, there will be no successful
 handshaking.

**参数**

- **flag** — true indicates that sessions may be created; this is the default.  false indicates that an existing session must be resumed

**参见**

- #getEnableSessionCreation()
