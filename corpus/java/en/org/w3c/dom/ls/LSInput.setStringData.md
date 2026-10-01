---
id: "java-en-function-lsinput-setstringdata"
language: "java"
lang: "en"
category: "function"
name: "LSInput.setStringData"
signature: "public void setStringData(String stringData)"
title: "LSInput.setStringData"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput.setStringData

```java
public void setStringData(String stringData)
```

String data to parse. If provided, this will always be treated as a
 sequence of 16-bit units (UTF-16 encoded characters). It is not a
 requirement to have an XML declaration when using
 stringData. If an XML declaration is present, the value
 of the encoding attribute will be ignored.
