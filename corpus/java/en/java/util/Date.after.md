---
id: "java-en-function-date-after"
language: "java"
lang: "en"
category: "function"
name: "Date.after"
signature: "public boolean after(Date when)"
title: "Date.after"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.after

```java
public boolean after(Date when)
```

Tests if this date is after the specified date.

**参数**

- **when** — a date.

**返回**

- `true` if and only if the instant represented by this `Date` object is strictly later than the instant represented by `when`; `false` otherwise.

**异常**

- **NullPointerException** — if `when` is null.
