---
id: "java-en-function-formatter-locale"
language: "java"
lang: "en"
category: "function"
name: "Formatter.locale"
signature: "public Locale locale()"
title: "Formatter.locale"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.locale

```java
public Locale locale()
```

Returns the locale set by the construction of this formatter.

 

 The `format(java.util.Locale,String,Object...) format` method
 for this object which has a locale argument does not change this value.

**返回**

- `null` if no localization is applied, otherwise a locale

**异常**

- **FormatterClosedException** — If this formatter has been closed by invoking its `close` method
