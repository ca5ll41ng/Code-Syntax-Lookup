---
id: "en-php-guide-phar-using"
language: "php"
lang: "en"
category: "guide"
name: "phar.using"
title: "Using Phar Archives"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.using.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Using Phar Archives

## Using Phar Archives: Introduction

Phar archives are similar in concept to Java JAR archives, but are tailored to the needs and to the flexibility of PHP applications. A Phar archive is used to distribute a complete PHP application or library in a single file. A Phar archive application is used exactly like any other PHP application:

```text

  
php coolapplication.phar
  
 
```

Using a Phar archive library is identical to using any other PHP library:

```php <?php include 'coollibrary.phar'; ?> ```

The `phar` stream wrapper provides the core of the phar extension, and is explained in detail here. The phar stream wrapper allows accessing the files within a phar archive using PHP's standard file functions `fopen()`, `opendir()`, and others that work on regular files. The `phar` stream wrapper supports all read/write operations on both files and directories.

```php <?php include 'phar://coollibrary.phar/internal/file.php'; header('Content-type: image/jpeg'); // phars can be accessed by full path or by alias echo file_get_contents('phar:///fullpath/to/coollibrary.phar/images/wow.jpg'); ?> ```

The `Phar` class implements advanced functionality for accessing files and for creating phar archives. The Phar class is explained in detail here.

```php <?php try { // open an existing phar $p = new Phar('coollibrary.phar', 0); // Phar extends SPL's DirectoryIterator class foreach (new RecursiveIteratorIterator($p) as $file) { // $file is a PharFileInfo class, and inherits from SplFileInfo echo $file->getFileName() . "\n"; echo file_get_contents($file->getPathName()) . "\n"; // display contents; } if (isset($p['internal/file.php'])) { var_dump($p['internal/file.php']->getMetadata()); } // create a new phar - phar.readonly must be 0 in php.ini // phar.readonly is enabled by default for security reasons. // On production servers, Phars need never be created, // only executed. if (Phar::canWrite()) { $p = new Phar('newphar.tar.phar', 0, 'newphar.tar.phar'); // make this a tar-based phar archive, compressed with gzip compression (.tar.gz) $p = $p->convertToExecutable(Phar::TAR, Phar::GZ); // create transaction - nothing is written to newphar.phar // until stopBuffering() is called, although temporary storage is needed $p->startBuffering(); // add all files in /path/to/project, saving in the phar with the prefix "project" $p->buildFromIterator(new RecursiveIteratorIterator(new RecursiveDirectoryIterator('/path/to/project')), '/path/to/'); // add a new file via the array access API $p['file1.txt'] = 'Information'; $fp = fopen('hugefile.dat', 'rb'); // copy all data from the stream $p['data/hugefile.dat'] = $fp; if (Phar::canCompress(Phar::GZ)) { $p['data/hugefile.dat']->compress(Phar::GZ); } $p['images/wow.jpg'] = file_get_contents('images/wow.jpg'); // any value can be saved as file-specific meta-data $p['images/wow.jpg']->setMetadata(array('mime-type' => 'image/jpeg')); $p['index.php'] = file_get_contents('index.php'); $p->setMetadata(array('bootstrap' => 'index.php')); // save the phar archive to disk $p->stopBuffering(); } } catch (Exception $e) { echo 'Could not open Phar: ', $e; } ?> ```

In addition, verification of phar file contents can be done using any of the supported symmetric hash algorithms (MD5, SHA1, SHA256 and SHA512 if ext/hash is enabled) and using asymmetric public/private key signing using OpenSSL. To take advantage of OpenSSL signing, you need to generate a public/private key pair, and use the private key to set the signature using `Phar::setSignatureAlgorithm()`. In addition, the public key as extracted using this code:

```php

   
<?php
$public = openssl_get_publickey(file_get_contents('private.pem'));
$pkey = '';
openssl_pkey_export($public, $pkey);
?>
   
  
```

must be saved adjacent to the phar archive it verifies. If the phar archive is saved as `/path/to/my.phar`, the public key must be saved as `/path/to/my.phar.pubkey`, or phar will be unable to verify the OpenSSL signature.

The `Phar` class also provides 3 static methods, `Phar::webPhar()`, `Phar::mungServer()` and `Phar::interceptFileFuncs()` that are crucial to packaging up PHP applications designed for usage on regular filesystems and for web-based applications. `Phar::webPhar()` implements a front controller that routes HTTP calls to the correct location within the phar archive. `Phar::mungServer()` is used to modify the values of the `$_SERVER` array to trick applications that process these values. `Phar::interceptFileFuncs()` instructs Phar to intercept calls to `fopen()`, `file_get_contents()`, `opendir()`, and all of the stat-based functions (`file_exists()`, `is_readable()` and so on) and route all relative paths to locations within the phar archive.

As an example, packaging up a release of the popular phpMyAdmin application for use as a phar archive requires only this simple script and then `phpMyAdmin.phar.tar.php` can be accessed as a regular file from your web server after modifying the user/password:

