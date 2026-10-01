---
id: "java-en-function-membershipkey-sourceaddress"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.sourceAddress"
signature: "public abstract InetAddress sourceAddress()"
title: "MembershipKey.sourceAddress"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.sourceAddress

```java
public abstract InetAddress sourceAddress()
```

Returns the source address if this membership key is source-specific,
 or `null` if this membership is not source-specific.

**返回**

- The source address if this membership key is source-specific, otherwise `null`
