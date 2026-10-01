---
id: "java-en-function-numberformat-setcurrency"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.setCurrency"
signature: "public void setCurrency(Currency currency)"
title: "NumberFormat.setCurrency"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.setCurrency

```java
public void setCurrency(Currency currency)
```

Sets the currency used by this number format when formatting
 currency values. This does not update the minimum or maximum
 number of fraction digits used by the number format.

 if currency formatting is desired.

**参数**

- **currency** — the new currency to be used by this number format

**异常**

- **NullPointerException** — if `currency` is `null`
- **UnsupportedOperationException** — if the implementation of this method does not support this operation

> *Since 1.4*
