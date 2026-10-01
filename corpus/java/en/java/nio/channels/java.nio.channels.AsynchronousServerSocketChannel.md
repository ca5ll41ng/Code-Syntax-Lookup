---
id: "java-en-function-java-nio-channels-asynchronousserversocketchannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.AsynchronousServerSocketChannel"
title: "AsynchronousServerSocketChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousServerSocketChannel

An asynchronous channel for stream-oriented listening sockets.

 

 An asynchronous server-socket channel is created by invoking the
 `open open` method of this class.
 A newly-created asynchronous server-socket channel is open but not yet bound.
 It can be bound to a local address and configured to listen for connections
 by invoking the `bind(SocketAddress,int) bind` method. Once bound,
 the `accept(Object,CompletionHandler) accept` method
 is used to initiate the accepting of connections to the channel's socket.
 An attempt to invoke the `accept` method on an unbound channel will
 cause a `NotYetBoundException` to be thrown.

 

 Channels of this type are safe for use by multiple concurrent threads
 though at most one accept operation can be outstanding at any time.
 If a thread initiates an accept operation before a previous accept operation
 has completed then an `AcceptPendingException` will be thrown.

 

 Socket options are configured using the `setOption(SocketOption,Object)
 setOption` method. Channels of this type support the following options:
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer 
   
   
      `SO_REUSEADDR SO_REUSEADDR` 
      Re-use address 
   
 
 
 
 Additional (implementation specific) options may also be supported.

 

 **Usage Example:**
 {@snippet lang=java :
  final AsynchronousServerSocketChannel listener =
      AsynchronousServerSocketChannel.open().bind(new InetSocketAddress(5000));

  listener.accept(null, new CompletionHandler() {
      public void completed(AsynchronousSocketChannel ch, Void att) {
          // accept the next connection
          listener.accept(null, this);

          // handle this connection
          handle(ch);
      }
      public void failed(Throwable exc, Void att) {
          ...
      }
  });
 }

> *Since 1.7*
