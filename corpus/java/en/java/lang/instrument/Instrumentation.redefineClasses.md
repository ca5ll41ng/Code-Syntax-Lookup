---
id: "java-en-function-instrumentation-redefineclasses"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.redefineClasses"
signature: "void redefineClasses(ClassDefinition... definitions) throws ClassNotFoundException, UnmodifiableClassException"
title: "Instrumentation.redefineClasses"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.redefineClasses

```java
void redefineClasses(ClassDefinition... definitions) throws ClassNotFoundException, UnmodifiableClassException
```

Redefine the supplied set of classes using the supplied class files.

 

 This method is used to replace the definition of a class without reference
 to the existing class file bytes, as one might do when recompiling from source
 for fix-and-continue debugging.
 Where the existing class file bytes are to be transformed (for
 example in bytecode instrumentation)
 `retransformClasses retransformClasses`
 should be used.

 

 This method operates on
 a set in order to allow interdependent changes to more than one class at the same time
 (a redefinition of class A can require a redefinition of class B).

 

 If a redefined method has active stack frames, those active frames continue to
 run the bytecodes of the original method.
 The redefined method will be used on new invokes.

 

 This method does not cause any initialization except that which would occur
 under the customary JVM semantics. In other words, redefining a class
 does not cause its initializers to be run. The values of static variables
 will remain as they were prior to the call.

 

 Instances of the redefined class are not affected.

 

 The supported class file changes are described in
 JVM TI RedefineClasses.
 The class file bytes are not checked, verified and installed
 until after the transformations have been applied, if the resultant bytes are in
 error this method will throw an exception.

 

 If this method throws an exception, no classes have been redefined.
 

 This method is intended for use in instrumentation, as described in the
 `Instrumentation class specification`.

**参数**

- **definitions** — array of classes to redefine with corresponding definitions; a zero-length array is allowed, in this case, this method does nothing

**异常**

- **java.lang.instrument.UnmodifiableClassException** — if a specified class cannot be modified (`isModifiableClass` would return false)
- **java.lang.UnsupportedOperationException** — if the current configuration of the JVM does not allow redefinition (`isRedefineClassesSupported` is false) or the redefinition attempted to make unsupported changes
- **java.lang.ClassFormatError** — if the data did not contain a valid class
- **java.lang.NoClassDefFoundError** — if the name in the class file is not equal to the name of the class
- **java.lang.UnsupportedClassVersionError** — if the class file version numbers are not supported
- **java.lang.ClassCircularityError** — if the new classes contain a circularity
- **java.lang.LinkageError** — if a linkage error occurs
- **java.lang.NullPointerException** — if the supplied definitions array or any of its components is null
- **java.lang.ClassNotFoundException** — Can never be thrown (present for compatibility reasons only)

**参见**

- #isRedefineClassesSupported
- #addTransformer
- java.lang.instrument.ClassFileTransformer
