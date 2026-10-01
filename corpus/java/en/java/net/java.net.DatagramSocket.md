---
id: "java-en-function-java-net-datagramsocket"
language: "java"
lang: "en"
category: "function"
name: "java.net.DatagramSocket"
title: "DatagramSocket"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket

This class represents a socket for sending and receiving datagram packets.

 

A datagram socket is the sending or receiving point for a packet
 delivery service. Each packet sent or received on a datagram socket
 is individually addressed and routed. Multiple packets sent from
 one machine to another may be routed differently, and may arrive in
 any order.

 

 Where possible, a newly constructed `DatagramSocket` has the
 `SO_BROADCAST SO_BROADCAST` socket option enabled so as
 to allow the transmission of broadcast datagrams. In order to receive
 broadcast packets a DatagramSocket should be bound to the wildcard address.
 In some implementations, broadcast packets may also be received when
 a DatagramSocket is bound to a more specific address.
 

 Example:
 
```
`DatagramSocket s = new DatagramSocket(null);
              s.bind(new InetSocketAddress(8888));
 `
```

 Which is equivalent to:
 
```
`DatagramSocket s = new DatagramSocket(8888);
 `
```

 Both cases will create a DatagramSocket able to receive broadcasts on
 UDP port 8888.

 

 The `DatagramSocket` class defines convenience
 methods to set and get several socket options. This class also
 defines the `setOption(SocketOption,Object) setOption`
 and `getOption(SocketOption) getOption` methods to set
 and query socket options.
 A `DatagramSocket` supports the following socket options:
 
 
 
 Socket options
 
   
     Option Name
     Description
   
 
 
   
      `SO_SNDBUF SO_SNDBUF` 
      The size of the socket send buffer in bytes 
   
   
      `SO_RCVBUF SO_RCVBUF` 
      The size of the socket receive buffer in bytes 
   
   
      `SO_REUSEADDR SO_REUSEADDR` 
      Re-use address 
   
   
      `SO_BROADCAST SO_BROADCAST` 
      Allow transmission of broadcast datagrams 
   
   
      `IP_TOS IP_TOS` 
      The Type of Service (ToS) octet in the Internet Protocol (IP) header 
   
 
 
 
 

 In addition, the `DatagramSocket` class defines methods to `joinGroup(SocketAddress, NetworkInterface) join` and `leaveGroup(SocketAddress, NetworkInterface) leave` a multicast group, and
 supports multicast options which
 are useful when `joinGroup(SocketAddress, NetworkInterface) joining`,
 `leaveGroup(SocketAddress, NetworkInterface) leaving`, or sending datagrams
 to a multicast group.
 The following multicast options are supported:
 
 
 
 Multicast options
 
   
     Option Name
     Description
   
 
 
   
      `IP_MULTICAST_IF IP_MULTICAST_IF` 
      The network interface for Internet Protocol (IP) multicast datagrams 
   
   
      `IP_MULTICAST_TTL
       IP_MULTICAST_TTL` 
      The time-to-live for Internet Protocol (IP) multicast
       datagrams 
   
   
      `IP_MULTICAST_LOOP
       IP_MULTICAST_LOOP` 
      Loopback for Internet Protocol (IP) multicast datagrams 
   
 
 
 
 An implementation may also support additional options.

 

 `DatagramChannel` implements the `MulticastChannel` interface
 and provides an alternative API for sending and receiving multicast datagrams.
 The `MulticastChannel` API supports both `join(InetAddress, NetworkInterface) any-source` and
 `join(InetAddress, NetworkInterface, InetAddress)
 source-specific` multicast. Consider using `DatagramChannel` for
 multicasting.

 

 `DatagramSocket` can be used directly for multicasting. However,
 contrarily to `MulticastSocket`, `DatagramSocket` doesn't call the
 `setReuseAddress` method to enable the SO_REUSEADDR
 socket option by default. If creating a `DatagramSocket` intended to
 later join a multicast group, the caller should consider explicitly enabling
 the SO_REUSEADDR option.

 

 An instance of `DatagramSocket` can be used to send or
 receive multicast datagram packets. It is not necessary to join a multicast
 group in order to send multicast datagrams. Before sending out multicast
 datagram packets however, the default outgoing interface for sending
 multicast datagram should first be configured using
 `setOption(SocketOption, Object) setOption` and
 `IP_MULTICAST_IF`:

 
```
`DatagramSocket sender = new DatagramSocket(new InetSocketAddress(0));
    NetworkInterface outgoingIf = NetworkInterface.getByName("en0");
    sender.setOption(StandardSocketOptions.IP_MULTICAST_IF, outgoingIf);

    // optionally configure multicast TTL; the TTL defines the scope of a
    // multicast datagram, for example, confining it to host local (0) or
    // link local (1) etc...
    int ttl = ...; // a number between 0 and 255
    sender.setOption(StandardSocketOptions.IP_MULTICAST_TTL, ttl);

    // send a packet to a multicast group
    byte[] msgBytes = ...;
    InetAddress mcastaddr = InetAddress.getByName("228.5.6.7");
    int port = 6789;
    InetSocketAddress dest = new InetSocketAddress(mcastaddr, port);
    DatagramPacket hi = new DatagramPacket(msgBytes, msgBytes.length, dest);
    sender.send(hi);
 `
```

 

 An instance of `DatagramSocket` can also be used to receive
 multicast datagram packets. A `DatagramSocket` that is created
 with the intent of receiving multicast datagrams should be created
 unbound. Before binding the socket, `setReuseAddress(boolean)
 setReuseAddress` should be configured:

 
```
`DatagramSocket socket = new DatagramSocket(null); // unbound
    socket.setReuseAddress(true); // set reuse address before binding
    socket.bind(new InetSocketAddress(6789)); // bind

    // joinGroup 228.5.6.7
    InetAddress mcastaddr = InetAddress.getByName("228.5.6.7");
    InetSocketAddress group = new InetSocketAddress(mcastaddr, 0);
    NetworkInterface netIf = NetworkInterface.getByName("en0");
    socket.joinGroup(group, netIf);
    byte[] msgBytes = new byte[1024]; // up to 1024 bytes
    DatagramPacket packet = new DatagramPacket(msgBytes, msgBytes.length);
    socket.receive(packet);
    ....
    // eventually leave group
    socket.leaveGroup(group, netIf);
 `
```

 

**Platform dependencies**
 

The multicast implementation is intended to map directly to the native
 multicasting facility. Consequently, the following items should be considered
 when developing an application that receives IP multicast datagrams:
 
    
-  Contrarily to `DatagramChannel`, the constructors of `DatagramSocket`
        do not allow to specify the `ProtocolFamily` of the underlying socket.
        Consequently, the protocol family of the underlying socket may not
        correspond to the protocol family of the multicast groups that
        the `DatagramSocket` will attempt to join.
        

        There is no guarantee that a `DatagramSocket` with an underlying
        socket created in one protocol family can join and receive multicast
        datagrams when the address of the multicast group corresponds to
        another protocol family. For example, it is implementation specific if a
        `DatagramSocket` to an IPv6 socket can join an IPv4 multicast group
        and receive multicast datagrams sent to the group.
    
    
-  Before joining a multicast group, the `DatagramSocket` should be
        bound to the wildcard address.
        If the socket is bound to a specific address, rather than the wildcard address
        then it is implementation specific if multicast datagrams are received
        by the socket.
    
    
-  The SO_REUSEADDR option should be enabled prior to binding the socket.
        This is required to allow multiple members of the group to bind to the same address.

**参见**

- java.net.DatagramPacket
- java.nio.channels.DatagramChannel

> *Since 1.0*
