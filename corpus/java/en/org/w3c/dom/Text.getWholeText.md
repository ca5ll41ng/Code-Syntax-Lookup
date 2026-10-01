---
id: "java-en-function-text-getwholetext"
language: "java"
lang: "en"
category: "function"
name: "Text.getWholeText"
signature: "public String getWholeText()"
title: "Text.getWholeText"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Text.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Text.getWholeText

```java
public String getWholeText()
```

Returns all text of Text nodes logically-adjacent text
 nodes to this node, concatenated in document order.
 
For instance, in the example below wholeText on the
 Text node that contains "bar" returns "barfoo", while on
 the Text node that contains "foo" it returns "barfoo".

 
```

                     +-----+
                     | &lt;p&gt; |
                     +-----+
                       /\
                      /  \
               /-----\    +-------+
               | bar |    | &amp;ent; |
               \-----/    +-------+
                              |
                              |
                           /-----\
                           | foo |
                           \-----/
 
```

 Figure: barTextNode.wholeText value is "barfoo"

> *Since 1.5, DOM Level 3*
