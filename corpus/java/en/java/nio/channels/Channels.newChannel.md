---
id: "java-en-function-channels-newchannel"
language: "java"
lang: "en"
category: "function"
name: "Channels.newChannel"
signature: "public static ReadableByteChannel newChannel(InputStream in)"
title: "Channels.newChannel"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channels.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Channels.newChannel

```java
public static ReadableByteChannel newChannel(InputStream in)
```

Constructs a channel that reads bytes from the given stream.

 

 The resulting channel will not be buffered; it will simply redirect
 its I/O operations to the given stream. Reading from the resulting
 channel will read from the input stream and thus block until input is
 available or end of file is reached. Closing the channel will in turn
 cause the stream to be closed.

**参数**

- **in** — The stream from which bytes are to be read

**返回**

- A new readable byte channel
