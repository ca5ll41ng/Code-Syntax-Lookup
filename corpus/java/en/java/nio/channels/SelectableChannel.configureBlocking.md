---
id: "java-en-function-selectablechannel-configureblocking"
language: "java"
lang: "en"
category: "function"
name: "SelectableChannel.configureBlocking"
signature: "public abstract SelectableChannel configureBlocking(boolean block) throws IOException"
title: "SelectableChannel.configureBlocking"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectableChannel.configureBlocking

```java
public abstract SelectableChannel configureBlocking(boolean block) throws IOException
```

Adjusts this channel's blocking mode.

 

 If this channel is registered with one or more selectors then an
 attempt to place it into blocking mode will cause an `IllegalBlockingModeException` to be thrown.

 

 This method may be invoked at any time.  The new blocking mode will
 only affect I/O operations that are initiated after this method returns.
 For some implementations this may require blocking until all pending I/O
 operations are complete.

 

 If this method is invoked while another invocation of this method or
 of the `register(Selector, int) register` method is in progress
 then it will first block until the other operation is complete.

**参数**

- **block** — If `true` then this channel will be placed in blocking mode; if `false` then it will be placed non-blocking mode

**返回**

- This selectable channel

**异常**

- **ClosedChannelException** — If this channel is closed
- **IllegalBlockingModeException** — If `block` is `true` and this channel is registered with one or more selectors
- **IOException** — If an I/O error occurs
