---
id: "java-en-function-zoneoffsettransitionrule-getdayofweek"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransitionRule.getDayOfWeek"
signature: "public DayOfWeek getDayOfWeek()"
title: "ZoneOffsetTransitionRule.getDayOfWeek"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule.getDayOfWeek

```java
public DayOfWeek getDayOfWeek()
```

Gets the day-of-week of the transition.
 

 If the rule defines an exact date then this returns null.
 

 If the rule defines a week where the cutover might occur, then this method
 returns the day-of-week that the month-day will be adjusted to.
 If the day is positive then the adjustment is later.
 If the day is negative then the adjustment is earlier.

**返回**

- the day-of-week that the transition occurs, null if the rule defines an exact date
