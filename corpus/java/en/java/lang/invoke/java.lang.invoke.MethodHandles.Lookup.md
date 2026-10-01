---
id: "java-en-function-java-lang-invoke-methodhandles-lookup"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.MethodHandles.Lookup"
title: "Lookup"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup

A lookup object is a factory for creating method handles,
 when the creation requires access checking.
 Method handles do not perform
 access checks when they are called, but rather when they are created.
 Therefore, method handle access
 restrictions must be enforced when a method handle is created.
 The caller class against which those restrictions are enforced
 is known as the `lookupClass() lookup class`.
 

 A lookup class which needs to create method handles will call
 `lookup() MethodHandles.lookup` to create a factory for itself.
 When the `Lookup` factory object is created, the identity of the lookup class is
 determined, and securely stored in the `Lookup` object.
 The lookup class (or its delegates) may then use factory methods
 on the `Lookup` object to create method handles for access-checked members.
 This includes all methods, constructors, and fields which are allowed to the lookup class,
 even private ones.

 Lookup Factory Methods
 The factory methods on a `Lookup` object correspond to all major
 use cases for methods, constructors, and fields.
 Each method handle created by a factory method is the functional
 equivalent of a particular bytecode behavior.
 (Bytecode behaviors are described in section {@jvms 5.4.3.5} of
 the Java Virtual Machine Specification.)
 Here is a summary of the correspondence between these factory methods and
 the behavior of the resulting method handles:
 
 lookup method behaviors
 
 
     lookup expression
     member
     bytecode behavior
 
 
 
 
     `findGetter lookup.findGetter`
     `FT f;``(FT) this.f;`
 
 
     `findStaticGetter lookup.findStaticGetter`
     `static`
`FT f;``(FT) C.f;`
 
 
     `findSetter lookup.findSetter`
     `FT f;``this.f = x;`
 
 
     `findStaticSetter lookup.findStaticSetter`
     `static`
`FT f;``C.f = arg;`
 
 
     `findVirtual lookup.findVirtual`
     `T m(A*);``(T) this.m(arg*);`
 
 
     `findStatic lookup.findStatic`
     `static`
`T m(A*);``(T) C.m(arg*);`
 
 
     `findSpecial lookup.findSpecial`
     `T m(A*);``(T) super.m(arg*);`
 
 
     `findConstructor lookup.findConstructor`
     `C(A*);``new C(arg*);`
 
 
     `unreflectGetter lookup.unreflectGetter`
     (`static`)?
`FT f;``(FT) aField.get(thisOrNull);`
 
 
     `unreflectSetter lookup.unreflectSetter`
     (`static`)?
`FT f;``aField.set(thisOrNull, arg);`
 
 
     `unreflect lookup.unreflect`
     (`static`)?
`T m(A*);``(T) aMethod.invoke(thisOrNull, arg*);`
 
 
     `unreflectConstructor lookup.unreflectConstructor`
     `C(A*);``(C) aConstructor.newInstance(arg*);`
 
 
     `unreflectSpecial lookup.unreflectSpecial`
     `T m(A*);``(T) super.m(arg*);`
 
 
     `findClass lookup.findClass`
     `class C { ... `}`C.class;`
 
 
 

 Here, the type `C` is the class or interface being searched for a member,
 documented as a parameter named `refc` in the lookup methods.
 The method type `MT` is composed from the return type `T`
 and the sequence of argument types `A*`.
 The constructor also has a sequence of argument types `A*` and
 is deemed to return the newly-created object of type `C`.
 Both `MT` and the field type `FT` are documented as a parameter named `type`.
 The formal parameter `this` stands for the self-reference of type `C`;
 if it is present, it is always the leading argument to the method handle invocation.
 (In the case of some `protected` members, `this` may be
 restricted in type to the lookup class; see below.)
 The name `arg` stands for all the other method handle arguments.
 In the code examples for the Core Reflection API, the name `thisOrNull`
 stands for a null reference if the accessed method or field is static,
 and `this` otherwise.
 The names `aMethod`, `aField`, and `aConstructor` stand
 for reflective objects corresponding to the given members declared in type `C`.
 

 The bytecode behavior for a `findClass` operation is a load of a constant class,
 as if by `ldc CONSTANT_Class`.
 The behavior is represented, not as a method handle, but directly as a `Class` constant.
 

 In cases where the given member is of variable arity (i.e., a method or constructor)
 the returned method handle will also be of `asVarargsCollector variable arity`.
 In all other cases, the returned method handle will be of fixed arity.
 
 Discussion:
 The equivalence between looked-up method handles and underlying
 class members and bytecode behaviors
 can break down in a few ways:
 
 
