---
id: "java-en-function-socketchannel-shutdownoutput"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.shutdownOutput"
signature: "public abstract SocketChannel shutdownOutput() throws IOException"
title: "SocketChannel.shutdownOutput"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.shutdownOutput

```java
public abstract SocketChannel shutdownOutput() throws IOException
```

Shutdown the connection for writing without closing the channel.

 

 Once shutdown for writing then further attempts to write to the
 channel will throw `ClosedChannelException`. If the output side of
 the connection is already shutdown then invoking this method has no
 effect.

**返回**

- The channel

**异常**

- **NotYetConnectedException** — If this channel is not yet connected
- **ClosedChannelException** — If this channel is closed
- **IOException** — If some other I/O error occurs

> *Since 1.7*
