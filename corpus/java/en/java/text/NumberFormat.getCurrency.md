---
id: "java-en-function-numberformat-getcurrency"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.getCurrency"
signature: "public Currency getCurrency()"
title: "NumberFormat.getCurrency"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.getCurrency

```java
public Currency getCurrency()
```

Gets the currency used by this number format when formatting
 currency values. The initial value is derived in a locale dependent
 way. The returned value may be `null` if no valid
 currency could be determined and no currency has been set using
 `setCurrency`.

 if currency formatting is desired.

**返回**

- the currency used by this number format, or `null`

**异常**

- **UnsupportedOperationException** — if the implementation of this method does not support this operation

> *Since 1.4*