- If `C` is not symbolically accessible from the lookup class's loader,
 the lookup can still succeed, even when there is no equivalent
 Java expression or bytecoded constant.
 
- Likewise, if `T` or `MT`
 is not symbolically accessible from the lookup class's loader,
 the lookup can still succeed.
 For example, lookups for `MethodHandle.invokeExact` and
 `MethodHandle.invoke` will always succeed, regardless of requested type.
 
- If the looked-up method has a
 very large arity,
 the method handle creation may fail with an
 `IllegalArgumentException`, due to the method handle type having
 too many parameters.
 

 Access checking
 Access checks are applied in the factory methods of `Lookup`,
 when a method handle is created.
 This is a key difference from the Core Reflection API, since
 `invoke java.lang.reflect.Method.invoke`
 performs access checking against every caller, on every call.
 

 All access checks start from a `Lookup` object, which
 compares its recorded lookup class against all requests to
 create method handles.
 A single `Lookup` object can be used to create any number
 of access-checked method handles, all checked against a single
 lookup class.
 

 A `Lookup` object can be shared with other trusted code,
 such as a metaobject protocol.
 A shared `Lookup` object delegates the capability
 to create method handles on private members of the lookup class.
 Even if privileged code uses the `Lookup` object,
 the access checking is confined to the privileges of the
 original lookup class.
 

 A lookup can fail, because
 the containing class is not accessible to the lookup class, or
 because the desired class member is missing, or because the
 desired class member is not accessible to the lookup class, or
 because the lookup object is not trusted enough to access the member.
 In the case of a field setter function on a `final` field,
 finality enforcement is treated as a kind of access control,
 and the lookup will fail, except in special cases of
 `unreflectSetter Lookup.unreflectSetter`.
 In any of these cases, a `ReflectiveOperationException` will be
 thrown from the attempted lookup.  The exact class will be one of
 the following:
 
 
- NoSuchMethodException &mdash; if a method is requested but does not exist
 
- NoSuchFieldException &mdash; if a field is requested but does not exist
 
