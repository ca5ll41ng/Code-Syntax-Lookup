---
id: "java-en-function-javax-management-openmbean-compositedatainvocationhandler"
language: "java"
lang: "en"
category: "function"
name: "javax.management.openmbean.CompositeDataInvocationHandler"
title: "CompositeDataInvocationHandler"
directive: "type"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeDataInvocationHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeDataInvocationHandler

An `InvocationHandler` that forwards getter methods to a
   `CompositeData`.  If you have an interface that contains
   only getter methods (such as `String getName()` or
   `boolean isActive()`) then you can use this class in
   conjunction with the `Proxy` class to produce an implementation
   of the interface where each getter returns the value of the
   corresponding item in a `CompositeData`.
   

For example, suppose you have an interface like this:
   
```

   public interface NamedNumber {
       public int getNumber();
       public String getName();
   }
   
```

   
   and a `CompositeData` constructed like this:
   
```

   CompositeData cd =
       new `CompositeDataSupport`(
           someCompositeType,
           new String[] {"number", "name"},
           new Object[] {**5**, "five"}
       );
   
```

   
   then you can construct an object implementing `NamedNumber`
   and backed by the object `cd` like this:
   
```

   InvocationHandler handler =
       new CompositeDataInvocationHandler(cd);
   NamedNumber nn = (NamedNumber)
       Proxy.newProxyInstance(NamedNumber.class.getClassLoader(),
                              new Class[] {NamedNumber.class},
                              handler);
   
```

   
   A call to `nn.getNumber()` will then return **5**.
   

If the first letter of the property defined by a getter is a
   capital, then this handler will look first for an item in the
   `CompositeData` beginning with a capital, then, if that is
   not found, for an item beginning with the corresponding lowercase
   letter or code point.  For a getter called `getNumber()`, the
   handler will first look for an item called `Number`, then for
   `number`.  If the getter is called `getnumber()`, then
   the item must be called `number`.
   

If the method given to `invoke invoke` is the method
   `boolean equals(Object)` inherited from `Object`, then
   it will return true if and only if the argument is a `Proxy`
   whose `InvocationHandler` is also a `CompositeDataInvocationHandler` and whose backing `CompositeData` is equal (not necessarily identical) to this
   object's.  If the method given to `invoke` is the method
   `int hashCode()` inherited from `Object`, then it will
   return a value that is consistent with this definition of `equals`: if two objects are equal according to `equals`, then
   they will have the same `hashCode`.

> *Since 1.6*
