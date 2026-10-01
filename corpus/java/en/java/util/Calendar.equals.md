---
id: "java-en-function-calendar-equals"
language: "java"
lang: "en"
category: "function"
name: "Calendar.equals"
signature: "public boolean equals(Object obj)"
title: "Calendar.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.equals

```java
public boolean equals(Object obj)
```

Compares this `Calendar` to the specified
 `Object`.  The result is `true` if and only if
 the argument is a `Calendar` object of the same calendar
 system that represents the same time value (millisecond offset from the
 Epoch) under the same
 `Calendar` parameters as this object.

 

The `Calendar` parameters are the values represented
 by the `isLenient`, `getFirstDayOfWeek`,
 `getMinimalDaysInFirstWeek` and `getTimeZone`
 methods. If there is any difference in those parameters
 between the two `Calendar`s, this method returns
 `false`.

 

Use the `compareTo(Calendar) compareTo` method to
 compare only the time values.

**参数**

- **obj** — the object to compare with.

**返回**

- `true` if this object is equal to `obj`; `false` otherwise.
