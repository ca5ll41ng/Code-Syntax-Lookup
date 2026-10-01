---
id: "java-en-function-chronolocaldatetime-atzone"
language: "java"
lang: "en"
category: "function"
name: "ChronoLocalDateTime.atZone"
signature: "ChronoZonedDateTime<D> atZone(ZoneId zone)"
title: "ChronoLocalDateTime.atZone"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoLocalDateTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoLocalDateTime.atZone

```java
ChronoZonedDateTime<D> atZone(ZoneId zone)
```

Combines this time with a time-zone to create a `ChronoZonedDateTime`.
 

 This returns a `ChronoZonedDateTime` formed from this date-time at the
 specified time-zone. The result will match this date-time as closely as possible.
 Time-zone rules, such as daylight savings, mean that not every local date-time
 is valid for the specified zone, thus the local date-time may be adjusted.
 

 The local date-time is resolved to a single instant on the time-line.
 This is achieved by finding a valid offset from UTC/Greenwich for the local
 date-time as defined by the `ZoneRules rules` of the zone ID.

 In most cases, there is only one valid offset for a local date-time.
 In the case of an overlap, where clocks are set back, there are two valid offsets.
 This method uses the earlier offset typically corresponding to "summer".
 

 In the case of a gap, where clocks jump forward, there is no valid offset.
 Instead, the local date-time is adjusted to be later by the length of the gap.
 For a typical one hour daylight savings change, the local date-time will be
 moved one hour later into the offset typically corresponding to "summer".
 

 To obtain the later offset during an overlap, call
 `withLaterOffsetAtOverlap` on the result of this method.

**参数**

- **zone** — the time-zone to use, not null

**返回**

- the zoned date-time formed from this date-time, not null
