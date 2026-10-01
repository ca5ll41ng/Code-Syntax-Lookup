---
id: "java-en-function-lsserializer-setnewline"
language: "java"
lang: "en"
category: "function"
name: "LSSerializer.setNewLine"
signature: "public void setNewLine(String newLine)"
title: "LSSerializer.setNewLine"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializer.setNewLine

```java
public void setNewLine(String newLine)
```

The end-of-line sequence of characters to be used in the XML being
 written out. Any string is supported, but XML treats only a certain
 set of characters sequence as end-of-line (See section 2.11,
 "End-of-Line Handling" in [XML 1.0],
 if the serialized content is XML 1.0 or section 2.11, "End-of-Line Handling"
 in [XML 1.1], if the
 serialized content is XML 1.1). Using other character sequences than
 the recommended ones can result in a document that is either not
 serializable or not well-formed).
 
 On retrieval, the default value of this attribute is the
 implementation specific default end-of-line sequence. DOM
 implementations should choose the default to match the usual
 convention for text files in the environment being used.
 Implementations must choose a default sequence that matches one of
 those allowed by XML 1.0 or XML 1.1, depending on the serialized
 content. Setting this attribute to null will reset its
 value to the default value.
