---
id: "java-en-function-checkedentryset-containsall"
language: "java"
lang: "en"
category: "function"
name: "CheckedEntrySet.containsAll"
signature: "public boolean containsAll(Collection<?> c)"
title: "CheckedEntrySet.containsAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CheckedEntrySet.containsAll

```java
public boolean containsAll(Collection<?> c)
```

The bulk collection methods are overridden to protect
 against an unscrupulous collection whose contains(Object o)
 method senses when o is a Map.Entry, and calls o.setValue.
