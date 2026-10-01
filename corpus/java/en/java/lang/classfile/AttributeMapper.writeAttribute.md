---
id: "java-en-function-attributemapper-writeattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributeMapper.writeAttribute"
signature: "void writeAttribute(BufWriter buf, A attr)"
title: "AttributeMapper.writeAttribute"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AttributeMapper.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeMapper.writeAttribute

```java
void writeAttribute(BufWriter buf, A attr)
```

Writes an `Attribute` instance to a `class` file for the
 Class-File API.
 

 This method is called by the Class-File API to support writing of
 attributes.  Users should never call this method.
 

 The Class-File API makes these promises about the call to this method:
 
 
- `attributeMapper` returns
 this mapper;
 
- The `buf` may already have data written, that its `size() size` may not be `0`.
 

 

 The `class` file writing must fulfill these requirements:
 
 
- The attribute name `u2` and attribute length `u4` must
 be written to the `buf`;
 
- `attributeName` is written as
 if with `buf.writeIndex(attr.attributeName())`;
 
- The attribute length is the length, in bytes, of attribute contents
 written to the `buf`, not including the 6 bytes used by the name
 and the length;
 
- If any information in the API model of the attribute, `attr`,
 cannot be represented in the `class` file format of the attribute,
 an `IllegalArgumentException` is thrown.
 

 `patchInt` can be used to update the attribute length
 after the attribute contents are written to the `buf`.

**参数**

- **buf** — the `BufWriter` to which the attribute should be written
- **attr** — the attribute to write

**异常**

- **IllegalArgumentException** — if some data in the API model of the attribute is invalid for the `class` file format
