---
id: "java-en-function-calendardataprovider-getfirstdayofweek"
language: "java"
lang: "en"
category: "function"
name: "CalendarDataProvider.getFirstDayOfWeek"
signature: "public abstract int getFirstDayOfWeek(Locale locale)"
title: "CalendarDataProvider.getFirstDayOfWeek"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/CalendarDataProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CalendarDataProvider.getFirstDayOfWeek

```java
public abstract int getFirstDayOfWeek(Locale locale)
```

Returns the first day of a week in the given `locale`. This
 information is required by `Calendar` to support operations on the
 week-related calendar fields.

**参数**

- **locale** — the desired locale

**返回**

- the first day of a week; one of `SUNDAY` .. `SATURDAY`, or 0 if the value isn't available for the `locale`

**异常**

- **NullPointerException** — if `locale` is `null`.

**参见**

- java.util.Calendar#getFirstDayOfWeek()
- First Week
