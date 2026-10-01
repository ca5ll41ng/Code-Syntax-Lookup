---
id: "java-en-function-rmisocketfactory-createserversocket"
language: "java"
lang: "en"
category: "function"
name: "RMISocketFactory.createServerSocket"
signature: "public abstract ServerSocket createServerSocket(int port) throws IOException"
title: "RMISocketFactory.createServerSocket"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory.createServerSocket

```java
public abstract ServerSocket createServerSocket(int port) throws IOException
```

Create a server socket on the specified port (port 0 indicates
 an anonymous port).

**参数**

- **port** — the port number

**返回**

- the server socket on the specified port

**异常**

- **IOException** — if an I/O error occurs during server socket creation

> *Since 1.1*
