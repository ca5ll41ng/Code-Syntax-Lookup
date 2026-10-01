---
id: "java-en-function-socket-setoption"
language: "java"
lang: "en"
category: "function"
name: "Socket.setOption"
signature: "public <T> Socket setOption(SocketOption<T> name, T value) throws IOException"
title: "Socket.setOption"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setOption

```java
public <T> Socket setOption(SocketOption<T> name, T value) throws IOException
```

Sets the value of a socket option.

**参数**

- **The** — type of the socket option value
- **name** — The socket option
- **value** — The value of the socket option. A value of `null` may be valid for some options.

**返回**

- this Socket

**异常**

- **UnsupportedOperationException** — if the socket does not support the option.
- **IllegalArgumentException** — if the value is not valid for the option.
- **IOException** — if an I/O error occurs, or if the socket is closed.
- **NullPointerException** — if name is `null`

> *Since 9*
