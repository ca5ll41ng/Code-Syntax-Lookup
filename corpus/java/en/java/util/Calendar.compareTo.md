---
id: "java-en-function-calendar-compareto"
language: "java"
lang: "en"
category: "function"
name: "Calendar.compareTo"
signature: "public int compareTo(Calendar anotherCalendar)"
title: "Calendar.compareTo"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.compareTo

```java
public int compareTo(Calendar anotherCalendar)
```

Compares the time values (millisecond offsets from the Epoch) represented by two
 `Calendar` objects.

**参数**

- **anotherCalendar** — the `Calendar` to be compared.

**返回**

- the value `0` if the time represented by the argument is equal to the time represented by this `Calendar`; a value less than `0` if the time of this `Calendar` is before the time represented by the argument; and a value greater than `0` if the time of this `Calendar` is after the time represented by the argument.

**异常**

- **NullPointerException** — if the specified `Calendar` is `null`.
- **IllegalArgumentException** — if the time value of the specified `Calendar` object can't be obtained due to any invalid calendar values.

> *Since 1.5*
