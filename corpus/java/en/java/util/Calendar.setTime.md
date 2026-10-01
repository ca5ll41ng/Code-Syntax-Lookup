---
id: "java-en-function-calendar-settime"
language: "java"
lang: "en"
category: "function"
name: "Calendar.setTime"
signature: "public final void setTime(Date date)"
title: "Calendar.setTime"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.setTime

```java
public final void setTime(Date date)
```

Sets this Calendar's time with the given `Date`.
 

 Note: Calling `setTime()` with
 `Date(Long.MAX_VALUE)` or `Date(Long.MIN_VALUE)`
 may yield incorrect field values from `get()`.

**参数**

- **date** — the given Date.

**异常**

- **NullPointerException** — if `date` is `null`

**参见**

- #getTime()
- #setTimeInMillis(long)
