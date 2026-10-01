---
id: "java-en-function-simpletimezone-setendrule"
language: "java"
lang: "en"
category: "function"
name: "SimpleTimeZone.setEndRule"
signature: "public void setEndRule(int endMonth, int endDay, int endDayOfWeek, int endTime)"
title: "SimpleTimeZone.setEndRule"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SimpleTimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleTimeZone.setEndRule

```java
public void setEndRule(int endMonth, int endDay, int endDayOfWeek, int endTime)
```

Sets the daylight saving time end rule. For example, if daylight saving time
 ends on the last Sunday in October at 2 am in wall clock time,
 you can set the end rule by calling:
 `setEndRule(Calendar.OCTOBER, -1, Calendar.SUNDAY, 2*60*60*1000);`

**参数**

- **endMonth** — The daylight saving time ending month. Month is a `MONTH MONTH` field value (0-based. e.g., 9 for October).
- **endDay** — The day of the month on which the daylight saving time ends. See the class description for the special cases of this parameter.
- **endDayOfWeek** — The daylight saving time ending day-of-week. See the class description for the special cases of this parameter.
- **endTime** — The daylight saving ending time in local wall clock time, (in milliseconds within the day) which is local daylight time in this case.

**异常**

- **IllegalArgumentException** — if the `endMonth`, `endDay`, `endDayOfWeek`, or `endTime` parameters are out of range
