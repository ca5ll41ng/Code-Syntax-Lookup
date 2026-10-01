---
id: "java-en-function-calendar-add"
language: "java"
lang: "en"
category: "function"
name: "Calendar.add"
signature: "public abstract void add(int field, int amount)"
title: "Calendar.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.add

```java
public abstract void add(int field, int amount)
```

Adds or subtracts the specified amount of time to the given calendar field,
 based on the calendar's rules. For example, to subtract 5 days from
 the current time of the calendar, you can achieve it by calling:
 

`add(Calendar.DAY_OF_MONTH, -5)`.

**参数**

- **field** — the calendar field.
- **amount** — the amount of date or time to be added to the field.

**异常**

- **IllegalArgumentException** — if this `Calendar` is non-lenient and any of the calendar fields have invalid values or if `field` is `ZONE_OFFSET`, `DST_OFFSET`, or unknown.

**参见**

- #roll(int,int)
- #set(int,int)
