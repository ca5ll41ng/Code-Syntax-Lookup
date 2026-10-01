---
id: "java-en-function-namespacesupport-processname"
language: "java"
lang: "en"
category: "function"
name: "NamespaceSupport.processName"
signature: "public String [] processName (String qName, String parts[], boolean isAttribute)"
title: "NamespaceSupport.processName"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport.processName

```java
public String [] processName (String qName, String parts[], boolean isAttribute)
```

Process a raw XML qualified name, after all declarations in the
 current context have been handled by `declarePrefix
 declarePrefix`.

 

This method processes a raw XML qualified name in the
 current context by removing the prefix and looking it up among
 the prefixes currently declared.  The return value will be the
 array supplied by the caller, filled in as follows:

 
 parts[0]
 The Namespace URI, or an empty string if none is
  in use.
 parts[1]
 The local name (without prefix).
 parts[2]
 The original raw name.
 

 

All of the strings in the array will be internalized.  If
 the raw name has a prefix that has not been declared, then
 the return value will be null.

 

Note that attribute names are processed differently than
 element names: an unprefixed element name will receive the
 default Namespace (if any), while an unprefixed attribute name
 will not.

**参数**

- **qName** — The XML qualified name to be processed.
- **parts** — An array supplied by the caller, capable of holding at least three members.
- **isAttribute** — A flag indicating whether this is an attribute name (true) or an element name (false).

**返回**

- The supplied array holding three internalized strings representing the Namespace URI (or empty string), the local name, and the XML qualified name; or null if there is an undeclared prefix.

**参见**

- #declarePrefix
- java.lang.String#intern
