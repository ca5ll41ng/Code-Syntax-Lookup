---
id: "java-en-function-resourcebundle-getbundle"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.getBundle"
signature: "public static final ResourceBundle getBundle(String baseName)"
title: "ResourceBundle.getBundle"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.getBundle

```java
public static final ResourceBundle getBundle(String baseName)
```

Gets a resource bundle using the specified base name, the default locale,
 and the caller module. Calling this method is equivalent to calling
 {@snippet lang=java :
     getBundle(baseName, Locale.getDefault(), callerModule);
 }

**参数**

- **baseName** — the base name of the resource bundle, a fully qualified class name

**返回**

- a resource bundle for the given base name and the default locale

**异常**

- **java.lang.NullPointerException** — if `baseName` is `null`
- **MissingResourceException** — if no resource bundle for the specified base name can be found

**参见**

- Resource Bundle Search and Loading Strategy
- Resource Bundles and Named Modules
