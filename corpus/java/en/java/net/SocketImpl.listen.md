---
id: "java-en-function-socketimpl-listen"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.listen"
signature: "protected abstract void listen(int backlog) throws IOException"
title: "SocketImpl.listen"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.listen

```java
protected abstract void listen(int backlog) throws IOException
```

Sets the maximum queue length for incoming connection indications
 (a request to connect) to the `count` argument. If a
 connection indication arrives when the queue is full, the
 connection is refused.

**参数**

- **backlog** — the maximum length of the queue.

**异常**

- **IOException** — if an I/O error occurs when creating the queue.
