---
id: "java-en-function-month-minlength"
language: "java"
lang: "en"
category: "function"
name: "Month.minLength"
signature: "public int minLength()"
title: "Month.minLength"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.minLength

```java
public int minLength()
```

Gets the minimum length of this month in days.
 

 February has a minimum length of 28 days.
 April, June, September and November have 30 days.
 All other months have 31 days.

**返回**

- the minimum length of this month in days, from 28 to 31
