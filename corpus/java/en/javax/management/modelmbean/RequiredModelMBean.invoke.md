---
id: "java-en-function-requiredmodelmbean-invoke"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.invoke"
signature: "public Object invoke(String opName, Object[] opArgs, String[] sig) throws MBeanException, ReflectionException"
title: "RequiredModelMBean.invoke"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.invoke

```java
public Object invoke(String opName, Object[] opArgs, String[] sig) throws MBeanException, ReflectionException
```

Invokes a method on or through a RequiredModelMBean and returns
 the result of the method execution.
 

 If the given method to be invoked, together with the provided
 signature, matches one of RequiredModelMbean
 accessible methods, this one will be call. Otherwise the call to
 the given method will be tried on the managed resource.
 

 The last value returned by an operation may be cached in
 the operation's descriptor which
 is in the ModelMBeanOperationInfo's descriptor.
 The valid value will be in the 'value' field if there is one.
 If the 'currencyTimeLimit' field in the descriptor is:
 
 
- **&lt;0** Then the value is not cached and is never valid.
      The operation method is invoked.
      The 'value' and 'lastUpdatedTimeStamp' fields are cleared.
 
- **=0** Then the value is always cached and always valid.
      The 'value' field is returned. If there is no 'value' field
      then the operation method is invoked for the attribute.
      The 'lastUpdatedTimeStamp' field and `value' fields are set to
      the operation's return value and the current time stamp.
 
- **&gt;0** Represents the number of seconds that the 'value'
      field is valid.
      The 'value' field is no longer valid when
      'lastUpdatedTimeStamp' + 'currencyTimeLimit' &gt; Now.
      
         
- When 'value' is valid, 'value' is returned.
         
- When 'value' is no longer valid then the operation
             method is invoked. The 'lastUpdatedTimeStamp' field
             and `value' fields are updated.
      

 
 

 

**Note:** because of inconsistencies in previous versions of
 this specification, it is recommended not to use negative or zero
 values for currencyTimeLimit.  To indicate that a
 cached value is never valid, omit the
 currencyTimeLimit field.  To indicate that it is
 always valid, use a very large number for this field.

**参数**

- **opName** — The name of the method to be invoked. The name can be the fully qualified method name including the classname, or just the method name if the classname is defined in the 'class' field of the operation descriptor.
- **opArgs** — An array containing the parameters to be set when the operation is invoked
- **sig** — An array containing the signature of the operation. The class objects will be loaded using the same class loader as the one used for loading the MBean on which the operation was invoked.

**返回**

- The object returned by the method, which represents the result of invoking the method on the specified managed resource.

**异常**

- **MBeanException** — Wraps one of the following Exceptions:   -  An Exception thrown by the managed object's invoked method.  -  `ServiceNotFoundException`: No ModelMBeanOperationInfo or no descriptor defined for the specified operation or the managed resource is null.  -  `InvalidTargetObjectTypeException`: The 'targetType' field value is not 'objectReference'.
- **ReflectionException** — Wraps an `java.lang.Exception` thrown while trying to invoke the method.
- **RuntimeOperationsException** — Wraps an `IllegalArgumentException` Method name is null.
