---
id: "java-en-function-datetimeformatterbuilder-appendzoneid"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendZoneId"
signature: "public DateTimeFormatterBuilder appendZoneId()"
title: "DateTimeFormatterBuilder.appendZoneId"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendZoneId

```java
public DateTimeFormatterBuilder appendZoneId()
```

Appends the time-zone ID, such as 'Europe/Paris' or '+02:00', to the formatter.
 

 This appends an instruction to format/parse the zone ID to the builder.
 The zone ID is obtained in a strict manner suitable for `ZonedDateTime`.
 By contrast, `OffsetDateTime` does not have a zone ID suitable
 for use with this method, see `appendZoneOrOffsetId`.
 

 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `zoneId`.
 It will be printed using the result of `getId`.
 If the zone cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 

 During parsing, the text must match a known zone or offset.
 There are two types of zone ID, offset-based, such as '+01:30' and
 region-based, such as 'Europe/London'. These are parsed differently.
 If the parse starts with '+' or '-', then the parser expects an
 offset-based zone and will not match region-based zones. The offset
 ID parsing is equivalent to using `appendOffset`
 using the arguments 'HH:MM:ss' and the no offset string '0'.
 If the parse starts with 'UT', 'UTC' or 'GMT', and the parser can
 match a following offset, then a region-based zone with the parsed
 offset will be returned, or else if the parser cannot match a following
 offset, then `UTC` is selected.
 In all other cases, the list of known region-based zones is used to
 find the longest available match. If no match is found, and the parse
 starts with 'Z', then `ZoneOffset.UTC` is selected.
 The parser uses the `parseCaseInsensitive() case sensitive` setting.
 

 For example, the following will parse:
 
```

   "Europe/London"           -- ZoneId.of("Europe/London")
   "Z"                       -- ZoneOffset.UTC
   "UT"                      -- ZoneId.of("UT")
   "UTC"                     -- ZoneId.of("UTC")
   "GMT"                     -- ZoneId.of("GMT")
   "+01:30"                  -- ZoneOffset.of("+01:30")
   "UT+01:30"                -- ZoneId.of("UT+01:30")
   "UTC+01:30"               -- ZoneId.of("UTC+01:30")
   "GMT+01:30"               -- ZoneId.of("GMT+01:30")
 
```

**返回**

- this, for chaining, not null

**参见**

- #appendZoneRegionId()
