---
id: "java-en-function-sslserversocket-setuseclientmode"
language: "java"
lang: "en"
category: "function"
name: "SSLServerSocket.setUseClientMode"
signature: "public abstract void setUseClientMode(boolean mode)"
title: "SSLServerSocket.setUseClientMode"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLServerSocket.setUseClientMode

```java
public abstract void setUseClientMode(boolean mode)
```

Controls whether accepted connections are in the (default) SSL
 server mode, or the SSL client mode.
 

 Servers normally authenticate themselves, and clients are not
 required to do so.
 

 In rare cases, TCP servers
 need to act in the SSL client mode on newly accepted
 connections. For example, FTP clients acquire server sockets
 and listen there for reverse connections from the server. An
 FTP client would use an SSLServerSocket in "client" mode to
 accept the reverse connection while the FTP server uses an
 SSLSocket with "client" mode disabled to initiate the
 connection. During the resulting handshake, existing SSL
 sessions may be reused.
 

 SSLSockets returned from accept()
 inherit this setting.

**参数**

- **mode** — true if newly accepted connections should use SSL client mode.

**参见**

- #getUseClientMode()
