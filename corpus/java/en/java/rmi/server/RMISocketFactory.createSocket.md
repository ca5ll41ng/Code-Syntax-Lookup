---
id: "java-en-function-rmisocketfactory-createsocket"
language: "java"
lang: "en"
category: "function"
name: "RMISocketFactory.createSocket"
signature: "public abstract Socket createSocket(String host, int port) throws IOException"
title: "RMISocketFactory.createSocket"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory.createSocket

```java
public abstract Socket createSocket(String host, int port) throws IOException
```

Creates a client socket connected to the specified host and port.

**参数**

- **host** — the host name
- **port** — the port number

**返回**

- a socket connected to the specified host and port.

**异常**

- **IOException** — if an I/O error occurs during socket creation

> *Since 1.1*
