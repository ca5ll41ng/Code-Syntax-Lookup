---
id: "java-en-function-binaryrefaddr-getcontent"
language: "java"
lang: "en"
category: "function"
name: "BinaryRefAddr.getContent"
signature: "public Object getContent()"
title: "BinaryRefAddr.getContent"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/BinaryRefAddr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BinaryRefAddr.getContent

```java
public Object getContent()
```

Retrieves the contents of this address as an Object.
 The result is a byte array.
 Changes to this array will affect this BinaryRefAddr's contents.
 Programs are recommended against changing this array's contents
 and to lock the buffer if they need to change it.

**返回**

- The non-null buffer containing this address's contents.
