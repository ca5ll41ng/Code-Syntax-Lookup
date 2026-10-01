---
id: "java-en-function-chronology-getavailablechronologies"
language: "java"
lang: "en"
category: "function"
name: "Chronology.getAvailableChronologies"
signature: "static Set<Chronology> getAvailableChronologies()"
title: "Chronology.getAvailableChronologies"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.getAvailableChronologies

```java
static Set<Chronology> getAvailableChronologies()
```

Returns the available chronologies.
 

 Each returned `Chronology` is available for use in the system.
 The set of chronologies includes the system chronologies and
 any chronologies provided by the application via ServiceLoader
 configuration.

**返回**

- the independent, modifiable set of the available chronology IDs, not null
