---
id: "java-en-function-chronozoneddatetime-withlateroffsetatoverlap"
language: "java"
lang: "en"
category: "function"
name: "ChronoZonedDateTime.withLaterOffsetAtOverlap"
signature: "ChronoZonedDateTime<D> withLaterOffsetAtOverlap()"
title: "ChronoZonedDateTime.withLaterOffsetAtOverlap"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoZonedDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoZonedDateTime.withLaterOffsetAtOverlap

```java
ChronoZonedDateTime<D> withLaterOffsetAtOverlap()
```

Returns a copy of this date-time changing the zone offset to the
 later of the two valid offsets at a local time-line overlap.
 

 This method only has any effect when the local time-line overlaps, such as
 at an autumn daylight savings cutover. In this scenario, there are two
 valid offsets for the local date-time. Calling this method will return
 a zoned date-time with the later of the two selected.
 

 If this method is called when it is not an overlap, `this`
 is returned.
 

 This instance is immutable and unaffected by this method call.

**返回**

- a `ChronoZonedDateTime` based on this date-time with the later offset, not null

**异常**

- **DateTimeException** — if no rules can be found for the zone
- **DateTimeException** — if no rules are valid for this date-time
