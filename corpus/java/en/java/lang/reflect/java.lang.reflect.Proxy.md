---
id: "java-en-function-java-lang-reflect-proxy"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.Proxy"
title: "Proxy"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy

`Proxy` provides static methods for creating objects that act like instances
 of interfaces but allow for customized method invocation.
 To create a proxy instance for some interface `Foo`:
 
```
`InvocationHandler handler = new MyInvocationHandler(...);
     Foo f = (Foo) Proxy.newProxyInstance(Foo.class.getClassLoader(),
                                          new Class<?>[] { Foo.class `,
                                          handler);
 }
```

 

 A proxy class is a class created at runtime that implements a specified
 list of interfaces, known as proxy interfaces. A proxy instance
 is an instance of a proxy class.

 Each proxy instance has an associated invocation handler
 object, which implements the interface `InvocationHandler`.
 A method invocation on a proxy instance through one of its proxy
 interfaces will be dispatched to the `invoke
 invoke` method of the instance's invocation handler, passing the proxy
 instance, a `java.lang.reflect.Method` object identifying
 the method that was invoked, and an array of type `Object`
 containing the arguments.  The invocation handler processes the
 encoded method invocation as appropriate and the result that it
 returns will be returned as the result of the method invocation on
 the proxy instance.

 

A proxy class has the following properties:

 
 
- The unqualified name of a proxy class is unspecified.  The space
 of class names that begin with the string `"$Proxy"`
 should be, however, reserved for proxy classes.

 
- The package and module in which a proxy class is defined is specified
 below.

 
- A proxy class is final and non-abstract.

 
- A proxy class extends `java.lang.reflect.Proxy`.

 
- A proxy class implements exactly the interfaces specified at its
 creation, in the same order. Invoking `getInterfaces() getInterfaces`
 on its `Class` object will return an array containing the same
 list of interfaces (in the order specified at its creation), invoking
 `getMethods getMethods` on its `Class` object will return
 an array of `Method` objects that include all of the
 methods in those interfaces, and invoking `getMethod` will
 find methods in the proxy interfaces as would be expected.

 
- The `java.security.ProtectionDomain` of a proxy class
 is the same as that of system classes loaded by the bootstrap class
 loader, such as `java.lang.Object`.

 
- The `isProxyClass Proxy.isProxyClass` method can be used
 to determine if a given class is a proxy class.
 

 

A proxy instance has the following properties:

 
 
- Given a proxy instance `proxy` and one of the
 interfaces, `Foo`, implemented by its proxy class, the
 following expression will return true:
 
```

     `proxy instanceof Foo`
 
```

 and the following cast operation will succeed (rather than throwing
 a `ClassCastException`):
 
```

     `(Foo) proxy`
 
```

 
- Each proxy instance has an associated invocation handler, the one
 that was passed to its constructor.  The static
 `getInvocationHandler Proxy.getInvocationHandler` method
 will return the invocation handler associated with the proxy instance
 passed as its argument.

 
- An interface method invocation on a proxy instance will be
 encoded and dispatched to the invocation handler's `invoke invoke` method as described in the
 documentation for that method.

 
- A proxy interface may define a default method or inherit
 a default method from its superinterface directly or indirectly.
 An invocation handler can invoke a default method of a proxy interface
 by calling `invokeDefault(Object, Method, Object...)
 InvocationHandler::invokeDefault`.

 
- An invocation of the `hashCode`,
 `equals`, or `toString` methods declared in
 `java.lang.Object` on a proxy instance will be encoded and
 dispatched to the invocation handler's `invoke` method in
 the same manner as interface method invocations are encoded and
 dispatched, as described above.  The declaring class of the
 `Method` object passed to `invoke` will be
 `java.lang.Object`.  Other public methods of a proxy
 instance inherited from `java.lang.Object` are not
 overridden by a proxy class, so invocations of those methods behave
 like they do for instances of `java.lang.Object`.
 

 Package and Module Membership of Proxy Class

 The package and module to which a proxy class belongs are chosen such that
 the accessibility of the proxy class is in line with the accessibility of
 the proxy interfaces. Specifically, the package and the module membership
 of a proxy class defined via the
 `getProxyClass` or
 `newProxyInstance`
 methods is specified as follows:

 
 
- If all the proxy interfaces are in exported or open
     packages:
 
 
- if all the proxy interfaces are public, then the proxy class is
     public in an unconditionally exported but non-open package.
     The name of the package and the module are unspecified.

 
- if at least one of all the proxy interfaces is non-public, then
     the proxy class is non-public in the package and module of the
     non-public interfaces. All the non-public interfaces must be in the same
     package and module; otherwise, proxying them is
     not possible.
 

 
 
- If at least one proxy interface is in a package that is
     non-exported and non-open:
 
 
- if all the proxy interfaces are public, then the proxy class is
     public in a non-exported, non-open package of
     dynamic module.
     The names of the package and the module are unspecified.

 
- if at least one of all the proxy interfaces is non-public, then
     the proxy class is non-public in the package and module of the
     non-public interfaces. All the non-public interfaces must be in the same
     package and module; otherwise, proxying them is
     not possible.
 

 
 

 

 Note that if proxy interfaces with a mix of accessibilities -- for example,
 an exported public interface and a non-exported non-public interface -- are
 proxied by the same instance, then the proxy class's accessibility is
 governed by the least accessible proxy interface.
 

 Note that it is possible for arbitrary code to obtain access to a proxy class
 in an open package with `setAccessible setAccessible`,
 whereas a proxy class in a non-open package is never accessible to
 code outside the module of the proxy class.

 

 Throughout this specification, a "non-exported package" refers to a package
 that is not exported to all modules, and a "non-open package" refers to
 a package that is not open to all modules.  Specifically, these terms refer to
 a package that either is not exported/open by its containing module or is
 exported/open in a qualified fashion by its containing module.

 Dynamic Modules
 

 A dynamic module is a named module generated at runtime. A proxy class
 defined in a dynamic module is encapsulated and not accessible to any module.
 Calling `newInstance` on a proxy class in
 a dynamic module will throw `IllegalAccessException`;
 `Proxy.newProxyInstance` method should be used instead.

 

 A dynamic module can read the modules of all of the superinterfaces of a proxy
 class and the modules of the classes and interfaces referenced by
 all public method signatures of a proxy class.  If a superinterface or
 a referenced class or interface, say `T`, is in a non-exported package,
 the `Module module` of `T` is updated to export the
 package of `T` to the dynamic module.

 Methods Duplicated in Multiple Proxy Interfaces

 

When two or more proxy interfaces contain a method with
 the same name and parameter signature, the order of the proxy class's
 interfaces becomes significant.  When such a duplicate method
 is invoked on a proxy instance, the `Method` object passed
 to the invocation handler will not necessarily be the one whose
 declaring class is assignable from the reference type of the interface
 that the proxy's method was invoked through.  This limitation exists
 because the corresponding method implementation in the generated proxy
 class cannot determine which interface it was invoked through.
 Therefore, when a duplicate method is invoked on a proxy instance,
 the `Method` object for the method in the foremost interface
 that contains the method (either directly or inherited through a
 superinterface) in the proxy class's list of interfaces is passed to
 the invocation handler's `invoke` method, regardless of the
 reference type through which the method invocation occurred.

 

If a proxy interface contains a method with the same name and
 parameter signature as the `hashCode`, `equals`,
 or `toString` methods of `java.lang.Object`,
 when such a method is invoked on a proxy instance, the
 `Method` object passed to the invocation handler will have
 `java.lang.Object` as its declaring class.  In other words,
 the public, non-final methods of `java.lang.Object`
 logically precede all of the proxy interfaces for the determination of
 which `Method` object to pass to the invocation handler.

 

Note also that when a duplicate method is dispatched to an
 invocation handler, the `invoke` method may only throw
 checked exception types that are assignable to one of the exception
 types in the `throws` clause of the method in all of
 the proxy interfaces that it can be invoked through.  If the
 `invoke` method throws a checked exception that is not
 assignable to any of the exception types declared by the method in one
 of the proxy interfaces that it can be invoked through, then an
 unchecked `UndeclaredThrowableException` will be thrown by
 the invocation on the proxy instance.  This restriction means that not
 all of the exception types returned by invoking
 `getExceptionTypes` on the `Method` object
 passed to the `invoke` method can necessarily be thrown
 successfully by the `invoke` method.

**参见**

- InvocationHandler

> *Since 1.3*
