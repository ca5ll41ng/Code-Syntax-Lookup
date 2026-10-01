---
id: "java-en-function-isofields-week_based_year"
language: "java"
lang: "en"
category: "function"
name: "IsoFields.WEEK_BASED_YEAR"
signature: "public static final TemporalField WEEK_BASED_YEAR = Field.WEEK_BASED_YEAR"
title: "IsoFields.WEEK_BASED_YEAR"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/IsoFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoFields.WEEK_BASED_YEAR

```java
public static final TemporalField WEEK_BASED_YEAR = Field.WEEK_BASED_YEAR
```

The field that represents the week-based-year.
 

 This field allows the week-based-year value to be queried and set.
 

 The field has a range that matches `MAX` and `MIN`.
 

 In the resolving phase of parsing, a date can be created from a
 week-based-year, week-of-week-based-year and day-of-week.
 See `WEEK_OF_WEEK_BASED_YEAR` for details.
 

 This unit is an immutable and thread-safe singleton.
