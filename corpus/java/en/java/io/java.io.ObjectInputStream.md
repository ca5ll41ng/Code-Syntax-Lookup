---
id: "java-en-function-java-io-objectinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.io.ObjectInputStream"
title: "ObjectInputStream"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream

An ObjectInputStream deserializes primitive data and objects previously
 written using an ObjectOutputStream.

 

**Warning: Deserialization of untrusted data is inherently dangerous
 and should be avoided. Untrusted data should be carefully validated according to the
 "Serialization and Deserialization" section of the
 `secure_coding_guidelines_javase Secure Coding Guidelines for Java SE`.
 `serialization_filter_guide Serialization Filtering` describes best
 practices for defensive use of serial filters.
 **

 

The key to disabling deserialization attacks is to prevent instances of
 arbitrary classes from being deserialized, thereby preventing the direct or
 indirect execution of their methods.
 `ObjectInputFilter` describes how to use filters and
 `ObjectInputFilter.Config` describes how to configure the filter and filter factory.
 Each stream has an optional deserialization filter
 to check the classes and resource limits during deserialization.
 The JVM-wide filter factory ensures that a filter can be set on every `ObjectInputStream`
 and every object read from the stream can be checked.
 The `ObjectInputStream() ObjectInputStream constructors` invoke the filter factory
 to select the initial filter which may be updated or replaced by `setObjectInputFilter`.
 

 If an ObjectInputStream has a filter, the `ObjectInputFilter` can check that
 the classes, array lengths, number of references in the stream, depth, and
 number of bytes consumed from the input stream are allowed and
 if not, can terminate deserialization.

 

ObjectOutputStream and ObjectInputStream can provide an application with
 persistent storage for graphs of objects when used with a FileOutputStream
 and FileInputStream respectively.  ObjectInputStream is used to recover
 those objects previously serialized. Other uses include passing objects
 between hosts using a socket stream or for marshaling and unmarshaling
 arguments and parameters in a remote communication system.

 

ObjectInputStream ensures that the types of all objects in the graph
 created from the stream match the classes present in the Java Virtual
 Machine.  Classes are loaded as required using the standard mechanisms.

 

Only objects that support the java.io.Serializable or
 java.io.Externalizable interface can be read from streams.

 

The method `readObject` is used to read an object from the
 stream.  Java's safe casting should be used to get the desired type.  In
 Java, strings and arrays are objects and are treated as objects during
 serialization. When read they need to be cast to the expected type.

 

Primitive data types can be read from the stream using the appropriate
 method on DataInput.

 

The default deserialization mechanism for objects restores the contents
 of each field to the value and type it had when it was written.  Fields
 declared as transient or static are ignored by the deserialization process.
 References to other objects cause those objects to be read from the stream
 as necessary.  Graphs of objects are restored correctly using a reference
 sharing mechanism.  New objects are always allocated when deserializing,
 which prevents existing objects from being overwritten.

 

Reading an object is analogous to running the constructors of a new
 object.  Memory is allocated for the object and initialized to zero (NULL).
 No-arg constructors are invoked for the non-serializable classes and then
 the fields of the serializable classes are restored from the stream starting
 with the serializable class closest to java.lang.object and finishing with
 the object's most specific class.

 

For example to read from a stream as written by the example in
 `ObjectOutputStream`:
 

 {@snippet lang="java" :
     try (FileInputStream fis = new FileInputStream("t.tmp");
          ObjectInputStream ois = new ObjectInputStream(fis)) {
         String label = (String) ois.readObject();
         LocalDateTime dateTime = (LocalDateTime) ois.readObject();
         // Use label and dateTime
     } catch (Exception ex) {
         // handle exception
     }
 }

 

Classes control how they are serialized by implementing either the
 java.io.Serializable or java.io.Externalizable interfaces.

 

Implementing the Serializable interface allows object serialization to
 save and restore the entire state of the object and it allows classes to
 evolve between the time the stream is written and the time it is read.  It
 automatically traverses references between objects, saving and restoring
 entire graphs.

 

Serializable classes that require special handling during the
 serialization and deserialization process should implement methods
 with the following signatures:

 {@snippet lang="java":
     private void writeObject(java.io.ObjectOutputStream stream)
         throws IOException;
     private void readObject(java.io.ObjectInputStream stream)
         throws IOException, ClassNotFoundException;
     private void readObjectNoData()
         throws ObjectStreamException;
 }

 

The method name, modifiers, return type, and number and type of
 parameters must match exactly for the method to be used by
 serialization or deserialization. The methods should only be
 declared to throw checked exceptions consistent with these
 signatures.

 

