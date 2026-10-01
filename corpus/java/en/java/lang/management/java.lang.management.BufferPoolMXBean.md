---
id: "java-en-function-java-lang-management-bufferpoolmxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.BufferPoolMXBean"
title: "BufferPoolMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/BufferPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferPoolMXBean

The management interface for a buffer pool, for example a pool of
 `allocateDirect direct` or `java.nio.MappedByteBuffer mapped` buffers.

 

 A class implementing this interface is an
 `javax.management.MXBean`. A Java
 virtual machine has one or more implementations of this interface. The `getPlatformMXBeans getPlatformMXBeans`
 method can be used to obtain the list of `BufferPoolMXBean` objects
 representing the management interfaces for pools of buffers as follows:
 
```

     List&lt;BufferPoolMXBean&gt; pools = ManagementFactory.getPlatformMXBeans(BufferPoolMXBean.class);
 
```

 

 The management interfaces are also registered with the platform `javax.management.MBeanServer MBeanServer`. The `javax.management.ObjectName ObjectName` that uniquely identifies the
 management interface within the `MBeanServer` takes the form:
 
```

     java.nio:type=BufferPool,name=pool name
 
```

 where pool name is the `getName name` of the buffer pool.

> *Since 1.7*
