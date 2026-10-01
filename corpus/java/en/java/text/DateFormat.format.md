---
id: "java-en-function-dateformat-format"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.format"
signature: "public final StringBuffer format(Object obj, StringBuffer toAppendTo, FieldPosition fieldPosition)"
title: "DateFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.format

```java
public final StringBuffer format(Object obj, StringBuffer toAppendTo, FieldPosition fieldPosition)
```

Formats the given `Object` into a date-time string. The formatted
 string is appended to the given `StringBuffer`.

**参数**

- **obj** — Must be a `Date` or a `Number` representing a millisecond offset from the Epoch.
- **toAppendTo** — The string buffer for the returning date-time string.
- **fieldPosition** — keeps track on the position of the field within the returned string. For example, given a date-time text `"1996.07.10 AD at 15:08:56 PDT"`, if the given `fieldPosition` is `YEAR_FIELD`, the begin index and end index of `fieldPosition` will be set to 0 and 4, respectively. Notice that if the same date-time field appears more than once in a pattern, the `fieldPosition` will be set for the first occurrence of that date-time field. For instance, formatting a `Date` to the date-time string `"1 PM PDT (Pacific Daylight Time)"` using the pattern `"h a z (zzzz)"` and the alignment field `TIMEZONE_FIELD`, the begin index and end index of `fieldPosition` will be set to 5 and 8, respectively, for the first occurrence of the timezone pattern character `'z'`.

**返回**

- the string buffer passed in as `toAppendTo`, with formatted text appended.

**异常**

- **IllegalArgumentException** — if the `Format` cannot format the given `obj`.

**参见**

- java.text.Format
