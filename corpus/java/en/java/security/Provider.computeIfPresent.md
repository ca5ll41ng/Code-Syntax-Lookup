---
id: "java-en-function-provider-computeifpresent"
language: "java"
lang: "en"
category: "function"
name: "Provider.computeIfPresent"
signature: "public synchronized Object computeIfPresent(Object key, BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction)"
title: "Provider.computeIfPresent"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.computeIfPresent

```java
public synchronized Object computeIfPresent(Object key, BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction)
```

If the value for the specified key is present and non-null, attempts to
 compute a new mapping given the key and its current mapped value.

> *Since 1.8*
