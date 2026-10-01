---
id: "java-en-function-zonerules-isvalidoffset"
language: "java"
lang: "en"
category: "function"
name: "ZoneRules.isValidOffset"
signature: "public boolean isValidOffset(LocalDateTime localDateTime, ZoneOffset offset)"
title: "ZoneRules.isValidOffset"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRules.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRules.isValidOffset

```java
public boolean isValidOffset(LocalDateTime localDateTime, ZoneOffset offset)
```

Checks if the offset date-time is valid for these rules.
 

 To be valid, the local date-time must not be in a gap and the offset
 must match one of the valid offsets.
 

 This default implementation checks if `getValidOffsets`
 contains the specified offset.

**参数**

- **localDateTime** — the date-time to check, not null, but null may be ignored if the rules have a single offset for all instants
- **offset** — the offset to check, null returns false

**返回**

- true if the offset date-time is valid for these rules
