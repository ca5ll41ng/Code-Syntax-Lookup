---
id: "java-en-function-java-io-objectoutputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.ObjectOutputStream"
title: "ObjectOutputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream

An ObjectOutputStream writes primitive data types and graphs of Java objects
 to an OutputStream.  The objects can be read (reconstituted) using an
 ObjectInputStream.  Persistent storage of objects can be accomplished by
 using a file for the stream.  If the stream is a network socket stream, the
 objects can be reconstituted on another host or in another process.

 

Only objects that support the java.io.Serializable interface can be
 written to streams.  The class of each serializable object is encoded
 including the class name and signature of the class, the values of the
 object's fields and arrays, and the closure of any other objects referenced
 from the initial objects.

 

The method writeObject is used to write an object to the stream.  Any
 object, including Strings and arrays, is written with writeObject. Multiple
 objects or primitives can be written to the stream.  The objects must be
 read back from the corresponding ObjectInputstream with the same types and
 in the same order as they were written.

 

Primitive data types can also be written to the stream using the
 appropriate methods from DataOutput. Strings can also be written using the
 writeUTF method.

 

The default serialization mechanism for an object writes the class of the
 object, the class signature, and the values of all non-transient and
 non-static fields.  References to other objects (except in transient or
 static fields) cause those objects to be written also. Multiple references
 to a single object are encoded using a reference sharing mechanism so that
 graphs of objects can be restored to the same shape as when the original was
 written.

 

For example to write an object that can be read by the example in
 `ObjectInputStream`:
 {@snippet lang="java":
      try (FileOutputStream fos = new FileOutputStream("t.tmp");
           ObjectOutputStream oos = new ObjectOutputStream(fos)) {
          oos.writeObject("Today");
          oos.writeObject(LocalDateTime.now());
      } catch (Exception ex) {
          // handle exception
      }
 }

 

Serializable classes that require special handling during the
 serialization and deserialization process should implement methods
 with the following signatures:

 {@snippet lang="java":
     private void readObject(java.io.ObjectInputStream stream)
         throws IOException, ClassNotFoundException;
     private void writeObject(java.io.ObjectOutputStream stream)
         throws IOException;
     private void readObjectNoData()
         throws ObjectStreamException;
 }

 

The method name, modifiers, return type, and number and type of
 parameters must match exactly for the method to be used by
 serialization or deserialization. The methods should only be
 declared to throw checked exceptions consistent with these
 signatures.

 

The writeObject method is responsible for writing the state of the object
 for its particular class so that the corresponding readObject method can
 restore it.  The method does not need to concern itself with the state
 belonging to the object's superclasses or subclasses.  State is saved by
 writing the individual fields to the ObjectOutputStream using the
 writeObject method or by using the methods for primitive data types
 supported by DataOutput.

 

Serialization does not write out the fields of any object that does not
 implement the java.io.Serializable interface.  Subclasses of Objects that
 are not serializable can be serializable. In this case the non-serializable
 class must have a no-arg constructor to allow its fields to be initialized.
 In this case it is the responsibility of the subclass to save and restore
 the state of the non-serializable class. It is frequently the case that the
 fields of that class are accessible (public, package, or protected) or that
 there are get and set methods that can be used to restore the state.

 

Serialization of an object can be prevented by implementing writeObject
 and readObject methods that throw the NotSerializableException.  The
 exception will be caught by the ObjectOutputStream and abort the
 serialization process.

 

Implementing the Externalizable interface allows the object to assume
 complete control over the contents and format of the object's serialized
 form.  The methods of the Externalizable interface, writeExternal and
 readExternal, are called to save and restore the objects state.  When
 implemented by a class they can write and read their own state using all of
 the methods of ObjectOutput and ObjectInput.  It is the responsibility of
 the objects to handle any versioning that occurs.

 

Enum constants are serialized differently than ordinary serializable or
 externalizable objects.  The serialized form of an enum constant consists
 solely of its name; field values of the constant are not transmitted.  To
 serialize an enum constant, ObjectOutputStream writes the string returned by
 the constant's name method.  Like other serializable or externalizable
 objects, enum constants can function as the targets of back references
 appearing subsequently in the serialization stream.  The process by which
 enum constants are serialized cannot be customized; any class-specific
 writeObject and writeReplace methods defined by enum types are ignored
 during serialization.  Similarly, any serialPersistentFields or
 serialVersionUID field declarations are also ignored--all enum types have a
 fixed serialVersionUID of 0L.

 

Primitive data, excluding serializable fields and externalizable data, is
 written to the ObjectOutputStream in block-data records. A block data record
 is composed of a header and data. The block data header consists of a marker
 and the number of bytes to follow the header.  Consecutive primitive data
 writes are merged into one block-data record.  The blocking factor used for
 a block-data record will be 1024 bytes.  Each block-data record will be
 filled up to 1024 bytes, or be written whenever there is a termination of
 block-data mode.  Calls to the ObjectOutputStream methods writeObject,
 defaultWriteObject and writeFields initially terminate any existing
 block-data record.

 

Records are serialized differently than ordinary serializable or externalizable
 objects, see record serialization.

 
      
          

`isValue Value classes` that are not records cannot be
          serialized directly. To serialize an instance of a value class, the
          
          `writeReplace` method can provide a proxy object instead. That
          object can then be serialized, and used to reconstruct the expected value
          class instance at deserialization time.

**参见**

- java.io.DataOutput
- java.io.ObjectInputStream
- java.io.Serializable
- java.io.Externalizable
- Java Object Serialization Specification, Section 2, "Object Output Classes"

> *Since 1.1*
