---
id: "java-en-function-java-lang-invoke-methodhandle"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.MethodHandle"
title: "MethodHandle"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle

A method handle is a typed, directly executable reference to an underlying method,
 constructor, field, or similar low-level operation, with optional
 transformations of arguments or return values.
 These transformations are quite general, and include such patterns as
 `asType conversion`,
 `bindTo insertion`,
 `dropArguments deletion`,
 and `filterArguments substitution`.

 Method handle contents
 Method handles are dynamically and strongly typed according to their parameter and return types.
 They are not distinguished by the name or the defining class of their underlying methods.
 A method handle must be invoked using a symbolic type descriptor which matches
 the method handle's own `type() type descriptor`.
 

 Every method handle reports its type descriptor via the `type() type` accessor.
 This type descriptor is a `java.lang.invoke.MethodType MethodType` object,
 whose structure is a series of classes, one of which is
 the return type of the method (or `void.class` if none).
 

 A method handle's type controls the types of invocations it accepts,
 and the kinds of transformations that apply to it.
 

 A method handle contains a pair of special invoker methods
 called `invokeExact invokeExact` and `invoke invoke`.
 Both invoker methods provide direct access to the method handle's
 underlying method, constructor, field, or other operation,
 as modified by transformations of arguments and return values.
 Both invokers accept calls which exactly match the method handle's own type.
 The plain, inexact invoker also accepts a range of other call types.
 

 Method handles are immutable and have no visible state.
 Of course, they can be bound to underlying methods or data which exhibit state.
 With respect to the Java Memory Model, any method handle will behave
 as if all of its (internal) fields are final variables.  This means that any method
 handle made visible to the application will always be fully formed.
 This is true even if the method handle is published through a shared
 variable in a data race.
 

 Method handles cannot be subclassed by the user.
 Implementations may (or may not) create internal subclasses of `MethodHandle`
 which may be visible via the `getClass Object.getClass`
 operation.  The programmer should not draw conclusions about a method handle
 from its specific class, as the method handle class hierarchy (if any)
 may change from time to time or across implementations from different vendors.

 Method handle compilation
 A Java method call expression naming `invokeExact` or `invoke`
 can invoke a method handle from Java source code.
 From the viewpoint of source code, these methods can take any arguments
 and their result can be cast to any return type.
 Formally this is accomplished by giving the invoker methods
 `Object` return types and variable arity `Object` arguments,
 but they have an additional quality called signature polymorphism
 which connects this freedom of invocation directly to the JVM execution stack.
 

 As is usual with virtual methods, source-level calls to `invokeExact`
 and `invoke` compile to an `invokevirtual` instruction.
 More unusually, the compiler must record the actual argument types,
 and may not perform method invocation conversions on the arguments.
 Instead, it must generate instructions that push them on the stack according
 to their own unconverted types.  The method handle object itself is pushed on
 the stack before the arguments.
 The compiler then generates an `invokevirtual` instruction that invokes
 the method handle with a symbolic type descriptor which describes the argument
 and return types.
 

 To issue a complete symbolic type descriptor, the compiler must also determine
 the return type.  This is based on a cast on the method invocation expression,
 if there is one, or else `Object` if the invocation is an expression,
 or else `void` if the invocation is a statement.
 The cast may be to a primitive type (but not `void`).
 

 As a corner case, an uncasted `null` argument is given
 a symbolic type descriptor of `java.lang.Void`.
 The ambiguity with the type `Void` is harmless, since there are no references of type
 `Void` except the null reference.

 Method handle invocation
 The first time an `invokevirtual` instruction is executed
 it is linked by symbolically resolving the names in the instruction
 and verifying that the method call is statically legal.
 This also holds for calls to `invokeExact` and `invoke`.
 In this case, the symbolic type descriptor emitted by the compiler is checked for
 correct syntax, and names it contains are resolved.
 Thus, an `invokevirtual` instruction which invokes
 a method handle will always link, as long
 as the symbolic type descriptor is syntactically well-formed
 and the types exist.
 

 When the `invokevirtual` is executed after linking,
 the receiving method handle's type is first checked by the JVM
 to ensure that it matches the symbolic type descriptor.
 If the type match fails, it means that the method which the
 caller is invoking is not present on the individual
 method handle being invoked.
 

 In the case of `invokeExact`, the type descriptor of the invocation
 (after resolving symbolic type names) must exactly match the method type
 of the receiving method handle.
 In the case of plain, inexact `invoke`, the resolved type descriptor
 must be a valid argument to the receiver's `asType asType` method.
 Thus, plain `invoke` is more permissive than `invokeExact`.
 

 After type matching, a call to `invokeExact` directly
 and immediately invoke the method handle's underlying method
 (or other behavior, as the case may be).
 

 A call to plain `invoke` works the same as a call to
 `invokeExact`, if the symbolic type descriptor specified by the caller
 exactly matches the method handle's own type.
 If there is a type mismatch, `invoke` attempts
 to adjust the type of the receiving method handle,
 as if by a call to `asType asType`,
 to obtain an exactly invokable method handle `M2`.
 This allows a more powerful negotiation of method type
 between caller and callee.
 

 (Note: The adjusted method handle `M2` is not directly observable,
 and implementations are therefore not required to materialize it.)

 Invocation checking
 In typical programs, method handle type matching will usually succeed.
 But if a match fails, the JVM will throw a `WrongMethodTypeException`,
 either directly (in the case of `invokeExact`) or indirectly as if
 by a failed call to `asType` (in the case of `invoke`).
 

 Thus, a method type mismatch which might show up as a linkage error
 in a statically typed program can show up as
 a dynamic `WrongMethodTypeException`
 in a program which uses method handles.
 

 Because method types contain "live" `Class` objects,
 method type matching takes into account both type names and class loaders.
 Thus, even if a method handle `M` is created in one
 class loader `L1` and used in another `L2`,
 method handle calls are type-safe, because the caller's symbolic type
 descriptor, as resolved in `L2`,
 is matched against the original callee method's symbolic type descriptor,
 as resolved in `L1`.
 The resolution in `L1` happens when `M` is created
 and its type is assigned, while the resolution in `L2` happens
 when the `invokevirtual` instruction is linked.
 

 Apart from type descriptor checks,
 a method handle's capability to call its underlying method is unrestricted.
 If a method handle is formed on a non-public method by a class
 that has access to that method, the resulting handle can be used
 in any place by any caller who receives a reference to it.
 

 Unlike with the Core Reflection API, where access is checked every time
 a reflective method is invoked,
 method handle access checking is performed
 when the method handle is created.
 In the case of `ldc` (see below), access checking is performed as part of linking
 the constant pool entry underlying the constant method handle.
 

 Thus, handles to non-public methods, or to methods in non-public classes,
 should generally be kept secret.
 They should not be passed to untrusted code unless their use from
 the untrusted code would be harmless.

 Method handle creation
 Java code can create a method handle that directly accesses
 any method, constructor, or field that is accessible to that code.
 This is done via a reflective, capability-based API called
 `java.lang.invoke.MethodHandles.Lookup MethodHandles.Lookup`.
 For example, a static method handle can be obtained
 from `findStatic Lookup.findStatic`.
 There are also conversion methods from Core Reflection API objects,
 such as `unreflect Lookup.unreflect`.
 

 Like classes and strings, method handles that correspond to accessible
 fields, methods, and constructors can also be represented directly
 in a class file's constant pool as constants to be loaded by `ldc` bytecodes.
 A new type of constant pool entry, `CONSTANT_MethodHandle`,
 refers directly to an associated `CONSTANT_Methodref`,
 `CONSTANT_InterfaceMethodref`, or `CONSTANT_Fieldref`
 constant pool entry.
 (For full details on method handle constants, see sections {@jvms
 4.4.8} and {@jvms 5.4.3.5} of the Java Virtual Machine
 Specification.)
 

 Method handles produced by lookups or constant loads from methods or
 constructors with the variable arity modifier bit (`0x0080`)
 have a corresponding variable arity, as if they were defined with
 the help of `asVarargsCollector asVarargsCollector`
 or `withVarargs withVarargs`.
 

 A method reference may refer either to a static or non-static method.
 In the non-static case, the method handle type includes an explicit
 receiver argument, prepended before any other arguments.
 In the method handle's type, the initial receiver argument is typed
 according to the class under which the method was initially requested.
 (E.g., if a non-static method handle is obtained via `ldc`,
 the type of the receiver is the class named in the constant pool entry.)
 

 Method handle constants are subject to the same link-time access checks
 their corresponding bytecode instructions, and the `ldc` instruction
 will throw corresponding linkage errors if the bytecode behaviors would
 throw such errors.
 

 As a corollary of this, access to protected members is restricted
 to receivers only of the accessing class, or one of its subclasses,
 and the accessing class must in turn be a subclass (or package sibling)
 of the protected member's defining class.
 If a method reference refers to a protected non-static method or field
 of a class outside the current package, the receiver argument will
 be narrowed to the type of the accessing class.
 

 When a method handle to a virtual method is invoked, the method is
 always looked up in the receiver (that is, the first argument).
 

 A non-virtual method handle to a specific virtual method implementation
 can also be created.  These do not perform virtual lookup based on
 receiver type.  Such a method handle simulates the effect of
 an `invokespecial` instruction to the same method.
 A non-virtual method handle can also be created to simulate the effect
 of an `invokevirtual` or `invokeinterface` instruction on
 a private method (as applicable).

 Usage examples
 Here are some examples of usage:
 {@snippet lang="java" :
Object x, y; String s; int i;
MethodType mt; MethodHandle mh;
MethodHandles.Lookup lookup = MethodHandles.lookup();
// mt is (char,char)String
mt = MethodType.methodType(String.class, char.class, char.class);
mh = lookup.findVirtual(String.class, "replace", mt);
s = (String) mh.invokeExact("daddy",'d','n');
// invokeExact(Ljava/lang/String;CC)Ljava/lang/String;
assertEquals(s, "nanny");
// weakly typed invocation (using MHs.invoke)
s = (String) mh.invokeWithArguments("sappy", 'p', 'v');
assertEquals(s, "savvy");
// mt is (Object[])List
mt = MethodType.methodType(java.util.List.class, Object[].class);
mh = lookup.findStatic(java.util.Arrays.class, "asList", mt);
assert(mh.isVarargsCollector());
x = mh.invoke("one", "two");
// invoke(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object;
assertEquals(x, java.util.Arrays.asList("one","two"));
// mt is (Object,Object,Object)Object
mt = MethodType.genericMethodType(3);
mh = mh.asType(mt);
x = mh.invokeExact((Object)1, (Object)2, (Object)3);
// invokeExact(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
assertEquals(x, java.util.Arrays.asList(1,2,3));
// mt is ()int
mt = MethodType.methodType(int.class);
mh = lookup.findVirtual(java.util.List.class, "size", mt);
i = (int) mh.invokeExact(java.util.Arrays.asList(1,2,3));
// invokeExact(Ljava/util/List;)I
assert(i == 3);
mt = MethodType.methodType(void.class, String.class);
mh = lookup.findVirtual(java.io.PrintStream.class, "println", mt);
mh.invokeExact(System.out, "Hello, world.");
// invokeExact(Ljava/io/PrintStream;Ljava/lang/String;)V
 }
 Each of the above calls to `invokeExact` or plain `invoke`
 generates a single invokevirtual instruction with
 the symbolic type descriptor indicated in the following comment.
 In these examples, the helper method `assertEquals` is assumed to
 be a method which calls `equals(Object,Object) Objects.equals`
 on its arguments, and asserts that the result is true.

 Exceptions
 The methods `invokeExact` and `invoke` are declared
 to throw `java.lang.Throwable Throwable`,
 which is to say that there is no static restriction on what a method handle
 can throw.  Since the JVM does not distinguish between checked
 and unchecked exceptions (other than by their class, of course),
 there is no particular effect on bytecode shape from ascribing
 checked exceptions to method handle invocations.  But in Java source
 code, methods which perform method handle calls must either explicitly
 throw `Throwable`, or else must catch all
 throwables locally, rethrowing only those which are legal in the context,
 and wrapping ones which are illegal.

 Signature polymorphism
 The unusual compilation and linkage behavior of
 `invokeExact` and plain `invoke`
 is referenced by the term signature polymorphism.
 As defined in the Java Language Specification,
 a signature polymorphic method is one which can operate with
 any of a wide range of call signatures and return types.
 

 In source code, a call to a signature polymorphic method will
 compile, regardless of the requested symbolic type descriptor.
 As usual, the Java compiler emits an `invokevirtual`
 instruction with the given symbolic type descriptor against the named method.
 The unusual part is that the symbolic type descriptor is derived from
 the actual argument and return types, not from the method declaration.
 

 When the JVM processes bytecode containing signature polymorphic calls,
 it will successfully link any such call, regardless of its symbolic type descriptor.
 (In order to retain type safety, the JVM will guard such calls with suitable
 dynamic type checks, as described elsewhere.)
 

 Bytecode generators, including the compiler back end, are required to emit
 untransformed symbolic type descriptors for these methods.
 Tools which determine symbolic linkage are required to accept such
 untransformed descriptors, without reporting linkage errors.

 Interoperation between method handles and the Core Reflection API
 Using factory methods in the `java.lang.invoke.MethodHandles.Lookup Lookup` API,
 any class member represented by a Core Reflection API object
 can be converted to a behaviorally equivalent method handle.
 For example, a reflective `java.lang.reflect.Method Method` can
 be converted to a method handle using
 `unreflect Lookup.unreflect`.
 The resulting method handles generally provide more direct and efficient
 access to the underlying class members.
 

 As a special case,
 when the Core Reflection API is used to view the signature polymorphic
 methods `invokeExact` or plain `invoke` in this class,
 they appear as ordinary non-polymorphic methods.
 Their reflective appearance, as viewed by
 `getDeclaredMethod Class.getDeclaredMethod`,
 is unaffected by their special status in this API.
 For example, `getModifiers Method.getModifiers`
 will report exactly those modifier bits required for any similarly
 declared method, including in this case `native` and `varargs` bits.
 

 As with any reflected method, these methods (when reflected) may be
 invoked via `invoke java.lang.reflect.Method.invoke`.
 However, such reflective calls do not result in method handle invocations.
 Such a call, if passed the required argument
 (a single one, of type `Object[]`), will ignore the argument and
 will throw an `UnsupportedOperationException`.
 

 Since `invokevirtual` instructions can natively
 invoke method handles under any symbolic type descriptor, this reflective view conflicts
 with the normal presentation of these methods via bytecodes.
 Thus, these two native methods, when reflectively viewed by
 `Class.getDeclaredMethod`, may be regarded as placeholders only.
 

 In order to obtain an invoker method for a particular type descriptor,
 use `exactInvoker MethodHandles.exactInvoker`,
 or `invoker MethodHandles.invoker`.
 The `findVirtual Lookup.findVirtual`
 API is also able to return a method handle
 to call `invokeExact` or plain `invoke`,
 for any specified type descriptor .

 Interoperation between method handles and Java generics
 A method handle can be obtained on a method, constructor, or field
 which is declared with Java generic types.
 As with the Core Reflection API, the type of the method handle
 will be constructed from the erasure of the source-level type.
 When a method handle is invoked, the types of its arguments
 or the return value cast type may be generic types or type instances.
 If this occurs, the compiler will replace those
 types by their erasures when it constructs the symbolic type descriptor
 for the `invokevirtual` instruction.
 

 Method handles do not represent
 their function-like types in terms of Java parameterized (generic) types,
 because there are three mismatches between function-like types and parameterized
 Java types.
 
 
