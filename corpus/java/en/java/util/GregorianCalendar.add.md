---
id: "java-en-function-gregoriancalendar-add"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.add"
signature: "public void add(int field, int amount)"
title: "GregorianCalendar.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.add

```java
public void add(int field, int amount)
```

Adds the specified (signed) amount of time to the given calendar field,
 based on the calendar's rules.

 

Add rule 1. The value of `field`
 after the call minus the value of `field` before the
 call is `amount`, modulo any overflow that has occurred in
 `field`. Overflow occurs when a field value exceeds its
 range and, as a result, the next larger field is incremented or
 decremented and the field value is adjusted back into its range.

 

Add rule 2. If a smaller field is expected to be
 invariant, but it is impossible for it to be equal to its
 prior value because of changes in its minimum or maximum after
 `field` is changed, then its value is adjusted to be as close
 as possible to its expected value. A smaller field represents a
 smaller unit of time. `HOUR` is a smaller field than
 `DAY_OF_MONTH`. No adjustment is made to smaller fields
 that are not expected to be invariant. The calendar system
 determines what fields are expected to be invariant.

**参数**

- **field** — the calendar field.
- **amount** — the amount of date or time to be added to the field.

**异常**

- **IllegalArgumentException** — if `field` is `ZONE_OFFSET`, `DST_OFFSET`, or unknown, or if any calendar fields have out-of-range values in non-lenient mode.
