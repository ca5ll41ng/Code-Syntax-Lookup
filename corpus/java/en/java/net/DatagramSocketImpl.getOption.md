---
id: "java-en-function-datagramsocketimpl-getoption"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.getOption"
signature: "protected <T> T getOption(SocketOption<T> name) throws IOException"
title: "DatagramSocketImpl.getOption"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.getOption

```java
protected <T> T getOption(SocketOption<T> name) throws IOException
```

Called to get a socket option.

 The default implementation of this method first checks that the given
 socket option `name` is not null, then throws `UnsupportedOperationException`. Subclasses should override this method
 with an appropriate implementation.

**参数**

- **The** — type of the socket option value
- **name** — The socket option

**返回**

- the socket option

**异常**

- **UnsupportedOperationException** — if the DatagramSocketImpl does not support the option
- **IOException** — if an I/O error occurs, or if the socket is closed
- **NullPointerException** — if name is `null`

> *Since 9*
