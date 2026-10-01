---
id: "java-en-function-constantpoolbuilder-methodrefentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.methodRefEntry"
signature: "MethodRefEntry methodRefEntry(ClassEntry owner, NameAndTypeEntry nameAndType)"
title: "ConstantPoolBuilder.methodRefEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.methodRefEntry

```java
MethodRefEntry methodRefEntry(ClassEntry owner, NameAndTypeEntry nameAndType)
```

{@return a `MethodRefEntry` referring to a `ClassEntry` and a
 `NameAndTypeEntry`}  The `ClassEntry` describes a class that
 has this method as a member, and the `NameAndTypeEntry` describes
 the unqualified name or the special name `ConstantDescs#INIT_NAME`
 and the method descriptor for this method.

**参数**

- **owner** — the `ClassEntry`
- **nameAndType** — the `NameAndTypeEntry`

**参见**

- MethodRefEntry#owner() MethodRefEntry::owner
- MethodRefEntry#nameAndType() MethodRefEntry::nameAndType
