---
id: "java-en-function-resourcebundleprovider-getbundle"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundleProvider.getBundle"
signature: "public ResourceBundle getBundle(String baseName, Locale locale)"
title: "ResourceBundleProvider.getBundle"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/ResourceBundleProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundleProvider.getBundle

```java
public ResourceBundle getBundle(String baseName, Locale locale)
```

Returns a `ResourceBundle` for the given bundle name and locale.
 This method returns `null` if there is no `ResourceBundle`
 found for the given parameters.

**参数**

- **baseName** — the base bundle name of the resource bundle, a fully qualified class name
- **locale** — the locale for which the resource bundle should be loaded

**返回**

- the ResourceBundle created for the given parameters, or null if no `ResourceBundle` for the given parameters is found
