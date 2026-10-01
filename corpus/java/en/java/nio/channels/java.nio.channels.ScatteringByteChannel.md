---
id: "java-en-function-java-nio-channels-scatteringbytechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.ScatteringByteChannel"
title: "ScatteringByteChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ScatteringByteChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScatteringByteChannel

A channel that can read bytes into a sequence of buffers.

 

 A scattering read operation reads, in a single invocation, a
 sequence of bytes into one or more of a given sequence of buffers.
 Scattering reads are often useful when implementing network protocols or
 file formats that, for example, group data into segments consisting of one
 or more fixed-length headers followed by a variable-length body.  Similar
 gathering write operations are defined in the `GatheringByteChannel` interface.

> *Since 1.4*
