---
id: "java-en-function-zoneoffsettransition-getdatetimeafter"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransition.getDateTimeAfter"
signature: "public LocalDateTime getDateTimeAfter()"
title: "ZoneOffsetTransition.getDateTimeAfter"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransition.getDateTimeAfter

```java
public LocalDateTime getDateTimeAfter()
```

Gets the local transition date-time, as would be expressed with the 'after' offset.
 

 This is the first date-time after the discontinuity, when the new offset applies.
 

 The combination of the 'before' date-time and offset represents the same instant
 as the 'after' date-time and offset.

**返回**

- the transition date-time expressed with the after offset, not null
