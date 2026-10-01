---
id: "java-en-function-gregoriancalendar-equals"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.equals"
signature: "public boolean equals(Object obj)"
title: "GregorianCalendar.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.equals

```java
public boolean equals(Object obj)
```

Compares this `GregorianCalendar` to the specified
 `Object`. The result is `true` if and
 only if the argument is a `GregorianCalendar` object
 that represents the same time value (millisecond offset from
 the Epoch) under the same
 `Calendar` parameters and Gregorian change date as
 this object.

**参数**

- **obj** — the object to compare with.

**返回**

- `true` if this object is equal to `obj`; `false` otherwise.

**参见**

- Calendar#compareTo(Calendar)
