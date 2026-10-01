---
id: "java-en-function-simpledateformat-format"
language: "java"
lang: "en"
category: "function"
name: "SimpleDateFormat.format"
signature: "public StringBuffer format(Date date, StringBuffer toAppendTo, FieldPosition pos)"
title: "SimpleDateFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleDateFormat.format

```java
public StringBuffer format(Date date, StringBuffer toAppendTo, FieldPosition pos)
```

Formats the given `Date` into a date/time string and appends
 the result to the given `StringBuffer`.

**参数**

- **date** — the date-time value to be formatted into a date-time string.
- **toAppendTo** — where the new date-time text is to be appended.
- **pos** — keeps track on the position of the field within the returned string. For example, given a date-time text `"1996.07.10 AD at 15:08:56 PDT"`, if the given `fieldPosition` is `YEAR_FIELD`, the begin index and end index of `fieldPosition` will be set to 0 and 4, respectively. Notice that if the same date-time field appears more than once in a pattern, the `fieldPosition` will be set for the first occurrence of that date-time field. For instance, formatting a `Date` to the date-time string `"1 PM PDT (Pacific Daylight Time)"` using the pattern `"h a z (zzzz)"` and the alignment field `TIMEZONE_FIELD`, the begin index and end index of `fieldPosition` will be set to 5 and 8, respectively, for the first occurrence of the timezone pattern character `'z'`.

**返回**

- the formatted date-time string.

**异常**

- **NullPointerException** — if any of the parameters is `null`.
