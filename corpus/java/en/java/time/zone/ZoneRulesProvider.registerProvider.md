---
id: "java-en-function-zonerulesprovider-registerprovider"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.registerProvider"
signature: "public static void registerProvider(ZoneRulesProvider provider)"
title: "ZoneRulesProvider.registerProvider"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.registerProvider

```java
public static void registerProvider(ZoneRulesProvider provider)
```

Registers a zone rules provider.
 

 This adds a new provider to those currently available.
 A provider supplies rules for one or more zone IDs.
 A provider cannot be registered if it supplies a zone ID that has already been
 registered. See the notes on time-zone IDs in `ZoneId`, especially
 the section on using the concept of a "group" to make IDs unique.
 

 To ensure the integrity of time-zones already created, there is no way
 to deregister providers.

**参数**

- **provider** — the provider to register, not null

**异常**

- **ZoneRulesException** — if a zone ID is already registered
