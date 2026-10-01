---
id: "java-en-function-date-setyear"
language: "java"
lang: "en"
category: "function"
name: "Date.setYear"
signature: "public void setYear(int year)"
title: "Date.setYear"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.setYear

```java
public void setYear(int year)
```

Sets the year of this `Date` object to be the specified
 value plus 1900. This `Date` object is modified so
 that it represents a point in time within the specified year,
 with the month, date, hour, minute, and second the same as
 before, as interpreted in the local time zone. (Of course, if
 the date was February 29, for example, and the year is set to a
 non-leap year, then the new date will be treated as if it were
 on March 1.)

**参数**

- **year** — the year value.

**参见**

- java.util.Calendar

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `Calendar.set(Calendar.YEAR, year + 1900)`.
