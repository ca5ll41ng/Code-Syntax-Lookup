---
id: "java-en-function-zonerulesprovider-providezoneids"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.provideZoneIds"
signature: "protected abstract Set<String> provideZoneIds()"
title: "ZoneRulesProvider.provideZoneIds"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.provideZoneIds

```java
protected abstract Set<String> provideZoneIds()
```

SPI method to get the available zone IDs.
 

 This obtains the IDs that this `ZoneRulesProvider` provides.
 A provider should provide data for at least one zone ID.
 

 The returned zone IDs remain available and valid for the lifetime of the application.
 A dynamic provider may increase the set of IDs as more data becomes available.

**返回**

- the set of zone IDs being provided, not null

**异常**

- **ZoneRulesException** — if a problem occurs while providing the IDs
