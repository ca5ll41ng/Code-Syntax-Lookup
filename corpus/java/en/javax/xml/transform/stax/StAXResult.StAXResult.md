---
id: "java-en-function-staxresult-staxresult"
language: "java"
lang: "en"
category: "function"
name: "StAXResult.StAXResult"
signature: "public StAXResult(final XMLEventWriter xmlEventWriter)"
title: "StAXResult.StAXResult"
directive: "method"
module: "java.xml/javax.xml.transform.stax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stax/StAXResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StAXResult.StAXResult

```java
public StAXResult(final XMLEventWriter xmlEventWriter)
```

Creates a new instance of a StAXResult
 by supplying an `XMLEventWriter`.

 

XMLEventWriter must be a
 non-null reference.

**参数**

- **xmlEventWriter** — XMLEventWriter used to create this StAXResult.

**异常**

- **IllegalArgumentException** — If xmlEventWriter == null.
