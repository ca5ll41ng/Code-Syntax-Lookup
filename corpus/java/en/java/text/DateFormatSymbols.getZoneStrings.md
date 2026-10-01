---
id: "java-en-function-dateformatsymbols-getzonestrings"
language: "java"
lang: "en"
category: "function"
name: "DateFormatSymbols.getZoneStrings"
signature: "public String[][] getZoneStrings()"
title: "DateFormatSymbols.getZoneStrings"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbols.getZoneStrings

```java
public String[][] getZoneStrings()
```

Gets time zone strings.  Use of this method is discouraged; use
 `getDisplayName`
 instead.
 

 The value returned is a
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
 All other entries are localized names.  If a zone does not implement
 daylight saving time, the daylight saving time names should not be used.
 

 If `setZoneStrings(String[][]) setZoneStrings` has been called
 on this `DateFormatSymbols` instance, then the strings
 provided by that call are returned. Otherwise, the returned array
 contains names provided by the Java runtime and by installed
 `java.util.spi.TimeZoneNameProvider TimeZoneNameProvider`
 implementations.

**返回**

- the time zone strings.

**参见**

- #setZoneStrings(String[][])
