---
id: "java-en-function-month-plus"
language: "java"
lang: "en"
category: "function"
name: "Month.plus"
signature: "public Month plus(long months)"
title: "Month.plus"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.plus

```java
public Month plus(long months)
```

Returns the month-of-year that is the specified number of months after this one.
 

 The calculation rolls around the end of the year from December to January.
 The specified period may be negative.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **months** — the months to add, positive or negative

**返回**

- the resulting month, not null
