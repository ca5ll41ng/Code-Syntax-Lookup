---
id: "java-en-function-cleanable-clean"
language: "java"
lang: "en"
category: "function"
name: "Cleanable.clean"
signature: "void clean()"
title: "Cleanable.clean"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Cleaner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cleanable.clean

```java
void clean()
```

Unregisters the cleanable and invokes the cleaning action.
 The cleanable's cleaning action is invoked at most once
 regardless of the number of calls to `clean`.
