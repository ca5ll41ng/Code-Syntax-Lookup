---
id: "java-en-function-java-net-serversocket"
language: "java"
lang: "en"
category: "function"
name: "java.net.ServerSocket"
title: "ServerSocket"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket

This class implements server sockets. A server socket waits for
 requests to come in over the network. It performs some operation
 based on that request, and then possibly returns a result to the requester.
 

 The actual work of the server socket is performed by an instance
 of the `SocketImpl` class.

 

 The `ServerSocket` class defines convenience
 methods to set and get several socket options. This class also
 defines the `setOption(SocketOption, Object) setOption`
 and `getOption(SocketOption) getOption` methods to set
 and query socket options.
 A `ServerSocket` supports the following options:
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer 
   
   
      `SO_REUSEADDR SO_REUSEADDR` 
      Re-use address 
   
 
 
 
 Additional (implementation specific) options may also be supported.

**参见**

- java.net.SocketImpl
- java.nio.channels.ServerSocketChannel

> *Since 1.0*
