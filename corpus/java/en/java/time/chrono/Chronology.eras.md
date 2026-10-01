---
id: "java-en-function-chronology-eras"
language: "java"
lang: "en"
category: "function"
name: "Chronology.eras"
signature: "List<Era> eras()"
title: "Chronology.eras"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.eras

```java
List<Era> eras()
```

Gets the list of eras for the chronology.
 

 Most calendar systems have an era, within which the year has meaning.
 If the calendar system does not support the concept of eras, an empty
 list must be returned.

**返回**

- the list of eras for the chronology, may be immutable, not null
