---
id: "java-en-function-java-nio-channels-spi-asynchronouschannelprovider"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.spi.AsynchronousChannelProvider"
title: "AsynchronousChannelProvider"
directive: "type"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AsynchronousChannelProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelProvider

Service-provider class for asynchronous channels.

 

 An asynchronous channel provider is a concrete subclass of this class that
 has a zero-argument constructor and implements the abstract methods specified
 below.  A given invocation of the Java virtual machine maintains a single
 system-wide default provider instance, which is returned by the `provider() provider` method.  The first invocation of that method will locate
 the default provider as specified below.

 

 All of the methods in this class are safe for use by multiple concurrent
 threads.

> *Since 1.7*
