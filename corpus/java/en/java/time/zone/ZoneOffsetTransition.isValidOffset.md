---
id: "java-en-function-zoneoffsettransition-isvalidoffset"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.isValidOffset"
signature: "public boolean isValidOffset(ZoneOffset offset)"
title: "ZoneOffsetTransition.isValidOffset"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.isValidOffset

```java
public boolean isValidOffset(ZoneOffset offset)
```

Checks if the specified offset is valid during this transition.
 

 This checks to see if the given offset will be valid at some point in the transition.
 A gap will always return false.
 An overlap will return true if the offset is either the before or after offset.

**参数**

- **offset** — the offset to check, null returns false

**返回**

- true if the offset is valid during the transition
