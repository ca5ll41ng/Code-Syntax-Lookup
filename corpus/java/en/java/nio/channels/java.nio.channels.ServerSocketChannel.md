---
id: "java-en-function-java-nio-channels-serversocketchannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.ServerSocketChannel"
title: "ServerSocketChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketChannel

A selectable channel for stream-oriented listening sockets.

 

 A server-socket channel is created by invoking one of the `open`
 methods of this class. The no-arg `open() open` method opens a server-socket
 channel for an Internet protocol socket. The `open`
 method is used to open a server-socket channel for a socket of a specified
 protocol family. It is not possible to create a channel for an arbitrary,
 pre-existing socket. A newly-created server-socket channel is open but not yet
 bound. An attempt to invoke the `accept() accept` method of an
 unbound server-socket channel will cause a `NotYetBoundException`
 to be thrown. A server-socket channel can be bound by invoking one of the
 `bind(java.net.SocketAddress, int) bind` methods defined by this class.

 

 Socket options are configured using the `setOption(SocketOption,Object)
 setOption` method. Server-socket channels for Internet protocol sockets
 support the following options:
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer 
   
   
      `SO_REUSEADDR SO_REUSEADDR` 
      Re-use address 
   
 
 
 

 

 Server-socket channels for Unix domain sockets support:
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer 
   
 
 
 

 

 Additional (implementation specific) options may also be supported.

 

 Server-socket channels are safe for use by multiple concurrent threads.

> *Since 1.4*
