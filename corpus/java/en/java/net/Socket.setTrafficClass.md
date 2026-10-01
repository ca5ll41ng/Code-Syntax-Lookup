---
id: "java-en-function-socket-settrafficclass"
language: "java"
lang: "en"
category: "function"
name: "Socket.setTrafficClass"
signature: "public void setTrafficClass(int tc) throws SocketException"
title: "Socket.setTrafficClass"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setTrafficClass

```java
public void setTrafficClass(int tc) throws SocketException
```

Sets traffic class or type-of-service octet in the IP
 header for packets sent from this Socket.
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
 

 As RFC 1122 section 4.2.4.2 indicates, a compliant TCP
 implementation should, but is not required to, let application
 change the TOS field during the lifetime of a connection.
 So whether the type-of-service field can be changed after the
 TCP connection has been established depends on the implementation
 in the underlying platform. Applications should not assume that
 they can change the TOS field after the connection.
 

 For Internet Protocol v6 `tc` is the value that
 would be placed into the sin6_flowinfo field of the IP header.

**参数**

- **tc** — an `int` value for the bitset.

**异常**

- **SocketException** — if there is an error setting the traffic class or type-of-service, or the socket is closed.

**参见**

- #getTrafficClass
- StandardSocketOptions#IP_TOS

> *Since 1.4*
