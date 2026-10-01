---
id: "java-en-function-calendardataprovider-getminimaldaysinfirstweek"
language: "java"
lang: "en"
category: "function"
name: "CalendarDataProvider.getMinimalDaysInFirstWeek"
signature: "public abstract int getMinimalDaysInFirstWeek(Locale locale)"
title: "CalendarDataProvider.getMinimalDaysInFirstWeek"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/CalendarDataProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CalendarDataProvider.getMinimalDaysInFirstWeek

```java
public abstract int getMinimalDaysInFirstWeek(Locale locale)
```

Returns the minimal number of days required in the first week of a
 year. This information is required by `Calendar` to determine the
 first week of a year. Refer to the description of  how `Calendar` determines
 the first week.

**参数**

- **locale** — the desired locale

**返回**

- the minimal number of days of the first week, or 0 if the value isn't available for the `locale`

**异常**

- **NullPointerException** — if `locale` is `null`.

**参见**

- java.util.Calendar#getMinimalDaysInFirstWeek()
