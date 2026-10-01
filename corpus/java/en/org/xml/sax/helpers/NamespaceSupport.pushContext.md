---
id: "java-en-function-namespacesupport-pushcontext"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.pushContext"
signature: "public void pushContext ()"
title: "NamespaceSupport.pushContext"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.pushContext

```java
public void pushContext ()
```

Start a new Namespace context.
 The new context will automatically inherit
 the declarations of its parent context, but it will also keep
 track of which declarations were made within this context.

 

Event callback code should start a new context once per element.
 This means being ready to call this in either of two places.
 For elements that don't include namespace declarations, the
 ContentHandler.startElement() callback is the right place.
 For elements with such a declaration, it'd done in the first
 ContentHandler.startPrefixMapping() callback.
 A boolean flag can be used to
 track whether a context has been started yet.  When either of
 those methods is called, it checks the flag to see if a new context
 needs to be started.  If so, it starts the context and sets the
 flag.  After ContentHandler.startElement()
 does that, it always clears the flag.

 

Normally, SAX drivers would push a new context at the beginning
 of each XML element.  Then they perform a first pass over the
 attributes to process all namespace declarations, making
 ContentHandler.startPrefixMapping() callbacks.
 Then a second pass is made, to determine the namespace-qualified
 names for all attributes and for the element name.
 Finally all the information for the
 ContentHandler.startElement() callback is available,
 so it can then be made.

 

The Namespace support object always starts with a base context
 already in force: in this context, only the "xml" prefix is
 declared.

**参见**

- org.xml.sax.ContentHandler
- #popContext
