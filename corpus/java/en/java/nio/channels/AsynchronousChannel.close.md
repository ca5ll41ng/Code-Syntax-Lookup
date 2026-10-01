---
id: "java-en-function-asynchronouschannel-close"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannel.close"
signature: "void close() throws IOException"
title: "AsynchronousChannel.close"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannel.close

```java
void close() throws IOException
```

Closes this channel.

 

 Any outstanding asynchronous operations upon this channel will
 complete with the exception `AsynchronousCloseException`. After a
 channel is closed, further attempts to initiate asynchronous I/O
 operations complete immediately with cause `ClosedChannelException`.

 

  This method otherwise behaves exactly as specified by the `Channel` interface.

**异常**

- **IOException** — If an I/O error occurs
