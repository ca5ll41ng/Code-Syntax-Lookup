---
id: "python-en-function-tarfile-open"
language: "python"
lang: "en"
category: "function"
name: "open"
signature: "open(name=None, mode='r', fileobj=None, bufsize=10240, **kwargs)"
directive: "function"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.open"
license: "PSF"
updated: "2026-10-01"
---

# open

Return a `TarFile` object for the pathname *name*. For detailed
information on `TarFile` objects and the keyword arguments that are
allowed, see `tarfile-objects`.

*mode* has to be a string of the form `'filemode[:compression]'`, it defaults
to `'r'`. Here is a full list of mode combinations:

+------------------+---------------------------------------------+
 mode              action                                      
+==================+=============================================+
 `'r'` or        Open for reading with transparent           
 `'r:*'`         compression (recommended).                  
+------------------+---------------------------------------------+
 `'r:'`          Open for reading exclusively without        
                   compression.                                
+------------------+---------------------------------------------+
 `'r:gz'`        Open for reading with gzip compression.     
+------------------+---------------------------------------------+
 `'r:bz2'`       Open for reading with bzip2 compression.    
+------------------+---------------------------------------------+
 `'r:xz'`        Open for reading with lzma compression.     
+------------------+---------------------------------------------+
 `'r:zst'`       Open for reading with Zstandard compression.
+------------------+---------------------------------------------+
 `'x'` or        Create a tarfile exclusively without        
 `'x:'`          compression.                                
                   Raise a `FileExistsError` exception    
                   if it already exists.                       
+------------------+---------------------------------------------+
 `'x:gz'`        Create a tarfile with gzip compression.     
                   Raise a `FileExistsError` exception    
                   if it already exists.                       
+------------------+---------------------------------------------+
 `'x:bz2'`       Create a tarfile with bzip2 compression.    
                   Raise a `FileExistsError` exception    
                   if it already exists.                       
+------------------+---------------------------------------------+
 `'x:xz'`        Create a tarfile with lzma compression.     
                   Raise a `FileExistsError` exception    
                   if it already exists.                       
+------------------+---------------------------------------------+
 `'x:zst'`       Create a tarfile with Zstandard compression.
                   Raise a `FileExistsError` exception    
                   if it already exists.                       
+------------------+---------------------------------------------+
 `'a'` or        Open for appending with no compression. The 
 `'a:'`          file is created if it does not exist.       
+------------------+---------------------------------------------+
 `'w'` or        Open for uncompressed writing.              
 `'w:'`                                                      
+------------------+---------------------------------------------+
 `'w:gz'`        Open for gzip compressed writing.           
+------------------+---------------------------------------------+
 `'w:bz2'`       Open for bzip2 compressed writing.          
+------------------+---------------------------------------------+
 `'w:xz'`        Open for lzma compressed writing.           
+------------------+---------------------------------------------+
 `'w:zst'`       Open for Zstandard compressed writing.      |
+------------------+---------------------------------------------+

Note that `'a:gz'`, `'a:bz2'` or `'a:xz'` is not possible. If *mode*
is not suitable to open a certain (compressed) file for reading,
`ReadError` is raised. Use *mode* `'r'` to avoid this.  If a
compression method is not supported, `CompressionError` is raised.

If *fileobj* is specified, it is used as an alternative to a `file object`
opened in binary mode for *name*. It is supposed to be at position 0.

For modes `'w:gz'`, `'x:gz'`, `'wgz'`, `'w:bz2'`, `'x:bz2'`,
`'wbz2'`, `tarfile.open` accepts the keyword argument
*compresslevel* (default `6`) to specify the compression level of the file.

For modes `'w:xz'`, `'x:xz'` and `'w|xz'`, `tarfile.open` accepts the
keyword argument *preset* to specify the compression level of the file.

For modes `'w:zst'`, `'x:zst'` and `'w|zst'`, `tarfile.open`
accepts the keyword argument *level* to specify the compression level of
the file. The keyword argument *options* may also be passed, providing
advanced Zstandard compression parameters described by
`~compression.zstd.CompressionParameter`. The keyword argument
*zstd_dict* can be passed to provide a `~compression.zstd.ZstdDict`,
a Zstandard dictionary used to improve compression of smaller amounts of
data.

For modes `'w:gz'` and `'w|gz'`, `tarfile.open` accepts the
keyword argument *mtime* to create a gzip archive header with that mtime. By
default, the mtime is set to the time of creation of the archive. Use
*mtime* `0` to generate a compressed stream that does not depend on
creation time, for reproducible output.

For special purposes, there is a second format for *mode*:
`'filemode|[compression]'`.  `tarfile.open` will return a `TarFile`
object that processes its data as a stream of blocks.  No random seeking will
be done on the file. If given, *fileobj* may be any object that has a
`~io.RawIOBase.read` or `~io.RawIOBase.write` method
(depending on the *mode*) that works with bytes.
*bufsize* specifies the blocksize and defaults to `20 * 512` bytes.
Use this variant in combination with e.g. `sys.stdin.buffer`, a socket
`file object` or a tape device.
However, such a `TarFile` object is limited in that it does
not allow random access, see `tar-examples`.  The currently
possible modes:

+-------------+--------------------------------------------+
 Mode         Action                                     
+=============+============================================+
 `'r*'`    Open a *stream* of tar blocks for reading  
              with transparent compression.              
+-------------+--------------------------------------------+
 `'r'`     Open a *stream* of uncompressed tar blocks 
              for reading.                               
+-------------+--------------------------------------------+
 `'rgz'`   Open a gzip compressed *stream* for        
              reading.                                   
+-------------+--------------------------------------------+
 `'rbz2'`  Open a bzip2 compressed *stream* for       
              reading.                                   
+-------------+--------------------------------------------+
 `'rxz'`   Open an lzma compressed *stream* for       
              reading.                                   
+-------------+--------------------------------------------+
 `'rzst'`  Open a Zstandard compressed *stream* for   
              reading.                                   
+-------------+--------------------------------------------+
 `'w'`     Open an uncompressed *stream* for writing. 
+-------------+--------------------------------------------+
 `'wgz'`   Open a gzip compressed *stream* for        
              writing.                                   
+-------------+--------------------------------------------+
 `'wbz2'`  Open a bzip2 compressed *stream* for       
              writing.                                   
+-------------+--------------------------------------------+
 `'wxz'`   Open an lzma compressed *stream* for       
              writing.                                   
+-------------+--------------------------------------------+
 `'wzst'`  Open a Zstandard compressed *stream* for   
              writing.                                   |
+-------------+--------------------------------------------+

> *Changed in 3.5*: The ``'x'`` (exclusive creation) mode was added.

> *Changed in 3.6*: The *name* parameter accepts a :term:`path-like object`.

> *Changed in 3.12*: The *compresslevel* keyword argument also works for streams.

> *Changed in 3.14*: The *preset* keyword argument also works for streams.

> *Changed in 3.15*: The default compression level was reduced to 6 (down from 9). It is the default level used by most compression tools and a better tradeoff between speed and performance.
