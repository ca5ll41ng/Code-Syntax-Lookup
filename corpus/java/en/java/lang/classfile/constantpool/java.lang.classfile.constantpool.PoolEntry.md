---
id: "java-en-function-java-lang-classfile-constantpool-poolentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.PoolEntry"
title: "PoolEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/PoolEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PoolEntry

Models an entry in the constant pool of a `class` file.  Entries are
 read from `class` files, and can be created with a `ConstantPoolBuilder` to write to `class` files.

 Unbound Constant Pool Entries
 Implementations may create unbound constant pool entries not belonging to
 an actual constant pool.  They conveniently represent constant pool entries
 referred by unbound `Attribute attributes` not read from a `class` file.  Their `index` return a non-positive invalid
 value, and behaviors of their `constantPool` are
 unspecified.  They are considered alien to any `constantPool() contextual constant pool` and will be
 converted when they are written to `class` files.

**参见**

- ConstantPoolBuilder##alien Alien Constant Pool Entries

> *Since 24*
