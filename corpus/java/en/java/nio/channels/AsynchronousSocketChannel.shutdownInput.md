---
id: "java-en-function-asynchronoussocketchannel-shutdowninput"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.shutdownInput"
signature: "public abstract AsynchronousSocketChannel shutdownInput() throws IOException"
title: "AsynchronousSocketChannel.shutdownInput"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.shutdownInput

```java
public abstract AsynchronousSocketChannel shutdownInput() throws IOException
```

Shutdown the connection for reading without closing the channel.

 

 Once shutdown for reading then further reads on the channel will
 return `-1`, the end-of-stream indication. If the input side of the
 connection is already shutdown then invoking this method has no effect.
 The effect on an outstanding read operation is system dependent and
 therefore not specified. The effect, if any, when there is data in the
 socket receive buffer that has not been read, or data arrives subsequently,
 is also system dependent.

**返回**

- The channel

**异常**

- **NotYetConnectedException** — If this channel is not yet connected
- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs
