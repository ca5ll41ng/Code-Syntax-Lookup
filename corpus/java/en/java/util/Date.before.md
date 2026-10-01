---
id: "java-en-function-date-before"
language: "java"
lang: "en"
category: "function"
name: "Date.before"
signature: "public boolean before(Date when)"
title: "Date.before"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.before

```java
public boolean before(Date when)
```

Tests if this date is before the specified date.

**参数**

- **when** — a date.

**返回**

- `true` if and only if the instant of time represented by this `Date` object is strictly earlier than the instant represented by `when`; `false` otherwise.

**异常**

- **NullPointerException** — if `when` is null.
