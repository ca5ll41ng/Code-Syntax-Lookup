---
id: "java-en-function-japaneseimperialcalendar-roll"
language: "java"
lang: "en"
category: "function"
name: "JapaneseImperialCalendar.roll"
signature: "public void roll(int field, int amount)"
title: "JapaneseImperialCalendar.roll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/JapaneseImperialCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JapaneseImperialCalendar.roll

```java
public void roll(int field, int amount)
```

Adds a signed amount to the specified calendar field without changing larger fields.
 A negative roll amount means to subtract from field without changing
 larger fields. If the specified amount is 0, this method performs nothing.

 

This method calls `complete` before adding the
 amount so that all the calendar fields are normalized. If there
 is any calendar field having an out-of-range value in non-lenient mode, then an
 `IllegalArgumentException` is thrown.

**参数**

- **field** — the calendar field.
- **amount** — the signed amount to add to `field`.

**异常**

- **IllegalArgumentException** — if `field` is `ZONE_OFFSET`, `DST_OFFSET`, or unknown, or if any calendar fields have out-of-range values in non-lenient mode.

**参见**

- #roll(int,boolean)
- #add(int,int)
- #set(int,int)
