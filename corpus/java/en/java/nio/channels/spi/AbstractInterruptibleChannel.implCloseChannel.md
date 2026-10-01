---
id: "java-en-function-abstractinterruptiblechannel-implclosechannel"
language: "java"
lang: "en"
category: "function"
name: "AbstractInterruptibleChannel.implCloseChannel"
signature: "protected abstract void implCloseChannel() throws IOException"
title: "AbstractInterruptibleChannel.implCloseChannel"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractInterruptibleChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractInterruptibleChannel.implCloseChannel

```java
protected abstract void implCloseChannel() throws IOException
```

Closes this channel.

 

 This method is invoked by the `close close` method in order
 to perform the actual work of closing the channel.  This method is only
 invoked if the channel has not yet been closed, and it is never invoked
 more than once.

 

 An implementation of this method must arrange for any other thread
 that is blocked in an I/O operation upon this channel to return
 immediately, either by throwing an exception or by returning normally.

**异常**

- **IOException** — If an I/O error occurs while closing the channel
