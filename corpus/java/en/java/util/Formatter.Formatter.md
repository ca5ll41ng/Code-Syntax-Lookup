---
id: "java-en-function-formatter-formatter"
language: "java"
lang: "en"
category: "function"
name: "Formatter.Formatter"
signature: "public Formatter()"
title: "Formatter.Formatter"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.Formatter

```java
public Formatter()
```

Constructs a new formatter.

 

 The destination of the formatted output is a `StringBuilder`
 which may be retrieved by invoking `out out` and whose
 current content may be converted into a string by invoking `toString toString`.  The locale used is the `getDefault(Locale.Category) default locale` for
 `FORMAT formatting` for this instance of the Java
 virtual machine.
