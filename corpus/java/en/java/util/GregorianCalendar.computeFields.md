---
id: "java-en-function-gregoriancalendar-computefields"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.computeFields"
signature: "protected void computeFields()"
title: "GregorianCalendar.computeFields"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.computeFields

```java
protected void computeFields()
```

Converts the time value (millisecond offset from the Epoch) to calendar field values.
 The time is not
 recomputed first; to recompute the time, then the fields, call the
 `complete` method.

**参见**

- Calendar#complete
