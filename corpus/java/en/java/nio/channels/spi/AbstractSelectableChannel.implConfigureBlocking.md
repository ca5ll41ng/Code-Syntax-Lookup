---
id: "java-en-function-abstractselectablechannel-implconfigureblocking"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelectableChannel.implConfigureBlocking"
signature: "protected abstract void implConfigureBlocking(boolean block) throws IOException"
title: "AbstractSelectableChannel.implConfigureBlocking"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelectableChannel.implConfigureBlocking

```java
protected abstract void implConfigureBlocking(boolean block) throws IOException
```

Adjusts this channel's blocking mode.

 

 This method is invoked by the `configureBlocking
 configureBlocking` method in order to perform the actual work of
 changing the blocking mode.  This method is only invoked if the new mode
 is different from the current mode.

**参数**

- **block** — If `true` then this channel will be placed in blocking mode; if `false` then it will be placed non-blocking mode

**异常**

- **IOException** — If an I/O error occurs
