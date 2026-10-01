---
id: "java-en-function-sslsocketfactory-createsocket"
language: "java"
lang: "en"
category: "function"
name: "SSLSocketFactory.createSocket"
signature: "public abstract Socket createSocket(Socket s, String host, int port, boolean autoClose) throws IOException"
title: "SSLSocketFactory.createSocket"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocketFactory.createSocket

```java
public abstract Socket createSocket(Socket s, String host, int port, boolean autoClose) throws IOException
```

Returns a socket layered over an existing socket connected to the named
 host, at the given port.  This constructor can be used when tunneling SSL
 through a proxy or when negotiating the use of SSL over an existing
 socket. The host and port refer to the logical peer destination.
 This socket is configured using the socket options established for
 this factory.

**参数**

- **s** — the existing socket
- **host** — the server host
- **port** — the server port
- **autoClose** — close the underlying socket when this socket is closed

**返回**

- a socket connected to the specified host and port

**异常**

- **IOException** — if an I/O error occurs when creating the socket
- **NullPointerException** — if the parameter s is null
