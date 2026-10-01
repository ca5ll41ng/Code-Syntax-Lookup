---
id: "java-en-function-numericposition-setnegativeprefix"
language: "java"
lang: "en"
category: "function"
name: "NumericPosition.setNegativePrefix"
signature: "public void setNegativePrefix (String newValue)"
title: "NumericPosition.setNegativePrefix"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericPosition.setNegativePrefix

```java
public void setNegativePrefix (String newValue)
```

Set the negative prefix.
 

Examples: -123, ($123) (with negative suffix), sFr-123

**参数**

- **newValue** — the new negative prefix. Non-null.

**异常**

- **NullPointerException** — if `newValue` is `null`
