---
id: "java-en-function-abstractselectablechannel-implclosechannel"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelectableChannel.implCloseChannel"
signature: "protected final void implCloseChannel() throws IOException"
title: "AbstractSelectableChannel.implCloseChannel"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelectableChannel.implCloseChannel

```java
protected final void implCloseChannel() throws IOException
```

Closes this channel.

 

 This method, which is specified in the `AbstractInterruptibleChannel` class and is invoked by the `close close` method, in turn invokes the
 `implCloseSelectableChannel implCloseSelectableChannel` method in
 order to perform the actual work of closing this channel.  It then
 cancels all of this channel's keys.
