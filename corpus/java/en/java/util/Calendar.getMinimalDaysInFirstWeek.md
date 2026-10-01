---
id: "java-en-function-calendar-getminimaldaysinfirstweek"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getMinimalDaysInFirstWeek"
signature: "public int getMinimalDaysInFirstWeek()"
title: "Calendar.getMinimalDaysInFirstWeek"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getMinimalDaysInFirstWeek

```java
public int getMinimalDaysInFirstWeek()
```

Gets what the minimal days required in the first week of the year are;
 e.g., if the first week is defined as one that contains the first day
 of the first month of a year, this method returns 1. If
 the minimal days required must be a full week, this method
 returns 7.

**返回**

- the minimal days required in the first week of the year.

**参见**

- #setMinimalDaysInFirstWeek(int)
