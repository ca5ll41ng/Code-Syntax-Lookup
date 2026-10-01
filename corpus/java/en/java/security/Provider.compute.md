---
id: "java-en-function-provider-compute"
language: "java"
lang: "en"
category: "function"
name: "Provider.compute"
signature: "public synchronized Object compute(Object key, BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction)"
title: "Provider.compute"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.compute

```java
public synchronized Object compute(Object key, BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction)
```

Attempts to compute a mapping for the specified key and its
 current mapped value (or `null` if there is no current
 mapping).

> *Since 1.8*
