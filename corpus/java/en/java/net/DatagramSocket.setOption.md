---
id: "java-en-function-datagramsocket-setoption"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setOption"
signature: "public <T> DatagramSocket setOption(SocketOption<T> name, T value) throws IOException"
title: "DatagramSocket.setOption"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setOption

```java
public <T> DatagramSocket setOption(SocketOption<T> name, T value) throws IOException
```

Sets the value of a socket option.

**参数**

- **The** — type of the socket option value
- **name** — The socket option
- **value** — The value of the socket option. A value of `null` may be valid for some options.

**返回**

- this DatagramSocket

**异常**

- **UnsupportedOperationException** — if the datagram socket does not support the option.
- **IllegalArgumentException** — if the value is not valid for the option.
- **IOException** — if an I/O error occurs, or if the socket is closed.
- **NullPointerException** — if name is `null`

> *Since 9*
