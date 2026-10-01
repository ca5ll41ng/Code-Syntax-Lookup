---
id: "java-en-function-builder-setweekdate"
language: "java"
lang: "en"
category: "function"
name: "Builder.setWeekDate"
signature: "public Builder setWeekDate(int weekYear, int weekOfYear, int dayOfWeek)"
title: "Builder.setWeekDate"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setWeekDate

```java
public Builder setWeekDate(int weekYear, int weekOfYear, int dayOfWeek)
```

Sets the week-based date parameters to the values with the given
 date specifiers - week year, week of year, and day of week.

 

If the specified calendar doesn't support week dates, the
 `build() build` method will throw an `IllegalArgumentException`.

**参数**

- **weekYear** — the week year
- **weekOfYear** — the week number based on `weekYear`
- **dayOfWeek** — the day of week value: one of the constants for the `DAY_OF_WEEK DAY_OF_WEEK` field: `SUNDAY SUNDAY`, ..., `SATURDAY SATURDAY`.

**返回**

- this `Calendar.Builder`

**参见**

- Calendar#setWeekDate(int, int, int)
- Calendar#isWeekDateSupported()
