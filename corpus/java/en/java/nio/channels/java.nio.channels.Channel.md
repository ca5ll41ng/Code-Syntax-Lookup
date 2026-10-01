---
id: "java-en-function-java-nio-channels-channel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.Channel"
title: "Channel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Channel

A nexus for I/O operations.

 

 A channel represents an open connection to an entity such as a hardware
 device, a file, a network socket, or a program component that is capable of
 performing one or more distinct I/O operations, for example reading or
 writing.

 

 A channel is either open or closed.  A channel is open upon creation,
 and once closed it remains closed.  Once a channel is closed, any attempt to
 invoke an I/O operation upon it will cause a `ClosedChannelException`
 to be thrown.  Whether or not a channel is open may be tested by invoking
 its `isOpen isOpen` method.

 

 Channels are, in general, intended to be safe for multithreaded access
 as described in the specifications of the interfaces and classes that extend
 and implement this interface.

> *Since 1.4*
