---
id: "java-en-function-provider-merge"
language: "java"
lang: "en"
category: "function"
name: "Provider.merge"
signature: "public synchronized Object merge(Object key, Object value, BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction)"
title: "Provider.merge"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.merge

```java
public synchronized Object merge(Object key, Object value, BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction)
```

If the specified key is not already associated with a value or is
 associated with `null`, associates it with the given value.
 Otherwise, replaces the value with the results of the given remapping
 function, or removes if the result is `null`. This method may be
 of use when combining multiple mapped values for a key.

> *Since 1.8*
