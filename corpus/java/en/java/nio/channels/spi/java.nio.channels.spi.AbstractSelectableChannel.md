---
id: "java-en-function-java-nio-channels-spi-abstractselectablechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.spi.AbstractSelectableChannel"
title: "AbstractSelectableChannel"
directive: "type"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelectableChannel

Base implementation class for selectable channels.

 

 This class defines methods that handle the mechanics of channel
 registration, deregistration, and closing.  It maintains the current
 blocking mode of this channel as well as its current set of selection keys.
 It performs all of the synchronization required to implement the `java.nio.channels.SelectableChannel` specification.  Implementations of the
 protected abstract methods defined in this class need not synchronize
 against other threads that might be engaged in the same operations.

> *Since 1.4*
