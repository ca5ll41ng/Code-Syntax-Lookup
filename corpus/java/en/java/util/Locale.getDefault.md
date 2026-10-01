---
id: "java-en-function-locale-getdefault"
language: "java"
lang: "en"
category: "function"
name: "Locale.getDefault"
signature: "public static Locale getDefault()"
title: "Locale.getDefault"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getDefault

```java
public static Locale getDefault()
```

Gets the current value of the `#default_locale default locale` for
 this instance of the Java Virtual Machine.
 

 The Java Virtual Machine sets the default locale during startup
 based on the host environment. It is used by many locale-sensitive
 methods if no locale is explicitly specified.
 It can be changed using the
 `setDefault` method.

**返回**

- the default locale for this instance of the Java Virtual Machine
