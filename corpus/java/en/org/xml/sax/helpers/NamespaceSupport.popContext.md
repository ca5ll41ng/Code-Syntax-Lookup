---
id: "java-en-function-namespacesupport-popcontext"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.popContext"
signature: "public void popContext ()"
title: "NamespaceSupport.popContext"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.popContext

```java
public void popContext ()
```

Revert to the previous Namespace context.

 

Normally, you should pop the context at the end of each
 XML element.  After popping the context, all Namespace prefix
 mappings that were previously in force are restored.

 

You must not attempt to declare additional Namespace
 prefixes after popping a context, unless you push another
 context first.

**参见**

- #pushContext
