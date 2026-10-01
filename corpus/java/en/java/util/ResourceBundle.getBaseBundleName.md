---
id: "java-en-function-resourcebundle-getbasebundlename"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.getBaseBundleName"
signature: "public String getBaseBundleName()"
title: "ResourceBundle.getBaseBundleName"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.getBaseBundleName

```java
public String getBaseBundleName()
```

Returns the base name of this bundle, if known, or `null` if unknown.

 If not null, then this is the value of the `baseName` parameter
 that was passed to the `ResourceBundle.getBundle(...)` method
 when the resource bundle was loaded.

**返回**

- The base name of the resource bundle, as provided to and expected by the `ResourceBundle.getBundle(...)` methods.

**参见**

- #getBundle(java.lang.String, java.util.Locale, java.lang.ClassLoader)

> *Since 1.8*
