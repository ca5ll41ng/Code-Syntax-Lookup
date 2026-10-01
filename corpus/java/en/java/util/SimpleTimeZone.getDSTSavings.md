---
id: "java-en-function-simpletimezone-getdstsavings"
language: "java"
lang: "en"
category: "function"
name: "SimpleTimeZone.getDSTSavings"
signature: "public int getDSTSavings()"
title: "SimpleTimeZone.getDSTSavings"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SimpleTimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleTimeZone.getDSTSavings

```java
public int getDSTSavings()
```

Returns the amount of time in milliseconds that the clock is
 advanced during daylight saving time.

**返回**

- the number of milliseconds the time is advanced with respect to standard time when the daylight saving rules are in effect, or 0 (zero) if this time zone doesn't observe daylight saving time.

**参见**

- #setDSTSavings

> *Since 1.2*
