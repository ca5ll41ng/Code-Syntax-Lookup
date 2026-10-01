---
id: "java-en-function-simpletimezone-setstartrule"
language: "java"
lang: "en"
category: "function"
name: "SimpleTimeZone.setStartRule"
signature: "public void setStartRule(int startMonth, int startDay, int startDayOfWeek, int startTime)"
title: "SimpleTimeZone.setStartRule"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SimpleTimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleTimeZone.setStartRule

```java
public void setStartRule(int startMonth, int startDay, int startDayOfWeek, int startTime)
```

Sets the daylight saving time start rule. For example, if daylight saving
 time starts on the first Sunday in April at 2 am in local wall clock
 time, you can set the start rule by calling:
 
```
`setStartRule(Calendar.APRIL, 1, Calendar.SUNDAY, 2*60*60*1000);`
```

**参数**

- **startMonth** — The daylight saving time starting month. Month is a `MONTH MONTH` field value (0-based. e.g., 0 for January).
- **startDay** — The day of the month on which the daylight saving time starts. See the class description for the special cases of this parameter.
- **startDayOfWeek** — The daylight saving time starting day-of-week. See the class description for the special cases of this parameter.
- **startTime** — The daylight saving time starting time in local wall clock time, which is local standard time in this case.

**异常**

- **IllegalArgumentException** — if the `startMonth`, `startDay`, `startDayOfWeek`, or `startTime` parameters are out of range
