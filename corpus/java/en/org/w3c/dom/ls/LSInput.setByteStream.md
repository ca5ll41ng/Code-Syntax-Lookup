---
id: "java-en-function-lsinput-setbytestream"
language: "java"
lang: "en"
category: "function"
name: "LSInput.setByteStream"
signature: "public void setByteStream(java.io.InputStream byteStream)"
title: "LSInput.setByteStream"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput.setByteStream

```java
public void setByteStream(java.io.InputStream byteStream)
```

An attribute of a language and binding dependent type that represents
 a stream of bytes.
 
 If the application knows the character encoding of the byte
 stream, it should set the encoding attribute. Setting the encoding in
 this way will override any encoding specified in an XML declaration
 in the data.
