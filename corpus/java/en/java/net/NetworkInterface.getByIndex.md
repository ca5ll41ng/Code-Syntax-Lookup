---
id: "java-en-function-networkinterface-getbyindex"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getByIndex"
signature: "public static NetworkInterface getByIndex(int index) throws SocketException"
title: "NetworkInterface.getByIndex"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getByIndex

```java
public static NetworkInterface getByIndex(int index) throws SocketException
```

Get a network interface given its index.

 The returned interface instance may reflect a snapshot of the
 configuration taken at the time the instance is created.
 See the general discussion of `#lookup
 snapshots and configuration` for the semantics of the returned interface.

**参数**

- **index** — an integer, the index of the interface

**返回**

- the NetworkInterface obtained from its index, or `null` if there is no interface with such an index on the system

**异常**

- **SocketException** — if an I/O error occurs.
- **IllegalArgumentException** — if index has a negative value

**参见**

- #getIndex()

> *Since 1.7*
