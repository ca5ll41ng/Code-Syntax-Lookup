---
id: "java-en-function-chronology-of"
language: "java"
lang: "en"
category: "function"
name: "Chronology.of"
signature: "static Chronology of(String id)"
title: "Chronology.of"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.of

```java
static Chronology of(String id)
```

Obtains an instance of `Chronology` from a chronology ID or
 calendar system type.
 

 This returns a chronology based on either the ID or the type.
 The `getId() chronology ID` uniquely identifies the chronology.
 The `getCalendarType() calendar system type` is defined by the
 CLDR specification.
 

 The chronology may be a system chronology or a chronology
 provided by the application via ServiceLoader configuration.
 

 Since some calendars can be customized, the ID or type typically refers
 to the default customization. For example, the Gregorian calendar can have multiple
 cutover dates from the Julian, but the lookup only provides the default cutover date.

**参数**

- **id** — the chronology ID or calendar system type, not null

**返回**

- the chronology with the identifier requested, not null

**异常**

- **DateTimeException** — if the chronology cannot be found
