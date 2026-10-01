---
id: "java-en-function-zoneoffsettransitionrule-of"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffsetTransitionRule.of"
signature: "public static ZoneOffsetTransitionRule of( Month month, int dayOfMonthIndicator, DayOfWeek dayOfWeek, LocalTime time, boolean timeEndOfDay, TimeDefinition timeDefinition, ZoneOffset standardOffset, ZoneOffset offsetBefore, ZoneOffset offsetAfter)"
title: "ZoneOffsetTransitionRule.of"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneOffsetTransitionRule.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffsetTransitionRule.of

```java
public static ZoneOffsetTransitionRule of( Month month, int dayOfMonthIndicator, DayOfWeek dayOfWeek, LocalTime time, boolean timeEndOfDay, TimeDefinition timeDefinition, ZoneOffset standardOffset, ZoneOffset offsetBefore, ZoneOffset offsetAfter)
```

Obtains an instance defining the yearly rule to create transitions between two offsets.
 

 Applications should normally obtain an instance from `ZoneRules`.
 This factory is only intended for use when creating `ZoneRules`.

**参数**

- **month** — the month of the month-day of the first day of the cutover week, not null
- **dayOfMonthIndicator** — the day of the month-day of the cutover week, positive if the week is that day or later, negative if the week is that day or earlier, counting from the last day of the month, from -28 to 31 excluding 0
- **dayOfWeek** — the required day-of-week, null if the month-day should not be changed
- **time** — the cutover time in the 'before' offset, not null
- **timeEndOfDay** — whether the time is midnight at the end of day
- **timeDefinition** — how to interpret the cutover
- **standardOffset** — the standard offset in force at the cutover, not null
- **offsetBefore** — the offset before the cutover, not null
- **offsetAfter** — the offset after the cutover, not null

**返回**

- the rule, not null

**异常**

- **IllegalArgumentException** — if the day of month indicator is invalid
- **IllegalArgumentException** — if the end of day flag is true when the time is not midnight
- **IllegalArgumentException** — if `time.getNano()` returns non-zero value
