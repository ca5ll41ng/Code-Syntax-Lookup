---
id: "java-en-function-java-nio-channels-seekablebytechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.SeekableByteChannel"
title: "SeekableByteChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SeekableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SeekableByteChannel

A byte channel that maintains a current position and allows the
 position to be changed.

 

 A seekable byte channel is connected to an entity, typically a file,
 that contains a variable-length sequence of bytes that can be read and
 written. The current position can be `position() queried` and
 `position(long) modified`. The channel also provides access to
 the current size of the entity to which the channel is connected. The
 size increases when bytes are written beyond its current size; the size
 decreases when it is `truncate truncated`.

 

 The `position(long) position` and `truncate truncate` methods
 which do not otherwise have a value to return are specified to return the
 channel upon which they are invoked. This allows method invocations to be
 chained. Implementations of this interface should specialize the return type
 so that method invocations on the implementation class can be chained.

**参见**

- java.nio.file.Files#newByteChannel

> *Since 1.7*
