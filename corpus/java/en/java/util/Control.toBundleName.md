---
id: "java-en-function-control-tobundlename"
language: "java"
lang: "en"
category: "function"
name: "Control.toBundleName"
signature: "public String toBundleName(String baseName, Locale locale)"
title: "Control.toBundleName"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.toBundleName

```java
public String toBundleName(String baseName, Locale locale)
```

Converts the given `baseName` and `locale`
 to the bundle name. This method is called from the default
 implementation of the `newBundle(String, Locale, String,
 ClassLoader, boolean) newBundle` and `needsReload(String,
 Locale, String, ClassLoader, ResourceBundle, long) needsReload`
 methods.

 

This implementation returns the following value:
 
```

     baseName + "_" + language + "_" + script + "_" + country + "_" + variant
 
```

 where `language`, `script`, `country`,
 and `variant` are the language, script, country, and variant
 values of `locale`, respectively. Final component values that
 are empty Strings are omitted along with the preceding '_'.  When the
 script is empty, the script value is omitted along with the preceding '_'.
 If all of the values are empty strings, then `baseName`
 is returned.

 

For example, if `baseName` is
 `"baseName"` and `locale` is
 Locale("ja",&nbsp;"",&nbsp;"XX"), then
 "baseName_ja_&thinsp;_XX" is returned. If the given
 locale is `Locale("en")`, then
 `"baseName_en"` is returned.

 

Overriding this method allows applications to use different
 conventions in the organization and packaging of localized
 resources.

**参数**

- **baseName** — the base name of the resource bundle, a fully qualified class name
- **locale** — the locale for which a resource bundle should be loaded

**返回**

- the bundle name for the resource bundle

**异常**

- **NullPointerException** — if `baseName` or `locale` is `null`

**参见**

- java.util.spi.AbstractResourceBundleProvider#toBundleName(String, Locale)
