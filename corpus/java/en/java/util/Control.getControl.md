---
id: "java-en-function-control-getcontrol"
language: "java"
lang: "en"
category: "function"
name: "Control.getControl"
signature: "public static final Control getControl(List<String> formats)"
title: "Control.getControl"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.getControl

```java
public static final Control getControl(List<String> formats)
```

Returns a `ResourceBundle.Control` in which the `getFormats(String) getFormats` method returns the specified
 `formats`. The `formats` must be equal to
 one of `FORMAT_PROPERTIES`, `FORMAT_CLASS` or `FORMAT_DEFAULT`. `ResourceBundle.Control`
 instances returned by this method are singletons and thread-safe.

 

Specifying `FORMAT_DEFAULT` is equivalent to
 instantiating the `ResourceBundle.Control` class,
 except that this method returns a singleton.

**参数**

- **formats** — the formats to be returned by the `ResourceBundle.Control.getFormats` method

**返回**

- a `ResourceBundle.Control` supporting the specified `formats`

**异常**

- **NullPointerException** — if `formats` is `null`
- **IllegalArgumentException** — if `formats` is unknown
