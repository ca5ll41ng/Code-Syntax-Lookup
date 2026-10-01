---
id: "java-en-function-timezone-getavailableids"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.getAvailableIDs"
signature: "public static String[] getAvailableIDs(int rawOffset)"
title: "TimeZone.getAvailableIDs"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.getAvailableIDs

```java
public static String[] getAvailableIDs(int rawOffset)
```

Gets the available IDs according to the given time zone offset in milliseconds.

 a stream of the available time zone IDs according to the given offset.

**参数**

- **rawOffset** — the given time zone GMT offset in milliseconds.

**返回**

- an array of IDs, where the time zone for that ID has the specified GMT offset. For example, "America/Phoenix" and "America/Denver" both have GMT-07:00, but differ in daylight saving behavior.

**参见**

- #getRawOffset()
- #availableIDs(int)
