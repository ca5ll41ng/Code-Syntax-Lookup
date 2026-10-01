---
id: "java-en-function-datagramsocket-receive"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.receive"
signature: "public void receive(DatagramPacket p) throws IOException"
title: "DatagramSocket.receive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.receive

```java
public void receive(DatagramPacket p) throws IOException
```

Receives a datagram packet from this socket. This method blocks until a
 datagram is received.

 When this method returns, the `DatagramPacket`'s buffer is filled
 with the data received. The datagram packet also contains the sender's
 IP address, and the port number on the sender's machine.
 The `length` field of the datagram packet object contains
 the length of the received message. If the message is longer than
 the packet's length, the message is truncated.

 

 This method is `interrupt() interruptible` in the
 following circumstances:
 
   
-  The datagram socket is `socket() associated`
        with a `DatagramChannel DatagramChannel`. In that case,
        interrupting a thread receiving a datagram packet will close the
        underlying channel and cause this method to throw `java.nio.channels.ClosedByInterruptException` with the thread's
        interrupted status set.
   
-  The datagram socket uses the system-default socket implementation and
        a `isVirtual() virtual thread` is receiving a
        datagram packet. In that case, interrupting the virtual thread will
        cause it to wakeup and close the socket. This method will then throw
        `SocketException` with the thread's interrupted status set.

**参数**

- **p** — the `DatagramPacket` into which to place the incoming data.

**异常**

- **IOException** — if an I/O error occurs, or the socket is closed.
- **SocketTimeoutException** — if setSoTimeout was previously called and the timeout has expired.
- **PortUnreachableException** — may be thrown if the socket is connected to a currently unreachable destination. Note, there is no guarantee that the exception will be thrown.
- **java.nio.channels.IllegalBlockingModeException** — if this socket has an associated channel, and the channel is in non-blocking mode.

**参见**

- java.net.DatagramPacket
- java.net.DatagramSocket
