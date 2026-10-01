---
id: "java-en-function-socketchannel-shutdowninput"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.shutdownInput"
signature: "public abstract SocketChannel shutdownInput() throws IOException"
title: "SocketChannel.shutdownInput"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.shutdownInput

```java
public abstract SocketChannel shutdownInput() throws IOException
```

Shutdown the connection for reading without closing the channel.

 

 Once shutdown for reading then further reads on the channel will
 return `-1`, the end-of-stream indication. If the input side of the
 connection is already shutdown then invoking this method has no effect.

**返回**

- The channel

**异常**

- **NotYetConnectedException** — If this channel is not yet connected
- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs

> *Since 1.7*
