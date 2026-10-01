---
id: "java-en-function-provider-replaceall"
language: "java"
lang: "en"
category: "function"
name: "Provider.replaceAll"
signature: "public synchronized void replaceAll(BiFunction<? super Object, ? super Object, ? extends Object> function)"
title: "Provider.replaceAll"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider.replaceAll

```java
public synchronized void replaceAll(BiFunction<? super Object, ? super Object, ? extends Object> function)
```

Replaces each entry's value with the result of invoking the given
 function on that entry, in the order entries are returned by an entry
 set iterator, until all entries have been processed or the function
 throws an exception.

> *Since 1.8*
