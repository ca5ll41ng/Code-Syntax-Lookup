---
id: "java-en-function-channels-newreader"
language: "java"
lang: "en"
category: "function"
name: "Channels.newReader"
signature: "public static Reader newReader(ReadableByteChannel ch, CharsetDecoder dec, int minBufferCap)"
title: "Channels.newReader"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channels.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Channels.newReader

```java
public static Reader newReader(ReadableByteChannel ch, CharsetDecoder dec, int minBufferCap)
```

Constructs a reader that decodes bytes from the given channel using the
 given decoder.

 

 The resulting stream will contain an internal input buffer of at
 least `minBufferCap` bytes.  The stream's `read` methods
 will, as needed, fill the buffer by reading bytes from the underlying
 channel; if the channel is in non-blocking mode when bytes are to be
 read then an `IllegalBlockingModeException` will be thrown.  The
 resulting stream will not otherwise be buffered, and it will not support
 the `mark mark` or `reset reset` methods.
 Closing the stream will in turn cause the channel to be closed.

**参数**

- **ch** — The channel from which bytes will be read
- **dec** — The charset decoder to be used
- **minBufferCap** — The minimum capacity of the internal byte buffer, or `-1` if an implementation-dependent default capacity is to be used

**返回**

- A new reader
