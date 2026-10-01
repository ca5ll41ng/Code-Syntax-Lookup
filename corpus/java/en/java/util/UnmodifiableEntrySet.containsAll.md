---
id: "java-en-function-unmodifiableentryset-containsall"
language: "java"
lang: "en"
category: "function"
name: "UnmodifiableEntrySet.containsAll"
signature: "public boolean containsAll(Collection<?> coll)"
title: "UnmodifiableEntrySet.containsAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnmodifiableEntrySet.containsAll

```java
public boolean containsAll(Collection<?> coll)
```

The next two methods are overridden to protect against
 an unscrupulous List whose contains(Object o) method senses
 when o is a Map.Entry, and calls o.setValue.
