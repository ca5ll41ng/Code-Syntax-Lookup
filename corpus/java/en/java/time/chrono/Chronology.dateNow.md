---
id: "java-en-function-chronology-datenow"
language: "java"
lang: "en"
category: "function"
name: "Chronology.dateNow"
signature: "default ChronoLocalDate dateNow()"
title: "Chronology.dateNow"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.dateNow

```java
default ChronoLocalDate dateNow()
```

Obtains the current local date in this chronology from the system clock in the default time-zone.
 

 This will query the `systemDefaultZone() system clock` in the default
 time-zone to obtain the current date.
 

 Using this method will prevent the ability to use an alternate clock for testing
 because the clock is hard-coded.

 The default implementation invokes `dateNow`.

**返回**

- the current local date using the system clock and default time-zone, not null

**异常**

- **DateTimeException** — if unable to create the date
