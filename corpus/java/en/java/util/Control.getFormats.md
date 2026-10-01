---
id: "java-en-function-control-getformats"
language: "java"
lang: "en"
category: "function"
name: "Control.getFormats"
signature: "public List<String> getFormats(String baseName)"
title: "Control.getFormats"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.getFormats

```java
public List<String> getFormats(String baseName)
```

Returns a `List` of `String`s containing
 formats to be used to load resource bundles for the given
 `baseName`. The `ResourceBundle.getBundle`
 factory method tries to load resource bundles with formats in the
 order specified by the list. The list returned by this method
 must have at least one `String`. The predefined
 formats are `"java.class"` for class-based resource
 bundles and `"java.properties"` for `PropertyResourceBundle properties-based` ones. Strings starting
 with `"java."` are reserved for future extensions and
 must not be used by application-defined formats.

 

It is not a requirement to return an immutable (unmodifiable)
 `List`.  However, the returned `List` must
 not be mutated after it has been returned by
 `getFormats`.

 

The default implementation returns `FORMAT_DEFAULT` so
 that the `ResourceBundle.getBundle` factory method
 looks up first class-based resource bundles, then
 properties-based ones.

**参数**

- **baseName** — the base name of the resource bundle, a fully qualified class name

**返回**

- a `List` of `String`s containing formats for loading resource bundles.

**异常**

- **NullPointerException** — if `baseName` is null

**参见**

- #FORMAT_DEFAULT
- #FORMAT_CLASS
- #FORMAT_PROPERTIES
