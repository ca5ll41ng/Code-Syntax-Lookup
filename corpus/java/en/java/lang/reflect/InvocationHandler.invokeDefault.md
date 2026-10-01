---
id: "java-en-function-invocationhandler-invokedefault"
language: "java"
lang: "en"
category: "function"
name: "InvocationHandler.invokeDefault"
signature: "public static Object invokeDefault(Object proxy, Method method, Object... args) throws Throwable"
title: "InvocationHandler.invokeDefault"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/InvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvocationHandler.invokeDefault

```java
public static Object invokeDefault(Object proxy, Method method, Object... args) throws Throwable
```

Invokes the specified default method on the given `proxy` instance with
 the given parameters.  The given `method` must be a default method
 declared in a proxy interface of the `proxy`'s class or inherited
 from its superinterface directly or indirectly.
 

 Invoking this method behaves as if `invokespecial` instruction executed
 from the proxy class, targeting the default method in a proxy interface.
 This is equivalent to the invocation:
 `X.super.m(A* a)` where `X` is a proxy interface and the call to
 `X.super::m(A*)` is resolved to the given `method`.
 

 Examples: interface `A` and `B` both declare a default
 implementation of method `m`. Interface `C` extends `A`
 and inherits the default method `m` from its superinterface `A`.

 
```
`interface A {
     default T m(A a) { return t1; `
 }
 interface B {
     default T m(A a) { return t2; }
 }
 interface C extends A {}
 }
```

 The following creates a proxy instance that implements `A`
 and invokes the default method `A::m`.

 
```
`Object proxy = Proxy.newProxyInstance(loader, new Class<?>[] { A.class `,
         (o, m, params) -> {
             if (m.isDefault()) {
                 // if it's a default method, invoke it
                 return InvocationHandler.invokeDefault(o, m, params);
             }
         });
 }
```

 If a proxy instance implements both `A` and `B`, both
 of which provides the default implementation of method `m`,
 the invocation handler can dispatch the method invocation to
 `A::m` or `B::m` via the `invokeDefault` method.
 For example, the following code delegates the method invocation
 to `B::m`.

 
```
`Object proxy = Proxy.newProxyInstance(loader, new Class<?>[] { A.class, B.class `,
         (o, m, params) -> {
             if (m.getName().equals("m")) {
                 // invoke B::m instead of A::m
                 Method bMethod = B.class.getMethod(m.getName(), m.getParameterTypes());
                 return InvocationHandler.invokeDefault(o, bMethod, params);
             }
         });
 }
```

 If a proxy instance implements `C` that inherits the default
 method `m` from its superinterface `A`, then
 the interface method invocation on `"m"` is dispatched to
 the invocation handler's `invoke(Object, Method, Object[]) invoke`
 method with the `Method` object argument representing the
 default method `A::m`.

 
```
`Object proxy = Proxy.newProxyInstance(loader, new Class<?>[] { C.class `,
        (o, m, params) -> {
             if (m.isDefault()) {
                 // behaves as if calling C.super.m(params)
                 return InvocationHandler.invokeDefault(o, m, params);
             }
        });
 }
```

 The invocation of method `"m"` on this `proxy` will behave
 as if `C.super::m` is called and that is resolved to invoking
 `A::m`.
 

 Adding a default method, or changing a method from abstract to default
 may cause an exception if an existing code attempts to call `invokeDefault`
 to invoke a default method.

 For example, if `C` is modified to implement a default method
 `m`:

 
```
`interface C extends A {
     default T m(A a) { return t3; `
 }
 }
```

 The code above that creates proxy instance `proxy` with
 the modified `C` will run with no exception and it will result in
 calling `C::m` instead of `A::m`.
 

 The following is another example that creates a proxy instance of `C`
 and the invocation handler calls the `invokeDefault` method
 to invoke `A::m`:

 
```
`C c = (C) Proxy.newProxyInstance(loader, new Class<?>[] { C.class `,
         (o, m, params) -> {
             if (m.getName().equals("m")) {
                 // IllegalArgumentException thrown as `A::m` is not a method
                 // inherited from its proxy interface C
                 Method aMethod = A.class.getMethod(m.getName(), m.getParameterTypes());
                 return InvocationHandler.invokeDefault(o, aMethod params);
             }
         });
 c.m(...);
 }
```

 The above code runs successfully with the old version of `C` and
 `A::m` is invoked.  When running with the new version of `C`,
 the above code will fail with `IllegalArgumentException` because
 `C` overrides the implementation of the same method and
 `A::m` is not accessible by a proxy instance.

 The `proxy` parameter is of type `Object` rather than `Proxy`
 to make it easy for `invoke(Object, Method, Object[])
 InvocationHandler::invoke` implementation to call directly without the need
 of casting.

**参数**

- **proxy** — the `Proxy` instance on which the default method to be invoked
- **method** — the `Method` instance corresponding to a default method declared in a proxy interface of the proxy class or inherited from its superinterface directly or indirectly
- **args** — the parameters used for the method invocation; can be `null` if the number of formal parameters required by the method is zero.

**返回**

- the value returned from the method invocation

**异常**

- **IllegalArgumentException** — if any of the following conditions is `true`:   - `proxy` is not `isProxyClass(Class) a proxy instance`; or  - the given `method` is not a default method declared in a proxy interface of the proxy class and not inherited from any of its superinterfaces; or  - the given `method` is overridden directly or indirectly by the proxy interfaces and the method reference to the named method never resolves to the given `method`; or  - the length of the given `args` array does not match the number of parameters of the method to be invoked; or  - any of the `args` elements fails the unboxing conversion if the corresponding method parameter type is a primitive type; or if, after possible unboxing, any of the `args` elements cannot be assigned to the corresponding method parameter type.
- **IllegalAccessException** — if the declaring class of the specified default method is inaccessible to the caller class
- **NullPointerException** — if `proxy` or `method` is `null`
- **Throwable** — anything thrown by the default method

> *Since 16*
