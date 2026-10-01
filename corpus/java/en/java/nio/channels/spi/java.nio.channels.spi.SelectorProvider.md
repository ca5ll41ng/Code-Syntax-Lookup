---
id: "java-en-function-java-nio-channels-spi-selectorprovider"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.spi.SelectorProvider"
title: "SelectorProvider"
directive: "type"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/SelectorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectorProvider

Service-provider class for selectors and selectable channels.

 

 A selector provider is a concrete subclass of this class that has a
 zero-argument constructor and implements the abstract methods specified
 below.  A given invocation of the Java virtual machine maintains a single
 system-wide default provider instance, which is returned by the `provider() provider` method.  The first invocation of that method will locate
 the default provider as specified below.

 

 The system-wide default provider is used by the static `open`
 methods of the `open
 DatagramChannel`, `open Pipe`, `open Selector`, `open ServerSocketChannel`, and `open SocketChannel` classes.  It is also
 used by the `inheritedChannel System.inheritedChannel`
 method. A program may make use of a provider other than the default provider
 by instantiating that provider and then directly invoking the `open`
 methods defined in this class.

 

 All of the methods in this class are safe for use by multiple concurrent
 threads.

> *Since 1.4*
