---
id: "java-en-function-resourcebundle-getlocale"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.getLocale"
signature: "public Locale getLocale()"
title: "ResourceBundle.getLocale"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.getLocale

```java
public Locale getLocale()
```

Returns the locale of this resource bundle. This method can be used after a
 call to getBundle() to determine whether the resource bundle returned really
 corresponds to the requested locale or is a fallback.

**返回**

- the locale of this resource bundle
