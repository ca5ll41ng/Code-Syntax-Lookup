---
id: "java-en-function-system-loggerfinder"
language: "java"
lang: "en"
category: "function"
name: "System.LoggerFinder"
signature: "protected LoggerFinder()"
title: "System.LoggerFinder"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.LoggerFinder

```java
protected LoggerFinder()
```

Creates a new instance of `LoggerFinder`.

   implementation does not perform any heavy initialization in its
   constructor, in order to avoid possible risks of deadlock or class
   loading cycles during the instantiation of the service provider.
