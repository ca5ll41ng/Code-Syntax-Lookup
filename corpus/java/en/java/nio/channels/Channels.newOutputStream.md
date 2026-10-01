---
id: "java-en-function-channels-newoutputstream"
language: "java"
lang: "en"
category: "function"
name: "Channels.newOutputStream"
signature: "public static OutputStream newOutputStream(WritableByteChannel ch)"
title: "Channels.newOutputStream"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channels.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Channels.newOutputStream

```java
public static OutputStream newOutputStream(WritableByteChannel ch)
```

Constructs a stream that writes bytes to the given channel.

 

 The `write` methods of the resulting stream will throw an
 `IllegalBlockingModeException` if invoked while the underlying
 channel is in non-blocking mode.  The stream will not be buffered.  The
 stream will be safe for access by multiple concurrent threads.  Closing
 the stream will in turn cause the channel to be closed.

**参数**

- **ch** — The channel to which bytes will be written

**返回**

- A new output stream
