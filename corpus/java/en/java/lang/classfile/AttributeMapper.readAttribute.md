---
id: "java-en-function-attributemapper-readattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributeMapper.readAttribute"
signature: "A readAttribute(AttributedElement enclosing, ClassReader cf, int pos)"
title: "AttributeMapper.readAttribute"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AttributeMapper.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeMapper.readAttribute

```java
A readAttribute(AttributedElement enclosing, ClassReader cf, int pos)
```

Creates an `Attribute` instance from a `class` file for the
 Class-File API.
 

 This method is called by the Class-File API to support reading of
 attributes.  Users should never call this method.
 

 The Class-File API makes these promises about the call to this method:
 
 
- The `Utf8Entry` for the name of the attribute is accessible
 with `cf.readEntry(pos - 6, Utf8Entry.class)`, and is validated;
 
- The length of the attribute is accessible with `cf.readInt(pos
 - 4)`, and is validated to be positive and not beyond the length of the
 `class` file;
 
- The `AttributedElement` attribute access functionalities on the
 `enclosing` model may not be accessed when this method is called,
 but can be accessed later by the returned attribute when it is accessible
 to users.
 

 

 The returned `Attribute` must fulfill these requirements:
 
 
- `attributeMapper` returns this mapper;
 
- `attributeName` returns the attribute name in the
 `class` file.
 

 Implementations of this method should perform minimal work to return an
 attribute, as this method is called even if the resulting attribute is
 never used.  In particular, the implementation should avoid checking the
 validity of the attribute `class` file data or performing actions
 that may throw exceptions.

**参数**

- **enclosing** — the structure in which this attribute appears
- **cf** — provides access to the `class` file to read from
- **pos** — the offset into the `class` file at which the contents of the attribute starts

**返回**

- the read attribute
