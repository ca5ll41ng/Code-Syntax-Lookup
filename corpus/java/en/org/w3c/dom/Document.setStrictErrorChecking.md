---
id: "java-en-function-document-setstricterrorchecking"
language: "java"
lang: "en"
category: "function"
name: "Document.setStrictErrorChecking"
signature: "public void setStrictErrorChecking(boolean strictErrorChecking)"
title: "Document.setStrictErrorChecking"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.setStrictErrorChecking

```java
public void setStrictErrorChecking(boolean strictErrorChecking)
```

An attribute specifying whether error checking is enforced or not. When
 set to false, the implementation is free to not test
 every possible error case normally defined on DOM operations, and not
 raise any DOMException on DOM operations or report
 errors while using Document.normalizeDocument(). In case
 of error, the behavior is undefined. This attribute is
 true by default.

> *Since 1.5, DOM Level 3*