The readObject method is responsible for reading and restoring the state
 of the object for its particular class using data written to the stream by
 the corresponding writeObject method.  The method does not need to concern
 itself with the state belonging to its superclasses or subclasses.  State is
 restored by reading data from the ObjectInputStream for the individual
 fields and making assignments to the appropriate fields of the object.
 Reading primitive data types is supported by DataInput.

 

Any attempt to read object data which exceeds the boundaries of the
 custom data written by the corresponding writeObject method will cause an
 OptionalDataException to be thrown with an eof field value of true.
 Non-object reads which exceed the end of the allotted data will reflect the
 end of data in the same way that they would indicate the end of the stream:
 bytewise reads will return -1 as the byte read or number of bytes read, and
 primitive reads will throw EOFExceptions.  If there is no corresponding
 writeObject method, then the end of default serialized data marks the end of
 the allotted data.

 

Primitive and object read calls issued from within a readExternal method
 behave in the same manner--if the stream is already positioned at the end of
 data written by the corresponding writeExternal method, object reads will
 throw OptionalDataExceptions with eof set to true, bytewise reads will
 return -1, and primitive reads will throw EOFExceptions.  Note that this
 behavior does not hold for streams written with the old
 `ObjectStreamConstants.PROTOCOL_VERSION_1` protocol, in which the
 end of data written by writeExternal methods is not demarcated, and hence
 cannot be detected.

 

The readObjectNoData method is responsible for initializing the state of
 the object for its particular class in the event that the serialization
 stream does not list the given class as a superclass of the object being
 deserialized.  This may occur in cases where the receiving party uses a
 different version of the deserialized instance's class than the sending
 party, and the receiver's version extends classes that are not extended by
 the sender's version.  This may also occur if the serialization stream has
 been tampered; hence, readObjectNoData is useful for initializing
 deserialized objects properly despite a "hostile" or incomplete source
 stream.

 

Serialization does not read or assign values to the fields of any object
 that does not implement the java.io.Serializable interface.  Subclasses of
 Objects that are not serializable can be serializable. In this case the
 non-serializable class must have a no-arg constructor to allow its fields to
 be initialized.  In this case it is the responsibility of the subclass to
 save and restore the state of the non-serializable class. It is frequently
 the case that the fields of that class are accessible (public, package, or
 protected) or that there are get and set methods that can be used to restore
 the state.

 

Any exception that occurs while deserializing an object will be caught by
 the ObjectInputStream and abort the reading process.

 

Implementing the Externalizable interface allows the object to assume
 complete control over the contents and format of the object's serialized
 form.  The methods of the Externalizable interface, writeExternal and
 readExternal, are called to save and restore the objects state.  When
 implemented by a class they can write and read their own state using all of
 the methods of ObjectOutput and ObjectInput.  It is the responsibility of
 the objects to handle any versioning that occurs.

 

Enum constants are deserialized differently than ordinary serializable or
 externalizable objects.  The serialized form of an enum constant consists
 solely of its name; field values of the constant are not transmitted.  To
 deserialize an enum constant, ObjectInputStream reads the constant name from
 the stream; the deserialized constant is then obtained by calling the static
 method `Enum.valueOf(Class, String)` with the enum constant's
 base type and the received constant name as arguments.  Like other
 serializable or externalizable objects, enum constants can function as the
 targets of back references appearing subsequently in the serialization
 stream.  The process by which enum constants are deserialized cannot be
 customized: any class-specific readObject, readObjectNoData, and readResolve
 methods defined by enum types are ignored during deserialization.
 Similarly, any serialPersistentFields or serialVersionUID field declarations
 are also ignored--all enum types have a fixed serialVersionUID of 0L.

 
 

Records are serialized differently than ordinary serializable or externalizable
 objects. During deserialization the record's canonical constructor is invoked
 to construct the record object. Certain serialization-related methods, such
 as readObject and writeObject, are ignored for serializable records. See
 
 Java Object Serialization Specification, Section 1.13,
 "Serialization of Records" for additional information.

 
      
          

`isValue Value classes` that are not records cannot be
          deserialized directly. To serialize an instance of a value class, a proxy
          object should be used instead. That object can then implement
          
          `readResolve` to construct and return the expected value class
          instance.

**参见**

- java.io.DataInput
- java.io.ObjectOutputStream
- java.io.Serializable
- Java Object Serialization Specification, Section 3, "Object Input Classes"

> *Since 1.1*
