---
id: "java-en-function-java-lang-constant-constantdesc"
language: "java"
lang: "en"
category: "function"
name: "java.lang.constant.ConstantDesc"
title: "ConstantDesc"
directive: "type"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ConstantDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantDesc

A nominal descriptor for a loadable
 constant value, as defined in JVMS {@jvms 4.4}. Such a descriptor can be resolved via
 `resolveConstantDesc` to yield the
 constant value itself.

 

Class names in a nominal descriptor, like class names in the constant pool
 of a classfile, must be interpreted with respect to a particular class
 loader, which is not part of the nominal descriptor.

 

Static constants that are expressible natively in the constant pool (`String`,
 `Integer`, `Long`, `Float`, and `Double`) implement
 `ConstantDesc`, and serve as nominal descriptors for themselves.
 Native linkable constants (`Class`, `MethodType`, and
 `MethodHandle`) have counterpart `ConstantDesc` types:
 `ClassDesc`, `MethodTypeDesc`, and `MethodHandleDesc`.
 Other constants are represented by subtypes of `DynamicConstantDesc`.

 

APIs that perform generation or parsing of bytecode are encouraged to use
 `ConstantDesc` to describe the operand of an `ldc` instruction
 (including dynamic constants), the static bootstrap arguments of
 dynamic constants and `invokedynamic` instructions, and other
 bytecodes or classfile structures that make use of the constant pool.

 

Constants describing various common constants (such as `ClassDesc`
 instances for platform types) can be found in `ConstantDescs`.

 

Implementations of `ConstantDesc` should be immutable
 and their behavior should not rely on object identity.

 

Non-platform classes should not implement `ConstantDesc` directly.
 Instead, they should extend `DynamicConstantDesc` (as `EnumDesc`
 and `VarHandleDesc` do.)

 

Nominal descriptors should be compared using the
 `equals` method. There is no guarantee that any
 particular entity will always be represented by the same descriptor instance.

**参见**

- Constable
- ConstantDescs

> *Since 12*
