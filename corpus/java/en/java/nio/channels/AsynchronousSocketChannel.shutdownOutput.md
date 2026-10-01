---
id: "java-en-function-asynchronoussocketchannel-shutdownoutput"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.shutdownOutput"
signature: "public abstract AsynchronousSocketChannel shutdownOutput() throws IOException"
title: "AsynchronousSocketChannel.shutdownOutput"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.shutdownOutput

```java
public abstract AsynchronousSocketChannel shutdownOutput() throws IOException
```

Shutdown the connection for writing without closing the channel.

 

 Once shutdown for writing then further attempts to write to the
 channel will throw `ClosedChannelException`. If the output side of
 the connection is already shutdown then invoking this method has no
 effect. The effect on an outstanding write operation is system dependent
 and therefore not specified.

**返回**

- The channel

**异常**

- **NotYetConnectedException** — If this channel is not yet connected
- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs
