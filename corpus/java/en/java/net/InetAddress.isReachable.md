---
id: "java-en-function-inetaddress-isreachable"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.isReachable"
signature: "public boolean isReachable(int timeout) throws IOException"
title: "InetAddress.isReachable"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.isReachable

```java
public boolean isReachable(int timeout) throws IOException
```

Test whether that address is reachable. Best effort is made by the
 implementation to try to reach the host, but firewalls and server
 configuration may block requests resulting in an unreachable status
 while some specific ports may be accessible.
 A typical implementation will use ICMP ECHO REQUESTs if the
 privilege can be obtained, otherwise it will try to establish
 a TCP connection on port 7 (Echo) of the destination host.
 

 The timeout value, in milliseconds, indicates the maximum amount of time
 the try should take. If the operation times out before getting an
 answer, the host is deemed unreachable. A negative value will result
 in an IllegalArgumentException being thrown.

**参数**

- **timeout** — the time, in milliseconds, before the call aborts

**返回**

- a `boolean` indicating if the address is reachable.

**异常**

- **IOException** — if a network error occurs
- **IllegalArgumentException** — if `timeout` is negative.

> *Since 1.5*
