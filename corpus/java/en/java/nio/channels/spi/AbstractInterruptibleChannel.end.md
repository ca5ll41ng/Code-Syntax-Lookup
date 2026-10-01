---
id: "java-en-function-abstractinterruptiblechannel-end"
language: "java"
lang: "en"
category: "function"
name: "AbstractInterruptibleChannel.end"
signature: "protected final void end(boolean completed) throws AsynchronousCloseException"
title: "AbstractInterruptibleChannel.end"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractInterruptibleChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractInterruptibleChannel.end

```java
protected final void end(boolean completed) throws AsynchronousCloseException
```

Marks the end of an I/O operation that might block indefinitely.

 

 This method should be invoked in tandem with the `begin
 begin` method, using a `try`&nbsp;...&nbsp;`finally` block
 as shown above, in order to implement asynchronous
 closing and interruption for this channel.

**参数**

- **completed** — `true` if, and only if, the I/O operation completed successfully, that is, had some effect that would be visible to the operation's invoker

**异常**

- **AsynchronousCloseException** — If the channel was asynchronously closed
- **ClosedByInterruptException** — If the thread blocked in the I/O operation was interrupted
