---
id: "java-en-function-month-maxlength"
language: "java"
lang: "en"
category: "function"
name: "Month.maxLength"
signature: "public int maxLength()"
title: "Month.maxLength"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.maxLength

```java
public int maxLength()
```

Gets the maximum length of this month in days.
 

 February has a maximum length of 29 days.
 April, June, September and November have 30 days.
 All other months have 31 days.

**返回**

- the maximum length of this month in days, from 29 to 31
