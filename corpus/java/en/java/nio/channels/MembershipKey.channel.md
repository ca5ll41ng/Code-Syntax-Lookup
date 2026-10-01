---
id: "java-en-function-membershipkey-channel"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.channel"
signature: "public abstract MulticastChannel channel()"
title: "MembershipKey.channel"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.channel

```java
public abstract MulticastChannel channel()
```

Returns the channel for which this membership key was created. This
 method will continue to return the channel even after the membership
 becomes `isValid invalid`.

**返回**

- the channel
