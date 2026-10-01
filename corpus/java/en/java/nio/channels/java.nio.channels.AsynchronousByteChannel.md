---
id: "java-en-function-java-nio-channels-asynchronousbytechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.AsynchronousByteChannel"
title: "AsynchronousByteChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousByteChannel

An asynchronous channel that can read and write bytes.

 

 Some channels may not allow more than one read or write to be outstanding
 at any given time. If a thread invokes a read method before a previous read
 operation has completed then a `ReadPendingException` will be thrown.
 Similarly, if a write method is invoked before a previous write has completed
 then `WritePendingException` is thrown. Whether or not other kinds of
 I/O operations may proceed concurrently with a read operation depends upon
 the type of the channel.

 

 Note that `java.nio.ByteBuffer ByteBuffers` are not safe for use by
 multiple concurrent threads. When a read or write operation is initiated then
 care must be taken to ensure that the buffer is not accessed until the
 operation completes.

**参见**

- Channels#newInputStream(AsynchronousByteChannel)
- Channels#newOutputStream(AsynchronousByteChannel)

> *Since 1.7*
