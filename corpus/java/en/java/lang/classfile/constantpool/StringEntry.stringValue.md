---
id: "java-en-function-stringentry-stringvalue"
language: "java"
lang: "en"
category: "function"
name: "StringEntry.stringValue"
signature: "String stringValue()"
title: "StringEntry.stringValue"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/StringEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringEntry.stringValue

```java
String stringValue()
```

{@return the string value for this entry}

 A `Utf8Entry` can be used directly as a `CharSequence` if
 `String` functionalities are not strictly desired.  If only string
 equivalence is desired, `equalsString(String) equalsString` should
 be used.  Reduction of string processing can significantly improve `class` file reading performance.

**参见**

- ConstantPoolBuilder#stringEntry(String)
