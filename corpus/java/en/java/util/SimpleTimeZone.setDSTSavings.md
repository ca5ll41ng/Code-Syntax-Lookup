---
id: "java-en-function-simpletimezone-setdstsavings"
language: "java"
lang: "en"
category: "function"
name: "SimpleTimeZone.setDSTSavings"
signature: "public void setDSTSavings(int millisSavedDuringDST)"
title: "SimpleTimeZone.setDSTSavings"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SimpleTimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleTimeZone.setDSTSavings

```java
public void setDSTSavings(int millisSavedDuringDST)
```

Sets the amount of time in milliseconds that the clock is advanced
 during daylight saving time.

**参数**

- **millisSavedDuringDST** — the number of milliseconds the time is advanced with respect to standard time when the daylight saving time rules are in effect. A positive number, typically one hour (3600000).

**参见**

- #getDSTSavings

> *Since 1.2*
