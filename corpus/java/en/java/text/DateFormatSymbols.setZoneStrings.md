---
id: "java-en-function-dateformatsymbols-setzonestrings"
language: "java"
lang: "en"
category: "function"
name: "DateFormatSymbols.setZoneStrings"
signature: "public void setZoneStrings(String[][] newZoneStrings)"
title: "DateFormatSymbols.setZoneStrings"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbols.setZoneStrings

```java
public void setZoneStrings(String[][] newZoneStrings)
```

Sets time zone strings.  The argument must be a
 two-dimensional array of strings of size n by m,
 where m is at least 5.  Each of the n rows is an
 entry containing the localized names for a single `TimeZone`.
 Each such row contains (with `i` ranging from
 0..n-1):
 
 
- `zoneStrings[i][0]` - time zone ID
 
- `zoneStrings[i][1]` - long name of zone in standard
 time
 
- `zoneStrings[i][2]` - short name of zone in
 standard time
 
- `zoneStrings[i][3]` - long name of zone in daylight
 saving time
 
- `zoneStrings[i][4]` - short name of zone in daylight
 saving time
 

 The zone ID is not localized; it's one of the valid IDs of
 the `java.util.TimeZone TimeZone` class that are not
 custom IDs.
 All other entries are localized names.

**参数**

- **newZoneStrings** — the new time zone strings.

**异常**

- **IllegalArgumentException** — if the length of any row in `newZoneStrings` is less than 5
- **NullPointerException** — if `newZoneStrings` is null

**参见**

- #getZoneStrings()
