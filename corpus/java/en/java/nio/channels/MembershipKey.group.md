---
id: "java-en-function-membershipkey-group"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.group"
signature: "public abstract InetAddress group()"
title: "MembershipKey.group"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.group

```java
public abstract InetAddress group()
```

Returns the multicast group for which this membership key was created.
 This method will continue to return the group even after the membership
 becomes `isValid invalid`.

**返回**

- the multicast group
