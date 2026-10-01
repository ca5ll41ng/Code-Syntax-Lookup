---
id: "java-en-function-socket-setsocketimplfactory"
language: "java"
lang: "en"
category: "function"
name: "Socket.setSocketImplFactory"
signature: "public static synchronized void setSocketImplFactory(SocketImplFactory fac) throws IOException"
title: "Socket.setSocketImplFactory"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setSocketImplFactory

```java
public static synchronized void setSocketImplFactory(SocketImplFactory fac) throws IOException
```

Sets the client socket implementation factory for the
 application. The factory can be specified only once.
 

 When an application creates a new client socket, the socket
 implementation factory's `createSocketImpl` method is
 called to create the actual socket implementation.
 

 Passing `null` to the method is a no-op unless the factory
 was already set.

**参数**

- **fac** — the desired factory.

**异常**

- **IOException** — if an I/O error occurs when setting the socket factory.
- **SocketException** — if the factory is already defined.

**参见**

- java.net.SocketImplFactory#createSocketImpl()

> **⚠ Deprecated** — Use a `javax.net.SocketFactory` and subclass `Socket` directly.  This method provided a way in early JDK releases to replace the system wide implementation of `Socket`. It has been mostly obsolete since Java 1.4. If required, a `Socket` can be created to use a custom implementation by extending `Socket` and using the `Socket(SocketImpl) protected constructor` that takes an `SocketImpl implementation` as a parameter.
