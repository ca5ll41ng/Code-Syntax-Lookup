---
id: "java-en-function-zoneid-ofoffset"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.ofOffset"
signature: "public static ZoneId ofOffset(String prefix, ZoneOffset offset)"
title: "ZoneId.ofOffset"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.ofOffset

```java
public static ZoneId ofOffset(String prefix, ZoneOffset offset)
```

Obtains an instance of `ZoneId` wrapping an offset.
 

 If the prefix is "GMT", "UTC", or "UT" a `ZoneId`
 with the prefix and the non-zero offset is returned.
 If the prefix is empty `""` the `ZoneOffset` is returned.

**参数**

- **prefix** — the time-zone ID, not null
- **offset** — the offset, not null

**返回**

- the zone ID, not null

**异常**

- **IllegalArgumentException** — if the prefix is not one of "GMT", "UTC", or "UT", or ""
