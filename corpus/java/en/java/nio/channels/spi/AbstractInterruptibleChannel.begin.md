---
id: "java-en-function-abstractinterruptiblechannel-begin"
language: "java"
lang: "en"
category: "function"
name: "AbstractInterruptibleChannel.begin"
signature: "protected final void begin()"
title: "AbstractInterruptibleChannel.begin"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractInterruptibleChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractInterruptibleChannel.begin

```java
protected final void begin()
```

Marks the beginning of an I/O operation that might block indefinitely.

 

 This method should be invoked in tandem with the `end end`
 method, using a `try`&nbsp;...&nbsp;`finally` block as
 shown above, in order to implement asynchronous
 closing and interruption for this channel.
