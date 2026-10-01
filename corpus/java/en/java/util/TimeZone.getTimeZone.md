---
id: "java-en-function-timezone-gettimezone"
language: "java"
lang: "en"
category: "function"
name: "TimeZone.getTimeZone"
signature: "public static TimeZone getTimeZone(String ID)"
title: "TimeZone.getTimeZone"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimeZone.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeZone.getTimeZone

```java
public static TimeZone getTimeZone(String ID)
```

Gets the `TimeZone` for the given ID.

**参数**

- **ID** — the ID for a `TimeZone`, either an abbreviation such as "PST", a full name such as "America/Los_Angeles", or a custom ID such as "GMT-8:00". Note that the support of abbreviations is for JDK 1.1.x compatibility only and full names should be used.

**返回**

- the specified `TimeZone`, or the GMT zone if the given ID cannot be understood.

**异常**

- **NullPointerException** — if `ID` is `null`
