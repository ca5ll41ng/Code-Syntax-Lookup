---
id: "java-en-function-utf8entry-stringvalue"
language: "java"
lang: "en"
category: "function"
name: "Utf8Entry.stringValue"
signature: "String stringValue()"
title: "Utf8Entry.stringValue"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/Utf8Entry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Utf8Entry.stringValue

```java
String stringValue()
```

{@return the string value for this entry}

 A `Utf8Entry` can be used directly as a `CharSequence` if
 `String` functionalities are not strictly desired.  If only string
 equivalence is desired, `equalsString(String) equalsString` should
 be used.  Reduction of string processing can significantly improve `class` file reading performance.

**参见**

- ConstantPoolBuilder#utf8Entry(String)
