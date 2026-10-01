---
id: "java-en-function-userdefinedfileattributeview-size"
language: "java"
lang: "en"
category: "function"
name: "UserDefinedFileAttributeView.size"
signature: "int size(String name) throws IOException"
title: "UserDefinedFileAttributeView.size"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserDefinedFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserDefinedFileAttributeView.size

```java
int size(String name) throws IOException
```

Returns the size of the value of a user-defined attribute.

**参数**

- **name** — The attribute name

**返回**

- The size of the attribute value, in bytes.

**异常**

- **ArithmeticException** — If the size of the attribute is larger than `MAX_VALUE`
- **IOException** — If an I/O error occurs
