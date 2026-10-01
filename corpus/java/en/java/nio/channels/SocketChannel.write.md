---
id: "java-en-function-socketchannel-write"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.write"
signature: "public abstract int write(ByteBuffer src) throws IOException"
title: "SocketChannel.write"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.write

```java
public abstract int write(ByteBuffer src) throws IOException
```

**异常**

- **NotYetConnectedException** — If this channel is not yet connected
- **ClosedChannelException** — {@inheritDoc}
- **AsynchronousCloseException** — {@inheritDoc}
- **ClosedByInterruptException** — {@inheritDoc}
