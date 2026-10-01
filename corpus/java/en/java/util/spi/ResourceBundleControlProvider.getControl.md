---
id: "java-en-function-resourcebundlecontrolprovider-getcontrol"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundleControlProvider.getControl"
signature: "public ResourceBundle.Control getControl(String baseName)"
title: "ResourceBundleControlProvider.getControl"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/ResourceBundleControlProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundleControlProvider.getControl

```java
public ResourceBundle.Control getControl(String baseName)
```

Returns a `ResourceBundle.Control` instance that is used
 to handle resource bundle loading for the given `baseName`. This method must return `null` if the given
 `baseName` isn't handled by this provider.

**参数**

- **baseName** — the base name of the resource bundle

**返回**

- a `ResourceBundle.Control` instance, or `null` if the given `baseName` is not applicable to this provider.

**异常**

- **NullPointerException** — if `baseName` is `null`
