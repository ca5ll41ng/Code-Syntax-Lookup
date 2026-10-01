---
id: "java-en-function-java-nio-channels-pipe"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.Pipe"
title: "Pipe"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Pipe.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pipe

A pair of channels that implements a unidirectional pipe.

 

 A pipe consists of a pair of channels: A writable `Pipe.SinkChannel sink` channel and a readable `Pipe.SourceChannel source`
 channel.  Once some bytes are written to the sink channel they can be read
 from the source channel in exactly the order in which they were written.

 

 Whether or not a thread writing bytes to a pipe will block until another
 thread reads those bytes, or some previously-written bytes, from the pipe is
 system-dependent and therefore unspecified.  Many pipe implementations will
 buffer up to a certain number of bytes between the sink and source channels,
 but such buffering should not be assumed.

> *Since 1.4*
