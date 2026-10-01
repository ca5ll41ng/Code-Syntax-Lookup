---
id: "java-en-function-lookup-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "Lookup.SuppressWarnings"
signature: "@SuppressWarnings(\"doclint:reference\") // cross-module links public Lookup defineHiddenClass(byte[] bytes, boolean initialize, ClassOption... options) throws IllegalAccessException"
title: "Lookup.SuppressWarnings"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.SuppressWarnings

```java
@SuppressWarnings("doclint:reference") // cross-module links public Lookup defineHiddenClass(byte[] bytes, boolean initialize, ClassOption... options) throws IllegalAccessException
```

Creates a hidden class or interface from `bytes`,
 returning a `Lookup` on the newly created class or interface.

 

 Ordinarily, a class or interface `C` is created by a class loader,
 which either defines `C` directly or delegates to another class loader.
 A class loader defines `C` directly by invoking
 `defineClass(String, byte[], int, int, ProtectionDomain)
 ClassLoader::defineClass`, which causes the Java Virtual Machine
 to derive `C` from a purported representation in `class` file format.
 In situations where use of a class loader is undesirable, a class or interface
 `C` can be created by this method instead. This method is capable of
 defining `C`, and thereby creating it, without invoking
 `ClassLoader::defineClass`.
 Instead, this method defines `C` as if by arranging for
 the Java Virtual Machine to derive a nonarray class or interface `C`
 from a purported representation in `class` file format
 using the following rules:

 
 
-  The `lookupModes() lookup modes` for this `Lookup`
 must include `hasFullPrivilegeAccess() full privilege` access.
 This level of access is needed to create `C` in the module
 of the lookup class of this `Lookup`.

 
-  The purported representation in `bytes` must be a `ClassFile`
 structure (JVMS {@jvms 4.1}) of a supported major and minor version.
 The major and minor version may differ from the `class` file version
 of the lookup class of this `Lookup`.

 
-  The value of `this_class` must be a valid index in the
 `constant_pool` table, and the entry at that index must be a valid
 `CONSTANT_Class_info` structure. Let `N` be the binary name
 encoded in internal form that is specified by this structure. `N` must
 denote a class or interface in the same package as the lookup class.

 
-  Let `CN` be the string `N + "." + `,
 where `` is an unqualified name.

 

 Let `newBytes` be the `ClassFile` structure given by
 `bytes` with an additional entry in the `constant_pool` table,
 indicating a `CONSTANT_Utf8_info` structure for `CN`, and
 where the `CONSTANT_Class_info` structure indicated by `this_class`
 refers to the new `CONSTANT_Utf8_info` structure.

 

 Let `L` be the defining class loader of the lookup class of this `Lookup`.

 

 `C` is derived with name `CN`, class loader `L`, and
 purported representation `newBytes` as if by the rules of JVMS {@jvms 5.3.5},
 with the following adjustments:
 
 
-  The constant indicated by `this_class` is permitted to specify a name
 that includes a single `"."` character, even though this is not a valid
 binary class or interface name in internal form.

 
-  The Java Virtual Machine marks `L` as the defining class loader of `C`,
 but no class loader is recorded as an initiating class loader of `C`.

 
-  `C` is considered to have the same runtime
 `getPackage() package`, `getModule() module`
 and `java.security.ProtectionDomain protection domain`
 as the lookup class of this `Lookup`.
 
-  Let `GN` be the binary name obtained by taking `N`
 (a binary name encoded in internal form) and replacing ASCII forward slashes with
 ASCII periods. For the instance of `java.lang.Class` representing `C`:
 
 
-  `getName` returns the string `GN + "/" + `,
      even though this is not a valid binary class or interface name.
 
-  `descriptorString` returns the string
      `"L" + N + "." +  + ";"`,
      even though this is not a valid type descriptor name.
 
-  `describeConstable` returns an empty optional as `C`
      cannot be described in `java.lang.constant.ClassDesc nominal form`.
 

 

 
 

 

 After `C` is derived, it is linked by the Java Virtual Machine.
 Linkage occurs as specified in JVMS {@jvms 5.4.3}, with the following adjustments:
 
 
-  During verification, whenever it is necessary to load the class named
 `CN`, the attempt succeeds, producing class `C`. No request is
 made of any class loader.

 
