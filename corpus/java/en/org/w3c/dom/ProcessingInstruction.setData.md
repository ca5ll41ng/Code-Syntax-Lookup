---
id: "java-en-function-processinginstruction-setdata"
language: "java"
lang: "en"
category: "function"
name: "ProcessingInstruction.setData"
signature: "public void setData(String data) throws DOMException"
title: "ProcessingInstruction.setData"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ProcessingInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessingInstruction.setData

```java
public void setData(String data) throws DOMException
```

The content of this processing instruction. This is from the first non
 white space character after the target to the character immediately
 preceding the ?&gt;.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised when the node is readonly.