- IllegalAccessException &mdash; if the member exists but an access check fails
 

 

 In general, the conditions under which a method handle may be
 looked up for a method `M` are no more restrictive than the conditions
 under which the lookup class could have compiled, verified, and resolved a call to `M`.
 Where the JVM would raise exceptions like `NoSuchMethodError`,
 a method handle lookup will generally raise a corresponding
 checked exception, such as `NoSuchMethodException`.
 And the effect of invoking the method handle resulting from the lookup
 is exactly equivalent
 to executing the compiled, verified, and resolved call to `M`.
 The same point is true of fields and constructors.
 
 Discussion:
 Access checks only apply to named and reflected methods,
 constructors, and fields.
 Other method handle creation methods, such as
 `asType MethodHandle.asType`,
 do not require any access checks, and are used
 independently of any `Lookup` object.
 

 If the desired member is `protected`, the usual JVM rules apply,
 including the requirement that the lookup class must either be in the
 same package as the desired member, or must inherit that member.
 (See the Java Virtual Machine Specification, sections {@jvms
 4.9.2}, {@jvms 5.4.3.5}, and {@jvms 6.4}.)
 In addition, if the desired member is a non-static field or method
 in a different package, the resulting method handle may only be applied
 to objects of the lookup class or one of its subclasses.
 This requirement is enforced by narrowing the type of the leading
 `this` parameter from `C`
 (which will necessarily be a superclass of the lookup class)
 to the lookup class itself.
 

 The JVM imposes a similar requirement on `invokespecial` instruction,
 that the receiver argument must match both the resolved method and
 the current class.  Again, this requirement is enforced by narrowing the
 type of the leading parameter to the resulting method handle.
 (See the Java Virtual Machine Specification, section {@jvms 4.10.1.9}.)
 

 The JVM represents constructors and static initializer blocks as internal methods
 with special names (`ConstantDescs#INIT_NAME` and `ConstantDescs#CLASS_INIT_NAME`).
 The internal syntax of invocation instructions allows them to refer to such internal
 methods as if they were normal methods, but the JVM bytecode verifier rejects them.
 A lookup of such an internal method will produce a `NoSuchMethodException`.
 

 If the relationship between nested types is expressed directly through the
 `NestHost` and `NestMembers` attributes
 (see the Java Virtual Machine Specification, sections {@jvms
 4.7.28} and {@jvms 4.7.29}),
 then the associated `Lookup` object provides direct access to
 the lookup class and all of its nestmates
 (see `getNestHost Class.getNestHost`).
 Otherwise, access between nested classes is obtained by the Java compiler creating
 a wrapper method to access a private method of another class in the same nest.
 For example, a nested class `C.D`
 can access private members within other related classes such as
 `C`, `C.D.E`, or `C.B`,
 but the Java compiler may need to generate wrapper methods in
 those related classes.  In such cases, a `Lookup` object on
 `C.E` would be unable to access those private members.
 A workaround for this limitation is the `in Lookup.in` method,
 which can transform a lookup on `C.E` into one on any of those other
 classes, without special elevation of privilege.
 

 The accesses permitted to a given lookup object may be limited,
 according to its set of `lookupModes lookupModes`,
 to a subset of members normally accessible to the lookup class.
 For example, the `publicLookup publicLookup`
 method produces a lookup object which is only allowed to access
 public members in public classes of exported packages.
 The caller sensitive method `lookup lookup`
 produces a lookup object with full capabilities relative to
 its caller class, to emulate all supported bytecode behaviors.
 Also, the `in Lookup.in` method may produce a lookup object
 with fewer access modes than the original lookup object.

 
 
 Discussion of private and module access:
 We say that a lookup has private access
 if its `lookupModes lookup modes`
 include the possibility of accessing `private` members
 (which includes the private members of nestmates).
 As documented in the relevant methods elsewhere,
 only lookups with private access possess the following capabilities:
 
 
- access private fields, methods, and constructors of the lookup class and its nestmates
 
- create method handles which `findSpecial emulate invokespecial` instructions
 
- create `in delegated lookup objects` which have private access to other classes
     within the same package member
 

 
 Similarly, a lookup with module access ensures that the original lookup creator was
 a member in the same module as the lookup class.
 
 Private and module access are independently determined modes; a lookup may have
 either or both or neither.  A lookup which possesses both access modes is said to
 possess `hasFullPrivilegeAccess() full privilege access`.
 
 A lookup with original access ensures that this lookup is created by
 the original lookup class and the bootstrap method invoked by the VM.
 Such a lookup with original access also has private and module access
 which has the following additional capability:
 
 
- create method handles which invoke caller sensitive methods,
     such as `Class.forName`
 
