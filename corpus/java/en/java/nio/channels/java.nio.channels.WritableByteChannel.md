---
id: "java-en-function-java-nio-channels-writablebytechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.WritableByteChannel"
title: "WritableByteChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/WritableByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WritableByteChannel

A channel that can write bytes.

 

 Only one write operation upon a writable channel may be in progress at
 any given time.  If one thread initiates a write operation upon a channel
 then any other thread that attempts to initiate another write operation will
 block until the first operation is complete.  Whether or not other kinds of
 I/O operations may proceed concurrently with a write operation depends upon
 the type of the channel.

> *Since 1.4*
