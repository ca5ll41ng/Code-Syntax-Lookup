---
id: "java-en-function-datetimeformatterpatternprovider-getdatetimeformatterpattern"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterPatternProvider.getDateTimeFormatterPattern"
signature: "public abstract String getDateTimeFormatterPattern(FormatStyle dateStyle, FormatStyle timeStyle, String calType, Locale locale)"
title: "DateTimeFormatterPatternProvider.getDateTimeFormatterPattern"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterPatternProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterPatternProvider.getDateTimeFormatterPattern

```java
public abstract String getDateTimeFormatterPattern(FormatStyle dateStyle, FormatStyle timeStyle, String calType, Locale locale)
```

{@return the localized pattern string for the date style,
 time style, calendar type, and locale} Either `dateStyle` or
 `timeStyle` may be `null`. In such cases, the returned
 pattern represents only the time or only the date, respectively. If
 both are `null`, an `IllegalArgumentException` is thrown.

**参数**

- **dateStyle** — `FormatStyle` representing date style. `null` for time-only pattern
- **timeStyle** — `FormatStyle` representing time style. `null` for date-only pattern
- **locale** — `Locale` used to obtain the localized pattern. Non-null.
- **calType** — Non-null `String` representing a CLDR/LDML calendar type, such as "japanese", "iso8601".

**异常**

- **IllegalArgumentException** — if both `dateStyle` and `timeStyle` are `null`.
- **DateTimeException** — if no formatting pattern is available for the specified arguments.
- **NullPointerException** — if `calType` or `locale` is `null`.

**参见**

- Chronology#getCalendarType()
