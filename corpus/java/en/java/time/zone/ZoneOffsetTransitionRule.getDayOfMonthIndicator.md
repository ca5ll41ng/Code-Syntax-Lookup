---
id: "java-en-function-zoneoffsettransitionrule-getdayofmonthindicator"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransitionRule.getDayOfMonthIndicator"
signature: "public int getDayOfMonthIndicator()"
title: "ZoneOffsetTransitionRule.getDayOfMonthIndicator"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule.getDayOfMonthIndicator

```java
public int getDayOfMonthIndicator()
```

Gets the indicator of the day-of-month of the transition.
 

 If the rule defines an exact date then the day is the month of that date.
 

 If the rule defines a week where the transition might occur, then the day
 defines either the start of the end of the transition week.
 

 If the value is positive, then it represents a normal day-of-month, and is the
 earliest possible date that the transition can be.
 The date may refer to 29th February which should be treated as 1st March in non-leap years.
 

 If the value is negative, then it represents the number of days back from the
 end of the month where `-1` is the last day of the month.
 In this case, the day identified is the latest possible date that the transition can be.

**返回**

- the day-of-month indicator, from -28 to 31 excluding 0
