---
id: "java-en-function-lsinput-getcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "LSInput.getCharacterStream"
signature: "public java.io.Reader getCharacterStream()"
title: "LSInput.getCharacterStream"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput.getCharacterStream

```java
public java.io.Reader getCharacterStream()
```

An attribute of a language and binding dependent type that represents
 a stream of 16-bit units. The application must encode the stream
 using UTF-16 (defined in [Unicode] and in [ISO/IEC 10646]). It is not a requirement to have an XML declaration when
 using character streams. If an XML declaration is present, the value
 of the encoding attribute will be ignored.
