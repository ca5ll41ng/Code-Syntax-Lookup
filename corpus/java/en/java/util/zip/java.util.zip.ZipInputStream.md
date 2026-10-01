---
id: "java-en-function-java-util-zip-zipinputstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.ZipInputStream"
title: "ZipInputStream"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream

An input stream for reading compressed and uncompressed
 `ZipEntry ZIP file entries` from a stream of bytes in the ZIP file
 format.
 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.
 Reading Zip File Entries

 The `getNextEntry` method is used to read the next ZIP file entry
 (Local file (LOC) header record in the ZIP format) and position the stream at
 the entry's file data. The file data may read using one of the
 `ZipInputStream` read methods such
 as `read(byte[], int, int) read` or `readAllBytes`.
 For example:
    {@snippet lang="java" :
      Path jar = Path.of("foo.jar");
      try (InputStream is = Files.newInputStream(jar);
           ZipInputStream zis = new ZipInputStream(is)) {
          ZipEntry ze;
          while ((ze = zis.getNextEntry()) != null) {
             var bytes = zis.readAllBytes();
             System.out.printf("Entry: %s, bytes read: %s%n", ze.getName(),
                     bytes.length);
          }
      }
    }
 The LOC header contains metadata about the ZIP file entry. `ZipInputStream`
 does not read the Central directory (CEN) header for the entry and therefore
 will not have access to its metadata such as the external file attributes.
 `ZipFile` may be used when the information stored within
 the CEN header is required.

> *Since 1.1*
