---
id: "java-en-function-zonerulesprovider-getrules"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.getRules"
signature: "public static ZoneRules getRules(String zoneId, boolean forCaching)"
title: "ZoneRulesProvider.getRules"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.getRules

```java
public static ZoneRules getRules(String zoneId, boolean forCaching)
```

Gets the rules for the zone ID.
 

 This returns the latest available rules for the zone ID.
 

 This method relies on time-zone data provider files that are configured.
 These are loaded using a `ServiceLoader`.
 

 The caching flag is designed to allow provider implementations to
 prevent the rules being cached in `ZoneId`.
 Under normal circumstances, the caching of zone rules is highly desirable
 as it will provide greater performance. However, there is a use case where
 the caching would not be desirable, see `provideRules`.

**参数**

- **zoneId** — the zone ID as defined by `ZoneId`, not null
- **forCaching** — whether the rules are being queried for caching, true if the returned rules will be cached by `ZoneId`, false if they will be returned to the user without being cached in `ZoneId`

**返回**

- the rules, null if `forCaching` is true and this is a dynamic provider that wants to prevent caching in `ZoneId`, otherwise not null

**异常**

- **ZoneRulesException** — if rules cannot be obtained for the zone ID
