---
id: "java-en-function-builder-setweekdefinition"
language: "java"
lang: "en"
category: "function"
name: "Builder.setWeekDefinition"
signature: "public Builder setWeekDefinition(int firstDayOfWeek, int minimalDaysInFirstWeek)"
title: "Builder.setWeekDefinition"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setWeekDefinition

```java
public Builder setWeekDefinition(int firstDayOfWeek, int minimalDaysInFirstWeek)
```

Sets the week definition parameters to the values given by
 `firstDayOfWeek` and `minimalDaysInFirstWeek` that are
 used to determine the first
 week of a year. The parameters given by this method have
 precedence over the default values given by the
 `setLocale(Locale) locale`.

**参数**

- **firstDayOfWeek** — the first day of a week; one of `SUNDAY` to `SATURDAY`
- **minimalDaysInFirstWeek** — the minimal number of days in the first week (1..7)

**返回**

- this `Calendar.Builder`

**异常**

- **IllegalArgumentException** — if `firstDayOfWeek` or `minimalDaysInFirstWeek` is invalid

**参见**

- Calendar#getFirstDayOfWeek()
- Calendar#getMinimalDaysInFirstWeek()
