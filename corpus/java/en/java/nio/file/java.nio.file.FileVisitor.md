---
id: "java-en-function-java-nio-file-filevisitor"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.FileVisitor"
title: "FileVisitor"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/FileVisitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileVisitor

A visitor of files. An implementation of this interface is provided to the
 `walkFileTree Files.walkFileTree` methods to visit each file in
 a file tree.

 

 **Usage Examples:**
 Suppose we want to delete a file tree. In that case, each directory should
 be deleted after the entries in the directory are deleted.
 {@snippet lang=java :
     Path start = ...
     Files.walkFileTree(start, new SimpleFileVisitor() {
         public FileVisitResult visitFile(Path file, BasicFileAttributes attrs)
             throws IOException
         {
             Files.delete(file);
             return FileVisitResult.CONTINUE;
         }
         public FileVisitResult postVisitDirectory(Path dir, IOException e)
             throws IOException
         {
             if (e == null) {
                 Files.delete(dir);
                 return FileVisitResult.CONTINUE;
             } else {
                 // directory iteration failed
                 throw e;
             }
         }
     });
 }
 

 Furthermore, suppose we want to copy a file tree to a target location.
 In that case, symbolic links should be followed and the target directory
 should be created before the entries in the directory are copied.
 {@snippet lang=java :
     final Path source = ...
     final Path target = ...

     Files.walkFileTree(source, EnumSet.of(FileVisitOption.FOLLOW_LINKS), Integer.MAX_VALUE,
         new SimpleFileVisitor() {
             public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs)
                 throws IOException
             {
                 Path targetdir = target.resolve(source.relativize(dir));
                 try {
                     Files.copy(dir, targetdir);
                 } catch (FileAlreadyExistsException e) {
                      if (!Files.isDirectory(targetdir))
                          throw e;
                 }
                 return CONTINUE;
             }
             public FileVisitResult visitFile(Path file, BasicFileAttributes attrs)
                 throws IOException
             {
                 Files.copy(file, target.resolve(source.relativize(file)));
                 return CONTINUE;
             }
         });
 }

**参数**

- **the** — type of file/directory

> *Since 1.7*
