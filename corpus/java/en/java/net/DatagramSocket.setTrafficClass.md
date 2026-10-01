---
id: "java-en-function-datagramsocket-settrafficclass"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setTrafficClass"
signature: "public void setTrafficClass(int tc) throws SocketException"
title: "DatagramSocket.setTrafficClass"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setTrafficClass

```java
public void setTrafficClass(int tc) throws SocketException
```

Sets traffic class or type-of-service octet in the IP
 datagram header for datagrams sent from this DatagramSocket.
 As the underlying network implementation may ignore this
 value applications should consider it a hint.

 

 The tc **must** be in the range `0 <= tc <=
 255` or an IllegalArgumentException will be thrown.
 

Notes:
 

For Internet Protocol v4 the value consists of an
 `integer`, the least significant 8 bits of which
 represent the value of the TOS octet in IP packets sent by
 the socket.
 RFC 1349 defines the TOS values as follows:

 
 
- IPTOS_LOWCOST (0x02)
 
- IPTOS_RELIABILITY (0x04)
 
- IPTOS_THROUGHPUT (0x08)
 
- IPTOS_LOWDELAY (0x10)
 

 The last low order bit is always ignored as this
 corresponds to the MBZ (must be zero) bit.
 

 Setting bits in the precedence field may result in a
 SocketException indicating that the operation is not
 permitted.
 

 for Internet Protocol v6 `tc` is the value that
 would be placed into the sin6_flowinfo field of the IP header.

 This method is equivalent to calling `setOption(SocketOption, Object)
 setOption`.

**参数**

- **tc** — an `int` value for the bitset.

**异常**

- **SocketException** — if there is an error setting the traffic class or type-of-service, or the socket is closed.

**参见**

- #getTrafficClass
- StandardSocketOptions#IP_TOS

> *Since 1.4*
