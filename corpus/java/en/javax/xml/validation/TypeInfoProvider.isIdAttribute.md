---
id: "java-en-function-typeinfoprovider-isidattribute"
language: "java"
lang: "en"
category: "function"
name: "TypeInfoProvider.isIdAttribute"
signature: "public abstract boolean isIdAttribute(int index)"
title: "TypeInfoProvider.isIdAttribute"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/TypeInfoProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfoProvider.isIdAttribute

```java
public abstract boolean isIdAttribute(int index)
```

Returns true if the specified attribute is determined
 to be ID.

 

 Exactly how an attribute is "determined to be ID" is up to the
 schema language. In case of W3C XML Schema, this means
 that the actual type of the attribute is the built-in ID type
 or its derived type.

 

 A `javax.xml.parsers.DocumentBuilder` uses this information
 to properly implement `isId`.

 

 The method may only be called by the startElement event of
 the `org.xml.sax.ContentHandler` that the application sets to the
 `ValidatorHandler`.

**参数**

- **index** — The index of the attribute. The same index for the `org.xml.sax.Attributes` object passed to the startElement callback.

**返回**

- true if the type of the specified attribute is ID.

**异常**

- **IndexOutOfBoundsException** — If the index is invalid.
- **IllegalStateException** — If this method is called from other `org.xml.sax.ContentHandler` methods.
