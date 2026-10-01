---
id: "java-en-function-networkchannel-getoption"
language: "java"
lang: "en"
category: "function"
name: "NetworkChannel.getOption"
signature: "<T> T getOption(SocketOption<T> name) throws IOException"
title: "NetworkChannel.getOption"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/NetworkChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkChannel.getOption

```java
<T> T getOption(SocketOption<T> name) throws IOException
```

Returns the value of a socket option.

**参数**

- **The** — type of the socket option value
- **name** — The socket option

**返回**

- The value of the socket option. A value of `null` may be a valid value for some socket options.

**异常**

- **UnsupportedOperationException** — If the socket option is not supported by this channel
- **ClosedChannelException** — If this channel is closed
- **IOException** — If an I/O error occurs

**参见**

- java.net.StandardSocketOptions
