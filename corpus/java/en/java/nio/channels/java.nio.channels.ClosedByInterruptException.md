---
id: "java-en-function-java-nio-channels-closedbyinterruptexception"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.ClosedByInterruptException"
title: "ClosedByInterruptException"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ClosedByInterruptException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClosedByInterruptException

Checked exception received by a thread when another thread interrupts it
 while it is blocked in an I/O operation upon a channel.  Before this
 exception is thrown the channel will have been closed and the interrupted
 status of the previously-blocked thread will have been set.

> *Since 1.4*
