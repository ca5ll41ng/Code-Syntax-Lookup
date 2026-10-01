---
id: "java-en-function-java-lang-illegalaccessexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.IllegalAccessException"
title: "IllegalAccessException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/IllegalAccessException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IllegalAccessException

An IllegalAccessException is thrown when an application tries
 to reflectively create an instance (other than an array),
 set or get a field, or invoke a method, but the currently
 executing method does not have access to the definition of
 the specified class, field, method or constructor.

**参见**

- Class#newInstance()
- java.lang.reflect.Field#set(Object, Object)
- java.lang.reflect.Field#setBoolean(Object, boolean)
- java.lang.reflect.Field#setByte(Object, byte)
- java.lang.reflect.Field#setShort(Object, short)
- java.lang.reflect.Field#setChar(Object, char)
- java.lang.reflect.Field#setInt(Object, int)
- java.lang.reflect.Field#setLong(Object, long)
- java.lang.reflect.Field#setFloat(Object, float)
- java.lang.reflect.Field#setDouble(Object, double)
- java.lang.reflect.Field#get(Object)
- java.lang.reflect.Field#getBoolean(Object)
- java.lang.reflect.Field#getByte(Object)
- java.lang.reflect.Field#getShort(Object)
- java.lang.reflect.Field#getChar(Object)
- java.lang.reflect.Field#getInt(Object)
- java.lang.reflect.Field#getLong(Object)
- java.lang.reflect.Field#getFloat(Object)
- java.lang.reflect.Field#getDouble(Object)
- java.lang.reflect.Method#invoke(Object, Object[])
- java.lang.reflect.Constructor#newInstance(Object[])

> *Since 1.0*
