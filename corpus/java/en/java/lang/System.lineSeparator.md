---
id: "java-en-function-system-lineseparator"
language: "java"
lang: "en"
category: "function"
name: "System.lineSeparator"
signature: "public static String lineSeparator()"
title: "System.lineSeparator"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.lineSeparator

```java
public static String lineSeparator()
```

Returns the system-dependent line separator string.  It always
 returns the same value - the initial value of the `getProperty(String) system property` `line.separator`.

 

On UNIX systems, it returns `"\n"`; on Microsoft
 Windows systems it returns `"\r\n"`.

**返回**

- the system-dependent line separator string

> *Since 1.7*
