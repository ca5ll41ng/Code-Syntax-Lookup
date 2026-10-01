---
id: "java-en-function-java-nio-channels-socketchannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.SocketChannel"
title: "SocketChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel

A selectable channel for stream-oriented connecting sockets.

 

 A socket channel is created by invoking one of the `open` methods of
 this class. The no-arg `open() open` method opens a socket channel
 for an Internet protocol socket. The `open`
 method is used to open a socket channel for a socket of a specified protocol
 family. It is not possible to create a channel for an arbitrary, pre-existing
 socket. A newly-created socket channel is open but not yet connected.  An
 attempt to invoke an I/O operation upon an unconnected channel will cause a
 `NotYetConnectedException` to be thrown.  A socket channel can be
 connected by invoking its `connect connect` method; once connected,
 a socket channel remains connected until it is closed.  Whether or not a
 socket channel is connected may be determined by invoking its `isConnected()
 isConnected` method.

 

 Socket channels support non-blocking connection:&nbsp;A socket
 channel may be created and the process of establishing the link to the
 remote socket may be initiated via the `connect connect` method for
 later completion by the `finishConnect finishConnect` method.
 Whether or not a connection operation is in progress may be determined by
 invoking the `isConnectionPending isConnectionPending` method.

 

 Socket channels support asynchronous shutdown, which is similar
 to the asynchronous close operation specified in the `Channel` class.
 If the input side of a socket is shut down by one thread while another
 thread is blocked in a read operation on the socket's channel, then the read
 operation in the blocked thread will complete without reading any bytes and
 will return `-1`.  If the output side of a socket is shut down by one
 thread while another thread is blocked in a write operation on the socket's
 channel, then the blocked thread will receive an `AsynchronousCloseException`.

 

 Socket options are configured using the `setOption(SocketOption,Object)
 setOption` method. Socket channels for  Internet protocol sockets support
 following options:
 
 
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
   
 
 
 

 

 Socket channels for Unix domain sockets support:
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_SNDBUF SO_SNDBUF` 
      The size of the socket send buffer 
   
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer 
   
   
      `SO_LINGER SO_LINGER` 
      Linger on close if data is present (when configured in blocking mode
          only) 
   
 
 
 

 

 Additional (implementation specific) options may also be supported.

 

 Socket channels are safe for use by multiple concurrent threads.  They
 support concurrent reading and writing, though at most one thread may be
 reading and at most one thread may be writing at any given time.  The `connect connect` and `finishConnect finishConnect` methods are
 mutually synchronized against each other, and an attempt to initiate a read
 or write operation while an invocation of one of these methods is in
 progress will block until that invocation is complete.

> *Since 1.4*
