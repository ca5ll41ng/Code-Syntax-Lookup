---
id: "java-en-function-zonerulesprovider-provideversions"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.provideVersions"
signature: "protected abstract NavigableMap<String, ZoneRules> provideVersions(String zoneId)"
title: "ZoneRulesProvider.provideVersions"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.provideVersions

```java
protected abstract NavigableMap<String, ZoneRules> provideVersions(String zoneId)
```

SPI method to get the history of rules for the zone ID.
 

 This returns a map of historical rules keyed by a version string.
 The exact meaning and format of the version is provider specific.
 The version must follow lexicographical order, thus the returned map will
 be order from the oldest known rules to the newest available rules.
 The default 'TZDB' group uses version numbering consisting of the year
 followed by a letter, such as '2009e' or '2012f'.
 

 Implementations must provide a result for each valid zone ID, however
 they do not have to provide a history of rules.
 Thus the map will contain at least one element, and will only contain
 more than one element if historical rule information is available.
 

 The returned versions remain available and valid for the lifetime of the application.
 A dynamic provider may increase the set of versions as more data becomes available.

**参数**

- **zoneId** — the zone ID as defined by `ZoneId`, not null

**返回**

- a modifiable copy of the history of the rules for the ID, sorted from oldest to newest, not null

**异常**

- **ZoneRulesException** — if history cannot be obtained for the zone ID