- obtain the `classData(Lookup, String, Class)
 class data` associated with the lookup class
 

 
 Each of these permissions is a consequence of the fact that a lookup object
 with private access can be securely traced back to an originating class,
 whose bytecode behaviors and Java language access permissions
 can be reliably determined and emulated by method handles.

 Cross-module lookups
 When a lookup class in one module `M1` accesses a class in another module
 `M2`, extra access checking is performed beyond the access mode bits.
 A `Lookup` with `PUBLIC` mode and a lookup class in `M1`
 can access public types in `M2` when `M2` is readable to `M1`
 and when the type is in a package of `M2` that is exported to
 at least `M1`.
 

 A `Lookup` on `C` can also teleport to a target class
 via `in(Class) Lookup.in` and `privateLookupIn(Class, Lookup)
 MethodHandles.privateLookupIn` methods.
 Teleporting across modules will always record the original lookup class as
 the `previousLookupClass() previous lookup class`
 and drops `MODULE MODULE` access.
 If the target class is in the same module as the lookup class `C`,
 then the target class becomes the new lookup class
 and there is no change to the previous lookup class.
 If the target class is in a different module from `M1` (`C`'s module),
 `C` becomes the new previous lookup class
 and the target class becomes the new lookup class.
 In that case, if there was already a previous lookup class in `M0`,
 and it differs from `M1` and `M2`, then the resulting lookup
 drops all privileges.
 For example,
 {@snippet lang="java" :
 Lookup lookup = MethodHandles.lookup();   // in class C
 Lookup lookup2 = lookup.in(D.class);
 MethodHandle mh = lookup2.findStatic(E.class, "m", MT);
 }
 

 The `lookup` factory method produces a `Lookup` object
 with `null` previous lookup class.
 `in lookup.in` transforms the `lookup` on class `C`
 to class `D` without elevation of privileges.
 If `C` and `D` are in the same module,
 `lookup2` records `D` as the new lookup class and keeps the
 same previous lookup class as the original `lookup`, or
 `null` if not present.
 

 When a `Lookup` teleports from a class
 in one nest to another nest, `PRIVATE` access is dropped.
 When a `Lookup` teleports from a class in one package to
 another package, `PACKAGE` access is dropped.
 When a `Lookup` teleports from a class in one module to another module,
 `MODULE` access is dropped.
 Teleporting across modules drops the ability to access non-exported classes
 in both the module of the new lookup class and the module of the old lookup class
 and the resulting `Lookup` remains only `PUBLIC` access.
 A `Lookup` can teleport back and forth to a class in the module of
 the lookup class and the module of the previous class lookup.
 Teleporting across modules can only decrease access but cannot increase it.
 Teleporting to some third module drops all accesses.
 

 In the above example, if `C` and `D` are in different modules,
 `lookup2` records `D` as its lookup class and
 `C` as its previous lookup class and `lookup2` has only
 `PUBLIC` access. `lookup2` can teleport to other class in
 `C`'s module and `D`'s module.
 If class `E` is in a third module, `lookup2.in(E.class)` creates
 a `Lookup` on `E` with no access and `lookup2`'s lookup
 class `D` is recorded as its previous lookup class.
 

 Teleporting across modules restricts access to the public types that
 both the lookup class and the previous lookup class can equally access
 (see below).
 

 `privateLookupIn`
 can be used to teleport a `lookup` from class `C` to class `T`
 and produce a new `Lookup` with private access
 if the lookup class is allowed to do deep reflection on `T`.
 The `lookup` must have `MODULE` and `PRIVATE` access
 to call `privateLookupIn`.
 A `lookup` on `C` in module `M1` is allowed to do deep reflection
 on all classes in `M1`.  If `T` is in `M1`, `privateLookupIn`
 produces a new `Lookup` on `T` with full capabilities.
 A `lookup` on `C` is also allowed
 to do deep reflection on `T` in another module `M2` if
 `M1` reads `M2` and `M2` `isOpen(String,Module) opens`
 the package containing `T` to at least `M1`.
 `T` becomes the new lookup class and `C` becomes the new previous
 lookup class and `MODULE` access is dropped from the resulting `Lookup`.
 The resulting `Lookup` can be used to do member lookup or teleport
 to another lookup class by calling `in Lookup::in`.  But
 it cannot be used to obtain another private `Lookup` by calling
 `privateLookupIn(Class, Lookup) privateLookupIn`
 because it has no `MODULE` access.
 

 The `Lookup` object returned by `privateLookupIn` is allowed to
 `defineClass(byte[]) define classes` in the runtime package
 of `T`. Extreme caution should be taken when opening a package
 to another module as such defined classes have the same full privilege
 access as other members in `M2`.

 Cross-module access checks

 A `Lookup` with `PUBLIC` or with `UNCONDITIONAL` mode
 allows cross-module access. The access checking is performed with respect
 to both the lookup class and the previous lookup class if present.
 

 A `Lookup` with `UNCONDITIONAL` mode can access public type
 in all modules when the type is in a package that is `isExported(String)
 exported unconditionally`.
 

 If a `Lookup` on `LC` in `M1` has no previous lookup class,
 the lookup with `PUBLIC` mode can access all public types in modules
 that are readable to `M1` and the type is in a package that is exported
 at least to `M1`.
 

 If a `Lookup` on `LC` in `M1` has a previous lookup class
 `PLC` on `M0`, the lookup with `PUBLIC` mode can access
 the intersection of all public types that are accessible to `M1`
 with all public types that are accessible to `M0`. `M0`
 reads `M1` and hence the set of accessible types includes:

 
 
- unconditional-exported packages from `M1`
 
- unconditional-exported packages from `M0` if `M1` reads `M0`
 
- 
     unconditional-exported packages from a third module `M2`if both `M0`
     and `M1` read `M2`
 
 
- qualified-exported packages from `M1` to `M0`
 
- qualified-exported packages from `M0` to `M1` if `M1` reads `M0`
 
- 
     qualified-exported packages from a third module `M2` to both `M0` and
     `M1` if both `M0` and `M1` read `M2`
 
 

 Access modes

 The table below shows the access modes of a `Lookup` produced by
 any of the following factory or transformation methods:
 
 
- `lookup() MethodHandles::lookup`
 
- `publicLookup() MethodHandles::publicLookup`
 
- `privateLookupIn(Class, Lookup) MethodHandles::privateLookupIn`
 
- `in Lookup::in`
 
- `dropLookupMode(int) Lookup::dropLookupMode`
 

 
 
 Access mode summary
 
 
 
 Lookup object
 original
 protected
 private
 package
 module
 public
 
 
 
 
 `CL = MethodHandles.lookup()` in `C`
 ORI
 PRO
 PRI
 PAC
 MOD
 1R
 
 
 `CL.in(C1)` same package
 
 
 
 PAC
 MOD
 1R
 
 
 `CL.in(C1)` same module
 
 
 
 
 MOD
 1R
 
 
 `CL.in(D)` different module
 
 
 
 
 
 2R
 
 
 `CL.in(D).in(C)` hop back to module
 
 
 
 
 
 2R
 
 
 `PRI1 = privateLookupIn(C1,CL)`
 
 PRO
 PRI
 PAC
 MOD
 1R
 
 
 `PRI1a = privateLookupIn(C,PRI1)`
 
 PRO
 PRI
 PAC
 MOD
 1R
 
 
 `PRI1.in(C1)` same package
 
 
 
 PAC
 MOD
 1R
 
 
 `PRI1.in(C1)` different package
 
 
 
 
 MOD
 1R
 
 
 `PRI1.in(D)` different module
 
 
 
 
 
 2R
 
 
 `PRI1.dropLookupMode(PROTECTED)`
 
 
 PRI
 PAC
 MOD
 1R
 
 
 `PRI1.dropLookupMode(PRIVATE)`
 
 
 
 PAC
 MOD
 1R
 
 
 `PRI1.dropLookupMode(PACKAGE)`
 
 
 
 
 MOD
 1R
 
 
 `PRI1.dropLookupMode(MODULE)`
 
 
 
 
 
 1R
 
 
 `PRI1.dropLookupMode(PUBLIC)`
 
 
 
 
 
 none
 
 `PRI2 = privateLookupIn(D,CL)`
 
 PRO
 PRI
 PAC
 
 2R
 
 
 `privateLookupIn(D,PRI1)`
 
 PRO
 PRI
 PAC
 
 2R
 
 
 `privateLookupIn(C,PRI2)` fails
 
 
 
 
 
 IAE
 
 
 `PRI2.in(D2)` same package
 
 
 
 PAC
 
 2R
 
 
 `PRI2.in(D2)` different package
 
 
 
 
 
 2R
 
 
 `PRI2.in(C1)` hop back to module
 
 
 
 
 
 2R
 
 
 `PRI2.in(E)` hop to third module
 
 
 
 
 
 none
 
 
 `PRI2.dropLookupMode(PROTECTED)`
 
 
 PRI
 PAC
 
 2R
 
 
 `PRI2.dropLookupMode(PRIVATE)`
 
 
 
 PAC
 
 2R
 
 
 `PRI2.dropLookupMode(PACKAGE)`
 
 
 
 
 
 2R
 
 
 `PRI2.dropLookupMode(MODULE)`
 
 
 
 
 
 2R
 
 
 `PRI2.dropLookupMode(PUBLIC)`
 
 
 
 
 
 none
 
 
 `CL.dropLookupMode(PROTECTED)`
 
 
 PRI
 PAC
 MOD
 1R
 
 
 `CL.dropLookupMode(PRIVATE)`
 
 
 
 PAC
 MOD
 1R
 
 
 `CL.dropLookupMode(PACKAGE)`
 
 
 
 
 MOD
 1R
 
 
 `CL.dropLookupMode(MODULE)`
 
 
 
 
 
 1R
 
 
 `CL.dropLookupMode(PUBLIC)`
 
 
 
 
 
 none
 
 
 `PUB = publicLookup()`
 
 
 
 
 
 U
 
 
 `PUB.in(D)` different module
 
 
 
 
 
 U
 
 
 `PUB.in(D).in(E)` third module
 
 
 
 
 
 U
 
 
 `PUB.dropLookupMode(UNCONDITIONAL)`
 
 
 
 
 
 none
 
 
 `privateLookupIn(C1,PUB)` fails
 
 
 
 
 
 IAE
 
 
 `ANY.in(X)`, for inaccessible `X`
 
 
 
 
 
 none
 
 
 

 

 Notes:
 
 
- Class `C` and class `C1` are in module `M1`,
     but `D` and `D2` are in module `M2`, and `E`
     is in module `M3`. `X` stands for class which is inaccessible
     to the lookup. `ANY` stands for any of the example lookups.
 
- `ORI` indicates `ORIGINAL` bit set,
     `PRO` indicates `PROTECTED` bit set,
     `PRI` indicates `PRIVATE` bit set,
     `PAC` indicates `PACKAGE` bit set,
     `MOD` indicates `MODULE` bit set,
     `1R` and `2R` indicate `PUBLIC` bit set,
     `U` indicates `UNCONDITIONAL` bit set,
     `IAE` indicates `IllegalAccessException` thrown.
 
- Public access comes in three kinds:
 
 
- unconditional (`U`): the lookup assumes readability.
     The lookup has `null` previous lookup class.
 
- one-module-reads (`1R`): the module access checking is
     performed with respect to the lookup class.  The lookup has `null`
     previous lookup class.
 
- two-module-reads (`2R`): the module access checking is
     performed with respect to the lookup class and the previous lookup class.
     The lookup has a non-null previous lookup class which is in a
     different module from the current lookup class.
 

 
- Any attempt to reach a third module loses all access.
 
- If a target class `X` is not accessible to `Lookup::in`
 all access modes are dropped.
 

 Caller sensitive methods
 A small number of Java methods have a special property called caller sensitivity.
 A caller-sensitive method can behave differently depending on the
 identity of its immediate caller.
 

 If a method handle for a caller-sensitive method is requested,
 the general rules for bytecode behaviors apply,
 but they take account of the lookup class in a special way.
 The resulting method handle behaves as if it were called
 from an instruction contained in the lookup class,
 so that the caller-sensitive method detects the lookup class.
 (By contrast, the invoker of the method handle is disregarded.)
 Thus, in the case of caller-sensitive methods,
 different lookup classes may give rise to
 differently behaving method handles.
 

 In cases where the lookup object is
 `publicLookup`,
 or some other lookup object without the
 `ORIGINAL original access`,
 the lookup class is disregarded.
 In such cases, no caller-sensitive method handle can be created,
 access is forbidden, and the lookup fails with an
 `IllegalAccessException`.
 
 Discussion:
 For example, the caller-sensitive method
 `forName`
 can return varying classes or throw varying exceptions,
 depending on the class loader of the class that calls it.
 A public lookup of `Class.forName` will fail, because
 there is no reasonable way to determine its bytecode behavior.
 
 If an application caches method handles for broad sharing,
 it should use `publicLookup()` to create them.
 If there is a lookup of `Class.forName`, it will fail,
 and the application must take appropriate action in that case.
 It may be that a later lookup, perhaps during the invocation of a
 bootstrap method, can incorporate the specific identity
 of the caller, making the method accessible.
 
 The function `MethodHandles.lookup` is caller sensitive
 so that there can be a secure foundation for lookups.
 Nearly all other methods in the JSR 292 API rely on lookup
 objects to check access requests.
