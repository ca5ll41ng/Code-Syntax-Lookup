---
id: "java-en-function-zonerulesprovider-getversions"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.getVersions"
signature: "public static NavigableMap<String, ZoneRules> getVersions(String zoneId)"
title: "ZoneRulesProvider.getVersions"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.getVersions

```java
public static NavigableMap<String, ZoneRules> getVersions(String zoneId)
```

Gets the history of rules for the zone ID.
 

 Time-zones are defined by governments and change frequently.
 This method allows applications to find the history of changes to the
 rules for a single zone ID. The map is keyed by a string, which is the
 version string associated with the rules.
 

 The exact meaning and format of the version is provider specific.
 The version must follow lexicographical order, thus the returned map will
 be order from the oldest known rules to the newest available rules.
 The default 'TZDB' group uses version numbering consisting of the year
 followed by a letter, such as '2009e' or '2012f'.
 

 Implementations must provide a result for each valid zone ID, however
 they do not have to provide a history of rules.
 Thus the map will always contain one element, and will only contain more
 than one element if historical rule information is available.

**参数**

- **zoneId** — the zone ID as defined by `ZoneId`, not null

**返回**

- a modifiable copy of the history of the rules for the ID, sorted from oldest to newest, not null

**异常**

- **ZoneRulesException** — if history cannot be obtained for the zone ID