-  On any attempt to resolve the entry in the run-time constant pool indicated
 by `this_class`, the symbolic reference is considered to be resolved to
 `C` and resolution always succeeds immediately.
 

 

 If the `initialize` parameter is `true`,
 then `C` is initialized by the Java Virtual Machine.

 

 The newly created class or interface `C` serves as the
 `lookupClass() lookup class` of the `Lookup` object
 returned by this method. `C` is hidden in the sense that
 no other class or interface can refer to `C` via a constant pool entry.
 That is, a hidden class or interface cannot be named as a supertype, a field type,
 a method parameter type, or a method return type by any other class.
 This is because a hidden class or interface does not have a binary name, so
 there is no internal form available to record in any class's constant pool.
 A hidden class or interface is not discoverable by `forName`,
 `loadClass`, or `findClass`, and
 is not `isModifiableClass(Class)
 modifiable` by Java agents or tool agents using the 
 JVM Tool Interface.

 

 A class or interface created by
 `defineClass(String, byte[], int, int, ProtectionDomain)
 a class loader` has a strong relationship with that class loader.
 That is, every `Class` object contains a reference to the `ClassLoader`
 that `getClassLoader() defined it`.
 This means that a class created by a class loader may be unloaded if and
 only if its defining loader is not reachable and thus may be reclaimed
 by a garbage collector (JLS {@jls 12.7}).

 By default, however, a hidden class or interface may be unloaded even if
 the class loader that is marked as its defining loader is
 reachable.
 This behavior is useful when a hidden class or interface serves multiple
 classes defined by arbitrary class loaders.  In other cases, a hidden
 class or interface may be linked to a single class (or a small number of classes)
 with the same defining loader as the hidden class or interface.
 In such cases, where the hidden class or interface must be coterminous
 with a normal class or interface, the `STRONG STRONG`
 option may be passed in `options`.
 This arranges for a hidden class to have the same strong relationship
 with the class loader marked as its defining loader,
 as a normal class or interface has with its own defining loader.

 If `STRONG` is not used, then the invoker of `defineHiddenClass`
 may still prevent a hidden class or interface from being
 unloaded by ensuring that the `Class` object is reachable.

 

 The unloading characteristics are set for each hidden class when it is
 defined, and cannot be changed later.  An advantage of allowing hidden classes
 to be unloaded independently of the class loader marked as their defining loader
 is that a very large number of hidden classes may be created by an application.
 In contrast, if `STRONG` is used, then the JVM may run out of memory,
 just as if normal classes were created by class loaders.

 

 Classes and interfaces in a nest are allowed to have mutual access to
 their private members.  The nest relationship is determined by
 the `NestHost` attribute (JVMS {@jvms 4.7.28}) and
 the `NestMembers` attribute (JVMS {@jvms 4.7.29}) in a `class` file.
 By default, a hidden class belongs to a nest consisting only of itself
 because a hidden class has no binary name.
 The `NESTMATE NESTMATE` option can be passed in `options`
 to create a hidden class or interface `C` as a member of a nest.
 The nest to which `C` belongs is not based on any `NestHost` attribute
 in the `ClassFile` structure from which `C` was derived.
 Instead, the following rules determine the nest host of `C`:
 
 
- If the nest host of the lookup class of this `Lookup` has previously
     been determined, then let `H` be the nest host of the lookup class.
     Otherwise, the nest host of the lookup class is determined using the
     algorithm in JVMS {@jvms 5.4.4}, yielding `H`.
 
- The nest host of `C` is determined to be `H`,
     the nest host of the lookup class.
 

 

 A hidden class or interface may be serializable, but this requires a custom
 serialization mechanism in order to ensure that instances are properly serialized
 and deserialized. The default serialization mechanism supports only classes and
 interfaces that are discoverable by their class name.

**参数**

- **bytes** — the bytes that make up the class data, in the format of a valid `class` file as defined by The Java Virtual Machine Specification.
- **initialize** — if `true` the class will be initialized.
- **options** — `ClassOption class options`

**返回**

- the `Lookup` object on the hidden class, with `ORIGINAL original` and `hasFullPrivilegeAccess() full privilege` access

**异常**

- **IllegalAccessException** — if this `Lookup` does not have `hasFullPrivilegeAccess() full privilege` access
- **ClassFormatError** — if `bytes` is not a `ClassFile` structure
- **UnsupportedClassVersionError** — if `bytes` is not of a supported major or minor version
- **IllegalArgumentException** — if `bytes` denotes a class in a different package than the lookup class or `bytes` is not a class or interface (`ACC_MODULE` flag is set in the value of the `access_flags` item)
- **IncompatibleClassChangeError** — if the class or interface named as the direct superclass of `C` is in fact an interface, or if any of the classes or interfaces named as direct superinterfaces of `C` are not in fact interfaces
- **ClassCircularityError** — if any of the superclasses or superinterfaces of `C` is `C` itself
- **VerifyError** — if the newly created class cannot be verified
- **LinkageError** — if the newly created class cannot be linked for any other reason
- **NullPointerException** — if any parameter is `null`

**参见**

- Class#isHidden()

> *Since 15*
