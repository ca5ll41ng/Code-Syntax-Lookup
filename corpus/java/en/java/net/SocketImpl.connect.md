---
id: "java-en-function-socketimpl-connect"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.connect"
signature: "protected abstract void connect(String host, int port) throws IOException"
title: "SocketImpl.connect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.connect

```java
protected abstract void connect(String host, int port) throws IOException
```

Connects this socket to the specified port on the named host.

**参数**

- **host** — the name of the remote host.
- **port** — the port number.

**异常**

- **IOException** — if an I/O error occurs when connecting to the remote host.
