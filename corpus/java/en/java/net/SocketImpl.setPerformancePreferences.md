---
id: "java-en-function-socketimpl-setperformancepreferences"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.setPerformancePreferences"
signature: "protected void setPerformancePreferences(int connectionTime, int latency, int bandwidth)"
title: "SocketImpl.setPerformancePreferences"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.setPerformancePreferences

```java
protected void setPerformancePreferences(int connectionTime, int latency, int bandwidth)
```

Sets performance preferences for this socket.

 

 Sockets use the TCP/IP protocol by default.  Some implementations
 may offer alternative protocols which have different performance
 characteristics than TCP/IP.  This method allows the application to
 express its own preferences as to how these tradeoffs should be made
 when the implementation chooses from the available protocols.

 

 Performance preferences are described by three integers
 whose values indicate the relative importance of short connection time,
 low latency, and high bandwidth.  The absolute values of the integers
 are irrelevant; in order to choose a protocol the values are simply
 compared, with larger values indicating stronger preferences. Negative
 values represent a lower priority than positive values. If the
 application prefers short connection time over both low latency and high
 bandwidth, for example, then it could invoke this method with the values
 `(1, 0, 0)`.  If the application prefers high bandwidth above low
 latency, and low latency above short connection time, then it could
 invoke this method with the values `(0, 1, 2)`.

 By default, this method does nothing, unless it is overridden in
 a sub-class.

**参数**

- **connectionTime** — An `int` expressing the relative importance of a short connection time
- **latency** — An `int` expressing the relative importance of low latency
- **bandwidth** — An `int` expressing the relative importance of high bandwidth

> *Since 1.5*

> **⚠ Deprecated** — This method was intended to allow for protocols that are now obsolete.
