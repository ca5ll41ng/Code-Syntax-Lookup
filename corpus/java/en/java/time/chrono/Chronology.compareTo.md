---
id: "java-en-function-chronology-compareto"
language: "java"
lang: "en"
category: "function"
name: "Chronology.compareTo"
signature: "int compareTo(Chronology other)"
title: "Chronology.compareTo"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.compareTo

```java
int compareTo(Chronology other)
```

Compares this chronology to another chronology.
 

 The comparison order first by the chronology ID string, then by any
 additional information specific to the subclass.
 It is "consistent with equals", as defined by `Comparable`.

**参数**

- **other** — the other chronology to compare to, not null

**返回**

- the comparator value, that is this ID string compared with the `other`'s ID string unless the ID strings are equal and the chronology distinguishes instances using additional information
