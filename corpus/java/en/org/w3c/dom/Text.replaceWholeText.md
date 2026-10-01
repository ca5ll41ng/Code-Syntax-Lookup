---
id: "java-en-function-text-replacewholetext"
language: "java"
lang: "en"
category: "function"
name: "Text.replaceWholeText"
signature: "public Text replaceWholeText(String content) throws DOMException"
title: "Text.replaceWholeText"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Text.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Text.replaceWholeText

```java
public Text replaceWholeText(String content) throws DOMException
```

Replaces the text of the current node and all logically-adjacent text
 nodes with the specified text. All logically-adjacent text nodes are
 removed including the current node unless it was the recipient of the
 replacement text.
 

This method returns the node which received the replacement text.
 The returned node is:
 
 
- null, when the replacement text is
 the empty string;
 
 
- the current node, except when the current node is
 read-only;
 
 
-  a new Text node of the same type (
 Text or CDATASection) as the current node
 inserted at the location of the replacement.
 
 

 

For instance, in the above example calling
 replaceWholeText on the Text node that
 contains "bar" with "yo" in argument results in the following:

 
```

                     +-----+
                     | &lt;p&gt; |
                     +-----+
                        |
                        |
                     /-----\
                     | yo  |
                     \-----/
 
```

 Figure: barTextNode.replaceWholeText("yo") modifies the
 textual content of barTextNode with "yo"

 

Where the nodes to be removed are read-only descendants of an
 EntityReference, the EntityReference must
 be removed instead of the read-only nodes. If any
 EntityReference to be removed has descendants that are
 not EntityReference, Text, or
 CDATASection nodes, the replaceWholeText
 method must fail before performing any modification of the document,
 raising a DOMException with the code
 NO_MODIFICATION_ALLOWED_ERR.
 

For instance, in the example below calling
 replaceWholeText on the Text node that
 contains "bar" fails, because the EntityReference node
 "ent" contains an Element node which cannot be removed.

**参数**

- **content** — The content of the replacing Text node.

**返回**

- The Text node created with the specified content.

**异常**

- **DOMException** — NO_MODIFICATION_ALLOWED_ERR: Raised if one of the Text nodes being replaced is readonly.

> *Since 1.5, DOM Level 3*
