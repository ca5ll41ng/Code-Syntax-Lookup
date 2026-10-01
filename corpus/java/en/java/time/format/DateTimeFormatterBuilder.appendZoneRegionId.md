---
id: "java-en-function-datetimeformatterbuilder-appendzoneregionid"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendZoneRegionId"
signature: "public DateTimeFormatterBuilder appendZoneRegionId()"
title: "DateTimeFormatterBuilder.appendZoneRegionId"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendZoneRegionId

```java
public DateTimeFormatterBuilder appendZoneRegionId()
```

Appends the time-zone region ID, such as 'Europe/Paris', to the formatter,
 rejecting the zone ID if it is a `ZoneOffset`.
 

 This appends an instruction to format only region-based zone IDs to the builder.
 

 During formatting, the zone is obtained using a mechanism equivalent
 to querying the temporal with `zoneId`.
 If the zone is a `ZoneOffset` or it cannot be obtained then
 an exception is thrown unless the section of the formatter is optional.
 If the zone is not an offset, then the zone will be printed using
 the zone ID from `getId`.
 

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

 

 Note that this method is identical to `appendZoneId()` except
 in the mechanism used to obtain the zone.
 Note also that parsing accepts offsets, whereas formatting will never
 produce one.

**返回**

- this, for chaining, not null

**参见**

- #appendZoneId()
