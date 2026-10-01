---
id: "java-en-function-chronoperiod-get"
language: "java"
lang: "en"
category: "function"
name: "ChronoPeriod.get"
signature: "long get(TemporalUnit unit)"
title: "ChronoPeriod.get"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/ChronoPeriod.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChronoPeriod.get

```java
long get(TemporalUnit unit)
```

Gets the value of the requested unit.
 

 The supported units are chronology specific.
 They will typically be `YEARS YEARS`,
 `MONTHS MONTHS` and `DAYS DAYS`.
 Requesting an unsupported unit will throw an exception.

**参数**

- **unit** — the `TemporalUnit` for which to return the value

**返回**

- the long value of the unit

**异常**

- **DateTimeException** — if the unit is not supported
- **UnsupportedTemporalTypeException** — if the unit is not supported
