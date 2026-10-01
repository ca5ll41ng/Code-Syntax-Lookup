---
id: "java-en-function-java-nio-channels-networkchannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.NetworkChannel"
title: "NetworkChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/NetworkChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkChannel

A channel to a network socket.

 

 A channel that implements this interface is a channel to a network
 socket. The `bind(SocketAddress) bind` method is used to bind the
 socket to a local `SocketAddress address`, the `getLocalAddress()
 getLocalAddress` method returns the address that the socket is bound to, and
 the `setOption(SocketOption,Object) setOption` and `getOption(SocketOption) getOption` methods are used to set and query socket
 options.  An implementation of this interface should specify the socket options
 that it supports.

 

 The `bind bind` and `setOption setOption` methods that do
 not otherwise have a value to return are specified to return the network
 channel upon which they are invoked. This allows method invocations to be
 chained. Implementations of this interface should specialize the return type
 so that method invocations on the implementation class can be chained.

> *Since 1.7*
