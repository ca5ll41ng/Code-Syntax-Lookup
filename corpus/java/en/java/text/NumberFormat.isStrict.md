---
id: "java-en-function-numberformat-isstrict"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.isStrict"
signature: "public boolean isStrict()"
title: "NumberFormat.isStrict"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.isStrict

```java
public boolean isStrict()
```

{@return `true` if this format will parse numbers strictly;
 `false` otherwise}

 when implementing strict parsing.

**异常**

- **UnsupportedOperationException** — if the implementation of this method does not support this operation

**参见**

- ##leniency Leniency Section
- #setStrict(boolean)

> *Since 23*
