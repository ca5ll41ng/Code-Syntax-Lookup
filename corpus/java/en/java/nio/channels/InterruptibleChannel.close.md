---
id: "java-en-function-interruptiblechannel-close"
language: "java"
lang: "en"
category: "function"
name: "InterruptibleChannel.close"
signature: "public void close() throws IOException"
title: "InterruptibleChannel.close"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/InterruptibleChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterruptibleChannel.close

```java
public void close() throws IOException
```

Closes this channel.

 

 Any thread currently blocked in an I/O operation upon this channel
 will receive an `AsynchronousCloseException`.

 

 This method otherwise behaves exactly as specified by the `close Channel` interface.

**异常**

- **IOException** — If an I/O error occurs
