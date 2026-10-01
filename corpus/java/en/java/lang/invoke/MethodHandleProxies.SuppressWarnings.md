---
id: "java-en-function-methodhandleproxies-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleProxies.SuppressWarnings"
signature: "@SuppressWarnings(\"doclint:reference\") // cross-module links public static <T> T asInterfaceInstance(final Class<T> intfc, final MethodHandle target)"
title: "MethodHandleProxies.SuppressWarnings"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleProxies.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleProxies.SuppressWarnings

```java
@SuppressWarnings("doclint:reference") // cross-module links public static <T> T asInterfaceInstance(final Class<T> intfc, final MethodHandle target)
```

Produces an instance of the given single-method interface which redirects
 its calls to the given method handle.
 

 A single-method interface is an interface which declares a uniquely named method.
 When determining the uniquely named method of a single-method interface,
 the public `Object` methods (`toString`, `equals`, `hashCode`)
 are disregarded as are any default (non-abstract) methods.
 For example, `java.util.Comparator` is a single-method interface,
 even though it re-declares the `Object.equals` method and also
 declares default methods, such as `Comparator.reverse`.
 

 The interface must be public, not `isHidden() hidden`,
 and not `isSealed() sealed`.
 No additional access checks are performed.
 

 The resulting instance of the required type will respond to
 invocation of the type's uniquely named method by calling
 the given target on the incoming arguments,
 and returning or throwing whatever the target
 returns or throws.  The invocation will be as if by
 `target.invoke`.
 The target's type will be checked before the
 instance is created, as if by a call to `asType`,
 which may result in a `WrongMethodTypeException`.
 

 The uniquely named method is allowed to be multiply declared,
 with distinct type descriptors.  (E.g., it can be overloaded,
 or can possess bridge methods.)  All such declarations are
 connected directly to the target method handle.
 Argument and return types are adjusted by `asType`
 for each individual declaration.
 

 The wrapper instance will implement the requested interface
 and its super-types, but no other single-method interfaces.
 This means that the instance will not unexpectedly
 pass an `instanceof` test for any unrequested type.
 
 Implementation Note:
 Therefore, each instance must implement a unique single-method interface.
 Implementations may not bundle together
 multiple single-method interfaces onto single implementation classes
 in the style of `java.desktop/java.awt.AWTEventMulticaster`.
 

 The method handle may throw an undeclared exception,
 which means any checked exception (or other checked throwable)
 not declared by the requested type's single abstract method.
 If this happens, the throwable will be wrapped in an instance of
 `java.lang.reflect.UndeclaredThrowableException UndeclaredThrowableException`
 and thrown in that wrapped form.
 

 Like `valueOf Integer.valueOf`,
 `asInterfaceInstance` is a factory method whose results are defined
 by their behavior.
 It is not guaranteed to return a new instance for every call.
 

 Because of the possibility of `isBridge bridge methods`
 and other corner cases, the interface may also have several abstract methods
 with the same name but having distinct descriptors (types of returns and parameters).
 In this case, all the methods are bound in common to the one given target.
 The type check and effective `asType` conversion is applied to each
 method type descriptor, and all abstract methods are bound to the target in common.
 Beyond this type check, no further checks are made to determine that the
 abstract methods are related in any way.
 

 Future versions of this API may accept additional types,
 such as abstract classes with single abstract methods.
 Future versions of this API may also equip wrapper instances
 with one or more additional public "marker" interfaces.

**参数**

- **the** — desired type of the wrapper, a single-method interface
- **intfc** — a class object representing `T`
- **target** — the method handle to invoke from the wrapper

**返回**

- a correctly-typed wrapper for the given target

**异常**

- **NullPointerException** — if either argument is null
- **IllegalArgumentException** — if the `intfc` is not a valid argument to this method
- **WrongMethodTypeException** — if the target cannot be converted to the type required by the requested interface
