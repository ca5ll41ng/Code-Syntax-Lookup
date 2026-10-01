---
id: "java-en-function-attributes-getlocalname"
language: "java"
lang: "en"
category: "function"
name: "Attributes.getLocalName"
signature: "public abstract String getLocalName (int index)"
title: "Attributes.getLocalName"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.getLocalName

```java
public abstract String getLocalName (int index)
```

Look up an attribute's local name by index.

**参数**

- **index** — The attribute index (zero-based).

**返回**

- The local name, or the empty string if Namespace processing is not being performed, or null if the index is out of range.

**参见**

- #getLength
