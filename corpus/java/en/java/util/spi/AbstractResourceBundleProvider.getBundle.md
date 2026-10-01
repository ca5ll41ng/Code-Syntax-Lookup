---
id: "java-en-function-abstractresourcebundleprovider-getbundle"
language: "java"
lang: "en"
category: "function"
name: "AbstractResourceBundleProvider.getBundle"
signature: "public ResourceBundle getBundle(String baseName, Locale locale)"
title: "AbstractResourceBundleProvider.getBundle"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/AbstractResourceBundleProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractResourceBundleProvider.getBundle

```java
public ResourceBundle getBundle(String baseName, Locale locale)
```

Returns a `ResourceBundle` for the given `baseName` and
 `locale`.

 The default implementation of this method calls the
 `toBundleName(String, Locale) toBundleName` method to get the
 bundle name for the `baseName` and `locale` and finds the
 resource bundle of the bundle name local in the module of this provider.
 It will only search the formats specified when this provider was
 constructed.

**参数**

- **baseName** — the base bundle name of the resource bundle, a fully qualified class name.
- **locale** — the locale for which the resource bundle should be instantiated

**返回**

- `ResourceBundle` of the given `baseName` and `locale`, or `null` if no resource bundle is found

**异常**

- **NullPointerException** — if `baseName` or `locale` is `null`
- **UncheckedIOException** — if any IO exception occurred during resource bundle loading
