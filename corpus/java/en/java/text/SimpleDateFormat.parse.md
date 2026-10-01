---
id: "java-en-function-simpledateformat-parse"
language: "java"
lang: "en"
category: "function"
name: "SimpleDateFormat.parse"
signature: "public Date parse(String text, ParsePosition pos)"
title: "SimpleDateFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleDateFormat.parse

```java
public Date parse(String text, ParsePosition pos)
```

Parses text from a string to produce a `Date`.
 

 The method attempts to parse text starting at the index given by
 `pos`.
 If parsing succeeds, then the index of `pos` is updated
 to the index after the last character used (parsing does not necessarily
 use all characters up to the end of the string), and the parsed
 date is returned. The updated `pos` can be used to
 indicate the starting point for the next call to this method.
 If an error occurs, then the index of `pos` is not
 changed, the error index of `pos` is set to the index of
 the character where the error occurred, and null is returned.

 

This parsing operation uses the `calendar
 calendar` to produce a `Date`. All of the `calendar`'s date-time fields are `clear()
 cleared` before parsing, and the `calendar`'s default
 values of the date-time fields are used for any missing
 date-time information. For example, the year value of the
 parsed `Date` is 1970 with `GregorianCalendar` if
 no year value is given from the parsing operation.  The `TimeZone` value may be overwritten, depending on the given
 pattern and the time zone value in `text`. Any `TimeZone` value that has previously been set by a call to
 `setTimeZone(java.util.TimeZone) setTimeZone` may need
 to be restored for further operations.

**参数**

- **text** — A `String`, part of which should be parsed.
- **pos** — A `ParsePosition` object with index and error index information as described above.

**返回**

- A `Date` parsed from the string. In case of error, returns null.

**异常**

- **NullPointerException** — if `text` or `pos` is null.
