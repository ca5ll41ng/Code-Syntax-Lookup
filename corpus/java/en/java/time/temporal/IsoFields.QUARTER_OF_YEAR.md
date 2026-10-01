---
id: "java-en-function-isofields-quarter_of_year"
language: "java"
lang: "en"
category: "function"
name: "IsoFields.QUARTER_OF_YEAR"
signature: "public static final TemporalField QUARTER_OF_YEAR = Field.QUARTER_OF_YEAR"
title: "IsoFields.QUARTER_OF_YEAR"
directive: "field"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/IsoFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IsoFields.QUARTER_OF_YEAR

```java
public static final TemporalField QUARTER_OF_YEAR = Field.QUARTER_OF_YEAR
```

The field that represents the quarter-of-year.
 

 This field allows the quarter-of-year value to be queried and set.
 The quarter-of-year has values from 1 to 4.
 

 The quarter-of-year can only be calculated if the month-of-year is available.
 

 In the resolving phase of parsing, a date can be created from a year,
 quarter-of-year and day-of-quarter.
 See `DAY_OF_QUARTER` for details.
 

 This unit is an immutable and thread-safe singleton.