- Method types range over all possible arities,
 from no arguments to up to the  maximum number of allowed arguments.
 Generics are not variadic, and so cannot represent this.
 
- Method types can specify arguments of primitive types,
 which Java generic types cannot range over.
 
- Higher order functions over method handles (combinators) are
 often generic across a wide range of function types, including
 those of multiple arities.  It is impossible to represent such
 genericity with a Java type parameter.
 

 Arity limits
 The JVM imposes on all methods and constructors of any kind an absolute
 limit of 255 stacked arguments.  This limit can appear more restrictive
 in certain cases:
 
 
- A `long` or `double` argument counts (for purposes of arity limits) as two argument slots.
 
- A non-static method consumes an extra argument for the object on which the method is called.
 
- A constructor consumes an extra argument for the object which is being constructed.
 
- Since a method handle&rsquo;s `invoke` method (or other signature-polymorphic method) is non-virtual,
     it consumes an extra argument for the method handle itself, in addition to any non-virtual receiver object.
 

 These limits imply that certain method handles cannot be created, solely because of the JVM limit on stacked arguments.
 For example, if a static JVM method accepts exactly 255 arguments, a method handle cannot be created for it.
 Attempts to create method handles with impossible method types lead to an `IllegalArgumentException`.
 In particular, a method handle&rsquo;s type must not have an arity of the exact maximum 255.

**参见**

- MethodType
- MethodHandles

> *Since 1.7*
