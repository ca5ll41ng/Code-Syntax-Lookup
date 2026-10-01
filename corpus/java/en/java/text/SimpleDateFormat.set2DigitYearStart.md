---
id: "java-en-function-simpledateformat-set2digityearstart"
language: "java"
lang: "en"
category: "function"
name: "SimpleDateFormat.set2DigitYearStart"
signature: "public void set2DigitYearStart(Date startDate)"
title: "SimpleDateFormat.set2DigitYearStart"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleDateFormat.set2DigitYearStart

```java
public void set2DigitYearStart(Date startDate)
```

Sets the start date of the 100-year period used to interpret 2-digit years.
 

 For example, given a `SimpleDateFormat` with a `GregorianCalendar`,
 if the start date is set to January 1, 1950, 2-digit years are
 interpreted as falling within the 100-year range from 1950 through 2049.
 In that case, 50 is interpreted as 1950, 99 as 1999, 00 as 2000, and 49
 as 2049.

**参数**

- **startDate** — During parsing, 2-digit years will be placed in the range `startDate` to `startDate + 100 years`.

**异常**

- **NullPointerException** — if `startDate` is `null`.

**参见**

- #get2DigitYearStart

> *Since 1.2*
