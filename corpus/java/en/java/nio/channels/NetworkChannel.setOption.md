---
id: "java-en-function-networkchannel-setoption"
language: "java"
lang: "en"
category: "function"
name: "NetworkChannel.setOption"
signature: "<T> NetworkChannel setOption(SocketOption<T> name, T value) throws IOException"
title: "NetworkChannel.setOption"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/NetworkChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkChannel.setOption

```java
<T> NetworkChannel setOption(SocketOption<T> name, T value) throws IOException
```

Sets the value of a socket option.

**参数**

- **The** — type of the socket option value
- **name** — The socket option
- **value** — The value of the socket option. A value of `null` may be a valid value for some socket options.

**返回**

- This channel

**异常**

- **UnsupportedOperationException** — If the socket option is not supported by this channel
- **IllegalArgumentException** — If the value is not a valid value for this socket option
- **ClosedChannelException** — If this channel is closed
- **IOException** — If an I/O error occurs

**参见**

- java.net.StandardSocketOptions
