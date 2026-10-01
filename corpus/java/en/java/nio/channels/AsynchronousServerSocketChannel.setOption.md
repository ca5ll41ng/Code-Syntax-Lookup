---
id: "java-en-function-asynchronousserversocketchannel-setoption"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousServerSocketChannel.setOption"
signature: "public abstract <T> AsynchronousServerSocketChannel setOption(SocketOption<T> name, T value) throws IOException"
title: "AsynchronousServerSocketChannel.setOption"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousServerSocketChannel.setOption

```java
public abstract <T> AsynchronousServerSocketChannel setOption(SocketOption<T> name, T value) throws IOException
```

**异常**

- **IllegalArgumentException** — {@inheritDoc}
- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
