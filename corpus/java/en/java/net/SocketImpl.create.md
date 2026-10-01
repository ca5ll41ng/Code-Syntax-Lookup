---
id: "java-en-function-socketimpl-create"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.create"
signature: "protected abstract void create(boolean stream) throws IOException"
title: "SocketImpl.create"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.create

```java
protected abstract void create(boolean stream) throws IOException
```

Creates a stream socket.

 The `stream` parameter provided a way in early JDK releases
 to create a `Socket` that used a datagram socket.
 The Socket API no longer provides a way to do this, so the
 `create` method will always be called with a `stream`
 value of `true`.

**参数**

- **stream** — must be `true`.

**异常**

- **IOException** — if an I/O error occurs while creating the socket.
