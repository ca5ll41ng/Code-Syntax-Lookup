---
id: "java-en-function-zoneid-of"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.of"
signature: "public static ZoneId of(String zoneId, Map<String, String> aliasMap)"
title: "ZoneId.of"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.of

```java
public static ZoneId of(String zoneId, Map<String, String> aliasMap)
```

Obtains an instance of `ZoneId` using its ID using a map
 of aliases to supplement the standard zone IDs.
 

 Many users of time-zones use short abbreviations, such as PST for
 'Pacific Standard Time' and PDT for 'Pacific Daylight Time'.
 These abbreviations are not unique, and so cannot be used as IDs.
 This method allows a map of string to time-zone to be setup and reused
 within an application.

**参数**

- **zoneId** — the time-zone ID, not null
- **aliasMap** — a map of alias zone IDs (typically abbreviations) to real zone IDs, not null

**返回**

- the zone ID, not null

**异常**

- **DateTimeException** — if the zone ID has an invalid format
- **ZoneRulesException** — if the zone ID is a region ID that cannot be found
