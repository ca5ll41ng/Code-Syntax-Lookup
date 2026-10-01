---
id: "java-en-function-zonerulesprovider-providerules"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.provideRules"
signature: "protected abstract ZoneRules provideRules(String zoneId, boolean forCaching)"
title: "ZoneRulesProvider.provideRules"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.provideRules

```java
protected abstract ZoneRules provideRules(String zoneId, boolean forCaching)
```

SPI method to get the rules for the zone ID.
 

 This loads the rules for the specified zone ID.
 The provider implementation must validate that the zone ID is valid and
 available, throwing a `ZoneRulesException` if it is not.
 The result of the method in the valid case depends on the caching flag.
 

 If the provider implementation is not dynamic, then the result of the
 method must be the non-null set of rules selected by the ID.
 

 If the provider implementation is dynamic, then the flag gives the option
 of preventing the returned rules from being cached in `ZoneId`.
 When the flag is true, the provider is permitted to return null, where
 null will prevent the rules from being cached in `ZoneId`.
 When the flag is false, the provider must return non-null rules.

**参数**

- **zoneId** — the zone ID as defined by `ZoneId`, not null
- **forCaching** — whether the rules are being queried for caching, true if the returned rules will be cached by `ZoneId`, false if they will be returned to the user without being cached in `ZoneId`

**返回**

- the rules, null if `forCaching` is true and this is a dynamic provider that wants to prevent caching in `ZoneId`, otherwise not null

**异常**

- **ZoneRulesException** — if rules cannot be obtained for the zone ID
