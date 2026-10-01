---
id: "java-en-function-calendar-getinstance"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getInstance"
signature: "public static Calendar getInstance()"
title: "Calendar.getInstance"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getInstance

```java
public static Calendar getInstance()
```

Gets a calendar using the default time zone and locale. The
 `Calendar` returned is based on the current time
 in the default time zone with the default
 `FORMAT FORMAT` locale.
 

 If the locale contains the time zone with "tz"
 `#def_locale_extension Unicode extension`,
 that time zone is used instead.

**返回**

- a Calendar.
