---
id: "java-en-function-channels-newwriter"
language: "java"
lang: "en"
category: "function"
name: "Channels.newWriter"
signature: "public static Writer newWriter(WritableByteChannel ch, CharsetEncoder enc, int minBufferCap)"
title: "Channels.newWriter"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channels.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Channels.newWriter

```java
public static Writer newWriter(WritableByteChannel ch, CharsetEncoder enc, int minBufferCap)
```

Constructs a writer that encodes characters using the given encoder and
 writes the resulting bytes to the given channel.

 

 The resulting stream will contain an internal output buffer of at
 least `minBufferCap` bytes.  The stream's `write` methods
 will, as needed, flush the buffer by writing bytes to the underlying
 channel; if the channel is in non-blocking mode when bytes are to be
 written then an `IllegalBlockingModeException` will be thrown.
 The resulting stream will not otherwise be buffered.  Closing the stream
 will in turn cause the channel to be closed.  

 The value of `minBufferCap` is ignored.

**参数**

- **ch** — The channel to which bytes will be written
- **enc** — The charset encoder to be used
- **minBufferCap** — The minimum capacity of the internal byte buffer, or `-1` if an implementation-dependent default capacity is to be used. The value of `minBufferCap` may be ignored

**返回**

- A new writer
