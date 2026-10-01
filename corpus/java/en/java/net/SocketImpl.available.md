---
id: "java-en-function-socketimpl-available"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.available"
signature: "protected abstract int available() throws IOException"
title: "SocketImpl.available"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.available

```java
protected abstract int available() throws IOException
```

Returns the number of bytes that can be read from this socket
 without blocking.

**返回**

- the number of bytes that can be read from this socket without blocking.

**异常**

- **IOException** — if an I/O error occurs when determining the number of bytes available.
