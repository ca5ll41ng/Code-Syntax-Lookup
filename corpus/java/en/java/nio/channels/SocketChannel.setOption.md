---
id: "java-en-function-socketchannel-setoption"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.setOption"
signature: "public abstract <T> SocketChannel setOption(SocketOption<T> name, T value) throws IOException"
title: "SocketChannel.setOption"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.setOption

```java
public abstract <T> SocketChannel setOption(SocketOption<T> name, T value) throws IOException
```

**异常**

- **UnsupportedOperationException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
- **ClosedChannelException** — {@inheritDoc}
- **IOException** — {@inheritDoc}

> *Since 1.7*
