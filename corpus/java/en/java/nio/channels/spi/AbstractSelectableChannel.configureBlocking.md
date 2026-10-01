---
id: "java-en-function-abstractselectablechannel-configureblocking"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelectableChannel.configureBlocking"
signature: "public final SelectableChannel configureBlocking(boolean block) throws IOException"
title: "AbstractSelectableChannel.configureBlocking"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelectableChannel.configureBlocking

```java
public final SelectableChannel configureBlocking(boolean block) throws IOException
```

Adjusts this channel's blocking mode.

 

 If the given blocking mode is different from the current blocking
 mode then this method invokes the `implConfigureBlocking
 implConfigureBlocking` method, while holding the appropriate locks, in
 order to change the mode.

**异常**

- **ClosedChannelException** — {@inheritDoc}
