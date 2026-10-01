---
id: "java-en-function-java-nio-channels-closedchannelexception"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.ClosedChannelException"
title: "ClosedChannelException"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ClosedChannelException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClosedChannelException

Checked exception thrown when an attempt is made to invoke or complete an
 I/O operation upon channel that is closed, or at least closed to that
 operation.  That this exception is thrown does not necessarily imply that
 the channel is completely closed.  A socket channel whose write half has
 been shut down, for example, may still be open for reading.

> *Since 1.4*
