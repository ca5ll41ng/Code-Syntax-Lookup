---
id: "java-en-function-datetimeformatter-ofpattern"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.ofPattern"
signature: "public static DateTimeFormatter ofPattern(String pattern)"
title: "DateTimeFormatter.ofPattern"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.ofPattern

```java
public static DateTimeFormatter ofPattern(String pattern)
```

Creates a formatter using the specified pattern.
 

 This method will create a formatter based on a simple
 pattern of letters and symbols
 as described in the class documentation.
 For example, `d MMM uuuu` will format 2011-12-03 as '3 Dec 2011'.
 

 The formatter will use the `getDefault(Locale.Category) default FORMAT locale`.
 This can be changed using `withLocale` on the returned formatter.
 Alternatively use the `ofPattern` variant of this method.
 

 The returned formatter has no override chronology or zone.
 It uses `SMART SMART` resolver style.

**参数**

- **pattern** — the pattern to use, not null

**返回**

- the formatter based on the pattern, not null

**异常**

- **IllegalArgumentException** — if the pattern is invalid

**参见**

- DateTimeFormatterBuilder#appendPattern(String)
