---
id: "java-en-function-membershipkey-drop"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.drop"
signature: "public abstract void drop()"
title: "MembershipKey.drop"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.drop

```java
public abstract void drop()
```

Drop membership.

 

 If the membership key represents a membership to receive all datagrams
 then the membership is dropped and the channel will no longer receive any
 datagrams sent to the group. If the membership key is source-specific
 then the channel will no longer receive datagrams sent to the group from
 that source address.

 

 After membership is dropped it may still be possible to receive
 datagrams sent to the group. This can arise when datagrams are waiting to
 be received in the socket's receive buffer. After membership is dropped
 then the channel may `join join` the group again
 in which case a new membership key is returned.

 

 Upon return, this membership object will be `isValid() invalid`.
 If the multicast group membership is already invalid then invoking this
 method has no effect. Once a multicast group membership is invalid,
 it remains invalid forever.
