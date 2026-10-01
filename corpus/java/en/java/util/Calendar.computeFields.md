---
id: "java-en-function-calendar-computefields"
language: "java"
lang: "en"
category: "function"
name: "Calendar.computeFields"
signature: "protected abstract void computeFields()"
title: "Calendar.computeFields"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.computeFields

```java
protected abstract void computeFields()
```

Converts the current millisecond time value `time`
 to calendar field values in `fields fields[]`.
 This allows you to sync up the calendar field values with
 a new time that is set for the calendar.  The time is not
 recomputed first; to recompute the time, then the fields, call the
 `complete` method.

**参见**

- #computeTime()
