---
id: "java-en-function-control-toresourcename"
language: "java"
lang: "en"
category: "function"
name: "Control.toResourceName"
signature: "public final String toResourceName(String bundleName, String suffix)"
title: "Control.toResourceName"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.toResourceName

```java
public final String toResourceName(String bundleName, String suffix)
```

Converts the given `bundleName` to the form required
 by the `getResource ClassLoader.getResource`
 method by replacing all occurrences of `'.'` in
 `bundleName` with `'/'` and appending a
 `'.'` and the given file `suffix`. For
 example, if `bundleName` is
 `"foo.bar.MyResources_ja_JP"` and `suffix`
 is `"properties"`, then
 `"foo/bar/MyResources_ja_JP.properties"` is returned.

**参数**

- **bundleName** — the bundle name
- **suffix** — the file type suffix

**返回**

- the converted resource name

**异常**

- **NullPointerException** — if `bundleName` or `suffix` is `null`
