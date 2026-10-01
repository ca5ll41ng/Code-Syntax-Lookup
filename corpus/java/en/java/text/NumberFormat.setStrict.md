---
id: "java-en-function-numberformat-setstrict"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.setStrict"
signature: "public void setStrict(boolean strict)"
title: "NumberFormat.setStrict"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.setStrict

```java
public void setStrict(boolean strict)
```

Change the leniency value for parsing. Parsing can either be strict or lenient,
 by default it is lenient.

 when implementing strict parsing.

**参数**

- **strict** — `true` if parsing should be done strictly; `false` otherwise

**异常**

- **UnsupportedOperationException** — if the implementation of this method does not support this operation

**参见**

- ##leniency Leniency Section
- #isStrict()

> *Since 23*
