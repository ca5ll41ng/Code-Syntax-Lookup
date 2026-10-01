---
id: "java-en-function-datetimeformatterbuilder-appendoffset"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendOffset"
signature: "public DateTimeFormatterBuilder appendOffset(String pattern, String noOffsetText)"
title: "DateTimeFormatterBuilder.appendOffset"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendOffset

```java
public DateTimeFormatterBuilder appendOffset(String pattern, String noOffsetText)
```

Appends the zone offset, such as '+01:00', to the formatter.
 

 This appends an instruction to format/parse the offset ID to the builder.
 

 During formatting, the offset is obtained using a mechanism equivalent
 to querying the temporal with `offset`.
 It will be printed using the format defined below.
 If the offset cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 

 When parsing in strict mode, the input must contain the mandatory
 and optional elements are defined by the specified pattern.
 If the offset cannot be parsed then an exception is thrown unless
 the section of the formatter is optional.
 

 When parsing in lenient mode, only the hours are mandatory - minutes
 and seconds are optional. The colons are required if the specified
 pattern contains a colon. If the specified pattern is "+HH", the
 presence of colons is determined by whether the character after the
 hour digits is a colon or not.
 If the offset cannot be parsed then an exception is thrown unless
 the section of the formatter is optional.
 

 The format of the offset is controlled by a pattern which must be one
 of the following:
 
 
- `+HH` - hour only, ignoring minute and second
 
- `+HHmm` - hour, with minute if non-zero, ignoring second, no colon
 
- `+HH:mm` - hour, with minute if non-zero, ignoring second, with colon
 
- `+HHMM` - hour and minute, ignoring second, no colon
 
- `+HH:MM` - hour and minute, ignoring second, with colon
 
- `+HHMMss` - hour and minute, with second if non-zero, no colon
 
- `+HH:MM:ss` - hour and minute, with second if non-zero, with colon
 
- `+HHMMSS` - hour, minute and second, no colon
 
- `+HH:MM:SS` - hour, minute and second, with colon
 
- `+HHmmss` - hour, with minute if non-zero or with minute and
 second if non-zero, no colon
 
- `+HH:mm:ss` - hour, with minute if non-zero or with minute and
 second if non-zero, with colon
 
- `+H` - hour only, ignoring minute and second
 
- `+Hmm` - hour, with minute if non-zero, ignoring second, no colon
 
- `+H:mm` - hour, with minute if non-zero, ignoring second, with colon
 
- `+HMM` - hour and minute, ignoring second, no colon
 
- `+H:MM` - hour and minute, ignoring second, with colon
 
- `+HMMss` - hour and minute, with second if non-zero, no colon
 
- `+H:MM:ss` - hour and minute, with second if non-zero, with colon
 
- `+HMMSS` - hour, minute and second, no colon
 
- `+H:MM:SS` - hour, minute and second, with colon
 
- `+Hmmss` - hour, with minute if non-zero or with minute and
 second if non-zero, no colon
 
- `+H:mm:ss` - hour, with minute if non-zero or with minute and
 second if non-zero, with colon
 

 Patterns containing "HH" will format and parse a two digit hour,
 zero-padded if necessary. Patterns containing "H" will format with no
 zero-padding, and parse either one or two digits.
 In lenient mode, the parser will be greedy and parse the maximum digits possible.
 The "no offset" text controls what text is printed when the total amount of
 the offset fields to be output is zero.
 Example values would be 'Z', '+00:00', 'UTC' or 'GMT'.
 Three formats are accepted for parsing UTC - the "no offset" text, and the
 plus and minus versions of zero defined by the pattern.

**参数**

- **pattern** — the pattern to use, not null
- **noOffsetText** — the text to use when the offset is zero, not null

**返回**

- this, for chaining, not null

**异常**

- **IllegalArgumentException** — if the pattern is invalid
