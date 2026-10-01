---
id: "java-en-function-timezone-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.getDisplayName"
signature: "public final String getDisplayName()"
title: "TimeZone.getDisplayName"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.getDisplayName

```java
public final String getDisplayName()
```

Returns a long standard time name of this `TimeZone` suitable for
 presentation to the user in the default locale.

 

This method is equivalent to:
 
 {@snippet lang=java :
 // @link substring="LONG" target="#LONG" :
 getDisplayName(false, LONG,
                // @link substring="Locale.Category.DISPLAY" target="Locale.Category#DISPLAY" :
                Locale.getDefault(Locale.Category.DISPLAY));
 }

**返回**

- the human-readable name of this time zone in the default locale.

**参见**

- #getDisplayName(boolean, int, Locale)
- Locale#getDefault(Locale.Category)
- Locale.Category

> *Since 1.2*
