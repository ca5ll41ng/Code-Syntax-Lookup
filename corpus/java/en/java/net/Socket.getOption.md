---
id: "java-en-function-socket-getoption"
language: "java"
lang: "en"
category: "function"
name: "Socket.getOption"
signature: "public <T> T getOption(SocketOption<T> name) throws IOException"
title: "Socket.getOption"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getOption

```java
public <T> T getOption(SocketOption<T> name) throws IOException
```

Returns the value of a socket option.

**参数**

- **The** — type of the socket option value
- **name** — The socket option

**返回**

- The value of the socket option.

**异常**

- **UnsupportedOperationException** — if the socket does not support the option.
- **IOException** — if an I/O error occurs, or if the socket is closed.
- **NullPointerException** — if name is `null`

> *Since 9*
