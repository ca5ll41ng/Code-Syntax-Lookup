---
id: "java-en-function-zonerulesprovider-refresh"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.refresh"
signature: "public static boolean refresh()"
title: "ZoneRulesProvider.refresh"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.refresh

```java
public static boolean refresh()
```

Refreshes the rules from the underlying data provider.
 

 This method allows an application to request that the providers check
 for any updates to the provided rules.
 After calling this method, the offset stored in any `ZonedDateTime`
 may be invalid for the zone ID.
 

 Dynamic update of rules is a complex problem and most applications
 should not use this method or dynamic rules.
 To achieve dynamic rules, a provider implementation will have to be written
 as per the specification of this class.
 In addition, instances of `ZoneRules` must not be cached in the
 application as they will become stale. However, the boolean flag on
 `provideRules` allows provider implementations
 to control the caching of `ZoneId`, potentially ensuring that
 all objects in the system see the new rules.
 Note that there is likely to be a cost in performance of a dynamic rules
 provider. Note also that no dynamic rules provider is in this specification.

**返回**

- true if the rules were updated

**异常**

- **ZoneRulesException** — if an error occurs during the refresh
