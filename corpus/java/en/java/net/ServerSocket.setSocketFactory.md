---
id: "java-en-function-serversocket-setsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.setSocketFactory"
signature: "public static synchronized void setSocketFactory(SocketImplFactory fac) throws IOException"
title: "ServerSocket.setSocketFactory"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.setSocketFactory

```java
public static synchronized void setSocketFactory(SocketImplFactory fac) throws IOException
```

Sets the server socket implementation factory for the
 application. The factory can be specified only once.
 

 When an application creates a new server socket, the socket
 implementation factory's `createSocketImpl` method is
 called to create the actual socket implementation.
 

 Passing `null` to the method is a no-op unless the factory
 was already set.

**参数**

- **fac** — the desired factory.

**异常**

- **IOException** — if an I/O error occurs when setting the socket factory.
- **SocketException** — if the factory has already been defined.

**参见**

- java.net.SocketImplFactory#createSocketImpl()

> **⚠ Deprecated** — Use a `javax.net.ServerSocketFactory` and subclass `ServerSocket` directly.  This method provided a way in early JDK releases to replace the system wide implementation of `ServerSocket`. It has been mostly obsolete since Java 1.4. If required, a `ServerSocket` can be created to use a custom implementation by extending `ServerSocket` and using the `ServerSocket(SocketImpl) protected constructor` that takes an `SocketImpl implementation` as a parameter.
