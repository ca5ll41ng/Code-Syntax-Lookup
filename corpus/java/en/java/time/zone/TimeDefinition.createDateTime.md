---
id: "java-en-function-timedefinition-createdatetime"
language: "java"
lang: "en"
category: "function"
name: "TimeDefinition.createDateTime"
signature: "public LocalDateTime createDateTime(LocalDateTime dateTime, ZoneOffset standardOffset, ZoneOffset wallOffset)"
title: "TimeDefinition.createDateTime"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeDefinition.createDateTime

```java
public LocalDateTime createDateTime(LocalDateTime dateTime, ZoneOffset standardOffset, ZoneOffset wallOffset)
```

Converts the specified local date-time to the local date-time actually
 seen on a wall clock.
 

 This method converts using the type of this enum.
 The output is defined relative to the 'before' offset of the transition.
 

 The UTC type uses the UTC offset.
 The STANDARD type uses the standard offset.
 The WALL type returns the input date-time.
 The result is intended for use with the wall-offset.

**参数**

- **dateTime** — the local date-time, not null
- **standardOffset** — the standard offset, not null
- **wallOffset** — the wall offset, not null

**返回**

- the date-time relative to the wall/before offset, not null
