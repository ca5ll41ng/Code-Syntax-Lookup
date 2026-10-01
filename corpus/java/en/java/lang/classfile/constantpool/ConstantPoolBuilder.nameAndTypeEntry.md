---
id: "java-en-function-constantpoolbuilder-nameandtypeentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.nameAndTypeEntry"
signature: "NameAndTypeEntry nameAndTypeEntry(Utf8Entry nameEntry, Utf8Entry typeEntry)"
title: "ConstantPoolBuilder.nameAndTypeEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.nameAndTypeEntry

```java
NameAndTypeEntry nameAndTypeEntry(Utf8Entry nameEntry, Utf8Entry typeEntry)
```

{@return a `NameAndTypeEntry` referring to the provided name and
 type `Utf8Entry`}  The name `Utf8Entry` describes an
 unqualified name or the special name `ConstantDescs#INIT_NAME`,
 and the type `Utf8Entry` describes a field or method descriptor
 string.

**参数**

- **nameEntry** — the name `Utf8Entry`
- **typeEntry** — the type `Utf8Entry`

**参见**

- NameAndTypeEntry#name() NameAndTypeEntry::name
- NameAndTypeEntry#type() NameAndTypeEntry::type
