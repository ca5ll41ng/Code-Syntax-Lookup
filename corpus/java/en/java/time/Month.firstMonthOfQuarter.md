---
id: "java-en-function-month-firstmonthofquarter"
language: "java"
lang: "en"
category: "function"
name: "Month.firstMonthOfQuarter"
signature: "public Month firstMonthOfQuarter()"
title: "Month.firstMonthOfQuarter"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.firstMonthOfQuarter

```java
public Month firstMonthOfQuarter()
```

Gets the month corresponding to the first month of this quarter.
 

 The year can be divided into four quarters.
 This method returns the first month of the quarter for the base month.
 January, February and March return January.
 April, May and June return April.
 July, August and September return July.
 October, November and December return October.

**返回**

- the first month of the quarter corresponding to this month, not null
