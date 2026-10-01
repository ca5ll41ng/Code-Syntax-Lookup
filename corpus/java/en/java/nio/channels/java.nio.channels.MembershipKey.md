---
id: "java-en-function-java-nio-channels-membershipkey"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.MembershipKey"
title: "MembershipKey"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey

A token representing the membership of an Internet Protocol (IP) multicast
 group.

 

 A membership key may represent a membership to receive all datagrams sent
 to the group, or it may be source-specific, meaning that it
 represents a membership that receives only datagrams from a specific source
 address. Whether or not a membership key is source-specific may be determined
 by invoking its `sourceAddress() sourceAddress` method.

 

 A membership key is valid upon creation and remains valid until the
 membership is dropped by invoking the `drop() drop` method, or
 the channel is closed. The validity of the membership key may be tested
 by invoking its `isValid() isValid` method.

 

 Where a membership key is not source-specific and the underlying operation
 system supports source filtering, then the `block block` and `unblock unblock` methods can be used to block or unblock multicast datagrams
 from particular source addresses.

**参见**

- MulticastChannel

> *Since 1.7*
