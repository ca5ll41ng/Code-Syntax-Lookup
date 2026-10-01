---
id: "java-en-function-requiredmodelmbean-setattribute"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.setAttribute"
signature: "public void setAttribute(Attribute attribute) throws AttributeNotFoundException, InvalidAttributeValueException, MBeanException, ReflectionException"
title: "RequiredModelMBean.setAttribute"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.setAttribute

```java
public void setAttribute(Attribute attribute) throws AttributeNotFoundException, InvalidAttributeValueException, MBeanException, ReflectionException
```

Sets the value of a specific attribute of a named ModelMBean.

 If the 'setMethod' field of the attribute's descriptor
 contains the name of a valid operation descriptor, then the
 method described by the operation descriptor is executed.
 In this implementation, the operation descriptor must be specified
 correctly and assigned to the modelMBeanInfo so that the 'setMethod'
 works correctly.
 The response from the method is set as the value of the attribute
 in the descriptor.

 

If currencyTimeLimit is &gt; 0, then the new value for the
 attribute is cached in the attribute descriptor's
 'value' field and the 'lastUpdatedTimeStamp' field is set to
 the current time stamp.

 

If the persist field of the attribute's descriptor is not null
 then Persistence policy from the attribute descriptor is used to
 guide storing the attribute in a persistent store.
 
Store the MBean if 'persistPolicy' field is:
 
 
-  != "never"
 
-  = "always"
 
-  = "onUpdate"
 
-  = "onTimer" and now > 'lastPersistTime' + 'persistPeriod'
 
-  = "NoMoreOftenThan" and now > 'lastPersistTime' +
         'persistPeriod'
 

 Do not store the MBean if 'persistPolicy' field is:
 
 
-  = "never"
 
-  = = "onTimer" && now < 'lastPersistTime' + 'persistPeriod'
 
-  = "onUnregister"
 
-  = = "NoMoreOftenThan" and now < 'lastPersistTime' +
        'persistPeriod'
 

 

The ModelMBeanInfo of the Model MBean is stored in a file.

**参数**

- **attribute** — The Attribute instance containing the name of the attribute to be set and the value it is to be set to.

**异常**

- **AttributeNotFoundException** — The specified attribute is not accessible in the MBean.  The following cases may result in an AttributeNotFoundException:   -  No ModelMBeanAttributeInfo is found for the specified attribute.  -  The ModelMBeanAttributeInfo's isWritable method returns 'false'.
- **InvalidAttributeValueException** — No descriptor is defined for the specified attribute.
- **MBeanException** — Wraps one of the following Exceptions:   -  An Exception thrown by the managed object's setter.  -  A `ServiceNotFoundException` if a setMethod field is defined in the descriptor for the attribute and the managed resource is null; or if no setMethod field is defined and caching is not enabled for the attribute. Note that if there is no getMethod field either, then caching is automatically enabled.  -  `InvalidTargetObjectTypeException` The 'targetType' field value is not 'objectReference'.  -  An Exception thrown by the managed object's getter.
- **ReflectionException** — Wraps an `java.lang.Exception` thrown while trying to invoke the setter.
- **RuntimeOperationsException** — Wraps an `IllegalArgumentException`: The attribute in parameter is null.

**参见**

- #getAttribute(java.lang.String)
