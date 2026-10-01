---
id: "java-en-function-java-net-socket"
language: "java"
lang: "en"
category: "function"
name: "java.net.Socket"
title: "Socket"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket

This class implements client sockets (also called just
 "sockets"). A socket is an endpoint for communication
 between two machines.
 

 The actual work of the socket is performed by an instance of the
 `SocketImpl` class.

 

 The `Socket` class defines convenience
 methods to set and get several socket options. This class also
 defines the `setOption(SocketOption, Object) setOption`
 and `getOption(SocketOption) getOption` methods to set
 and query socket options.
 A `Socket` support the following options:
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_SNDBUF SO_SNDBUF` 
      The size of the socket send buffer 
   
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer 
   
   
      `SO_KEEPALIVE SO_KEEPALIVE` 
      Keep connection alive 
   
   
      `SO_REUSEADDR SO_REUSEADDR` 
      Re-use address 
   
   
      `SO_LINGER SO_LINGER` 
      Linger on close if data is present (when configured in blocking mode
          only) 
   
   
      `TCP_NODELAY TCP_NODELAY` 
      Disable the Nagle algorithm 
   
 
 
 
 Additional (implementation specific) options may also be supported.

**参见**

- java.net.SocketImpl
- java.nio.channels.SocketChannel

> *Since 1.0*