```php <?php @unlink('phpMyAdmin.phar.tar.php'); copy('phpMyAdmin-2.11.3-english.tar.gz', 'phpMyAdmin.phar.tar.php'); $a = new Phar('phpMyAdmin.phar.tar.php'); $a->startBuffering(); $a["phpMyAdmin-2.11.3-english/config.inc.php"] = '<?php /* Servers configuration */ $i = 0; /* Server localhost (config:root) [1] */ $i++; $cfg[\'Servers\'][$i][\'host\'] = \'localhost\'; $cfg[\'Servers\'][$i][\'extension\'] = \'mysqli\'; $cfg[\'Servers\'][$i][\'connect_type\'] = \'tcp\'; $cfg[\'Servers\'][$i][\'compress\'] = false; $cfg[\'Servers\'][$i][\'auth_type\'] = \'config\'; $cfg[\'Servers\'][$i][\'user\'] = \'root\'; $cfg[\'Servers\'][$i][\'password\'] = \'\'; /* End of servers configuration */ if (strpos(PHP_OS, \'WIN\') !== false) { $cfg[\'UploadDir\'] = getcwd(); } else { $cfg[\'UploadDir\'] = \'/tmp/pharphpmyadmin\'; @mkdir(\'/tmp/pharphpmyadmin\'); @chmod(\'/tmp/pharphpmyadmin\', 0777); }'; $a->setStub('<?php Phar::interceptFileFuncs(); Phar::webPhar("phpMyAdmin.phar", "phpMyAdmin-2.11.3-english/index.php"); echo "phpMyAdmin is intended to be executed from a web browser\n"; exit -1; __HALT_COMPILER(); '); $a->stopBuffering(); ?> ```

## Using Phar Archives: the phar stream wrapper

The Phar stream wrapper fully supports `fopen()` for read and write (not append), `unlink()`, `stat()`, `fstat()`, `fseek()`, `rename()` and directory stream operations `opendir()` and `rmdir()` and `mkdir()`.

Individual file compression and per-file metadata can also be manipulated in a Phar archive using stream contexts:

```php <?php $context = stream_context_create(array('phar' => array('compress' => Phar::GZ)), array('metadata' => array('user' => 'cellog'))); file_put_contents('phar://my.phar/somefile.php', 0, $context); ?> ```

The `phar` stream wrapper does not operate on remote files, and cannot operate on remote files, and so is allowed even when the allow_url_fopen and allow_url_include INI options are disabled.

Although it is possible to create phar archives from scratch just using stream operations, it is best to use the functionality built into the Phar class. The stream wrapper is best used for read-only operations.

## Using Phar Archives: the Phar and PharData class

The `Phar` class supports reading and manipulation of Phar archives, as well as iteration through inherited functionality of the `RecursiveDirectoryIterator` class. With support for the `ArrayAccess` interface, files inside a Phar archive can be accessed as if they were part of an associative array.

The `PharData` class extends the `Phar`, and allows creating and modifying non-executable (data) tar and zip archives even if `phar.readonly`=1 in php.ini. As such, `PharData::setAlias()` and `PharData::setStub()` are both disabled as the concept of alias and stub are unique to executable phar archives.

It is important to note that when creating a Phar archive, the full path should be passed to the `Phar` object constructor. Relative paths will fail to initialize.

Assuming that `$p` is a Phar object initialized as follows:

```php <?php $p = new Phar('/path/to/myphar.phar', 0, 'myphar.phar'); ?> ```

An empty Phar archive will be created at `/path/to/myphar.phar`, or if `/path/to/myphar.phar` already exists, it will be opened again. The literal `myphar.phar` demonstrates the concept of an alias that can be used to reference `/path/to/myphar.phar` in URLs as in:

```php <?php // these two calls to file_get_contents() are equivalent if // /path/to/myphar.phar has an explicit alias of "myphar.phar" // in its manifest, or if the phar was initialized with the // previous example's Phar object setup $f = file_get_contents('phar:///path/to/myphar.phar/whatever.txt'); $f = file_get_contents('phar://myphar.phar/whatever.txt'); ?> ```

With the newly created `$p` `Phar` object, the following is possible:

- `$a = $p['file.php']` creates a `PharFileInfo` class that refers to the contents of `phar://myphar.phar/file.php`
- `$p['file.php'] = $v` creates a new file (`phar://myphar.phar/file.php`), or overwrites an existing file within `myphar.phar`. `$v` can be either a string or an open file pointer, in which case the entire contents of the file will be used to create the new file. Note that `$p->addFromString('file.php', $v)` is functionally equivalent to the above. Also possible is to add the contents of a file with `$p->addFile('/path/to/file.php', 'file.php')`. Lastly, an empty directory can be created with `$p->addEmptyDir('empty')`.
- `isset($p['file.php'])` can be used to determine whether `phar://myphar.phar/file.php` exists within `myphar.phar`.
- `unset($p['file.php'])` erases `phar://myphar.phar/file.php` from `myphar.phar`.

In addition, the `Phar` object is the only way to access Phar-specific metadata, through `Phar::getMetadata()`, and the only way to set or retrieve a Phar archive's PHP loader stub through `Phar::getStub()` and `Phar::setStub()`. Additionally, compression for the entire Phar archive at once can only be manipulated using the `Phar` class.

The full list of `Phar` object functionality is documented below.

The `PharFileInfo` class extends the `SplFileInfo` class, and adds several methods for manipulating Phar-specific details of a file contained within a Phar, such as manipulating compression and metadata.
