---
id: "java-en-function-zoneoffsettransition-getdatetimebefore"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.getDateTimeBefore"
signature: "public LocalDateTime getDateTimeBefore()"
title: "ZoneOffsetTransition.getDateTimeBefore"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.getDateTimeBefore

```java
public LocalDateTime getDateTimeBefore()
```

Gets the local transition date-time, as would be expressed with the 'before' offset.
 

 This is the date-time where the discontinuity begins expressed with the 'before' offset.
 At this instant, the 'after' offset is actually used, therefore the combination of this
 date-time and the 'before' offset will never occur.
 

 The combination of the 'before' date-time and offset represents the same instant
 as the 'after' date-time and offset.

**返回**

- the transition date-time expressed with the before offset, not null
