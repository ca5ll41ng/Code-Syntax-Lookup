---
id: "java-en-function-calendar-get"
language: "java"
lang: "en"
category: "function"
name: "Calendar.get"
signature: "public int get(int field)"
title: "Calendar.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.get

```java
public int get(int field)
```

Returns the value of the given calendar field. In lenient mode,
 all calendar fields are normalized. In non-lenient mode, all
 calendar fields are validated and this method throws an
 exception if any calendar fields have out-of-range values. The
 normalization and validation are handled by the
 `complete` method, which process is calendar
 system dependent.

**参数**

- **field** — the given calendar field.

**返回**

- the value for the given calendar field.

**异常**

- **IllegalArgumentException** — if this `Calendar` is non-lenient and any of the calendar fields have invalid values.

**参见**

- #set(int,int)
- #complete()
