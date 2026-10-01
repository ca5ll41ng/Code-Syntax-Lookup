---
id: "java-en-function-java-nio-channels-readablebytechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.ReadableByteChannel"
title: "ReadableByteChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ReadableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadableByteChannel

A channel that can read bytes.

 

 Only one read operation upon a readable channel may be in progress at
 any given time.  If one thread initiates a read operation upon a channel
 then any other thread that attempts to initiate another read operation will
 block until the first operation is complete.  Whether or not other kinds of
 I/O operations may proceed concurrently with a read operation depends upon
 the type of the channel.

> *Since 1.4*
