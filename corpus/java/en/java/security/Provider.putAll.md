---
id: "java-en-function-provider-putall"
language: "java"
lang: "en"
category: "function"
name: "Provider.putAll"
signature: "public synchronized void putAll(Map<?,?> t)"
title: "Provider.putAll"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.putAll

```java
public synchronized void putAll(Map<?,?> t)
```

Copies all the mappings from the specified Map to this `Provider`.
 These mappings will replace any properties that this `Provider` had
 for any of the keys currently in the specified Map.

> *Since 1.2*
