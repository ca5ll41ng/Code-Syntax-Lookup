---
id: "java-en-function-abstractresourcebundleprovider-tobundlename"
language: "java"
lang: "en"
category: "function"
name: "AbstractResourceBundleProvider.toBundleName"
signature: "protected String toBundleName(String baseName, Locale locale)"
title: "AbstractResourceBundleProvider.toBundleName"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/AbstractResourceBundleProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractResourceBundleProvider.toBundleName

```java
protected String toBundleName(String baseName, Locale locale)
```

Returns the bundle name for the given `baseName` and `locale` that this provider provides.

 A resource bundle provider may package its resource bundles in the
 same package as the base name of the resource bundle if the package
 is not split among other named modules.  If there are more than one
 bundle providers providing the resource bundle of a given base name,
 the resource bundles can be packaged with per-language grouping
 or per-region grouping to eliminate the split packages.

 

For example, if `baseName` is `"p.resources.Bundle"` then
 the resource bundle name of `"p.resources.Bundle"` of
 Locale("ja", "", "XX")
 and `Locale("en")` could be 
 "p.resources.ja.Bundle_ja_&thinsp;_XX" and
 `"p.resources.Bundle_en"` respectively.

 

 This method is called from the default implementation of the
 `getBundle` method.

 implementation of
 `toBundleName`.

**参数**

- **baseName** — the base name of the resource bundle, a fully qualified class name
- **locale** — the locale for which a resource bundle should be loaded

**返回**

- the bundle name for the resource bundle
