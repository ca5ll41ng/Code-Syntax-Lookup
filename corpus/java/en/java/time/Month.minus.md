---
id: "java-en-function-month-minus"
language: "java"
lang: "en"
category: "function"
name: "Month.minus"
signature: "public Month minus(long months)"
title: "Month.minus"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.minus

```java
public Month minus(long months)
```

Returns the month-of-year that is the specified number of months before this one.
 

 The calculation rolls around the start of the year from January to December.
 The specified period may be negative.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **months** — the months to subtract, positive or negative

**返回**

- the resulting month, not null
