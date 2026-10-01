---
id: "java-en-function-membershipkey-isvalid"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.isValid"
signature: "public abstract boolean isValid()"
title: "MembershipKey.isValid"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.isValid

```java
public abstract boolean isValid()
```

Tells whether or not this membership is valid.

 

 A multicast group membership is valid upon creation and remains
 valid until the membership is dropped by invoking the `drop() drop`
 method, or the channel is closed.

**返回**

- `true` if this membership key is valid, `false` otherwise
