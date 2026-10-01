---
id: "java-en-function-zoneid-getavailablezoneids"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.getAvailableZoneIds"
signature: "public static Set<String> getAvailableZoneIds()"
title: "ZoneId.getAvailableZoneIds"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.getAvailableZoneIds

```java
public static Set<String> getAvailableZoneIds()
```

Gets the set of available zone IDs.
 

 This set includes the string form of all available region-based IDs.
 Offset-based zone IDs are not included in the returned set.
 The ID can be passed to `of` to create a `ZoneId`.
 

 The set of zone IDs can increase over time, although in a typical application
 the set of IDs is fixed. Each call to this method is thread-safe.

**返回**

- a modifiable copy of the set of zone IDs, not null
