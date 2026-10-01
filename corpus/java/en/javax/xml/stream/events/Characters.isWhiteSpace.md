---
id: "java-en-function-characters-iswhitespace"
language: "java"
lang: "en"
category: "function"
name: "Characters.isWhiteSpace"
signature: "public boolean isWhiteSpace()"
title: "Characters.isWhiteSpace"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/Characters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Characters.isWhiteSpace

```java
public boolean isWhiteSpace()
```

Returns true if this set of Characters
 is all whitespace.  Whitespace inside a document
 is reported as CHARACTERS.  This method allows
 checking of CHARACTERS events to see if they
 are composed of only whitespace characters

**返回**

- true if the `Characters` are all whitespace, false otherwise
