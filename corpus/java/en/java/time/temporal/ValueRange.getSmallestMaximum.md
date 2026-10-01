---
id: "java-en-function-valuerange-getsmallestmaximum"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.getSmallestMaximum"
signature: "public long getSmallestMaximum()"
title: "ValueRange.getSmallestMaximum"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.getSmallestMaximum

```java
public long getSmallestMaximum()
```

Gets the smallest possible maximum value that the field can take.
 

 For example, the ISO day-of-month runs to between 28 and 31 days.
 The smallest maximum is therefore 28.

**返回**

- the smallest possible maximum value for this field
