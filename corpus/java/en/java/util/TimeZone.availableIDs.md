---
id: "java-en-function-timezone-availableids"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.availableIDs"
signature: "public static Stream<String> availableIDs(int rawOffset)"
title: "TimeZone.availableIDs"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.availableIDs

```java
public static Stream<String> availableIDs(int rawOffset)
```

Gets the available IDs according to the given time zone offset in milliseconds.

 not create a copy of the `TimeZone` IDs array.

**参数**

- **rawOffset** — the given time zone GMT offset in milliseconds.

**返回**

- a stream of IDs, where the time zone for that ID has the specified GMT offset. For example, "America/Phoenix" and "America/Denver" both have GMT-07:00, but differ in daylight saving behavior.

**参见**

- #getRawOffset()
- #getAvailableIDs(int)

> *Since 25*
