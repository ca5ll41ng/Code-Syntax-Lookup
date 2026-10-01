---
id: "java-en-function-cachedlookup-tryremoveexpiredaddress"
language: "java"
lang: "en"
category: "function"
name: "CachedLookup.tryRemoveExpiredAddress"
signature: "public boolean tryRemoveExpiredAddress(long now)"
title: "CachedLookup.tryRemoveExpiredAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CachedLookup.tryRemoveExpiredAddress

```java
public boolean tryRemoveExpiredAddress(long now)
```

Checks if the current cache record is expired or not. Expired records
 are removed from the expirySet and cache.

**返回**

- `true` if the record was removed
