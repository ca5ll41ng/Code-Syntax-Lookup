---
id: "java-en-function-calendar-setminimaldaysinfirstweek"
language: "java"
lang: "en"
category: "function"
name: "Calendar.setMinimalDaysInFirstWeek"
signature: "public void setMinimalDaysInFirstWeek(int value)"
title: "Calendar.setMinimalDaysInFirstWeek"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.setMinimalDaysInFirstWeek

```java
public void setMinimalDaysInFirstWeek(int value)
```

Sets what the minimal days required in the first week of the year are;
 For example, if the first week is defined as one that contains the first
 day of the first month of a year, call this method with value 1. If it
 must be a full week, use value 7.

**参数**

- **value** — the given minimal days required in the first week of the year.

**参见**

- #getMinimalDaysInFirstWeek()
