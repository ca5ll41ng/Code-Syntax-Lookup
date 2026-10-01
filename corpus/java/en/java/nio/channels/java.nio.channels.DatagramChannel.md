---
id: "java-en-function-java-nio-channels-datagramchannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.DatagramChannel"
title: "DatagramChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel

A selectable channel for datagram-oriented sockets.

 

 A datagram channel is created by invoking one of the `open open` methods
 of this class. It is not possible to create a channel for an arbitrary,
 pre-existing datagram socket. A newly-created datagram channel is open but not
 connected. A datagram channel need not be connected in order for the `send
 send` and `receive receive` methods to be used.  A datagram channel may be
 connected, by invoking its `connect connect` method, in order to
 avoid the overhead of checks performed as part of every send and receive operation.
 A datagram channel must be connected in order to use the `read(java.nio.ByteBuffer) read` and `write(java.nio.ByteBuffer) write`
 methods, since those methods do not accept or return socket addresses.

 

 Once connected, a datagram channel remains connected until it is
 disconnected or closed.  Whether or not a datagram channel is connected may
 be determined by invoking its `isConnected isConnected` method.

 

 Socket options are configured using the `setOption(SocketOption,Object)
 setOption` method. A datagram channel to an Internet Protocol socket supports
 the following options:
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_SNDBUF SO_SNDBUF` 
      The size of the socket send buffer 
   
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer 
   
   
      `SO_REUSEADDR SO_REUSEADDR` 
      Re-use address 
   
   
      `SO_BROADCAST SO_BROADCAST` 
      Allow transmission of broadcast datagrams 
   
   
      `IP_TOS IP_TOS` 
      The Type of Service (ToS) octet in the Internet Protocol (IP) header 
   
   
      `IP_MULTICAST_IF IP_MULTICAST_IF` 
      The network interface for Internet Protocol (IP) multicast datagrams 
   
   
      `IP_MULTICAST_TTL
       IP_MULTICAST_TTL` 
      The time-to-live for Internet Protocol (IP) multicast
       datagrams 
   
   
      `IP_MULTICAST_LOOP
       IP_MULTICAST_LOOP` 
      Loopback for Internet Protocol (IP) multicast datagrams 
   
 
 
 
 Additional (implementation specific) options may also be supported.

 

 Datagram channels are safe for use by multiple concurrent threads.  They
 support concurrent reading and writing, though at most one thread may be
 reading and at most one thread may be writing at any given time.

> *Since 1.4*
