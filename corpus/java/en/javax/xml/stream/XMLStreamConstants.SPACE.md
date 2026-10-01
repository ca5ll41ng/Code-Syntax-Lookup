---
id: "java-en-function-xmlstreamconstants-space"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamConstants.SPACE"
signature: "public static final int SPACE=6"
title: "XMLStreamConstants.SPACE"
directive: "field"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamConstants.SPACE

```java
public static final int SPACE=6
```

The characters are white space
 (see [XML], 2.10 "White Space Handling").
 Events are only reported as SPACE if they are ignorable white
 space.  Otherwise they are reported as CHARACTERS.

**参见**

- javax.xml.stream.events.Characters
