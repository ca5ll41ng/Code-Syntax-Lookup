---
id: "java-en-function-unmodifiableentryset-contains"
language: "java"
lang: "en"
category: "function"
name: "UnmodifiableEntrySet.contains"
signature: "public boolean contains(Object o)"
title: "UnmodifiableEntrySet.contains"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnmodifiableEntrySet.contains

```java
public boolean contains(Object o)
```

This method is overridden to protect the backing set against
 an object with a nefarious equals function that senses
 that the equality-candidate is Map.Entry and calls its
 setValue method.
