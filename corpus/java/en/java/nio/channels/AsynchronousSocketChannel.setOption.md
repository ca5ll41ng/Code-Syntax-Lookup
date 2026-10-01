---
id: "java-en-function-asynchronoussocketchannel-setoption"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousSocketChannel.setOption"
signature: "public abstract <T> AsynchronousSocketChannel setOption(SocketOption<T> name, T value) throws IOException"
title: "AsynchronousSocketChannel.setOption"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousSocketChannel.setOption

```java
public abstract <T> AsynchronousSocketChannel setOption(SocketOption<T> name, T value) throws IOException
```

**异常**

- **IllegalArgumentException** — {@inheritDoc}
- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}
