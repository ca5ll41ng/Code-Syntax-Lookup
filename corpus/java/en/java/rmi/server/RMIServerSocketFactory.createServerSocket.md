---
id: "java-en-function-rmiserversocketfactory-createserversocket"
language: "java"
lang: "en"
category: "function"
name: "RMIServerSocketFactory.createServerSocket"
signature: "public ServerSocket createServerSocket(int port) throws IOException"
title: "RMIServerSocketFactory.createServerSocket"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIServerSocketFactory.createServerSocket

```java
public ServerSocket createServerSocket(int port) throws IOException
```

Create a server socket on the specified port (port 0 indicates
 an anonymous port).

**参数**

- **port** — the port number

**返回**

- the server socket on the specified port

**异常**

- **IOException** — if an I/O error occurs during server socket creation

> *Since 1.2*
