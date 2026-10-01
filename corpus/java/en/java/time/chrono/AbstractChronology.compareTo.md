---
id: "java-en-function-abstractchronology-compareto"
language: "java"
lang: "en"
category: "function"
name: "AbstractChronology.compareTo"
signature: "public int compareTo(Chronology other)"
title: "AbstractChronology.compareTo"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/AbstractChronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractChronology.compareTo

```java
public int compareTo(Chronology other)
```

Compares this chronology to another chronology.
 

 The comparison order first by the chronology ID string, then by any
 additional information specific to the subclass.
 It is "consistent with equals", as defined by `Comparable`.

 This implementation compares the chronology ID.
 Subclasses must compare any additional state that they store.

**参数**

- **other** — the other chronology to compare to, not null

**返回**

- the comparator value, that is this ID string compared with the `other`'s ID string
