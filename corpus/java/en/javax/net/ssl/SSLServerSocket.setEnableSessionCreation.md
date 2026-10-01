---
id: "java-en-function-sslserversocket-setenablesessioncreation"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.setEnableSessionCreation"
signature: "public abstract void setEnableSessionCreation(boolean flag)"
title: "SSLServerSocket.setEnableSessionCreation"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.setEnableSessionCreation

```java
public abstract void setEnableSessionCreation(boolean flag)
```

Controls whether new SSL sessions may be established by the
 sockets which are created from this server socket.
 

 SSLSockets returned from accept()
 inherit this setting.

**参数**

- **flag** — true indicates that sessions may be created; this is the default. false indicates that an existing session must be resumed.

**参见**

- #getEnableSessionCreation()
