---
id: "java-en-function-dayofweek-adjustinto"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.adjustInto"
signature: "public Temporal adjustInto(Temporal temporal)"
title: "DayOfWeek.adjustInto"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.adjustInto

```java
public Temporal adjustInto(Temporal temporal)
```

Adjusts the specified temporal object to have this day-of-week.
 

 This returns a temporal object of the same observable type as the input
 with the day-of-week changed to be the same as this.
 

 The adjustment is equivalent to using `with`
 passing `DAY_OF_WEEK` as the field.
 Note that this adjusts forwards or backwards within a Monday to Sunday week.
 See `dayOfWeek` for localized week start days.
 See `TemporalAdjuster` for other adjusters with more control,
 such as `next(MONDAY)`.
 

 In most cases, it is clearer to reverse the calling pattern by using
 `with`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisDayOfWeek.adjustInto(temporal);
   temporal = temporal.with(thisDayOfWeek);
 
```

 

 For example, given a date that is a Wednesday, the following are output:
 
```

   dateOnWed.with(MONDAY);     // two days earlier
   dateOnWed.with(TUESDAY);    // one day earlier
   dateOnWed.with(WEDNESDAY);  // same date
   dateOnWed.with(THURSDAY);   // one day later
   dateOnWed.with(FRIDAY);     // two days later
   dateOnWed.with(SATURDAY);   // three days later
   dateOnWed.with(SUNDAY);     // four days later
 
```

 

 This instance is immutable and unaffected by this method call.

**参数**

- **temporal** — the target object to be adjusted, not null

**返回**

- the adjusted object, not null

**异常**

- **DateTimeException** — if unable to make the adjustment
- **ArithmeticException** — if numeric overflow occurs
