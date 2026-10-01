---
id: "java-en-function-membershipkey-block"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.block"
signature: "public abstract MembershipKey block(InetAddress source) throws IOException"
title: "MembershipKey.block"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.block

```java
public abstract MembershipKey block(InetAddress source) throws IOException
```

Block multicast datagrams from the given source address.

 

 If this membership key is not source-specific, and the underlying
 operating system supports source filtering, then this method blocks
 multicast datagrams from the given source address. If the given source
 address is already blocked then this method has no effect.
 After a source address is blocked it may still be possible to receive
 datagrams from that source. This can arise when datagrams are waiting to
 be received in the socket's receive buffer.

**参数**

- **source** — The source address to block

**返回**

- This membership key

**异常**

- **IllegalArgumentException** — If the `source` parameter is not a unicast address or is not the same address type as the multicast group
- **IllegalStateException** — If this membership key is source-specific or is no longer valid
- **UnsupportedOperationException** — If the underlying operating system does not support source filtering
- **IOException** — If an I/O error occurs
