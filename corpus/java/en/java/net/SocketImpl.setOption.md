---
id: "java-en-function-socketimpl-setoption"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.setOption"
signature: "protected <T> void setOption(SocketOption<T> name, T value) throws IOException"
title: "SocketImpl.setOption"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.setOption

```java
protected <T> void setOption(SocketOption<T> name, T value) throws IOException
```

Called to set a socket option.

 The default implementation of this method first checks that the given
 socket option `name` is not null, then throws `UnsupportedOperationException`. Subclasses should override this method
 with an appropriate implementation.

**参数**

- **The** — type of the socket option value
- **name** — The socket option
- **value** — The value of the socket option. A value of `null` may be valid for some options.

**异常**

- **UnsupportedOperationException** — if the SocketImpl does not support the option
- **IllegalArgumentException** — if the value is not valid for the option
- **IOException** — if an I/O error occurs, or if the socket is closed
- **NullPointerException** — if name is `null`

> *Since 9*
