---
id: "java-en-function-rmiclientsocketfactory-createsocket"
language: "java"
lang: "en"
category: "function"
name: "RMIClientSocketFactory.createSocket"
signature: "public Socket createSocket(String host, int port) throws IOException"
title: "RMIClientSocketFactory.createSocket"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClientSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClientSocketFactory.createSocket

```java
public Socket createSocket(String host, int port) throws IOException
```

Create a client socket connected to the specified host and port.

**参数**

- **host** — the host name
- **port** — the port number

**返回**

- a socket connected to the specified host and port.

**异常**

- **IOException** — if an I/O error occurs during socket creation

> *Since 1.2*
