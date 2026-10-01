---
id: "java-en-function-typeinfoprovider-getattributetypeinfo"
language: "java"
lang: "en"
category: "function"
name: "TypeInfoProvider.getAttributeTypeInfo"
signature: "public abstract TypeInfo getAttributeTypeInfo(int index)"
title: "TypeInfoProvider.getAttributeTypeInfo"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/TypeInfoProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfoProvider.getAttributeTypeInfo

```java
public abstract TypeInfo getAttributeTypeInfo(int index)
```

Returns the immutable `TypeInfo` object for the specified
 attribute of the current element.

 

 The method may only be called by the startElement event of
 the `org.xml.sax.ContentHandler` that the application sets to the
 `ValidatorHandler`.

**参数**

- **index** — The index of the attribute. The same index for the `org.xml.sax.Attributes` object passed to the startElement callback.

**返回**

- An immutable `TypeInfo` object that represents the type of the specified attribute. Note that the caller can keep references to the obtained `TypeInfo` longer than the callback scope.  Otherwise, this method returns null if the validator is unable to determine the type.

**异常**

- **IndexOutOfBoundsException** — If the index is invalid.
- **IllegalStateException** — If this method is called from other `org.xml.sax.ContentHandler` methods.
