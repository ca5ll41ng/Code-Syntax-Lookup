---
id: "java-en-function-constantpoolbuilder-fieldrefentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.fieldRefEntry"
signature: "FieldRefEntry fieldRefEntry(ClassEntry owner, NameAndTypeEntry nameAndType)"
title: "ConstantPoolBuilder.fieldRefEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.fieldRefEntry

```java
FieldRefEntry fieldRefEntry(ClassEntry owner, NameAndTypeEntry nameAndType)
```

{@return a `FieldRefEntry` referring to a `ClassEntry` and a
 `NameAndTypeEntry`}  The `ClassEntry` describes a class or
 interface that has this field as a member, and the `NameAndTypeEntry` describes the unqualified name and the field descriptor
 for this field.

**参数**

- **owner** — the `ClassEntry`
- **nameAndType** — the `NameAndTypeEntry`

**参见**

- FieldRefEntry#owner() FieldRefEntry::owner
- FieldRefEntry#nameAndType() FieldRefEntry::nameAndType
