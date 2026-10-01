---
id: "java-en-function-validcachedlookup-tryremoveexpiredaddress"
language: "java"
lang: "en"
category: "function"
name: "ValidCachedLookup.tryRemoveExpiredAddress"
signature: "public boolean tryRemoveExpiredAddress(long now)"
title: "ValidCachedLookup.tryRemoveExpiredAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidCachedLookup.tryRemoveExpiredAddress

```java
public boolean tryRemoveExpiredAddress(long now)
```

Overrides the parent method to skip deleting the record from the
 cache if the stale data can still be used. Note to update the
 "expiryTime" field we have to remove the record from the expirySet
 and add it back. It is not necessary to remove/add it here, we can do
 that in the "get()" method above, but extracting it minimizes
 contention on "expirySet".
