---
id: "java-en-function-temporalfield-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.getDisplayName"
signature: "default String getDisplayName(Locale locale)"
title: "TemporalField.getDisplayName"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.getDisplayName

```java
default String getDisplayName(Locale locale)
```

Gets the display name for the field in the requested locale.
 

 If there is no display name for the locale then a suitable default must be returned.
 

 The default implementation must check the locale is not null
 and return `toString()`.

**参数**

- **locale** — the locale to use, not null

**返回**

- the display name for the locale or a suitable default, not null
