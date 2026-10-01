---
id: "java-en-function-zonerulesprovider-providerefresh"
language: "java"
lang: "en"
category: "function"
name: "ZoneRulesProvider.provideRefresh"
signature: "protected boolean provideRefresh()"
title: "ZoneRulesProvider.provideRefresh"
directive: "method"
module: "java.base/java.time.zone"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/zone/ZoneRulesProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneRulesProvider.provideRefresh

```java
protected boolean provideRefresh()
```

SPI method to refresh the rules from the underlying data provider.
 

 This method provides the opportunity for a provider to dynamically
 recheck the underlying data provider to find the latest rules.
 This could be used to load new rules without stopping the JVM.
 Dynamic behavior is entirely optional and most providers do not support it.
 

 This implementation returns false.

**返回**

- true if the rules were updated

**异常**

- **ZoneRulesException** — if an error occurs during the refresh
