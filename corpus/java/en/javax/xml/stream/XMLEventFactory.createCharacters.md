---
id: "java-en-function-xmleventfactory-createcharacters"
language: "java"
lang: "en"
category: "function"
name: "XMLEventFactory.createCharacters"
signature: "public abstract Characters createCharacters(String content)"
title: "XMLEventFactory.createCharacters"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventFactory.createCharacters

```java
public abstract Characters createCharacters(String content)
```

Create a Characters event, this method does not check if the content
 is all whitespace.  To create a space event use #createSpace(String)

**参数**

- **content** — the string to create

**返回**

- a Characters event
