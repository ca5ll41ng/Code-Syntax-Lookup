---
id: "java-en-function-provider-putifabsent"
language: "java"
lang: "en"
category: "function"
name: "Provider.putIfAbsent"
signature: "public synchronized Object putIfAbsent(Object key, Object value)"
title: "Provider.putIfAbsent"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.putIfAbsent

```java
public synchronized Object putIfAbsent(Object key, Object value)
```

If the specified key is not already associated with a value (or is mapped
 to `null`) associates it with the given value and returns
 `null`, else returns the current value.

> *Since 1.8*
