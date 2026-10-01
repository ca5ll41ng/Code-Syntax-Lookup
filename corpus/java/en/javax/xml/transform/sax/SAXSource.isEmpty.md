---
id: "java-en-function-saxsource-isempty"
language: "java"
lang: "en"
category: "function"
name: "SAXSource.isEmpty"
signature: "public boolean isEmpty()"
title: "SAXSource.isEmpty"
directive: "method"
module: "java.xml/javax.xml.transform.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/sax/SAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXSource.isEmpty

```java
public boolean isEmpty()
```

Indicates whether the `SAXSource` object is empty. Empty is
 defined as follows:
 
 
- if the system identifier and `InputSource` are `null`;
 
 
- if the system identifier is `null`, and the `InputSource`
 is empty.

**返回**

- true if the `SAXSource` object is empty, false otherwise
