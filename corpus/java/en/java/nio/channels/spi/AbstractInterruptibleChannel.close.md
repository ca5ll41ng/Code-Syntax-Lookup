---
id: "java-en-function-abstractinterruptiblechannel-close"
language: "java"
lang: "en"
category: "function"
name: "AbstractInterruptibleChannel.close"
signature: "public final void close() throws IOException"
title: "AbstractInterruptibleChannel.close"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractInterruptibleChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractInterruptibleChannel.close

```java
public final void close() throws IOException
```

Closes this channel.

 

 If the channel has already been closed then this method returns
 immediately.  Otherwise it marks the channel as closed and then invokes
 the `implCloseChannel implCloseChannel` method in order to
 complete the close operation.

**异常**

- **IOException** — If an I/O error occurs
