---
id: "java-en-function-date-gettimezoneoffset"
language: "java"
lang: "en"
category: "function"
name: "Date.getTimezoneOffset"
signature: "public int getTimezoneOffset()"
title: "Date.getTimezoneOffset"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.getTimezoneOffset

```java
public int getTimezoneOffset()
```

Returns the offset, measured in minutes, for the local time zone
 relative to UTC that is appropriate for the time represented by
 this `Date` object.
 

 For example, in Massachusetts, five time zones west of Greenwich:
 
```

 new Date(96, 1, 14).getTimezoneOffset() returns 300
```

 because on February 14, 1996, standard time (Eastern Standard Time)
 is in use, which is offset five hours from UTC; but:
 
```

 new Date(96, 5, 1).getTimezoneOffset() returns 240
```

 because on June 1, 1996, daylight saving time (Eastern Daylight Time)
 is in use, which is offset only four hours from UTC.

 This method produces the same result as if it computed:
 
```

 (this.getTime() - UTC(this.getYear(),
                       this.getMonth(),
                       this.getDate(),
                       this.getHours(),
                       this.getMinutes(),
                       this.getSeconds())) / (60 * 1000)
 
```

**返回**

- the time-zone offset, in minutes, for the current time zone.

**参见**

- java.util.Calendar#ZONE_OFFSET
- java.util.Calendar#DST_OFFSET
- java.util.TimeZone#getDefault

> **⚠ Deprecated** — As of JDK version 1.1, replaced by `-(Calendar.get(Calendar.ZONE_OFFSET) + Calendar.get(Calendar.DST_OFFSET)) / (60 * 1000)`.
