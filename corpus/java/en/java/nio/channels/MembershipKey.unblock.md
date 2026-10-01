---
id: "java-en-function-membershipkey-unblock"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.unblock"
signature: "public abstract MembershipKey unblock(InetAddress source)"
title: "MembershipKey.unblock"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.unblock

```java
public abstract MembershipKey unblock(InetAddress source)
```

Unblock multicast datagrams from the given source address that was
 previously blocked using the `block(InetAddress) block` method.

**参数**

- **source** — The source address to unblock

**返回**

- This membership key

**异常**

- **IllegalStateException** — If the given source address is not currently blocked or the membership key is no longer valid
