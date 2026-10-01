---
id: "java-en-function-java-net-multicastsocket"
language: "java"
lang: "en"
category: "function"
name: "java.net.MulticastSocket"
title: "MulticastSocket"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket

A `MulticastSocket` is a datagram socket that is
 convenient for sending and receiving IP multicast datagrams.
 The `MulticastSocket` constructors create a socket
 with appropriate socket options enabled that make
 it suitable for receiving multicast datagrams.
 The `MulticastSocket` class additionally defines
 convenient setter and getter methods for socket options
 that are commonly used by multicasting applications.
 

 Joining one or more multicast groups makes it possible to
 receive multicast datagrams sent to these groups.
 

 An IPv4 multicast group is specified by a class D IP address
 and by a standard UDP port number. Class D IP addresses
 are in the range `224.0.0.0` to `239.255.255.255`,
 inclusive. The address 224.0.0.0 is reserved and should not be used.
 

 One would join a multicast group by first creating a MulticastSocket
 with the desired port, then invoking the
 joinGroup method, specifying the group address and
 the network interface through which multicast datagrams will be
 received:
 
```
`// join a Multicast group and send the group salutations
 ...
 String msg = "Hello";
 InetAddress mcastaddr = InetAddress.getByName("228.5.6.7");
 InetSocketAddress group = new InetSocketAddress(mcastaddr, 6789);
 NetworkInterface netIf = NetworkInterface.getByName("bge0");
 MulticastSocket s = new MulticastSocket(6789);

 s.joinGroup(new InetSocketAddress(mcastaddr, 0), netIf);
 byte[] msgBytes = msg.getBytes(StandardCharsets.UTF_8);
 DatagramPacket hi = new DatagramPacket(msgBytes, msgBytes.length, group);
 s.send(hi);
 // get their responses!
 byte[] buf = new byte[1000];
 DatagramPacket recv = new DatagramPacket(buf, buf.length);
 s.receive(recv);
 ...
 // OK, I'm done talking - leave the group...
 s.leaveGroup(group, netIf);
 `
```

 When one sends a message to a multicast group, **all** subscribing
 recipients to that host and port receive the message (within the
 time-to-live range of the packet, see below). The socket needn't
 be a member of the multicast group to send messages to it.
 

 When a socket subscribes to a multicast group/port, it receives
 datagrams sent by other hosts to the group/port, as do all other
 members of the group and port.  A socket relinquishes membership
 in a group by the leaveGroup(SocketAddress mcastaddr, NetworkInterface netIf)
 method.
 **Multiple MulticastSockets** may subscribe to a multicast group
 and port concurrently, and they will all receive group datagrams.

 

 The `DatagramSocket` and `MulticastSocket`
 classes define convenience methods to set and get several
 socket options. Like `DatagramSocket` this class also
 supports the `setOption(SocketOption, Object) setOption`
 and `getOption(SocketOption) getOption` methods to set
 and query socket options.
 The set of supported socket options
 is defined in `DatagramSocket`.
 Additional (implementation specific) options may also be supported.

          sending and receiving multicast datagrams.
          `DatagramChannel` implements the `MulticastChannel` interface
          and provides an alternative API for sending and receiving multicast datagrams.
          The `MulticastChannel` API supports both `join(InetAddress, NetworkInterface) any-source` and
          `join(InetAddress, NetworkInterface, InetAddress)
          source-specific` multicast. Consider using `DatagramChannel` for
          multicasting.

> *Since 1.1*
