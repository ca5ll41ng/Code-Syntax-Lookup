---
id: "java-en-function-valuerange-getlargestminimum"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.getLargestMinimum"
signature: "public long getLargestMinimum()"
title: "ValueRange.getLargestMinimum"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.getLargestMinimum

```java
public long getLargestMinimum()
```

Gets the largest possible minimum value that the field can take.
 

 For example, the ISO day-of-month always starts at 1.
 The largest minimum is therefore 1.

**返回**

- the largest possible minimum value for this field
