---
id: "java-en-function-gregoriancalendar-roll"
language: "java"
lang: "en"
category: "function"
name: "GregorianCalendar.roll"
signature: "public void roll(int field, boolean up)"
title: "GregorianCalendar.roll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/GregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GregorianCalendar.roll

```java
public void roll(int field, boolean up)
```

Adds or subtracts (up/down) a single unit of time on the given time
 field without changing larger fields.
 

 Example: Consider a `GregorianCalendar`
 originally set to December 31, 1999. Calling `roll`
 sets the calendar to January 31, 1999.  The `YEAR` field is unchanged
 because it is a larger field than `MONTH`.

**参数**

- **up** — indicates if the value of the specified calendar field is to be rolled up or rolled down. Use `true` if rolling up, `false` otherwise.

**异常**

- **IllegalArgumentException** — if `field` is `ZONE_OFFSET`, `DST_OFFSET`, or unknown, or if any calendar fields have out-of-range values in non-lenient mode.

**参见**

- #add(int,int)
- #set(int,int)
