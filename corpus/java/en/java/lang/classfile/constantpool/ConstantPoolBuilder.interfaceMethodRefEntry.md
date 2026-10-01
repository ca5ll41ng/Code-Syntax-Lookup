---
id: "java-en-function-constantpoolbuilder-interfacemethodrefentry"
language: "java"
lang: "en"
category: "function"
name: "ConstantPoolBuilder.interfaceMethodRefEntry"
signature: "InterfaceMethodRefEntry interfaceMethodRefEntry(ClassEntry owner, NameAndTypeEntry nameAndType)"
title: "ConstantPoolBuilder.interfaceMethodRefEntry"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder.interfaceMethodRefEntry

```java
InterfaceMethodRefEntry interfaceMethodRefEntry(ClassEntry owner, NameAndTypeEntry nameAndType)
```

{@return an `InterfaceMethodRefEntry` referring to a `ClassEntry` and a `NameAndTypeEntry`}  The `ClassEntry`
 describes an interface that has this method as a member, and the `NameAndTypeEntry` describes the unqualified name and the method
 descriptor for this method.

**参数**

- **owner** — the `ClassEntry`
- **nameAndType** — the `NameAndTypeEntry`

**参见**

- InterfaceMethodRefEntry#owner() InterfaceMethodRefEntry::owner
- InterfaceMethodRefEntry#nameAndType() InterfaceMethodRefEntry::nameAndType
