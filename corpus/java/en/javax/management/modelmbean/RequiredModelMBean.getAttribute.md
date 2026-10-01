---
id: "java-en-function-requiredmodelmbean-getattribute"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.getAttribute"
signature: "public Object getAttribute(String attrName) throws AttributeNotFoundException, MBeanException, ReflectionException"
title: "RequiredModelMBean.getAttribute"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.getAttribute

```java
public Object getAttribute(String attrName) throws AttributeNotFoundException, MBeanException, ReflectionException
```

Returns the value of a specific attribute defined for this
 ModelMBean.
 The last value returned by an attribute may be cached in the
 attribute's descriptor.
 The valid value will be in the 'value' field if there is one.
 If the 'currencyTimeLimit' field in the descriptor is:
 
 
-   **&lt;0** Then the value is not cached and is never valid.
       The getter method is invoked for the attribute.
       The 'value' and 'lastUpdatedTimeStamp' fields are cleared.
 
-   **=0** Then the value is always cached and always valid.
       The 'value' field is returned. If there is no'value' field
       then the getter method is invoked for the attribute.
       The 'lastUpdatedTimeStamp' field and `value' fields are set
       to the attribute's value and the current time stamp.
 
-   **&gt;0** Represents the number of seconds that the 'value'
       field is valid.
       The 'value' field is no longer valid when
       'lastUpdatedTimeStamp' + 'currencyTimeLimit' &gt; Now.
   
        
- When 'value' is valid, 'value' is returned.
        
- When 'value' is no longer valid then the getter
            method is invoked for the attribute.
            The 'lastUpdatedTimeStamp' field and `value' fields
            are updated.
   

 

 

**Note:** because of inconsistencies in previous versions of
 this specification, it is recommended not to use negative or zero
 values for currencyTimeLimit.  To indicate that a
 cached value is never valid, omit the
 currencyTimeLimit field.  To indicate that it is
 always valid, use a very large number for this field.

 

If the 'getMethod' field contains the name of a valid
 operation descriptor, then the method described by the
 operation descriptor is executed.  The response from the
 method is returned as the value of the attribute.  If the
 operation fails or the returned value is not compatible with
 the declared type of the attribute, an exception will be thrown.

 

If no 'getMethod' field is defined then the default value of the
 attribute is returned. If the returned value is not compatible with
 the declared type of the attribute, an exception will be thrown.

 

The declared type of the attribute is the String returned by
 `getType`.  A value is compatible
 with this type if one of the following is true:
 
 
- the value is null;
 
- the declared name is a primitive type name (such as "int")
     and the value is an instance of the corresponding wrapper
     type (such as java.lang.Integer);
 
- the name of the value's class is identical to the declared name;
 
- the declared name can be loaded by the value's class loader and
     produces a class to which the value can be assigned.
 

 

In this implementation, in every case where the getMethod needs to
 be called, because the method is invoked through the standard "invoke"
 method and thus needs operationInfo, an operation must be specified
 for that getMethod so that the invocation works correctly.

**参数**

- **attrName** — A String specifying the name of the attribute to be retrieved. It must match the name of a ModelMBeanAttributeInfo.

**返回**

- The value of the retrieved attribute from the descriptor 'value' field or from the invocation of the operation in the 'getMethod' field of the descriptor.

**异常**

- **AttributeNotFoundException** — The specified attribute is not accessible in the MBean. The following cases may result in an AttributeNotFoundException:   -  No ModelMBeanInfo was found for the Model MBean.  -  No ModelMBeanAttributeInfo was found for the specified attribute name.  -  The ModelMBeanAttributeInfo isReadable method returns 'false'.
- **MBeanException** — Wraps one of the following Exceptions:   -  `InvalidAttributeValueException`: A wrong value type was received from the attribute's getter method or no 'getMethod' field defined in the descriptor for the attribute and no default value exists.  -  `ServiceNotFoundException`: No ModelMBeanOperationInfo defined for the attribute's getter method or no descriptor associated with the ModelMBeanOperationInfo or the managed resource is null.  -  `InvalidTargetObjectTypeException` The 'targetType' field value is not 'objectReference'.  -  An Exception thrown by the managed object's getter.
- **ReflectionException** — Wraps an `java.lang.Exception` thrown while trying to invoke the getter.
- **RuntimeOperationsException** — Wraps an `IllegalArgumentException`: The attribute name in parameter is null.

**参见**

- #setAttribute(javax.management.Attribute)
