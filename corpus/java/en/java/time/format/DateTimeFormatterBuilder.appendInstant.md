---
id: "java-en-function-datetimeformatterbuilder-appendinstant"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendInstant"
signature: "public DateTimeFormatterBuilder appendInstant()"
title: "DateTimeFormatterBuilder.appendInstant"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendInstant

```java
public DateTimeFormatterBuilder appendInstant()
```

Appends an instant using ISO-8601 to the formatter, formatting fractional
 digits in groups of three.
 

 Instants have a fixed output format.
 They are converted to a date-time with a zone-offset of UTC and formatted
 using the standard ISO-8601 format.
 With this method, formatting nano-of-second outputs zero, three, six
 or nine digits as necessary.
 The localized decimal style is not used.
 

 The instant is obtained using `INSTANT_SECONDS INSTANT_SECONDS`
 and optionally `NANO_OF_SECOND`. The value of `INSTANT_SECONDS`
 may be outside the maximum range of `LocalDateTime`.
 

 The `ResolverStyle resolver style` has no effect on instant parsing.
 The end-of-day time of '24:00' is handled as midnight at the start of the following day.
 The leap-second time of '23:59:59' is handled to some degree, see
 `parsedLeapSecond` for full details.
 

 When formatting, the instant will always be suffixed by 'Z' to indicate UTC.
 When parsing, the lenient mode behaviour of
 `appendOffset(String, String)
 appendOffset` will be used to parse the offset,
 converting the instant to UTC as necessary.
 

 An alternative to this method is to format/parse the instant as a single
 epoch-seconds value. That is achieved using `appendValue(INSTANT_SECONDS)`.

**返回**

- this, for chaining, not null
