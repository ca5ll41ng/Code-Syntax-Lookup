---
id: "java-en-function-typeinfoprovider-getelementtypeinfo"
language: "java"
lang: "en"
category: "function"
name: "TypeInfoProvider.getElementTypeInfo"
signature: "public abstract TypeInfo getElementTypeInfo()"
title: "TypeInfoProvider.getElementTypeInfo"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/TypeInfoProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfoProvider.getElementTypeInfo

```java
public abstract TypeInfo getElementTypeInfo()
```

Returns the immutable `TypeInfo` object for the current
 element.

 

The method may only be called by the startElement event
 or the endElement event
 of the `org.xml.sax.ContentHandler` that the application sets to
 the `ValidatorHandler`.

 

When W3C XML Schema validation is being performed, in the
 case where an element has a union type, the `TypeInfo`
 returned by a call to getElementTypeInfo() from the
 startElement
 event will be the union type. The TypeInfo
 returned by a call
 from the endElement event will be the actual member type used
 to validate the element.

**返回**

- An immutable `TypeInfo` object that represents the type of the current element. Note that the caller can keep references to the obtained `TypeInfo` longer than the callback scope.  Otherwise, this method returns null if the validator is unable to determine the type of the current element for some reason (for example, if the validator is recovering from an earlier error.)

**异常**

- **IllegalStateException** — If this method is called from other `org.xml.sax.ContentHandler` methods.
