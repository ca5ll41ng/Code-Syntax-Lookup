---
id: "java-en-function-provider-computeifabsent"
language: "java"
lang: "en"
category: "function"
name: "Provider.computeIfAbsent"
signature: "public synchronized Object computeIfAbsent(Object key, Function<? super Object, ? extends Object> mappingFunction)"
title: "Provider.computeIfAbsent"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.computeIfAbsent

```java
public synchronized Object computeIfAbsent(Object key, Function<? super Object, ? extends Object> mappingFunction)
```

If the specified key is not already associated with a value (or
 is mapped to `null`), attempts to compute its value using
 the given mapping function and enters it into this map unless
 `null`.

> *Since 1.8*
