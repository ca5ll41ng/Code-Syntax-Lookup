---
id: "java-en-function-date-setmonth"
language: "java"
lang: "en"
category: "function"
name: "Date.setMonth"
signature: "public void setMonth(int month)"
title: "Date.setMonth"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.setMonth

```java
public void setMonth(int month)
```

Sets the month of this date to the specified value. This
 `Date` object is modified so that it represents a point
 in time within the specified month, with the year, date, hour,
 minute, and second the same as before, as interpreted in the
 local time zone. If the date was October 31, for example, and
 the month is set to June, then the new date will be treated as
 if it were on July 1, because June has only 30 days.

**参数**

- **month** — the month value between 0-11.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.set(Calendar.MONTH, int month)`.
