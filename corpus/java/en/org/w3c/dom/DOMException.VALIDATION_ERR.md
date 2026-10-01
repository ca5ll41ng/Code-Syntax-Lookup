---
id: "java-en-function-domexception-validation_err"
language: "java"
lang: "en"
category: "function"
name: "DOMException.VALIDATION_ERR"
signature: "public static final short VALIDATION_ERR = 16"
title: "DOMException.VALIDATION_ERR"
directive: "field"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMException.VALIDATION_ERR

```java
public static final short VALIDATION_ERR = 16
```

If a call to a method such as insertBefore or
 removeChild would make the Node invalid
 with respect to "partial validity", this exception would be raised
 and the operation would not be done. This code is used in [DOM Level 3 Validation]
 . Refer to this specification for further information.

> *Since 1.5, DOM Level 3*
