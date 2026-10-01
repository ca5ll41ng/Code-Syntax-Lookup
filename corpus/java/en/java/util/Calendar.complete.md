---
id: "java-en-function-calendar-complete"
language: "java"
lang: "en"
category: "function"
name: "Calendar.complete"
signature: "protected void complete()"
title: "Calendar.complete"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.complete

```java
protected void complete()
```

Fills in any unset fields in the calendar fields. First, the `computeTime` method is called if the time value (millisecond offset
 from the Epoch) has not been calculated from
 calendar field values. Then, the `computeFields` method is
 called to calculate all calendar field values.
