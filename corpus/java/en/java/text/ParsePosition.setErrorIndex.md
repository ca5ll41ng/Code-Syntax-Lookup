---
id: "java-en-function-parseposition-seterrorindex"
language: "java"
lang: "en"
category: "function"
name: "ParsePosition.setErrorIndex"
signature: "public void setErrorIndex(int ei)"
title: "ParsePosition.setErrorIndex"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ParsePosition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParsePosition.setErrorIndex

```java
public void setErrorIndex(int ei)
```

Set the index at which a parse error occurred.  Formatters
 should set this before returning an error code from their
 parseObject method.  The default value is -1 if this is not set.

**参数**

- **ei** — the index at which an error occurred

> *Since 1.2*
