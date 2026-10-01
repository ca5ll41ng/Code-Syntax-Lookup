---
id: "java-en-function-datetimeformatter-oflocalizedpattern"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.ofLocalizedPattern"
signature: "public static DateTimeFormatter ofLocalizedPattern(String requestedTemplate)"
title: "DateTimeFormatter.ofLocalizedPattern"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.ofLocalizedPattern

```java
public static DateTimeFormatter ofLocalizedPattern(String requestedTemplate)
```

Creates a locale specific formatter derived from the requested template for
 the ISO chronology. The requested template is a series of typical pattern
 symbols in canonical order from the largest date or time unit to the smallest,
 which can be expressed with the following regular expression:
 {@snippet :
      "G{0,5}" +        // Era
      "y*" +            // Year
      "Q{0,5}" +        // Quarter
      "M{0,5}" +        // Month
      "w*" +            // Week of Week Based Year
      "E{0,5}" +        // Day of Week
      "d{0,2}" +        // Day of Month
      "B{0,5}" +        // Period/AmPm of Day
      "[hHjC]{0,2}" +   // Hour of Day/AmPm (refer to LDML for 'j' and 'C')
      "m{0,2}" +        // Minute of Hour
      "s{0,2}" +        // Second of Minute
      "[vz]{0,4}"       // Zone
 }
 All pattern symbols are optional, and each pattern symbol represents a field,
 for example, 'M' represents the Month field. The number of the pattern symbol letters follows the
 same presentation, such as "number" or "text" as in the Patterns for
 Formatting and Parsing section. Other pattern symbols in the requested template are
 invalid.
 

 The mapping of the requested template to the closest of the available localized formats
 is defined by the
 
 Unicode LDML specification. For example, the formatter created from the requested template
 `yMMM` will format the date '2020-06-16' to 'Jun 2020' in the `US US locale`.
 

 The locale is determined from the formatter. The formatter returned directly by
 this method uses the `getDefault() default FORMAT locale`.
 The locale can be controlled using `withLocale`
 on the result of this method.
 

 The returned formatter has no override zone.
 It uses `SMART SMART` resolver style.

**参数**

- **requestedTemplate** — the requested template, not null

**返回**

- the formatter based on the `requestedTemplate` pattern, not null

**异常**

- **IllegalArgumentException** — if `requestedTemplate` is invalid

**参见**

- #ofPattern(String)

> *Since 19*
