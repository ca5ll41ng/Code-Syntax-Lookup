---
id: "java-en-function-channels-newinputstream"
language: "java"
lang: "en"
category: "function"
name: "Channels.newInputStream"
signature: "public static InputStream newInputStream(ReadableByteChannel ch)"
title: "Channels.newInputStream"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channels.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Channels.newInputStream

```java
public static InputStream newInputStream(ReadableByteChannel ch)
```

Constructs a stream that reads bytes from the given channel.

 

 The `read` and `transferTo` methods of the resulting stream
 will throw an `IllegalBlockingModeException` if invoked while the
 underlying channel is in non-blocking mode. The `transferTo` method
 will also throw an `IllegalBlockingModeException` if invoked to
 transfer bytes to an output stream that writes to an underlying channel in
 non-blocking mode.  The stream will not be buffered, and
 it will not support the `mark mark` or `reset reset` methods.  The stream will be safe for access by
 multiple concurrent threads.  Closing the stream will in turn cause the
 channel to be closed.

**参数**

- **ch** — The channel from which bytes will be read

**返回**

- A new input stream
