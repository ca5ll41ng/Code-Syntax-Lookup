---
id: "en-php-guide-wincache-setup"
language: "php"
lang: "en"
category: "guide"
name: "wincache.setup"
title: "Getting Started"
module: "wincache"
source_url: "https://www.php.net/manual/en/wincache.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

The extension is currently supported only on the following configurations:

Windows OS:

- Windows XP SP3 with IIS 5.1 and [FastCGI Extension]()
- Windows Server 2003 with IIS 6.0 and [FastCGI Extension]()
- Windows Vista SP1 with IIS 7.0 and FastCGI Module
- Windows Server 2008 with IIS 7.0 and FastCGI Module
- Windows 7 with IIS 7.5 and FastCGI Module
- Windows Server 2008 R2 with IIS 7.5 and FastCGI Module

PHP:

- PHP 5.2.X, Non-thread-safe build
- PHP 5.3 X86, Non-thread-safe VC9 build

> The WinCache Extension can only be used when IIS is configured to run PHP via FastCGI.

## Installation

This  extension is not bundled with PHP.

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [wincache](wincache).

There are two packages for this extension: one package is for PHP versions 5.2.X, and the other package is for PHP 5.3.X. Select the package that is appropriate for the PHP version being used.

To install and enable the extension, follow these steps:

   Unpack the package into some temporary location.      Copy the `php_wincache.dll` file into the PHP extensions folder. Typically this folder is called "ext" and it is located in the same folder with all PHP binary files. For example: `C:\Program Files\PHP\ext`.      Using a text editor, open the php.ini file, which is usually located in the same folder where all PHP binary files are. For example: `C:\Program Files\PHP\php.ini`.      Add the following line at the end of the php.ini file: `extension = php_wincache.dll`.      Save and close the `php.ini` file.      Recycle the IIS Application Pools for PHP to pick up the configuration changes. To check that the extension has been enabled, create a file called `phpinfo.php` with a PHP code that calls phpinfo function.      Save the `phpinfo.php` file in the root folder of a IIS web site that uses PHP, then open a browser and make a request to http://localhost/phpinfo.php. Search within the returned web page for a section called `wincache`. If the extension is enabled, then the phpinfo output will list the configuration settings provided by the WinCache.    

> Do not forget to remove `phpinfo.php` file from the web site's root folder after verifying that extension has been enabled.

  

## WinCache Statistics Script

The installation package for WinCache includes a PHP script, `wincache.php`, that can be used to obtain cache information and statistics.

If the WinCache extension was installed via the Microsoft Web Platform Installer, then this script is located in `%SystemDrive%\Program Files\IIS\Windows Cache for PHP\`. On a 64-bit version of the Windows Server operating system, the script is located in `%SystemDrive%\Program Files (x86)\IIS\Windows Cache for PHP`. If the extension was installed manually, then the `wincache.php` will be located in the same folder from which the content of the installation package was extracted.

To use `wincache.php`, copy it into a root folder of a Web site or into any subfolder. To protect the script, open it in any text editor and replace the values for *USERNAME* and *PASSWORD* constants. If any other IIS authentication is enabled on the server, then follow the instructions in the comments:

**Authentication configuration for `wincache.php`**

```php


<?php
/**
 * ======================== CONFIGURATION SETTINGS ==============================
 * If you do not want to use authentication for this page, set USE_AUTHENTICATION to 0.
 * If you use authentication then replace the default password.
 */
define('USE_AUTHENTICATION', 1);
define('USERNAME', 'wincache');
define('PASSWORD', 'wincache');

/**
 * The Basic PHP authentication will work only when IIS is configured to support
 * Anonymous Authentication' and nothing else. If IIS is configured to support/use
 * any other kind of authentication like Basic/Negotiate/Digest etc, this will not work.
 * In that case use the array below to define the names of users in your
 * domain/network/workgroup which you want to grant access to.
 */
$user_allowed = array('DOMAIN\user1', 'DOMAIN\user2', 'DOMAIN\user3');

/**
 * If the array contains string 'all', then all the users authenticated by IIS
 * will have access to the page. Uncomment the below line and comment above line
 * to grant access to all users who gets authenticated by IIS.
 */
/* $user_allowed = array('all'); */

/** ===================== END OF CONFIGURATION SETTINGS ========================== */
?>

    
```

> Always protect the `wincache.php` script by using either the built-in authentication or the server's authentication mechanism. Leaving this script unprotected may compromise the security of your web application and web server.

## WinCache Session Handler

The WinCache session handler (available since WinCache 1.1.0) can be used to configure PHP to store the session data in shared memory session cache. Using shared memory instead of the default file session storage helps improve performance of PHP applications that store large amount of data in session objects. Wincache session cache uses file-backed shared memory, which ensures that the session data is not lost during recycling of IIS application pools.

To configure PHP to use WinCache session handler set the `php.ini` setting session.save_handler to *wincache*. By default the Windows temporary file location is used for storing the session data. To change the location of the session file use session.save_path directive.

**Enabling WinCache session handler**

```php.ini


session.save_handler = wincache
session.save_path = C:\inetpub\temp\session\

    
```

## WinCache Functions Reroutes

*NOTE:* wincache.rerouteini was removed as of WinCache 1.3.7.0. It has been replaced with automatic function reroutes. See: wincache.reroute_enabled.

The WinCache functions reroutes (available since WinCache 1.2.0, removed since WinCache 1.3.7.0) can be used to replace built-in PHP functions with their equivalents that are optimized for a particular purpose. WinCache extension includes Windows-optimized implementation of PHP file functions that may improve performance of PHP applications in cases when PHP has to access files on network shares. The optimized implementation is provided for the following functions:

- file_exists
- file_get_contents
- readfile
- is_readable
- is_writable
- is_dir
- realpath
- filesize

To configure WinCache to use the functions reroutes use the file `reroute.ini` that is included in WinCache installation package. Copy this file into the same directory where `php.ini` file is located. After that add the wincache.rerouteini setting in `php.ini` and specify an absolute or relative path to the `reroute.ini` file.

**Enabling WinCache functions reroutes**

```php.ini


wincache.rerouteini = C:\PHP\reroute.ini

    
```

> If WinCache functions reroutes are enabled it is recommended to increase the WinCache file cache size. This can be done by using wincache.fcachesize setting.

The `reroute.ini` file contains the mappings between the native PHP functions and their equivalents in WinCache. Each line in the file defines a mapping by using the following syntax:

`<PHP function name>:[<number of function parameters>]=<wincache function name>`

The example of the file is shown below. In this example the calls to PHP function `file_get_contents()` will be replaced with calls to `wincache_file_get_contents()` only if the number of parameters passed to the function is less than or equals to 2. Specifying the number of parameters is useful when replacement function does not handle all the function's parameters.

**Reroute.ini file content**

```php.ini

 
[FunctionRerouteList]
file_exists=wincache_file_exists
file_get_contents:2=wincache_file_get_contents
readfile:2=wincache_readfile
is_readable=wincache_is_readable
is_writable=wincache_is_writable
is_writeable=wincache_is_writable
is_file=wincache_is_file
is_dir=wincache_is_dir
realpath=wincache_realpath
filesize=wincache_filesize

    
```
