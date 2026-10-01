---
id: "java-en-function-attr-getspecified"
language: "java"
lang: "en"
category: "function"
name: "Attr.getSpecified"
signature: "public boolean getSpecified()"
title: "Attr.getSpecified"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Attr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attr.getSpecified

```java
public boolean getSpecified()
```

True if this attribute was explicitly given a value in
 the instance document, false otherwise. If the
 application changed the value of this attribute node (even if it ends
 up having the same value as the default value) then it is set to
 true. The implementation may handle attributes with
 default values from other schemas similarly but applications should
 use Document.normalizeDocument() to guarantee this
 information is up-to-date.
