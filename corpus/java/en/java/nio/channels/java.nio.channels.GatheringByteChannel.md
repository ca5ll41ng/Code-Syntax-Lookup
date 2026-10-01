---
id: "java-en-function-java-nio-channels-gatheringbytechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.GatheringByteChannel"
title: "GatheringByteChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/GatheringByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GatheringByteChannel

A channel that can write bytes from a sequence of buffers.

 

 A gathering write operation writes, in a single invocation, a
 sequence of bytes from one or more of a given sequence of buffers.
 Gathering writes are often useful when implementing network protocols or
 file formats that, for example, group data into segments consisting of one
 or more fixed-length headers followed by a variable-length body.  Similar
 scattering read operations are defined in the `ScatteringByteChannel` interface.

> *Since 1.4*
