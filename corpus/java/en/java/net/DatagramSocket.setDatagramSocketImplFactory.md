---
id: "java-en-function-datagramsocket-setdatagramsocketimplfactory"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setDatagramSocketImplFactory"
signature: "public static synchronized void setDatagramSocketImplFactory(DatagramSocketImplFactory fac) throws IOException"
title: "DatagramSocket.setDatagramSocketImplFactory"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setDatagramSocketImplFactory

```java
public static synchronized void setDatagramSocketImplFactory(DatagramSocketImplFactory fac) throws IOException
```

Sets the datagram socket implementation factory for the
 application. The factory can be specified only once.
 

 When an application creates a new datagram socket, the socket
 implementation factory's `createDatagramSocketImpl` method is
 called to create the actual datagram socket implementation.
 

 Passing `null` to the method is a no-op unless the factory
 was already set.

**参数**

- **fac** — the desired factory.

**异常**

- **IOException** — if an I/O error occurs when setting the datagram socket factory.
- **SocketException** — if the factory is already defined.

**参见**

- java.net.DatagramSocketImplFactory#createDatagramSocketImpl()

> *Since 1.3*

> **⚠ Deprecated** — Use `DatagramChannel`, or subclass `DatagramSocket` directly.  This method provided a way in early JDK releases to replace the system wide implementation of `DatagramSocket`. It has been mostly obsolete since Java 1.4. If required, a `DatagramSocket` can be created to use a custom implementation by extending `DatagramSocket` and using the `DatagramSocket(DatagramSocketImpl) protected constructor` that takes an `DatagramSocketImpl implementation` as a parameter.
